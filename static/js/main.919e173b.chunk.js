(this["webpackJsonpreservation-frontend"]=this["webpackJsonpreservation-frontend"]||[]).push([[0],{15:function(e,t,n){e.exports={authContainer:"Auth_authContainer__2DzY3",container:"Auth_container__3-fWW",authInput:"Auth_authInput__3a-WS",authSubmit:"Auth_authSubmit__1wMgD",buttonContainer:"Auth_buttonContainer__TvVWj",google_button:"Auth_google_button__egW3X",authrequest:"Auth_authrequest__iKQ7G",forgotpassword:"Auth_forgotpassword__2062g"}},16:function(e,t,n){e.exports={authContainer:"AuthRequest_authContainer__HsBnV",container:"AuthRequest_container__3keij",Input:"AuthRequest_Input__1hhTV",auth_button:"AuthRequest_auth_button__2WRbr"}},23:function(e,t,n){e.exports={authContainer:"ResetPassword_authContainer__38AhX",container:"ResetPassword_container__3ja2K",authInput:"ResetPassword_authInput__1iBDy",authSubmit:"ResetPassword_authSubmit__1gdhM"}},45:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(2),r=n.n(s),c=n(30),u=n.n(c),o=n(8),i=n(17),l=n(5),b=n(14),j=n.n(b),h=n(18),p=n(22);n(38),n(46);p.a.initializeApp({apiKey:"AIzaSyDRCNTvXdB1Uqbp9hyNVFzwFSD0258yNt8",authDomain:"reservation-frontend-7fbfe.firebaseapp.com",projectId:"reservation-frontend-7fbfe",storageBucket:"reservation-frontend-7fbfe.appspot.com",messagingSenderId:"1035898991307",appId:"1:1035898991307:web:bb53c735a2f135fb4b214e"});var d=p.a,O=p.a.auth();p.a.firestore();var m=n(16),f=n.n(m),x=function(e){e.userObj;var t=Object(s.useState)(""),n=Object(o.a)(t,2),r=n[0],c=n[1],u=Object(s.useState)(""),i=Object(o.a)(u,2),l=i[0],b=i[1],p=Object(s.useState)(""),d=Object(o.a)(p,2),m=d[0],x=d[1],g=Object(s.useState)(""),v=Object(o.a)(g,2),_=v[0],w=v[1],C=Object(s.useState)(""),S=Object(o.a)(C,2),y=S[0],I=S[1],N=Object(s.useState)(""),A=Object(o.a)(N,2),k=(A[0],A[1]),R=function(e){var t=e.target,n=t.name,a=t.value;if("email"===n)c(a);else if("username"===n)b(a);else if("password"===n)x(a);else if("passwordCheck"===n)w(a);else if("phone"===n){var s=function(e){var t=e.replace(/[^0-9]/g,""),n="";if("02"===t.substr(0,2)){if(console.log("HI"),t.length<4)return t;t.length<7?(n+=t.substr(0,2),n+="-",n+=t.substr(2)):t.length<9?(n+=t.substr(0,2),n+="-",n+=t.substr(2,4),n+="-",n+=t.substr(6)):t.length<10?(n+=t.substr(0,2),n+="-",n+=t.substr(2,3),n+="-",n+=t.substr(5)):(n+=t.substr(0,2),n+="-",n+=t.substr(2,4),n+="-",n+=t.substr(6,4))}else{if(t.length<4)return t;t.length<7?(n+=t.substr(0,3),n+="-",n+=t.substr(3)):t.length<11?(n+=t.substr(0,3),n+="-",n+=t.substr(3,3),n+="-",n+=t.substr(6)):(n+=t.substr(0,3),n+="-",n+=t.substr(3,4),n+="-",n+=t.substr(7,4))}return n}(a);I(s)}},q=function(){var e=Object(h.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),m===_){e.next=4;break}return alert("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),e.abrupt("return");case 4:return e.prev=4,e.next=7,O.createUserWithEmailAndPassword(r,m);case 7:(n=e.sent).user.updateProfile({displayName:l,photoURL:y}).then((function(){n.displayName,n.photoURL})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),k(e.t0.message),alert(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:f.a.authContainer,children:Object(a.jsxs)("form",{onSubmit:q,className:f.a.container,children:[Object(a.jsx)("input",{name:"email",type:"email",placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",required:!0,value:r,onChange:R,className:f.a.Input}),Object(a.jsx)("input",{name:"username",type:"text",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694",required:!0,value:l,onChange:R,className:f.a.Input}),Object(a.jsx)("input",{name:"password",type:"password",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694",required:!0,value:m,onChange:R,className:f.a.Input}),Object(a.jsx)("input",{name:"passwordCheck",type:"password",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \ud55c \ubc88 \ub354 \uc785\ub825\ud558\uc138\uc694",value:_,onChange:R,className:f.a.Input}),Object(a.jsx)("input",{name:"phone",type:"tel",placeholder:"\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694",value:y,onChange:R,className:f.a.Input}),Object(a.jsx)("input",{type:"submit",value:"Create Account",className:f.a.auth_button})]})})},g=function(e){var t=e.userObj,n=Object(l.g)();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("h5",{children:"\uc774\uba54\uc77c"}),Object(a.jsx)("span",{children:t.email})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("h5",{children:"\uc774\ub984"}),Object(a.jsx)("span",{children:t.displayName})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("h5",{children:"\uc5f0\ub77d\ucc98"}),Object(a.jsx)("span",{children:"010"!==t.photoURL.slice(0,3)?"-":t.photoURL})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("h5",{children:"\uac00\uc785 \uc77c\uc790"}),Object(a.jsx)("span",{children:t.metadata.creationTime.slice(0,17)})]})]}),Object(a.jsx)("button",{onClick:function(){O.signOut(),n.push("/")},children:"Log Out"})]})},v=n(23),_=n.n(v),w=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],c=function(){var e=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""===n){e.next=6;break}return e.next=4,O.sendPasswordResetEmail(n).then((function(){console.log("\ube44\ubc00\ubc88\ud638 reset")})).catch((function(e){alert(e.message)}));case 4:e.next=7;break;case 6:alert("\uc774\uba54\uc77c\uc744 \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694.");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:_.a.authContainer,children:Object(a.jsxs)("form",{onSubmit:c,className:_.a.container,children:[Object(a.jsx)("input",{name:"email",type:"email",placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",requir:!0,value:n,onChange:function(e){var t=e.target,n=t.name,a=t.value;"email"===n&&r(a)},className:_.a.authInput}),Object(a.jsx)("input",{type:"submit",value:"\ube44\ubc00\ubc88\ud638 \uc7ac\uc124\uc815 \uba54\uc77c \ubcf4\ub0b4\uae30",className:_.a.authSubmit})]})})},C=n(15),S=n.n(C),y=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(s.useState)(""),u=Object(o.a)(c,2),i=u[0],b=u[1],p=Object(s.useState)(""),m=Object(o.a)(p,2),f=(m[0],m[1]),x=Object(l.g)(),g=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&b(a)},v=function(){var e=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.signInWithEmailAndPassword(n,i);case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),f(e.t0.message),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(h.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===t.target.name&&(n=new d.auth.GoogleAuthProvider),e.next=4,O.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:S.a.authContainer,children:[Object(a.jsxs)("form",{onSubmit:v,className:S.a.container,children:[Object(a.jsx)("input",{name:"email",type:"email",placeholder:"E-mail",required:!0,className:S.a.authInput,value:n,onChange:g}),Object(a.jsx)("input",{name:"password",type:"password",placeholder:"password",required:!0,className:S.a.authInput,value:i,onChange:g}),Object(a.jsx)("input",{type:"submit",value:"Sign In",className:S.a.authSubmit}),Object(a.jsx)("button",{name:"google",onClick:_,className:S.a.google_button,children:"Sign In by Google"})]}),Object(a.jsxs)("div",{className:S.a.buttonContainer,children:[Object(a.jsx)("div",{onClick:function(){return x.push("/authRequest")},className:S.a.authrequest,children:"Create Account"}),Object(a.jsx)("div",{onClick:function(){return x.push("/resetPassword")},className:S.a.forgotpassword,children:"Forgot your password?"})]})]})},I=function(){return Object(a.jsx)("span",{children:"Home"})},N=function(){return Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(i.b,{to:"/home",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(i.b,{to:"/profile",children:"My Profile"})})]})})},A=function(e){var t=e.isLoggedIn,n=e.userObj;return Object(a.jsxs)(i.a,{children:[t&&Object(a.jsx)(N,{}),t?Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{path:"/home",component:I,exact:!0}),Object(a.jsx)(l.b,{path:"/profile",component:function(){return Object(a.jsx)(g,{userObj:n})},exact:!0}),Object(a.jsx)(l.a,{from:"*",to:"/home"})]}):Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{path:"/login",component:y,exact:!0}),Object(a.jsx)(l.b,{path:"/authRequest",component:function(){return Object(a.jsx)(x,{userObj:n})},exact:!0}),Object(a.jsx)(l.b,{path:"/resetPassword",component:function(){return Object(a.jsx)(w,{})},exact:!0}),Object(a.jsx)(l.a,{from:"*",to:"/login"})]})]})};var k=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(s.useState)(!1),u=Object(o.a)(c,2),i=u[0],l=u[1],b=Object(s.useState)(null),j=Object(o.a)(b,2),h=j[0],p=j[1];return Object(s.useEffect)((function(){O.onAuthStateChanged((function(e){e?(console.log(e),l(!0),p(e)):l(!1),r(!0)}))}),[]),Object(a.jsx)(a.Fragment,{children:n?Object(a.jsx)(A,{isLoggedIn:i,userObj:h}):"Initializing..."})};u.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.919e173b.chunk.js.map