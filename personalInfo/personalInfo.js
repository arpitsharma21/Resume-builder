import { LightningElement } from 'lwc';

export default class PersonalInfo extends LightningElement {

    //this obj to hold the input values from UI
    personalInformation = {};

    // Getter for photo property
    get photo() {
        return this.personalInformation.photo;
    }

    // Setter for photo property
    set photo(value) {
        this.personalInformation.photo = value;
        this.updateResume(); // Trigger the update of the resume
    }

    handlePerInfoChange(event) {
        //accessing values from UI using event keyword
        let fieldName = event.target.dataset.field;
        let fieldValue = event.target.value;

        //updating the personalInformation object with the new value
        this.personalInformation[fieldName] = fieldValue;
        this.updateResume();
    }

    handlePhotoUpload(event) {
        // Even though lightning-input can accept multiple files, here you're just working with one image.
        console.log('Adding image');
        const file = event.target.files[0];
        if (file) {
            // this is a browser API that allows you to read file contents.
            const reader = new FileReader();
            // Defines what should happen after the file is read successfully 
            reader.onload = () => {
                // base64 result goes in personalInformation object
                this.personalInformation.photo = reader.result;
                this.updateResume();
            };
            
            reader.readAsDataURL(file);
            console.log('image added');
        }
    }

    updateResume(){
        //creating custom event to send the personalInformation object to the parent component
        let updatepievt = new CustomEvent('updatepi', {
            detail: this.personalInformation
        });
        //dispatching the event 
        this.dispatchEvent(updatepievt);
    }
}