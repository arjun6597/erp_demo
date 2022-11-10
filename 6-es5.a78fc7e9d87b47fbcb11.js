function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,o){for(var i=0;i<o.length;i++){var t=o[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,o,i){return o&&_defineProperties(e.prototype,o),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"8oRp":function(e,o,i){"use strict";i.r(o),i.d(o,"AuthenticationModule",(function(){return O}));var t=i("ofXK"),n=i("3Pt+"),r=i("tyNb"),a=i("COoR"),l=i("TA6j"),s=i("fXoL"),b=i("Xps+"),c=i("IYfF"),d=i("nbXG");function u(e,o){1&e&&(s.Pb(0,"div"),s.Pb(1,"div",17),s.oc(2," Invalid email id "),s.Ob(),s.Ob())}function p(e,o){1&e&&(s.Pb(0,"span"),s.Pb(1,"div",17),s.oc(2," Email should not be empty "),s.Ob(),s.Ob())}function m(e,o){1&e&&(s.Pb(0,"div"),s.Pb(1,"div",17),s.oc(2," Password should not be empty "),s.Ob(),s.Ob())}var f,g,h,v=[{path:"",children:[{path:"login",component:(f=function(){function e(o,i,t,n,r,a){_classCallCheck(this,e),this.renderer=o,this.fb=i,this.route=t,this.notificationAlertService=n,this.authService=r,this.localStorageService=a,this.messageList={email:"",password:""},this.logoPath=l.b.DASHBOARD_LOGO}return _createClass(e,[{key:"ngOnInit",value:function(){this.authService.enableAllTheme.next(!1),this.initializeLoginForm()}},{key:"initializeLoginForm",value:function(){this.loginForm=this.fb.group({email:["",n.j.compose([n.j.required,n.j.pattern(a.a.email)])],password:["",[n.j.required]]})}},{key:"login",value:function(){console.log(this.loginForm.value),this.localStorageService.setDataInStorage("x-auth-token","123"),this.authService.accessGivenToApp(!0),this.notificationAlertService.showSuccess("User logged in successfully"),this.route.navigate(["home"])}}]),e}(),f.\u0275fac=function(e){return new(e||f)(s.Jb(s.E),s.Jb(n.b),s.Jb(r.a),s.Jb(b.a),s.Jb(c.a),s.Jb(d.a))},f.\u0275cmp=s.Db({type:f,selectors:[["app-login"]],decls:26,vars:5,consts:[[1,"form-section"],[1,"card","default-card"],[1,"card-body"],[1,"text-align"],["role","form",3,"formGroup","ngSubmit"],[1,"input-group"],["type","email","placeholder","Email","formControlName","email","trim","",1,"form-control"],[1,"input-group-append"],[1,"input-group-text"],[1,"fas","fa-envelope"],[4,"ngIf"],["type","password","placeholder","Password","formControlName","password","maxlength","15","trim","",1,"form-control"],[1,"fas","fa-lock"],[2,"text-align","end","margin","5px"],["routerLink","/forgot-password"],[1,"text-align","mb-3"],["type","submit",1,"btn","button-custom-enabled",2,"width","30%",3,"disabled"],[1,"error-text"]],template:function(e,o){1&e&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"div",2),s.Pb(3,"h4",3),s.oc(4," Please provide following details to login into the system: "),s.Ob(),s.Kb(5,"br"),s.Pb(6,"form",4),s.Wb("ngSubmit",(function(){return o.login()})),s.Pb(7,"div",5),s.Kb(8,"input",6),s.Pb(9,"div",7),s.Pb(10,"div",8),s.Kb(11,"span",9),s.Ob(),s.Ob(),s.Ob(),s.nc(12,u,3,0,"div",10),s.nc(13,p,3,0,"span",10),s.Pb(14,"div",5),s.Kb(15,"input",11),s.Pb(16,"div",7),s.Pb(17,"div",8),s.Kb(18,"span",12),s.Ob(),s.Ob(),s.Ob(),s.nc(19,m,3,0,"div",10),s.Pb(20,"div",13),s.Pb(21,"a",14),s.oc(22,"Forgot Password"),s.Ob(),s.Ob(),s.Pb(23,"div",15),s.Pb(24,"button",16),s.oc(25,"Login"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob()),2&e&&(s.yb(6),s.bc("formGroup",o.loginForm),s.yb(6),s.bc("ngIf",(null==o.loginForm.get("email").errors?null:o.loginForm.get("email").errors.pattern)&&o.loginForm.get("email").touched),s.yb(1),s.bc("ngIf",o.loginForm.get("email").invalid&&o.loginForm.get("email").errors.required&&o.loginForm.get("email").touched),s.yb(6),s.bc("ngIf",o.loginForm.get("password").invalid&&o.loginForm.get("password").touched),s.yb(5),s.bc("disabled",o.loginForm.invalid))},directives:[n.k,n.h,n.d,n.a,n.g,n.c,t.j,n.f,r.c],styles:[""]}),f)},{path:"**",redirectTo:"login"}]},{path:"**",redirectTo:""}],P=((g=function e(){_classCallCheck(this,e)}).\u0275mod=s.Hb({type:g}),g.\u0275inj=s.Gb({factory:function(e){return new(e||g)},imports:[[r.d.forChild(v)],r.d]}),g),y=i("sYmb"),O=((h=function e(){_classCallCheck(this,e)}).\u0275mod=s.Hb({type:h}),h.\u0275inj=s.Gb({factory:function(e){return new(e||h)},providers:[],imports:[[t.b,n.e,n.i,y.b.forChild({}),P]]}),h)}}]);