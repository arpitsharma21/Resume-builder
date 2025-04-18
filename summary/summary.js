import { LightningElement } from 'lwc';

export default class Summary extends LightningElement {

    summary= '';

    handleSummaryChange(event){
        let fieldValue = event.target.value;
        this.summary = fieldValue;
        this.updateResume();
    }

    updateResume(){
        //creating custom event to send the personalInformation object to the parent component
        let updatesumEvt = new CustomEvent('updatesum', {
            detail: this.summary
        });
        //dispatching the event 
        this.dispatchEvent(updatesumEvt);
    }
}