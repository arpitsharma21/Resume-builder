import { LightningElement, track } from 'lwc';

export default class Skills extends LightningElement {

    @track skills = [{
        id:0,
        name:''
    }];

    handleSkillChange(event){
        console.log('Checking skill is working');
        let index = event.target.dataset.index;
        let value = event.target.value;
        console.log('Now skill is working');

        //adding new skills which are added on UI in the skills array
        this.skills[index].name = value;
        console.log('Check value is added');
        this.updateResume();
        console.log('Check event is called or not');
    }

    updateResume(){
        //creating custom event to send the personalInformation object to the parent component
        let updateskillEvt = new CustomEvent('updateskill', {
            detail: this.skills
        });
        //dispatching the event 
        this.dispatchEvent(updateskillEvt);
    }

    addSkill(){
        console.log('Checking add skill button is entered or not');
        let nextIndex = this.skills.length;
        this.skills.push({id:nextIndex,name:''});
        console.log('Checking add skill button');
    }
}