(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{iydT:function(t,o,n){"use strict";n.r(o),n.d(o,"HomeModule",(function(){return p}));var a=n("ofXK"),e=n("TA6j"),i=n("fXoL"),c=n("3Pt+");function b(t,o){if(1&t){const t=i.Qb();i.Pb(0,"tr"),i.Pb(1,"td"),i.oc(2),i.Ob(),i.Pb(3,"td"),i.oc(4),i.Ob(),i.Pb(5,"td"),i.oc(6),i.Ob(),i.Pb(7,"td"),i.Pb(8,"i",26),i.Wb("click",(function(){i.ic(t);const n=o.$implicit;return i.Yb().editCompany(n.id)})),i.Ob(),i.Pb(9,"i",27),i.Wb("click",(function(){i.ic(t);const n=o.$implicit;return i.Yb().deleteCompany(n.id)}))("click",(function(){i.ic(t);const n=o.$implicit;return i.Yb().deleteCompany(n.id)})),i.Ob(),i.Ob(),i.Ob()}if(2&t){const t=o.$implicit;i.yb(2),i.pc(t.id),i.yb(2),i.qc(" ",t.name,""),i.yb(2),i.qc(" ",t.place,"")}}let d=(()=>{class t{constructor(t){this.fb=t,this.companyDetail=[],this.companyDetail=e.a}ngOnInit(){this.initializeCompanyForm()}initializeCompanyForm(){this.companyForm=this.fb.group({name:[""],place:[""]})}addCompany(){console.log(this.companyForm.controls.name.value),this.companyDetail.push({name:this.companyForm.controls.name.value,place:this.companyForm.controls.place.value,id:this.companyDetail.length+1}),this.companyForm.reset()}deleteCompany(t){console.log("delete company with id",t),this.companyDetail=this.companyDetail.filter(o=>o.id!==t)}editCompany(t){this.editingCompanyId=t,console.log(this.companyDetail.find(o=>o.id==t));const o=this.companyDetail.find(o=>o.id==t);this.companyForm.controls.name.setValue(o.name),this.companyForm.controls.place.setValue(o.place),console.log("edit company with id",t)}updateCompany(){console.log(this.editingCompanyId),console.log(this.companyForm.value),this.companyDetail=this.companyDetail.map(t=>t.id===this.editingCompanyId?Object.assign(Object.assign({},this.companyForm.value),{id:this.editingCompanyId}):t)}resetForm(){this.companyForm.reset()}}return t.\u0275fac=function(o){return new(o||t)(i.Jb(c.b))},t.\u0275cmp=i.Db({type:t,selectors:[["app-home"]],decls:60,vars:3,consts:[[1,"content-wrapper"],[1,"content-header"],[1,"container-fluid"],[1,"row","mb-2","header-section"],[1,"col-sm-6"],[1,"content"],["type","button","data-toggle","modal","data-target","#modal-default",1,"add-company","btn","btn-default",3,"click"],["id","modal-default",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],["role","form",3,"formGroup"],["placeholder","Name","formControlName","name",1,"form-control"],["placeholder","Place","formControlName","place",1,"form-control"],[1,"modal-footer","justify-content-between"],["type","button","data-dismiss","modal",1,"btn","btn-default"],["type","button","data-dismiss","modal",1,"btn","btn-primary",3,"click"],[1,"card-body"],[1,"table","table-bordered"],[1,"company-id"],[4,"ngFor","ngForOf"],["id","modal-update",1,"modal","fade"],["data-toggle","modal","data-target","#modal-update",1,"fa","fa-pencil-square-o",3,"click"],[1,"delete","fa","fa-trash",3,"click"]],template:function(t,o){1&t&&(i.Pb(0,"div",0),i.Pb(1,"section",1),i.Pb(2,"div",2),i.Pb(3,"div",3),i.Pb(4,"div",4),i.Pb(5,"h3"),i.oc(6," Users"),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Pb(7,"section",5),i.Pb(8,"button",6),i.Wb("click",(function(){return o.resetForm()})),i.oc(9," Add Company "),i.Ob(),i.Pb(10,"div",7),i.Pb(11,"div",8),i.Pb(12,"div",9),i.Pb(13,"div",10),i.Pb(14,"h4",11),i.oc(15,"Add Company"),i.Ob(),i.Pb(16,"button",12),i.Pb(17,"span",13),i.oc(18,"\xd7"),i.Ob(),i.Ob(),i.Ob(),i.Pb(19,"div",14),i.Pb(20,"form",15),i.Kb(21,"input",16),i.Kb(22,"input",17),i.Ob(),i.Ob(),i.Pb(23,"div",18),i.Pb(24,"button",19),i.oc(25,"Close"),i.Ob(),i.Pb(26,"button",20),i.Wb("click",(function(){return o.addCompany()})),i.oc(27,"Add Company"),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Pb(28,"div",21),i.Pb(29,"table",22),i.Pb(30,"thead"),i.Pb(31,"tr"),i.Pb(32,"th",23),i.oc(33,"Company Id."),i.Ob(),i.Pb(34,"th"),i.oc(35,"Name"),i.Ob(),i.Pb(36,"th"),i.oc(37,"Address"),i.Ob(),i.Pb(38,"th"),i.oc(39,"Actions"),i.Ob(),i.Ob(),i.Ob(),i.Pb(40,"tbody"),i.nc(41,b,10,3,"tr",24),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Pb(42,"div",25),i.Pb(43,"div",8),i.Pb(44,"div",9),i.Pb(45,"div",10),i.Pb(46,"h4",11),i.oc(47,"Update Company"),i.Ob(),i.Pb(48,"button",12),i.Pb(49,"span",13),i.oc(50,"\xd7"),i.Ob(),i.Ob(),i.Ob(),i.Pb(51,"div",14),i.Pb(52,"form",15),i.Kb(53,"input",16),i.Kb(54,"input",17),i.Ob(),i.Ob(),i.Pb(55,"div",18),i.Pb(56,"button",19),i.oc(57,"Close"),i.Ob(),i.Pb(58,"button",20),i.Wb("click",(function(){return o.updateCompany()})),i.oc(59,"Update Company"),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob()),2&t&&(i.yb(20),i.bc("formGroup",o.companyForm),i.yb(21),i.bc("ngForOf",o.companyDetail),i.yb(11),i.bc("formGroup",o.companyForm))},directives:[c.k,c.h,c.d,c.a,c.g,c.c,a.i],styles:[".company-id[_ngcontent-%COMP%]{width:10px}.form-control[_ngcontent-%COMP%]{margin-bottom:5px}.add-company[_ngcontent-%COMP%]{margin-left:21px}.delete[_ngcontent-%COMP%]{margin-left:5px}"]}),t})();var m=n("tyNb");const l=[{path:"",component:d,canActivate:[n("i2s/").a]}];let r=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(o){return new(o||t)},imports:[[m.d.forChild(l)],m.d]}),t})(),p=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(o){return new(o||t)},imports:[[a.b,r]]}),t})()}}]);