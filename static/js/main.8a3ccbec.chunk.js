(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){},15:function(e,t,a){},174:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(73),s=a.n(c),r=(a(102),a(13)),o=a(7),i=a(8),m=a(11),u=a(9),d=a(10),h=(a(15),a(185)),E=a(186),g=a(187),p=a(177),b=a(91),f=a(176),v=a(179),y=a(178),k=a(75),N=a.n(k),j=(a(157),N.a.initializeApp({apiKey:"AIzaSyA_jKe7ug9rZwmgEY64XC6hkm8rB4ckWww",authDomain:"hcde-498-final-project.firebaseapp.com",databaseURL:"https://hcde-498-final-project.firebaseio.com",projectId:"hcde-498-final-project",storageBucket:"hcde-498-final-project.appspot.com",messagingSenderId:"45130628859"})),O=(N.a.storage(),a(25)),x=a.n(O),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).logout=a.logout.bind(Object(r.a)(a)),a.user=j.auth().currentUser,a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"logout",value:function(){j.auth().signOut()}},{key:"render",value:function(){return l.a.createElement(f.a,{fluid:!0},l.a.createElement(p.a,{className:"banner"},l.a.createElement(b.a,{sm:12,md:4,lg:10},l.a.createElement(y.a,{to:"/hcde498-firstpage/searchPage"},l.a.createElement("img",{src:x.a,alt:"logo"}))),l.a.createElement(b.a,{className:"colLogoutAccount",sm:6,md:4,lg:1},l.a.createElement("i",{class:"far fa-user fa-3x"})),l.a.createElement(b.a,{className:"colLogoutAccount",sm:6,md:4,lg:1},l.a.createElement(y.a,{to:"/hcde498-firstpage/"},l.a.createElement("i",{class:"fas fa-sign-out-alt fa-3x",onClick:this.logout})))))}}]),t}(n.Component),P=(n.Component,function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).user=j.auth().currentUser,a.state={recentSearches:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=j.firestore();console.log(this.user.email);t.collection("".concat(this.user.email,"RecentSearches")).get().then(function(t){e.setState({recentSearches:t.docs})})}},{key:"render",value:function(){var e=this,t=[];return this.state.recentSearches.length>0&&(console.log(this.state.recentSearches.length),t=this.state.recentSearches.reverse().map(function(t,a){return l.a.createElement(y.a,{style:{textDecoration:"none"},key:a,to:"/hcde498-firstpage/".concat(e.state.recentSearches[a].data().textbookName,"/").concat(e.state.recentSearches[a].data().userID),onClick:e.resultClicked},l.a.createElement(p.a,{className:"individualPost mb-3"},l.a.createElement(b.a,{lg:4,className:"colOne"},l.a.createElement("img",{src:e.state.recentSearches[a].data().imageDownloadURL,alt:"thumbnail",className:"thumbnail"})),l.a.createElement(b.a,{lg:6,className:"colTwo"},l.a.createElement("div",null,l.a.createElement("strong",null,"Seller:")," ",e.state.recentSearches[a].data().seller),l.a.createElement("div",null,l.a.createElement("strong",null,"Seller Email:")," ",e.state.recentSearches[a].data().userID),l.a.createElement("div",null,l.a.createElement("strong",null,"Meetup Location:")," ",e.state.recentSearches[a].data().location),l.a.createElement("div",null,l.a.createElement("strong",null,"Condition:")," ",e.state.recentSearches[a].data().condition),l.a.createElement("div",null,l.a.createElement("strong",null,"Date Posted:")," ",e.state.recentSearches[a].data().datePosted)),l.a.createElement(b.a,{lg:2,className:"colThree"},l.a.createElement("div",null,e.state.recentSearches[a].data().price))))})),l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement(f.a,{fluid:!0,className:"searchAndButtonsContainer"},l.a.createElement(f.a,{fluid:!0,className:"searchAndButtons"},l.a.createElement(S,null),l.a.createElement(D,null))),l.a.createElement(f.a,{fluid:!0},l.a.createElement(f.a,{className:"recentSearchListContainer"},l.a.createElement("h1",null,"Recent Searches"),t)))}}]),t}(n.Component)),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).searchClicked=function(e){a.setState({textbookName:a.searchText})},a.searchInput=function(e){a.searchText=e.target.value,a.setState({textbookName:a.searchText})},a.searchText="",a.state={textbookName:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"search-box"},l.a.createElement("form",null,l.a.createElement("input",{className:"search-txt",type:"text",placeholder:"Title (EX: Building Java Programs)","aria-label":"Search",onChange:this.searchInput})),l.a.createElement(y.a,{to:"/hcde498-firstpage/searchResults/".concat(this.state.textbookName)},l.a.createElement("i",{className:"search-btn fas fa-search fa-2x"})))}}]),t}(n.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.type;return l.a.createElement(v.a,{className:"homeBtn",role:"button"},e)}}]),t}(n.Component),D=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(f.a,{className:"mt-5"},l.a.createElement(p.a,{className:"homePageBtnRow"},l.a.createElement(b.a,{sm:12,md:6,lg:4},l.a.createElement(y.a,{to:"/hcde498-firstpage/myPosts"},l.a.createElement(w,{type:"My Posts"}))),l.a.createElement(b.a,{sm:12,md:6,lg:4},l.a.createElement(y.a,{to:"/hcde498-firstpage/sellPage"},l.a.createElement(w,{type:"Sell"}))),l.a.createElement(b.a,{sm:12,md:12,lg:4},l.a.createElement(w,{type:"Bookmarks"}))))}}]),t}(n.Component),T=P,L=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("p",null,"Error: Path does not exist")}}]),t}(n.Component),R=a(37),I=a(180),U=a(181),B=a(188),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).login=a.login.bind(Object(r.a)(a)),a.handleChange=a.handleChange.bind(Object(r.a)(a)),a.state={email:"",password:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"login",value:function(e){e.preventDefault(),j.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(function(e){}).catch(function(e){console.log(e),alert(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"login"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement(I.a,{controlId:"email",size:"large"},l.a.createElement(U.a,{className:"formLabel"},"Email"),l.a.createElement(B.a,{autoFocus:!0,type:"email",name:"email",onChange:this.handleChange})),l.a.createElement(I.a,{controlId:"password",size:"large"},l.a.createElement(U.a,{className:"formLabel"},"Password"),l.a.createElement(B.a,{type:"password",name:"password",onChange:this.handleChange})),l.a.createElement(v.a,{block:!0,size:"large",type:"submit",className:"btnSubmitCredentials",onClick:this.login},"Login"))))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(r.a)(a)),a.createAccount=a.createAccount.bind(Object(r.a)(a)),a.state={email:"",password:"",passwordRetype:"",displayName:"",collegeYouAttend:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"createAccount",value:function(e){j.firestore().collection(this.state.email+"info").add({displayName:this.state.displayName,userID:this.state.email,college:this.state.collegeYouAttend});this.state.password===this.state.passwordRetype?(e.preventDefault(),j.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(function(e){}).then(function(e){console.log(e)}).catch(function(e){console.log(e),alert(e)})):(alert("passwords do not match"),console.log("passwords do not match"))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"login"},l.a.createElement("form",{onSubmit:this.createAccount},l.a.createElement(I.a,{controlId:"email",size:"large"},l.a.createElement(U.a,{className:"formLabel"},"Email"),l.a.createElement(B.a,{autoFocus:!0,type:"email",name:"email",onChange:this.handleChange})),l.a.createElement(I.a,{controlId:"password",size:"large"},l.a.createElement(U.a,{className:"formLabel"},"Password"),l.a.createElement(B.a,{type:"password",name:"password",onChange:this.handleChange})),l.a.createElement(I.a,{controlId:"password",size:"large"},l.a.createElement(U.a,{className:"formLabel"},"Retype Password"),l.a.createElement(B.a,{type:"password",name:"passwordRetype",onChange:this.handleChange})),l.a.createElement(I.a,{controlId:"displayName",size:"large"},l.a.createElement(U.a,{className:"formLabel"},"First Name"),l.a.createElement(B.a,{type:"text",name:"displayName",onChange:this.handleChange})),l.a.createElement(I.a,{controlId:"college",size:"large"},l.a.createElement(U.a,{className:"formLabel"},"College you attend"),l.a.createElement(B.a,{type:"text",name:"collegeYouAttend",onChange:this.handleChange})),l.a.createElement(v.a,{block:!0,size:"large",type:"submit",className:"btnSubmitCredentials",onClick:this.createAccount},"Create Account"))))}}]),t}(n.Component),z=a(183),F=a(182),W=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(f.a,{fluid:!0},l.a.createElement(p.a,{className:"banner"},l.a.createElement(b.a,{sm:12,md:8,lg:9},l.a.createElement(y.a,{to:"/"},l.a.createElement("img",{src:x.a,alt:"logo"}))),l.a.createElement(b.a,{className:"colLogoutAccount",sm:6,md:2,lg:2}),l.a.createElement(b.a,{className:"colLogoutAccount",sm:6,md:2,lg:1},l.a.createElement(y.a,{to:"/"}))))}}]),t}(n.Component),H=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(W,null),l.a.createElement(p.a,{className:"tabsContainer"},l.a.createElement(b.a,null,l.a.createElement("div",null,l.a.createElement(z.a,{className:"tabs"},l.a.createElement(F.a,{className:"tab",eventKey:"login",title:"Login"},l.a.createElement(A,null)),l.a.createElement(F.a,{className:"tab",eventKey:"createAccount",title:"Create Account"},l.a.createElement(M,null)))))))}}]),t}(n.Component),K=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).fileSelectedHandler=function(e){a.setState({selectedFile:e.target.files[0]})},a.fileUploadHandler=function(){var e=j.storage().ref().child("images/".concat(a.state.selectedFile.name)).put(a.state.selectedFile);e.on("state_changed",function(e){},function(e){},function(){e.snapshot.ref.getDownloadURL().then(function(e){console.log("File available at",e),a.setState({imageDownloadURL:e})})})},a.handleChange=a.handleChange.bind(Object(r.a)(a)),a.postTextbook=a.postTextbook.bind(Object(r.a)(a)),a.fileSelectedHandler=a.fileSelectedHandler.bind(Object(r.a)(a)),a.fileUploadHandler=a.fileUploadHandler.bind(Object(r.a)(a)),a.user=j.auth().currentUser,a.userEmail=a.user.email,a.state={textbookName:"",location:"",condition:"",price:"",displayName:"",selectedFile:null,imageDownloadURL:null,datePosted:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=j.firestore(),a=this.userEmail+"info",n=new Date,l=String(n.getDate())+"/"+String(n.getMonth()+1);t.collection(a).get().then(function(t){e.setState({displayName:t.docs[0].data().displayName,datePosted:l})})}},{key:"handleChange",value:function(e){console.log(e.target.value),this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"postTextbook",value:function(e){var t=j.firestore();t.collection(this.state.textbookName).add({textbookName:this.state.textbookName,location:this.state.location,condition:this.state.condition,price:this.state.price,userID:this.userEmail,seller:this.state.displayName,imageDownloadURL:this.state.imageDownloadURL,datePosted:this.state.datePosted}),t.collection(this.userEmail).add({textbookName:this.state.textbookName,location:this.state.location,condition:this.state.condition,price:this.state.price,imageDownloadURL:this.state.imageDownloadURL,datePosted:this.state.datePosted})}},{key:"getDisplayName",value:function(e){var t=this,a=this.userEmail+"info";e.collection(a).get().then(function(e){t.setState({displayName:e.docs[0].data().displayName})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement(f.a,{className:"containerSell"},l.a.createElement("div",null,l.a.createElement("h1",null,"Create Sale")),l.a.createElement(p.a,null,l.a.createElement(b.a,{lg:6},l.a.createElement("input",{type:"file",onChange:this.fileSelectedHandler}),l.a.createElement(v.a,{onClick:this.fileUploadHandler,className:"upload"},"Upload"),l.a.createElement("div",{className:"imgPlaceholder mt-4"},l.a.createElement("img",{src:this.state.imageDownloadURL,alt:"textbook image"}))),l.a.createElement(b.a,{lg:6,className:"formGroup"},l.a.createElement(I.a,{controlId:"textbookName",size:"large"},l.a.createElement(U.a,null,"Textbook Name"),l.a.createElement(B.a,{type:"text",name:"textbookName",onChange:this.handleChange})),l.a.createElement(I.a,{controlId:"location",size:"large"},l.a.createElement(U.a,null,"Location"),l.a.createElement(B.a,{type:"text",name:"location",onChange:this.handleChange})),l.a.createElement(I.a,{controlId:"price",size:"large"},l.a.createElement(U.a,null,"Price"),l.a.createElement(B.a,{type:"text",name:"price",onChange:this.handleChange})),l.a.createElement(I.a,{controlId:"condition",size:"large"},l.a.createElement(U.a,null,"Condition"),l.a.createElement(B.a,{as:"select",onChange:this.handleChange,name:"condition"},l.a.createElement("option",{value:"1 (Poor)"},"1 (Poor)"),l.a.createElement("option",{value:"2 (Decent)"},"2 (Decent)"),l.a.createElement("option",{value:"3 (Used)"},"3 (Used)"),l.a.createElement("option",{value:"4 (Ligtly Used)"},"4 (Ligtly Used)"),l.a.createElement("option",{value:"5 (Perfect)"},"5 (Perfect)"))),l.a.createElement(y.a,{to:"/hcde498-firstpage/myPosts"},l.a.createElement(v.a,{block:!0,size:"large",onClick:this.postTextbook,className:"post"},"Post"))))))}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).user=j.auth().currentUser,a.userEmail=a.user.email,a.state={myPosts:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.firestore().collection(this.userEmail).get().then(function(t){e.setState({myPosts:t.docs})})}},{key:"deletePost",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this,t=this.state.myPosts.map(function(t,a){return l.a.createElement(p.a,{key:a,className:"individualPost mb-4"},l.a.createElement(b.a,{lg:4,className:"colOne"},l.a.createElement("img",{src:e.state.myPosts[a].data().imageDownloadURL,alt:"thumbnail",className:"thumbnail"})),l.a.createElement(b.a,{lg:6,className:"colTwo"},l.a.createElement("div",null,l.a.createElement("strong",null,"Textbook Title:")," ",e.state.myPosts[a].data().textbookName),l.a.createElement("div",null,l.a.createElement("strong",null,"Meetup Location:")," ",e.state.myPosts[a].data().location),l.a.createElement("div",null,l.a.createElement("strong",null,"Price:")," ",e.state.myPosts[a].data().price),l.a.createElement("div",null,l.a.createElement("strong",null,"Condition:")," ",e.state.myPosts[a].data().condition),l.a.createElement("div",null,l.a.createElement("strong",null,"Date Posted:")," ",e.state.myPosts[a].data().datePosted)),l.a.createElement(b.a,{className:"colThreeDeleteIcon",lg:2},l.a.createElement(p.a,null,l.a.createElement(b.a,{className:"colThreeDeleteIcon mb-2",lg:12},l.a.createElement("i",{class:"far fa-trash-alt fa-3x",onClick:e.deletePost(a)})),l.a.createElement(b.a,{className:"colThreeDeleteIcon mt-2",lg:12},l.a.createElement("div",null,l.a.createElement(v.a,{role:"button",variant:"primary"},"Edit"))))))});return l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement(f.a,{className:"listContainer"},l.a.createElement("div",null,l.a.createElement("h1",null,"My Posts")),t))}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).user=j.auth().currentUser,a.userEmail=a.user.email,a.state={searchResults:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.firestore().collection(this.props.match.params.textbookName).get().then(function(t){e.setState({searchResults:t.docs})})}},{key:"resultClicked",value:function(e){console.log(e),console.log("clicked")}},{key:"render",value:function(){var e=this,t=this.state.searchResults.map(function(t,a){return l.a.createElement(y.a,{style:{textDecoration:"none"},key:a,to:"/searchResults/".concat(e.state.searchResults[a].data().textbookName,"/").concat(a),onClick:e.resultClicked(a)},l.a.createElement(p.a,{className:"individualPost mb-3"},l.a.createElement(b.a,{lg:4,className:"colOne"},l.a.createElement("img",{src:e.state.searchResults[a].data().imageDownloadURL,alt:"thumbnail",className:"thumbnail"})),l.a.createElement(b.a,{lg:6,className:"colTwo"},l.a.createElement("div",null,l.a.createElement("strong",null,"Seller:")," ",e.state.searchResults[a].data().seller),l.a.createElement("div",null,l.a.createElement("strong",null,"Seller Email:")," ",e.state.searchResults[a].data().userID),l.a.createElement("div",null,l.a.createElement("strong",null,"Meetup Location:")," ",e.state.searchResults[a].data().location),l.a.createElement("div",null,l.a.createElement("strong",null,"Condition:")," ",e.state.searchResults[a].data().condition),l.a.createElement("div",null,l.a.createElement("strong",null,"Date Posted:")," ",e.state.searchResults[a].data().datePosted)),l.a.createElement(b.a,{lg:2,className:"colThree"},l.a.createElement("div",null,e.state.searchResults[a].data().price))))});return l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement("div",null,l.a.createElement("h1",null,"Search Results for ",l.a.createElement("strong",null,this.props.match.params.textbookName))),l.a.createElement(f.a,{className:"listContainer"},t))}}]),t}(n.Component),X=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).user=j.auth().currentUser,a.state={userPosts:[],index:0},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params.textbookName),console.log(this.props.match.params.index),this.setState({index:this.props.match.params.index});j.firestore().collection(this.props.match.params.textbookName).get().then(function(t){e.setState({userPosts:t.docs})})}},{key:"render",value:function(){if(this.state.userPosts.length>0){console.log(this.state.userPosts[this.state.index].data().seller);j.firestore().collection("".concat(this.user.email,"RecentSearches")).add({textbookName:this.props.match.params.textbookName,seller:this.state.userPosts[this.state.index].data().seller,userID:this.state.userPosts[this.state.index].data().userID,location:this.state.userPosts[this.state.index].data().location,condition:this.state.userPosts[this.state.index].data().condition,datePosted:this.state.userPosts[this.state.index].data().datePosted,imageDownloadURL:this.state.userPosts[this.state.index].data().imageDownloadURL})}return l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement("div",null,l.a.createElement("h1",null,"Contact Seller")),l.a.createElement("div",null,this.state.userPosts.length>0?l.a.createElement(f.a,{fluid:!0},l.a.createElement(p.a,null,l.a.createElement(b.a,{lg:6,className:"colOne"},l.a.createElement("div",{className:"imageContainer"},l.a.createElement("img",{src:this.state.userPosts[this.state.index].data().imageDownloadURL,alt:"thumbnail",className:"thumbnail"}))),l.a.createElement(b.a,{className:"contactColTwo"},l.a.createElement("div",null,l.a.createElement("strong",null,"Seller:")," ",this.state.userPosts[this.state.index].data().seller),l.a.createElement("div",null,l.a.createElement("strong",null,"Seller Email:")," ",this.state.userPosts[this.state.index].data().userID),l.a.createElement("div",null,l.a.createElement("strong",null,"Meetup Location:")," ",this.state.userPosts[this.state.index].data().location),l.a.createElement("div",null,l.a.createElement("strong",null,"Price:")," ",this.state.userPosts[this.state.index].data().price),l.a.createElement("div",null,l.a.createElement("strong",null,"Condition:")," ",this.state.userPosts[this.state.index].data().condition),l.a.createElement(v.a,{className:"contactBtn",role:"button",variant:"dark"},l.a.createElement("a",{href:"mailto:".concat(this.state.userPosts[this.state.index].data().userID)},"Email ",this.state.userPosts[this.state.index].data().seller))))):l.a.createElement("div",null,"Loading Data")))}}]),t}(n.Component),_=a(95),G=a.n(_),Z=a(184),$=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"stickyFooter"},l.a.createElement(f.a,{fluid:!0},l.a.createElement("div",null,"\xa9 ",(new Date).getFullYear()," Copyright: Textbook Friends")))}}]),t}(n.Component),q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={seconds:0},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"tick",value:function(){this.setState(function(e){return{seconds:e.seconds+1}})}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"landingPageBanner"},l.a.createElement("img",{src:G.a,alt:"Landing Page Banner"}),l.a.createElement("div",{className:"logo"},l.a.createElement(p.a,null,l.a.createElement(b.a,{xs:6,sm:6,md:6,lg:12},l.a.createElement("img",{src:x.a,alt:"logo"}),l.a.createElement("h1",null,"Textbook Friends")),l.a.createElement(b.a,{xs:6,sm:6,md:6,lg:12},l.a.createElement("h2",null,"Buy and Sell Textbooks Locally"),l.a.createElement(y.a,{to:"/hcde498-firstpage/getStarted"},l.a.createElement(v.a,{className:"btnLoginCreateAccount",size:"lg"},"Login/Create Account")))))),l.a.createElement("div",{className:"whyUse"},l.a.createElement("h3",null,"Why use Textbook Friends?"),l.a.createElement(f.a,null,l.a.createElement(p.a,null,l.a.createElement(b.a,{lg:4},l.a.createElement(Z.a,null,l.a.createElement("i",{class:"fas fa-dollar-sign fa-5x"}),l.a.createElement(Z.a.Body,null,l.a.createElement(Z.a.Title,null,"Cheaper"),l.a.createElement(Z.a.Text,null,l.a.createElement("ul",null,l.a.createElement("li",null,"Cheaper than used textbook websites"),l.a.createElement("li",null,"No shipping fees")))))),l.a.createElement(b.a,{lg:4},l.a.createElement(Z.a,null,l.a.createElement("i",{class:"fas fa-fast-forward fa-5x"}),l.a.createElement(Z.a.Body,null,l.a.createElement(Z.a.Title,null,"Faster"),l.a.createElement(Z.a.Text,null,l.a.createElement("ul",null,l.a.createElement("li",null,"Recieve your textbooks after class"),l.a.createElement("li",null,"Meet at a convenient time")))))),l.a.createElement(b.a,{lg:4},l.a.createElement(Z.a,null,l.a.createElement("i",{class:"far fa-smile-beam fa-5x"}),l.a.createElement(Z.a.Body,null,l.a.createElement(Z.a.Title,null,"Easier"),l.a.createElement(Z.a.Text,null,l.a.createElement("ul",null,l.a.createElement("li",null,"No more long lines"),l.a.createElement("li",null,"Meet on campus"),l.a.createElement("li",null,"Searching for textbooks is simple"))))))))),l.a.createElement("hr",null),l.a.createElement("div",{className:"howDoesItWork"},l.a.createElement("h3",null,"How Does It Work?"),l.a.createElement(z.a,{className:"tabs",defaultActiveKey:"Buy"},l.a.createElement(F.a,{className:"tab",eventKey:"Buy",title:"Buy"},l.a.createElement("h1",null,"Buy"),l.a.createElement(f.a,null,l.a.createElement(p.a,null,l.a.createElement(b.a,{lg:3},l.a.createElement(Z.a,null,l.a.createElement(Z.a.Body,null,l.a.createElement(Z.a.Title,null,"1"),l.a.createElement(Z.a.Text,null,"Search for textbooks")))),l.a.createElement(b.a,{lg:3},l.a.createElement(Z.a,null,l.a.createElement(Z.a.Body,null,l.a.createElement(Z.a.Title,null,"2"),l.a.createElement(Z.a.Text,null,"Contact Seller")))),l.a.createElement(b.a,{lg:3},l.a.createElement(Z.a,null,l.a.createElement(Z.a.Body,null,l.a.createElement(Z.a.Title,null,"3"),l.a.createElement(Z.a.Text,null,"Meetup Nearby")))),l.a.createElement(b.a,{lg:3},l.a.createElement(Z.a,null,l.a.createElement(Z.a.Body,null,l.a.createElement(Z.a.Title,null,"4"),l.a.createElement(Z.a.Text,null,"Start Studying"))))))),l.a.createElement(F.a,{className:"tab",eventKey:"Sell",title:"Sell"},l.a.createElement("h1",null,"Sell"),l.a.createElement(f.a,null,l.a.createElement(p.a,null,l.a.createElement(b.a,{lg:3},l.a.createElement(Z.a,null,l.a.createElement(Z.a.Body,null,l.a.createElement(Z.a.Title,null,"1"),l.a.createElement(Z.a.Text,null,"Post Textbook For Sale")))),l.a.createElement(b.a,{lg:3},l.a.createElement(Z.a,null,l.a.createElement(Z.a.Body,null,l.a.createElement(Z.a.Title,null,"2"),l.a.createElement(Z.a.Text,null,"Wait For Eager Buyers to Contact You")))),l.a.createElement(b.a,{lg:3},l.a.createElement(Z.a,null,l.a.createElement(Z.a.Body,null,l.a.createElement(Z.a.Title,null,"3"),l.a.createElement(Z.a.Text,null,"Meetup Nearby")))),l.a.createElement(b.a,{lg:3},l.a.createElement(Z.a,null,l.a.createElement(Z.a.Body,null,l.a.createElement(Z.a.Title,null,"4"),l.a.createElement(Z.a.Text,null,"Spend your MONEY"))))))))),l.a.createElement($,null))}}]),t}(n.Component),Q=(n.Component,function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement(E.a,null,l.a.createElement(g.a,{path:"/hcde498-firstpage/",component:q,exact:!0}),l.a.createElement(g.a,{path:"/hcde498-firstpage/getStarted",component:V,exact:!0}),l.a.createElement(g.a,{path:"/hcde498-firstpage/searchPage",component:T}),l.a.createElement(g.a,{path:"/hcde498-firstpage/sellPage",component:K}),l.a.createElement(g.a,{path:"/hcde498-firstpage/myPosts",component:Y}),l.a.createElement(g.a,{path:"/hcde498-firstpage/searchResults/:textbookName",component:J}),l.a.createElement(g.a,{path:"/hcde498-firstpage/searchResults/:textbookName/:index",component:X}),l.a.createElement(g.a,{path:"/hcde498-firstpage/:textbookName/:sellerUserID",component:X}),l.a.createElement(g.a,{component:L})))}}]),t}(n.Component)),V=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={user:null},a.authListener=a.authListener.bind(Object(r.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;j.auth().onAuthStateChanged(function(t){console.log(t),t?(e.setState({user:t}),localStorage.setItem("user",t.uid)):(e.setState({user:null}),localStorage.removeItem("user"))})}},{key:"render",value:function(){return this.state.user?l.a.createElement(T,null):l.a.createElement(H,null)}}]),t}(n.Component),ee=Q;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},25:function(e,t,a){e.exports=a.p+"static/media/reading.e8705c2b.svg"},95:function(e,t,a){e.exports=a.p+"static/media/college.e4d4a900.jpg"},97:function(e,t,a){e.exports=a(174)}},[[97,1,2]]]);
//# sourceMappingURL=main.8a3ccbec.chunk.js.map