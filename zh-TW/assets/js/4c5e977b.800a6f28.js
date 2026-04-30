(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[1893],{28372:(e,t,o)=>{"use strict";o.d(t,{Z:()=>d});var n=o(67294),a=o(42752),r=o(65488),c=o(85162);const i=o(19521).ZP.button`
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
`;const d={...a.Z,Tabs:r.Z,TabItem:c.Z,Button:i,APIEndpoint:function(e){let{method:t,url:o}=e;const[a,r]=(0,n.useState)(!1);return n.createElement("span",{className:`api-endpoint api-endpoint--${t.toLowerCase()}`},n.createElement("span",{className:"api-endpoint__method"},t),n.createElement("code",{className:"api-endpoint__url"},o),n.createElement("button",{className:"api-endpoint__copy"+(a?" api-endpoint__copy--copied":""),onClick:()=>{if(navigator.clipboard)navigator.clipboard.writeText(o).then((()=>{r(!0),setTimeout((()=>r(!1)),2e3)}));else{const e=document.createElement("textarea");e.value=o,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),r(!0),setTimeout((()=>r(!1)),2e3)}},title:"Copy path to clipboard","aria-label":"Copy path to clipboard"},a?n.createElement("span",null,"\u2713 Copied"):n.createElement("span",null,n.createElement("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{verticalAlign:"middle",marginRight:"3px"}},n.createElement("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),n.createElement("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})),"Copy")))}}},44616:()=>{},42480:()=>{}}]);