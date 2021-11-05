import {LightningElement,api} from "lwc";

export default class HelloWorld extends LightningElement{
  @api 
  firstName;
  showMtnInfo = false;

  static mtnCount = 0;


  listofMtns = [];

  handleNameChange(event){
    if(event.keyCode == 13){ 
      let tempMnt = {
         Id: this.mtnCount++,
         Name: event.target.value,
      }
      this.listofMtns = [...this.listofMtns,tempMnt]; 
    this.template.querySelectorAll('Lightning-input').forEach(element => {
      element.value = '';
    });
    } 
  }

  handleGenerateMtnInfo(event){
    this.showMtnInfo = true;
  }
  handleAddMoreMtn(){
    this.showMtnInfo = false;
  }

  get emptyMtnList() {
    return !!this.listofMtns.length;
  }
  handleEmptyMtnList(event){
    this.listofMtns = [];
    this.showMtnInfo = false;
  }
   
}