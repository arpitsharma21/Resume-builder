import { LightningElement,api,track } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import jsPDFResource from '@salesforce/resourceUrl/jspdf';

export default class PreviewResume extends LightningElement {
    @api personalInfo ={};
    @api summary ='';
    @api skill= [];
    @api education=[];
    @api experience = [];

    @track showContent = false;

    handleToggle(event) {
        this.showContent = event.target.checked;
    }

    @track selectedTheme = 'classic';

    get themeOptions() {
        return [
            { label: 'Classic', value: 'classic' },
            { label: 'Modern', value: 'modern' }
        ];
    }

    handleThemeChange(event) {
        this.selectedTheme = event.detail.value;
    }

    get isClassic() {
        return this.selectedTheme === 'classic';
    }

    get isModern() {
        return this.selectedTheme === 'modern';
    }

    
}