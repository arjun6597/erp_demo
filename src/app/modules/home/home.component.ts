import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { companies } from '@global/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  companyDetail = []
  editingCompanyId;
  public companyForm: FormGroup;
  constructor( private fb: FormBuilder,) { 
    this.companyDetail = companies
  }
  

  ngOnInit(): void {
    this.initializeCompanyForm()
  }

  initializeCompanyForm() {
    this.companyForm = this.fb.group({
      name: [''],
      place: [''],
    });
  }

  addCompany(){
    console.log(this.companyForm.controls.name.value);
    this.companyDetail.push({name:this.companyForm.controls.name.value, place:this.companyForm.controls.place.value, id: this.companyDetail.length+1})
    this.companyForm.reset()
  }

  deleteCompany(id){
    console.log('delete company with id', id)
    this.companyDetail = this.companyDetail.filter(obj =>  obj.id !== id);

  }

  editCompany(id){
    this.editingCompanyId =id;
    console.log(this.companyDetail.find((obj)=> obj.id == id))
    const selectedObject = this.companyDetail.find((obj)=> obj.id == id)
    this.companyForm.controls['name'].setValue(selectedObject.name);
    this.companyForm.controls['place'].setValue(selectedObject.place);
    console.log('edit company with id', id)
  }

  updateCompany(){
    console.log(this.editingCompanyId)
    console.log(this.companyForm.value)
    this.companyDetail =  this.companyDetail.map(obj=>obj.id ===this.editingCompanyId? {...this.companyForm.value, id: this.editingCompanyId}: obj)
  }

  resetForm(){
    this.companyForm.reset()
  }
}
