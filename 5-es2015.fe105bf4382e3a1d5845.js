(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8oRp":function(t,e,i){"use strict";i.r(e),i.d(e,"AuthenticationModule",(function(){return O}));var o=i("ofXK"),r=i("3Pt+"),n=i("tyNb"),a=i("COoR"),s=i("TA6j"),b=i("fXoL"),c=i("Xps+"),l=i("IYfF"),d=i("nbXG"),p=i("sYmb");function u(t,e){1&t&&(b.Pb(0,"div"),b.Pb(1,"div",17),b.qc(2),b.Zb(3,"translate"),b.Ob(),b.Ob()),2&t&&(b.yb(2),b.sc(" ",b.ac(3,1,"VALIDATION.INVALID_FORMET_EMAIL")," "))}function m(t,e){1&t&&(b.Pb(0,"span"),b.Pb(1,"div",17),b.qc(2),b.Zb(3,"translate"),b.Ob(),b.Ob()),2&t&&(b.yb(2),b.sc(" ",b.ac(3,1,"VALIDATION.INVALID_EMAIL")," "))}function g(t,e){1&t&&(b.Pb(0,"div"),b.Pb(1,"div",17),b.qc(2),b.Zb(3,"translate"),b.Ob(),b.Ob()),2&t&&(b.yb(2),b.sc(" ",b.ac(3,1,"VALIDATION.INVALID_PASSWORD")," "))}const f=[{path:"",children:[{path:"login",component:(()=>{class t{constructor(t,e,i,o,r,n){this.renderer=t,this.fb=e,this.route=i,this.notificationAlertService=o,this.authService=r,this.localStorageService=n,this.messageList={email:"",password:""},this.logoPath=s.a.DASHBOARD_LOGO}ngOnInit(){this.authService.enableAllTheme.next(!1),this.initializeLoginForm()}initializeLoginForm(){this.loginForm=this.fb.group({email:["",r.j.compose([r.j.required,r.j.pattern(a.a.email)])],password:["",[r.j.required]]})}login(){console.log(this.loginForm.value),this.localStorageService.setDataInStorage("x-auth-token","123"),this.authService.accessGivenToApp(!0),this.notificationAlertService.showSuccess("User logged in successfully"),this.route.navigate(["home"])}}return t.\u0275fac=function(e){return new(e||t)(b.Jb(b.E),b.Jb(r.b),b.Jb(n.a),b.Jb(c.a),b.Jb(l.a),b.Jb(d.a))},t.\u0275cmp=b.Db({type:t,selectors:[["app-login"]],decls:29,vars:14,consts:[[1,"form-section"],[1,"card","default-card"],[1,"card-body"],[1,"text-align"],["role","form",3,"formGroup","ngSubmit"],[1,"input-group"],["type","email","placeholder","Email","formControlName","email","trim","",1,"form-control"],[1,"input-group-append"],[1,"input-group-text"],[1,"fas","fa-envelope"],[4,"ngIf"],["type","password","placeholder","Password","formControlName","password","maxlength","15","trim","",1,"form-control"],[1,"fas","fa-lock"],[2,"text-align","end","margin","5px"],["routerLink","/forgot-password"],[1,"text-align","mb-3"],["type","submit",1,"btn","button-custom-enabled",2,"width","30%",3,"disabled"],[1,"error-text"]],template:function(t,e){1&t&&(b.Pb(0,"div",0),b.Pb(1,"div",1),b.Pb(2,"div",2),b.Pb(3,"h4",3),b.qc(4),b.Zb(5,"translate"),b.Ob(),b.Kb(6,"br"),b.Pb(7,"form",4),b.Wb("ngSubmit",(function(){return e.login()})),b.Pb(8,"div",5),b.Kb(9,"input",6),b.Pb(10,"div",7),b.Pb(11,"div",8),b.Kb(12,"span",9),b.Ob(),b.Ob(),b.Ob(),b.pc(13,u,4,3,"div",10),b.pc(14,m,4,3,"span",10),b.Pb(15,"div",5),b.Kb(16,"input",11),b.Pb(17,"div",7),b.Pb(18,"div",8),b.Kb(19,"span",12),b.Ob(),b.Ob(),b.Ob(),b.pc(20,g,4,3,"div",10),b.Pb(21,"div",13),b.Pb(22,"a",14),b.qc(23),b.Zb(24,"translate"),b.Ob(),b.Ob(),b.Pb(25,"div",15),b.Pb(26,"button",16),b.qc(27),b.Zb(28,"translate"),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob()),2&t&&(b.yb(4),b.sc(" ",b.ac(5,8,"PLACEHOLDER.LOGIN_NOTE")," "),b.yb(3),b.dc("formGroup",e.loginForm),b.yb(6),b.dc("ngIf",(null==e.loginForm.get("email").errors?null:e.loginForm.get("email").errors.pattern)&&e.loginForm.get("email").touched),b.yb(1),b.dc("ngIf",e.loginForm.get("email").invalid&&e.loginForm.get("email").errors.required&&e.loginForm.get("email").touched),b.yb(6),b.dc("ngIf",e.loginForm.get("password").invalid&&e.loginForm.get("password").touched),b.yb(3),b.rc(b.ac(24,10,"PLACEHOLDER.FORGOT_PASSWORD")),b.yb(3),b.dc("disabled",e.loginForm.invalid),b.yb(1),b.sc(" ",b.ac(28,12,"PLACEHOLDER.LOGIN"),""))},directives:[r.k,r.h,r.d,r.a,r.g,r.c,o.j,r.f,n.c],pipes:[p.c],styles:[""]}),t})()},{path:"**",redirectTo:"login"}]},{path:"**",redirectTo:""}];let h=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(e){return new(e||t)},imports:[[n.d.forChild(f)],n.d]}),t})(),O=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(e){return new(e||t)},providers:[],imports:[[o.b,r.e,r.i,p.b.forChild({}),h]]}),t})()}}]);