import { LightningElement, track } from 'lwc';

export default class WorkExperience extends LightningElement {
    @track experiences = [
        {
            id:0,
            title: '',
            company:'',
            startDate:'',
            endDate:''
        }
    ];

    handleExpChange(event){
        console.log('Getting values');
        let index = event.target.dataset.index;
        let field = event.target.dataset.field;
        let value = event.target.value;

        this.experiences[index][field] = value;
        console.log('Adding values');
        this.updateResume();
    }

    updateResume(){
        console.log('Calling event');
        let updateExpEvt = new CustomEvent('updateexperience', {
            detail: this.experiences
        });
        //dispatching the event 
        console.log('Event called');
        this.dispatchEvent(updateExpEvt);
    }

    addExperience(){
        console.log('Adding Experience');
        let nextIndex = this.experiences.length;
        this.experiences.push({
            id:nextIndex,
            title: '',
            company:'',
            startDate:'',
            endDate:''
        });
        console.log('Experience is added');
    }
}