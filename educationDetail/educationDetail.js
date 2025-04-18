import { LightningElement, track } from 'lwc';

export default class EducationDetail extends LightningElement {

    @track educations = [{
        id:0,
        degree:'',
        institution:'',
        year:''
    }]

    handleEduChange(event){
        console.log('Getting values');
        let index = event.target.dataset.index;
        let field = event.target.dataset.field;
        let value = event.target.value;

        this.educations[index][field] = value;
        console.log('Adding values');
        this.updateResume();
    }

    updateResume(){
        //creating custom event to send the personalInformation object to the parent component
        console.log('Calling event');
        let updateEduEvt = new CustomEvent('updateedu', {
            detail: this.educations
        });
        //dispatching the event 
        console.log('Event called');
        this.dispatchEvent(updateEduEvt);
    }

    addEducation(){
        console.log('Adding Education');
        let nextIndex = this.educations.length;
        this.educations.push({
            id:nextIndex,
            degree:'',
            institution:'',
            year:''
        });
        console.log('Education is added');
    }
}