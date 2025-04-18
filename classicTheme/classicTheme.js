import { LightningElement, api } from 'lwc';

export default class ClassicTheme extends LightningElement {
    @api personalInfo = {};
    @api summary = '';
    @api skill = [];
    @api education = [];
    @api experience = [];
}