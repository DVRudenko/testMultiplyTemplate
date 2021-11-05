import { LightningElement } from 'lwc';
import templateOne from './templateOne.html';
import templateTwo from './templateTwo.html';

export default class MiscMultipleTemplates extends LightningElement {

  templateOne = true;

  render() {
    console.log('render');
    return this.templateOne ? templateOne : templateTwo;
  }

  renderedCallback() {
    console.log('renderedCallback');
  }

  switchTemplate(){
    console.log('Button pressed');
    this.templateOne = this.templateOne === true ? false : true;
  }

  connectedCallback() {
    console.log('connectedCallback');
  }
}