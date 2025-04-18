import { LightningElement, track } from 'lwc';

export default class ResumeBuilder extends LightningElement {
    @track personalInfo ={};
    summary ='';
    @track skill= [];
    @track education=[];
    @track experience = [];

    //This method will be called when child component fires the event
    handleUpdatePi(event){
        this.personalInfo = event.detail;
        console.log('Personal Info:',this.personalInfo);
    }

    handleSumamry(event){
        this.summary = event.detail;
        console.log('Summary:',this.summary);
    }

    handleSkill(event){
        this.skill = event.detail;
        console.log('Skill: ', this.skill);
    }

    handleEducation(event){
        this.education = event.detail;
        console.log('Education: ', this.education);
    }

    handleExperience(event){
        this.experience = event.detail;
        console.log('Experience: ', this.experience);
    }
}