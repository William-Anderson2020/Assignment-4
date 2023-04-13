(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{26:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(19),a=n.n(s),i=(n(26),n(15)),j=n(8),b=n(9),o=n(10),u=n(11),d=n(4),l=n(2),h=n(0),O=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:["Balance: ",this.props.accountBalance]})}}]),n}(c.Component),x=O,m=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:"https://picsum.photos/200/200",alt:"bank"}),Object(h.jsx)("h1",{children:"Bank of React"}),Object(h.jsx)(d.b,{to:"/userProfile",children:"User Profile"}),Object(h.jsx)("br",{}),Object(h.jsx)(d.b,{to:"/login",children:"Login"}),Object(h.jsx)("br",{}),Object(h.jsx)(d.b,{to:"/credits",children:"Credits (to be implemented in the Assignment)"}),Object(h.jsx)("br",{}),Object(h.jsx)(d.b,{to:"/debits",children:"Debits (to be implemented in the Assignment)"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(x,{accountBalance:this.props.accountBalance})]})}}]),n}(c.Component),p=m,f=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"User Profile"}),Object(h.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(h.jsxs)("div",{children:["Member Since: ",this.props.memberSince]}),Object(h.jsx)("br",{}),Object(h.jsx)(d.b,{to:"/",children:"Return to Home"})]})}}]),n}(c.Component),v=f,g=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(j.a)(this,n),(c=t.call(this,e)).handleChange=function(e){var t=Object(i.a)({},c.state.user);t.userName=e.target.value,c.setState({user:t})},c.handleSubmit=function(e){e.preventDefault(),c.props.mockLogIn(c.state.user),c.setState({redirect:!0})},c.state={user:{userName:c.props.user.userName,password:""},redirect:!1},c}return Object(b.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(h.jsx)(l.a,{to:"/userProfile"}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"User Name"}),Object(h.jsx)("input",{type:"text",name:"userName",defaultValue:this.props.user.userName,onChange:this.handleChange})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{type:"password",name:"password"})]}),Object(h.jsx)("button",{children:"Log In"})]}),Object(h.jsx)("br",{}),Object(h.jsx)(d.b,{to:"/",children:"Return to Home"})]})}}]),n}(c.Component),S=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Credits"}),Object(h.jsx)("br",{}),Object(h.jsx)(d.b,{to:"/",children:"Return to Home"})]})},k=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"DebitsTEST"}),e.debits.map((function(e){var t=e.date.slice(0,10);return Object(h.jsxs)("li",{children:[e.amount," ",e.description," ",t]},e.id)})),Object(h.jsxs)("form",{onSubmit:e.addDebit,children:[Object(h.jsx)("input",{type:"text",name:"description"}),Object(h.jsx)("input",{type:"number",name:"amount"}),Object(h.jsx)("button",{type:"submit",children:"Add Debit"})]}),Object(h.jsx)("br",{}),Object(h.jsx)(d.b,{to:"/",children:"Return to Home"})]})},y=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).mockLogIn=function(t){var n=Object(i.a)({},e.state.currentUser);n.userName=t.userName,e.setState({currentUser:n})},e.state={accountBalance:1234567.89,creditList:[],debitList:[],currentUser:{userName:"Joe Smith",memberSince:"11/22/99"}},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this;console.log("TEST");return Object(h.jsx)(d.a,{basename:"/bank-of-react-example-code-gh-pages",children:Object(h.jsxs)("div",{children:[Object(h.jsx)(l.b,{exact:!0,path:"/",render:function(){return Object(h.jsx)(p,{accountBalance:e.state.accountBalance})}}),Object(h.jsx)(l.b,{exact:!0,path:"/userProfile",render:function(){return Object(h.jsx)(v,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),Object(h.jsx)(l.b,{exact:!0,path:"/login",render:function(){return Object(h.jsx)(g,{user:e.state.currentUser,mockLogIn:e.mockLogIn})}}),Object(h.jsx)(l.b,{exact:!0,path:"/credits",render:function(){return Object(h.jsx)(S,{credits:e.state.creditList})}}),Object(h.jsx)(l.b,{exact:!0,path:"/debits",render:function(){return Object(h.jsx)(k,{debits:e.state.debitList})}})]})})}},{key:"addDebits",value:function(e){alert("FIRE");var t=new Date;e.date="".concat(t.getFullYear(),"-").concat(t.getMonth(),"-").concat(t.getDate()),this.state.debitList.append(e),console.log(e),this.setState({accountBalance:this.state.accountBalance-e.amount})}}]),n}(c.Component),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),L()}},[[36,1,2]]]);
//# sourceMappingURL=main.2e4b9bdc.chunk.js.map