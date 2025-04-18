import { LightningElement, api } from 'lwc';

export default class ModernTheme extends LightningElement {
    @api personalInfo = {};
    @api summary = '';
    @api skill = [];
    @api education = [];
    @api experience = [];

}