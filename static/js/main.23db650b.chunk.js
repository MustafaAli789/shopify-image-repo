(this["webpackJsonpshopify-image"]=this["webpackJsonpshopify-image"]||[]).push([[0],{389:function(e,t,a){},391:function(e,t,a){},392:function(e,t,a){},561:function(e,t){},563:function(e,t){},573:function(e,t){},575:function(e,t){},602:function(e,t){},604:function(e,t){},605:function(e,t){},610:function(e,t){},612:function(e,t){},631:function(e,t){},643:function(e,t){},646:function(e,t){},656:function(e){e.exports=JSON.parse("{}")},657:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(1),i=a.n(r),c=a(23),o=a.n(c),s=(a(389),a(63)),l=a(15),u=a.n(l),d=a(40),p=a(19),m=(a.p,a(391),a(353)),j=a(28),b=a(46),O=a(728),g=a(738),h=a(739),f=a(90),x=a(727),v=a(217),S=a(357),y=a(17),C=a(729),T=a(730),I=a(731),_=a(732),E=a(748),w=a(747),D=a(733),A=(a(392),a(726)),P=a(724),k=a(725),R=a(723);function N(e){return Object(n.jsx)("div",{children:Object(n.jsxs)(w.a,{open:e.open,onClose:function(){return e.setDeleteModalOpen(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(n.jsx)(R.a,{id:"alert-dialog-title",children:"Delete card confirmation"}),Object(n.jsx)(P.a,{children:Object(n.jsxs)(k.a,{id:"alert-dialog-description",children:["Are you sure you want to delete the card titled: ",e.imageTitle]})}),Object(n.jsxs)(A.a,{children:[Object(n.jsx)(x.a,{onClick:function(){return e.setDeleteModalOpen(!1)},color:"primary",children:"Cancel"}),Object(n.jsx)(x.a,{onClick:function(){e.deleteImg(e.id),e.setDeleteModalOpen(!1)},color:"primary",autoFocus:!0,children:"Delete"})]})]})})}var F=Object(O.a)((function(){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"}}})),W=function(e){var t,a=F(),i={backgroundColor:e.imageData.color},c=Object(r.useState)(!1),o=Object(p.a)(c,2),s=o[0],l=o[1],u=Object(r.useState)(!1),d=Object(p.a)(u,2),m=d[0],j=d[1];return Object(n.jsxs)(C.a,{className:a.root+" imageCard",children:[Object(n.jsx)(w.a,{open:s,onClose:function(){return l(!1)},children:Object(n.jsx)("img",{style:{width:"100%"},src:e.imageData.imageSrc})}),Object(n.jsx)(N,{imageTitle:e.imageData.title,deleteImg:e.deleteImg,open:m,setDeleteModalOpen:function(e){return j(e)}}),Object(n.jsx)(T.a,{avatar:Object(n.jsx)(E.a,{"aria-label":"recipe",style:i,children:e.imageData.avatarInitial}),title:e.imageData.title,subheader:e.imageData.date}),Object(n.jsx)(I.a,(t={className:"imageCard",onClick:function(){return l(!0)}},Object(y.a)(t,"className",a.media),Object(y.a)(t,"image",e.imageData.imageSrc),Object(y.a)(t,"title",e.imageData.imageId),t)),Object(n.jsx)(_.a,{children:Object(n.jsx)(f.a,{variant:"body2",color:"textSecondary",component:"p",children:e.imageData.description})}),Object(n.jsxs)(D.a,{children:[Object(n.jsx)(x.a,{size:"small",color:"primary",onClick:function(){return e.updateImage(e.imageData)},children:"Update"}),Object(n.jsx)(x.a,{size:"small",color:"primary",onClick:function(){j(!0)},children:"Delete"})]})]})},U=a(735),M=a(352),L=a.n(M),H=a(744),K=a(356),B=a(358),G=a(749),Y=function(e){var t="CREATE"==e.action?"Create":"Update",a=Object(r.useState)(""),i=Object(p.a)(a,2),c=i[0],o=i[1],s=Object(r.useState)("#FF0000"),l=Object(p.a)(s,2),u=l[0],d=l[1],m=Object(r.useState)(""),j=Object(p.a)(m,2),b=(j[0],j[1]),g=Object(r.useState)(""),h=Object(p.a)(g,2),v=h[0],S=h[1],y=Object(r.useState)(null),C=Object(p.a)(y,2),T=C[0],I=C[1],_=Object(r.useState)(null),E=Object(p.a)(_,2),D=E[0],k=E[1];Object(r.useEffect)((function(){if(o(e.imageModalData.title),d(e.imageModalData.color),b(e.imageModalData.imageSrc),S(e.imageModalData.description),""!=e.imageModalData.imageSrc){var t=new File([""],e.imageModalData.imageName,{type:"image/png"});k(t),I(t.lastModified)}else k(null);e.setImageUpdated(!1)}),[e.imageModalOpen]);var N=Object(O.a)((function(e){return Object(G.a)({previewChip:{minWidth:160,maxWidth:210}})}))();return Object(n.jsxs)(w.a,{open:e.imageModalOpen,"aria-labelledby":"form-dialog-title",children:[Object(n.jsx)(R.a,{style:{paddingBottom:"0"},id:"form-dialog-title",children:t}),Object(n.jsxs)(P.a,{style:{paddingTop:"0"},children:[Object(n.jsx)(H.a,{autoFocus:!0,margin:"dense",id:"imageName",placeholder:"Image Name",type:"text",fullWidth:!0,style:{marginTop:"0.6rem"},onChange:function(e){return o(e.target.value)},value:c}),Object(n.jsx)(H.a,{autoFocus:!0,margin:"dense",id:"imageDesc",placeholder:"Image Description",type:"text",fullWidth:!0,multiline:!0,rows:1,rowsMax:4,style:{marginTop:"0.8rem"},onChange:function(e){return S(e.target.value)},value:v}),Object(n.jsxs)("div",{style:{marginTop:"1rem"},children:[Object(n.jsx)(f.a,{variant:"body1",style:{color:"rgba(0, 0, 0, 0.54)",marginBottom:"0.25rem"},children:"Tag Color"}),Object(n.jsx)(K.a,{color:u,onChangeComplete:function(e){return d(e.hex)}})]}),Object(n.jsxs)("div",{style:{marginTop:"1rem"},children:[Object(n.jsx)(f.a,{variant:"body1",style:{color:"rgba(0, 0, 0, 0.54)",marginBottom:"0.25rem"},children:"File Uploader"}),Object(n.jsx)(B.a,{initialFiles:null!=D?[D]:[],acceptedFiles:["image/*"],dropzoneText:"Drag and drop an image here or click",onChange:function(t){void 0==t[0]?k(null):(k(t[0]),t[0].lastModified!=T&&e.setImageUpdated(!0))},filesLimit:1,showPreviews:!0,showPreviewsInDropzone:!1,useChipsForPreview:!0,previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:N.previewChip}},previewText:"Selected files"})]})]}),Object(n.jsxs)(A.a,{children:[Object(n.jsx)(x.a,{onClick:function(){return e.setImageModalOpen(!1)},color:"primary",children:"Cancel"}),Object(n.jsx)(x.a,{onClick:function(){(function(e,t){var a="",n="";if(n=null==t?"Must attach an image":"",(a=0==e.trim().length?"Title must not be empty":"").length>0&&n.length>0)alert(a+" and "+n);else if(a.length>0)alert(a);else{if(!(n.length>0))return!0;alert(n)}return!1})(c,D)&&("CREATE"==e.action?e.createNewImage({title:c,description:v,color:u},D):e.updateImage({title:c,description:v,color:u,imageId:e.imageModalData.imageId},D))},color:"primary",children:t})]})]})},z=a(220);a(659);z.a.initializeApp({apiKey:"AIzaSyBIvy0l9O1TpEhi0CkZNn6FaZ6c4Tb1MJs",authDomain:"shopify-image-repo-61597.firebaseapp.com",projectId:"shopify-image-repo-61597",storageBucket:"shopify-image-repo-61597.appspot.com",messagingSenderId:"595216600066",appId:"1:595216600066:web:76a04169e44e47bf636b1b",measurementId:"G-953S4WHEWZ"});var V=z.a,J=Object(O.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),Z=function(e){return{avatarInitial:e.username.charAt(0),imageName:"",imageId:"",title:"",date:"",imageSrc:"",description:"",color:"#FF0000"}},q=function(e){var t=J(),a=Object(r.useState)([]),i=Object(p.a)(a,2),c=i[0],o=i[1],l=Object(r.useState)(!1),m=Object(p.a)(l,2),j=m[0],O=m[1],y=Object(r.useState)("CREATE"),C=Object(p.a)(y,2),T=C[0],I=C[1],_=Object(r.useState)(Z(e.user)),E=Object(p.a)(_,2),w=E[0],D=E[1],A=Object(r.useState)(!1),P=Object(p.a)(A,2),k=P[0],R=P[1],N=Object(r.useState)(null),F=Object(p.a)(N,2),M=F[0],H=F[1];Object(r.useEffect)((function(){e.authenticated||(H(null),o([]),e.history.push("/login")),H(V.firestore())}),[e.authenticated]),Object(r.useEffect)((function(){null!=M&&K()}),[M]);var K=function(){var t=Object(d.a)(u.a.mark((function t(){var a,n,r,i,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.user.username,n=[],t.prev=2,t.next=5,M.collection(a).get();case 5:r=t.sent,n=r.docs.map((function(t){return Object.assign({},t.data(),{avatarInitial:e.user.username.charAt(0),imageId:t.id})})),t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(2),alert("Issue in retrieving image data",t.t0),t.abrupt("return");case 13:i=u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n[t],e.next=3,v.a.get(a.imageId,{level:"private"}).then((function(e){a.imageSrc=e})).catch((function(e){alert("Issue retrieving image, blank image will be used",e),a.imageSrc=""}));case 3:case"end":return e.stop()}}),e)})),c=0;case 15:if(!(c<n.length)){t.next=20;break}return t.delegateYield(i(c),"t1",17);case 17:c++,t.next=15;break;case 20:o(n);case 21:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(){return t.apply(this,arguments)}}(),B=function(e){return new Promise((function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return a(e)}}))},G=function(){var e=Object(d.a)(u.a.mark((function e(t,a,n,r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.collection(t).doc(a).set({imageName:r.name,title:n.title,description:n.description,date:(new Date).toISOString().split("T")[0],color:n.color});case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),alert("Error persisting image data",e.t0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a,n,r){return e.apply(this,arguments)}}(),z=function(){var e=Object(d.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.put(t,a,{level:"private",contentType:"image/png"});case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),alert("Error persisting image",e.t0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),q=function(){var t=Object(d.a)(u.a.mark((function t(a){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!1,t.prev=1,t.next=4,M.collection(e.user.username).doc(a).delete();case 4:n=!0,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),alert("Error deleting image data");case 10:if(!n){t.next=19;break}return t.prev=11,t.next=14,v.a.remove(a,{level:"private"});case 14:t.next=19;break;case 16:t.prev=16,t.t1=t.catch(11),alert("Error deleting image data");case 19:r=(r=c).filter((function(e){return e.imageId!=a})),o(r);case 22:case"end":return t.stop()}}),t,null,[[1,7],[11,16]])})));return function(e){return t.apply(this,arguments)}}(),Q=function(){var t=Object(d.a)(u.a.mark((function t(a,n){var r,i,l,d;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.user.username,G(r,a.imageId,a,n)&&k&&z(a.imageId,n),i=c,l=0;case 4:if(!(l<i.length)){t.next=16;break}if(i[l].imageId!=a.imageId){t.next=13;break}if(i[l]=Object(s.a)(Object(s.a)({},i[l]),a),!k){t.next=12;break}return t.next=10,B(n);case 10:d=t.sent,i[l].imageSrc=d;case 12:return t.abrupt("break",16);case 13:l++,t.next=4;break;case 16:o(i),O(!1);case 18:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),X=function(){var t=Object(d.a)(u.a.mark((function t(a,n){var r,i,s,l;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.user.username,i=(new Date).valueOf()+"-"+r,G(r,i,a,n)&&z(i,n),t.next=5,B(n);case 5:s=t.sent,l={imageName:n.name,title:a.title,description:a.description,date:(new Date).toISOString().split("T")[0],color:a.color,imageId:i,avatarInitial:r.charAt(0),imageSrc:s},o([].concat(Object(b.a)(c),[l])),O(!1);case 9:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[Object(n.jsx)(Y,{createNewImage:X,updateImage:Q,imageModalData:w,setImageModalData:D,imageModalOpen:j,setImageModalOpen:function(e){return O(e)},action:T,setImageUpdated:function(e){return R(e)}}),Object(n.jsx)(g.a,{position:"static",children:Object(n.jsxs)(h.a,{children:[Object(n.jsx)(f.a,{variant:"h6",className:t.title,children:"Shopify Image Repository"}),Object(n.jsx)(x.a,{color:"inherit",onClick:function(){e.setAuth(!1),e.history.push("/login"),S.a.signOut()},children:"Logout"})]})}),Object(n.jsxs)("div",{className:"content",style:{padding:"0px 16px 0px 16px"},children:[!e.userConfirmed&&Object(n.jsx)("div",{style:{marginTop:"1rem"},children:Object(n.jsxs)(f.a,{variant:"subtitle2",style:{color:"red"},children:["Hey ",e.user.username,". Welcome to your image repo. Please verify your email address or you will not be able to login later. Thanks"]})}),Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"0.8rem"},children:Object(n.jsx)(U.a,{onClick:function(){D(Z(e.user)),I("CREATE"),O(!0)},size:"medium",style:{width:"100%",borderRadius:"10px"},"aria-label":"Add a photo",children:Object(n.jsx)(L.a,{style:{width:"1.5em",height:"1.5em"}})})}),Object(n.jsx)("div",{style:{display:"flex",flexFlow:"row wrap",marginTop:"1rem"},children:c.map((function(e,t){return Object(n.jsx)(W,{deleteImg:function(){return q(e.imageId)},updateImage:function(){return t=e,I("UPDATE"),D(t),void O(!0);var t},imageData:e},t)}))})]})]})},Q=a(742),X=a(740),$=a(734),ee=a(745),te=a(163),ae=a.n(te),ne=a(741);function re(){return Object(n.jsxs)(f.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(X.a,{color:"inherit",href:"https://material-ui.com/",children:"Shopify Image Repo"})," ",(new Date).getFullYear(),"."]})}var ie=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ce(e){var t=ie(),a=Object(r.useState)(""),i=Object(p.a)(a,2),c=i[0],o=i[1],s=Object(r.useState)(""),l=Object(p.a)(s,2),m=l[0],j=l[1],b=Object(r.useState)(""),O=Object(p.a)(b,2),g=O[0],h=O[1];Object(r.useEffect)((function(){e.authenticated&&!e.isAuthenticating&&e.history.push("/")}),[e.authenticated,e.isAuthenticating]);var v=function(){var t=Object(d.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=m.trim().length&&0!=c.trim().length){t.next=4;break}h("Email and/or password must not be empty"),t.next=18;break;case 4:return h(""),t.prev=5,t.next=8,S.a.signIn(m,c);case 8:a=t.sent,e.setAuth(!0),e.setUser(a),e.setUserConfirmed(!0),e.setIsAuthenticating(!1),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),h(t.t0.message);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(){return t.apply(this,arguments)}}();return Object(n.jsxs)(ne.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(Q.a,{}),Object(n.jsxs)("div",{className:t.paper,children:[Object(n.jsx)(E.a,{className:t.avatar,children:Object(n.jsx)(ae.a,{})}),Object(n.jsx)(f.a,{component:"h1",variant:"h5",children:"Login"}),Object(n.jsxs)("form",{className:t.form,children:[Object(n.jsx)(H.a,{variant:"outlined",margin:"normal",fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){j(e.target.value)}}),Object(n.jsx)(H.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){o(e.target.value)}}),g.trim().length>0&&Object(n.jsx)(f.a,{component:"p",variant:"subtitle2",color:"error",children:g}),Object(n.jsx)(x.a,{fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:v,children:"Sign In"}),Object(n.jsxs)($.a,{container:!0,children:[Object(n.jsx)($.a,{item:!0,xs:!0}),Object(n.jsx)($.a,{item:!0,children:Object(n.jsx)(X.a,{href:"/register",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),Object(n.jsx)(ee.a,{mt:8,children:Object(n.jsx)(re,{})})]})}function oe(){return Object(n.jsxs)(f.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(X.a,{color:"inherit",href:"https://material-ui.com/",children:"Shopify Image Repo"})," ",(new Date).getFullYear(),"."]})}var se=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function le(e){var t=se(),a=Object(r.useState)(""),i=Object(p.a)(a,2),c=i[0],o=i[1],s=Object(r.useState)(""),l=Object(p.a)(s,2),m=l[0],j=l[1],b=Object(r.useState)(""),O=Object(p.a)(b,2),g=O[0],h=O[1];Object(r.useEffect)((function(){e.authenticated&&!e.isAuthenticating&&e.history.push("/")}),[e.authenticated,e.isAuthenticating]);var v=function(){var t=Object(d.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=m.trim().length&&0!=c.trim().length){t.next=4;break}h("Email and/or password must not be empty"),t.next=18;break;case 4:return h(""),t.prev=5,t.next=8,S.a.signUp({username:m,password:c,attributes:{email:m}});case 8:a=t.sent,e.setAuth(!0),e.setUser(a.user),e.setIsAuthenticating(!1),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),h(t.t0.message);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(){return t.apply(this,arguments)}}();return Object(n.jsxs)(ne.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(Q.a,{}),Object(n.jsxs)("div",{className:t.paper,children:[Object(n.jsx)(E.a,{className:t.avatar,children:Object(n.jsx)(ae.a,{})}),Object(n.jsx)(f.a,{component:"h1",variant:"h5",children:"Register"}),Object(n.jsxs)("form",{className:t.form,children:[Object(n.jsxs)($.a,{container:!0,spacing:2,children:[Object(n.jsx)($.a,{item:!0,xs:12,children:Object(n.jsx)(H.a,{variant:"outlined",fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){j(e.target.value)}})}),Object(n.jsx)($.a,{item:!0,xs:12,children:Object(n.jsx)(H.a,{variant:"outlined",fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){o(e.target.value)}})})]}),g.trim().length>0&&Object(n.jsx)(f.a,{component:"p",variant:"subtitle2",color:"error",children:g}),Object(n.jsx)(x.a,{fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:v,children:"Register"}),Object(n.jsx)($.a,{container:!0,justify:"flex-end",children:Object(n.jsx)($.a,{item:!0,children:Object(n.jsx)(X.a,{href:"/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),Object(n.jsx)(ee.a,{mt:5,children:Object(n.jsx)(oe,{})})]})}var ue=function(){var e=Object(r.useState)(!1),t=Object(p.a)(e,2),a=t[0],i=t[1],c=Object(r.useState)(!0),o=Object(p.a)(c,2),l=o[0],b=o[1],O=Object(r.useState)(null),g=Object(p.a)(O,2),h=g[0],f=g[1],x=Object(r.useState)(!1),v=Object(p.a)(x,2),y=v[0],C=v[1];return Object(r.useEffect)(Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.currentSession();case 3:return e.sent,i(!0),e.next=7,S.a.currentAuthenticatedUser();case 7:t=e.sent,f(t),C(!0),b(!1),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),b(!0),i(!1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,13]])}))),[]),Object(n.jsx)(m.a,{children:Object(n.jsxs)(j.d,{children:[Object(n.jsx)(j.b,{exact:!0,path:"/",render:function(e){return!l&&a?Object(n.jsx)(q,Object(s.a)(Object(s.a)({},e),{},{user:h,userConfirmed:y,authenticated:a,setAuth:i})):Object(n.jsx)(j.a,{to:"/login"})}}),Object(n.jsx)(j.b,{exact:!0,path:"/login",render:function(e){return Object(n.jsx)(ce,Object(s.a)(Object(s.a)({},e),{},{user:h,authenticated:a,setAuth:i,setUser:f,isAuthenticating:l,setIsAuthenticating:b,setUserConfirmed:C}))}}),Object(n.jsx)(j.b,{exact:!0,path:"/register",render:function(e){return Object(n.jsx)(le,Object(s.a)(Object(s.a)({},e),{},{user:h,authenticated:a,setAuth:i,setUser:f,isAuthenticating:l,setIsAuthenticating:b}))}})]})})},de=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,751)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))},pe=a(99);a(656);pe.default.configure({Auth:{mandatorySignIn:!0,region:Object({NODE_ENV:"production",PUBLIC_URL:"/shopify-image-repo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AMPLIFY_COGNITO_REGION,userPoolId:Object({NODE_ENV:"production",PUBLIC_URL:"/shopify-image-repo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AMPLIFY_COGNITO_USER_POOL_ID,userPoolWebClientId:Object({NODE_ENV:"production",PUBLIC_URL:"/shopify-image-repo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AMPLIFY_COGNITO_CLIENT_ID,authenticationFlowType:"USER_PASSWORD_AUTH",identityPoolId:Object({NODE_ENV:"production",PUBLIC_URL:"/shopify-image-repo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AMPLIFY_COGNITO_IDENTITY_POOL_ID},Storage:{AWSS3:{bucket:Object({NODE_ENV:"production",PUBLIC_URL:"/shopify-image-repo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AMPLIFY_S3_BUCKET,region:Object({NODE_ENV:"production",PUBLIC_URL:"/shopify-image-repo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AMPLIFY_S3_REGION}}}),o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(ue,{})}),document.getElementById("root")),de()}},[[657,1,2]]]);
//# sourceMappingURL=main.23db650b.chunk.js.map