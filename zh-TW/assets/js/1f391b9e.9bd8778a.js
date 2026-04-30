"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[13085],{14247:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var n=a(67294),o=a(86010),r=a(10833),l=a(35281),c=a(56866),i=a(45042),d=a(39407);const s="mdxPageWrapper_j9I6";function m(e){const{content:t}=e,{metadata:{title:a,description:m,frontMatter:p}}=t,{wrapperClassName:u,hide_table_of_contents:h}=p;return n.createElement(r.FG,{className:(0,o.Z)(u??l.k.wrapper.mdxPages,l.k.page.mdxPage)},n.createElement(r.d,{title:a,description:m}),n.createElement(c.Z,null,n.createElement("main",{className:"container container--fluid margin-vert--lg"},n.createElement("div",{className:(0,o.Z)("row",s)},n.createElement("div",{className:(0,o.Z)("col",!h&&"col--8")},n.createElement("article",null,n.createElement(i.Z,null,n.createElement(t,null)))),!h&&t.toc.length>0&&n.createElement("div",{className:"col col--2"},n.createElement(d.Z,{toc:t.toc,minHeadingLevel:p.toc_min_heading_level,maxHeadingLevel:p.toc_max_heading_level}))))))}},28372:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),o=a(42752),r=a(65488),l=a(85162);const c=a(19521).ZP.button`
  background-color: #F7A60F;
  color: #0B0B0E;
  padding: 4px 12px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #FAB83C;
  }
`;const i={...o.Z,Tabs:r.Z,TabItem:l.Z,Button:c,APIEndpoint:function(e){let{method:t,url:a}=e;const[o,r]=(0,n.useState)(!1);return n.createElement("span",{className:`api-endpoint api-endpoint--${t.toLowerCase()}`},n.createElement("span",{className:"api-endpoint__method"},t),n.createElement("code",{className:"api-endpoint__url"},a),n.createElement("button",{className:"api-endpoint__copy"+(o?" api-endpoint__copy--copied":""),onClick:()=>{if(navigator.clipboard)navigator.clipboard.writeText(a).then((()=>{r(!0),setTimeout((()=>r(!1)),2e3)}));else{const e=document.createElement("textarea");e.value=a,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),r(!0),setTimeout((()=>r(!1)),2e3)}},title:"Copy path to clipboard","aria-label":"Copy path to clipboard"},o?n.createElement("span",null,"\u2713 Copied"):n.createElement("span",null,n.createElement("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{verticalAlign:"middle",marginRight:"3px"}},n.createElement("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),n.createElement("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})),"Copy")))}}}}]);