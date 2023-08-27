(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{335:function(t,e,n){"use strict";n.r(e);n(166),n(310),n(92),n(91);var a=n(42),s=n(313),r=n(308),i={name:"",mixins:[s.a,r.a],data:function(){return{loading:!0,currentNetwork:null,tokenType:"SimpleBEP20",token:{}}},computed:{controlFlow:function(){return"https://github.com/tokencenter/bep20-generator/blob/v".concat(this.token.version,"/analysis/control-flow/").concat(this.contracts.token.contractName,".png")},inheritanceTree:function(){return"https://github.com/tokencenter/bep20-generator/blob/v".concat(this.token.version,"/analysis/inheritance-tree/").concat(this.contracts.token.contractName,".png")},uml:function(){return"https://github.com/tokencenter/bep20-generator/blob/v".concat(this.token.version,"/analysis/uml/").concat(this.contracts.token.contractName,".svg")}},mounted:function(){this.initDapp()},methods:{initDapp:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.loadToken();case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0),t.makeToast("Some error occurred",e.t0,"danger");case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))()},loadToken:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.initToken(t.tokenType),t.token=t.tokenDetails.find((function(e){return e.name===t.tokenType})),t.loading=!1;case 3:case"end":return e.stop()}}),e)})))()}}},o=n(40),c=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-jumbotron",{staticClass:"mb-0 flickr-gradient",attrs:{"text-variant":"white",header:"BEP20 Tether USDT Documentation",fluid:""},scopedSlots:t._u([{key:"lead",fn:function(){return[t._v("\n            BEP20 Tether USDT Generator Tool Documentation.\n            "),n("br"),t._v("\n            Discover more details about different BEP20 Tether USDT Types, ABI, source code and analysis report.\n        ")]},proxy:!0}])}),t._v(" "),n("b-row",{staticClass:"mx-0",attrs:{id:"token-docs"}},[n("b-col",{staticClass:"mb-3 p-0",attrs:{lg:"10","offset-lg":"1"}},[t.loading?n("div",{staticClass:"text-center p-5"},[n("ui--loader",{attrs:{loading:!0}})],1):t._e(),t._v(" "),t.loading?t._e():n("b-card",{attrs:{"bg-variant":"transparent","border-variant":"0"}},[n("b-row",[n("b-col",{attrs:{lg:"8"}},[n("b-card",{staticClass:"mt-3",attrs:{header:"Token Type","header-bg-variant":"dark","header-text-variant":"white"}},[n("b-form-group",{attrs:{description:"Choose your Token.",label:"Token Type *","label-for":"tokenType"}},[n("b-form-select",{attrs:{id:"tokenType",size:"lg"},on:{input:t.loadToken},model:{value:t.tokenType,callback:function(e){t.tokenType=e},expression:"tokenType"}},t._l(t.tokenList,(function(e,a){return n("option",{domProps:{value:a}},[t._v(t._s(e.contractName))])})),0)],1)],1),t._v(" "),n("b-card",{staticClass:"mt-3",attrs:{"no-body":"","bg-variant":"light",header:"Token Details","header-bg-variant":"dark","header-text-variant":"white"}},[n("b-list-group",{attrs:{flush:""}},[n("b-list-group-item",{staticClass:"py-4"},[n("b-link",{attrs:{href:"https://github.com/tokencenter/bep20-generator/blob/v"+t.token.version+"/dist/"+t.contracts.token.contractName+".dist.sol",target:"_blank"}},[n("b-img",{attrs:{src:"https://img.shields.io/badge/version-"+t.token.version+"-blue"}})],1),t._v(" "),n("b-link",{attrs:{href:"https://github.com/tokencenter/bep20-generator/actions",target:"_blank"}},[n("b-img",{attrs:{src:"https://github.com/tokencenter/bep20-generator/workflows/CI/badge.svg?branch=master"}})],1),t._v(" "),n("b-link",{attrs:{href:"https://coveralls.io/github/tokencenter/bep20-generator?branch=master",target:"_blank"}},[n("b-img",{attrs:{src:"https://coveralls.io/repos/github/tokencenter/bep20-generator/badge.svg?branch=master"}})],1),t._v(" "),n("b-link",{attrs:{href:"https://github.com/tokencenter/bep20-generator/blob/master/LICENSE",target:"_blank"}},[n("b-img",{attrs:{src:"https://img.shields.io/github/license/tokencenter/bep20-generator.svg"}})],1)],1),t._v(" "),n("b-list-group-item",{staticClass:"py-4"},[t._v("\n                                    Contract Name: "),n("b",[t._v(t._s(t.contracts.token.contractName))])]),t._v(" "),n("b-list-group-item",{staticClass:"py-4"},[t._v("\n                                    Compiler: "),n("b",[t._v(t._s(t.contracts.token.compiler.version))])]),t._v(" "),n("b-list-group-item",{staticClass:"py-4"},[t._v("\n                                    Optimization: "),n("b",[t._v("Yes")])]),t._v(" "),n("b-list-group-item",{staticClass:"py-4"},[t._v("\n                                    Runs (Optimizer): "),n("b",[t._v("200")])]),t._v(" "),n("b-list-group-item",{staticClass:"py-4"},[t._v("\n                                    Control Flow:\n                                    "),n("b-link",{attrs:{href:t.controlFlow,target:"_blank"}},[n("b",[t._v(t._s(t.contracts.token.contractName)+".png")])])],1),t._v(" "),n("b-list-group-item",{staticClass:"py-4"},[t._v("\n                                    Inheritance Tree:\n                                    "),n("b-link",{attrs:{href:t.inheritanceTree,target:"_blank"}},[n("b",[t._v(t._s(t.contracts.token.contractName)+".png")])])],1),t._v(" "),n("b-list-group-item",{staticClass:"py-4"},[t._v("\n                                    UML:\n                                    "),n("b-link",{attrs:{href:t.uml,target:"_blank"}},[n("b",[t._v(t._s(t.contracts.token.contractName)+".svg")])])],1),t._v(" "),n("b-list-group-item",{staticClass:"py-4"},[n("div",{staticClass:"form-group"},[n("label",[t._v("ABI:")]),t._v(" "),n("b-form-textarea",{attrs:{readonly:"","no-resize":"",rows:"5"},model:{value:t.contracts.token.stringifiedAbi,callback:function(e){t.$set(t.contracts.token,"stringifiedAbi",e)},expression:"contracts.token.stringifiedAbi"}})],1)])],1)],1)],1),t._v(" "),n("b-col",{attrs:{lg:"4"}},[n("b-card",{staticClass:"mt-3",attrs:{"no-body":"","bg-variant":"light",header:"Token Features","header-bg-variant":"dark","header-text-variant":"white"}},[n("b-list-group",{attrs:{flush:""}},[n("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[n("div",[t._v("\n                                        BEP20 Compliant"),n("br"),t._v(" "),n("small",{staticClass:"text-muted"},[t._v("\n                                            Your Token will be compliant with the BEP20 Standard.\n                                        ")])]),t._v(" "),n("ui--checkmark",{attrs:{value:t.token.standard}})],1),t._v(" "),n("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[n("div",[t._v("\n                                        Verified Source Code"),n("br"),t._v(" "),n("small",{staticClass:"text-muted"},[t._v("\n                                            Your Token Source Code will be automatically verified on BscScan.\n                                        ")])]),t._v(" "),n("ui--checkmark",{attrs:{value:t.token.verified}})],1),t._v(" "),n("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[n("div",[t._v("\n                                        Detailed"),n("br"),t._v(" "),n("small",{staticClass:"text-muted"},[t._v("\n                                            Your Token will have name, symbol and decimal amount.\n                                        ")])]),t._v(" "),n("ui--checkmark",{attrs:{value:t.token.detailed}})],1),t._v(" "),n("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[n("div",[t._v("\n                                        Customizable Decimals"),n("br"),t._v(" "),n("small",{staticClass:"text-muted"},[t._v("\n                                            You can customize the decimal amount. 18 otherwise.\n                                        ")])]),t._v(" "),n("ui--checkmark",{attrs:{value:t.token.customizeDecimals}})],1),t._v(" "),n("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[n("div",[t._v("\n                                        Remove Copyright"),n("br"),t._v(" "),n("small",{staticClass:"text-muted"},[t._v("\n                                            Remove the link pointing to this page from your contract.\n                                        ")])]),t._v(" "),n("ui--checkmark",{attrs:{value:t.token.removeCopyright}})],1),t._v(" "),n("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[n("div",[t._v("\n                                        Supply Type"),n("br"),t._v(" "),n("small",{staticClass:"text-muted"},[t._v("\n                                            Choose between 100k, Fixed, Unlimited or Capped.\n                                        ")])]),t._v(" "),n("b-badge",{attrs:{variant:"Capped"===t.token.supplyType?"success":"Unlimited"===t.token.supplyType?"info":"Fixed"===t.token.supplyType?"warning":"danger"}},[t._v("\n                                        "+t._s(t.token.supplyType)+"\n                                    ")])],1),t._v(" "),n("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[n("div",[t._v("\n                                        Accesss Type"),n("br"),t._v(" "),n("small",{staticClass:"text-muted"},[t._v("\n                                            Choose between None, Ownable or Role Based.\n                                        ")])]),t._v(" "),n("b-badge",{attrs:{variant:"Role Based"===t.token.accessType?"success":"Ownable"===t.token.accessType?"info":"warning"}},[t._v("\n                                        "+t._s(t.token.accessType)+"\n                                    ")])],1),t._v(" "),n("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[n("div",[t._v("\n                                        Burnable"),n("br"),t._v(" "),n("small",{staticClass:"text-muted"},[t._v("\n                                            Your Token can be burnt.\n                                        ")])]),t._v(" "),n("ui--checkmark",{attrs:{value:t.token.burnable}})],1),t._v(" "),n("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[n("div",[t._v("\n                                        Mintable"),n("br"),t._v(" "),n("small",{staticClass:"text-muted"},[t._v("\n                                            You will be able to generate tokens by minting them.\n                                        ")])]),t._v(" "),n("ui--checkmark",{attrs:{value:t.token.mintable}})],1),t._v(" "),n("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[n("div",[t._v("\n                                        Operable"),n("br"),t._v(" "),n("small",{staticClass:"text-muted"},[t._v("\n                                            The Operable Token is a BEP20 compatible Token that can make a callback on\n                                            the receiver contract. Operable Token is derived by ERC1363.\n                                        ")])]),t._v(" "),n("ui--checkmark",{attrs:{value:t.token.operable}})],1),t._v(" "),n("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[n("div",[t._v("\n                                        Token Recover"),n("br"),t._v(" "),n("small",{staticClass:"text-muted"},[t._v("\n                                            It allows the contract owner to recover any BEP20 Tether USDT sent into the\n                                            contract for error.\n                                        ")])]),t._v(" "),n("ui--checkmark",{attrs:{value:t.token.tokenRecover}})],1),t._v(" "),n("b-list-group-item",{staticClass:"justify-content-between align-items-center text-center py-3",attrs:{variant:"warning",to:{path:"/create-token/",query:{tokenType:t.token.name}}}},[t._v("\n                                    Create\n                                ")])],1)],1)],1),t._v(" "),n("b-col",{attrs:{lg:"12"}},[n("b-card",{staticClass:"mt-3",attrs:{header:"Methods","header-bg-variant":"dark","header-text-variant":"white"}},t._l(t.contracts.token.abi,(function(e,a){return e.name?n("b-card",{key:a,staticClass:"mt-4",attrs:{"no-body":"","bg-variant":"light"}},[n("b-card-header",[n("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"stretched-link text-reset text-decoration-none",attrs:{href:"#method-"+a},on:{click:function(t){t.preventDefault()}}},[t._v("\n                                        "+t._s(e.name)+"\n                                    ")])]),t._v(" "),n("b-collapse",{staticClass:"p-4",attrs:{id:"method-"+a}},[n("b-card-sub-title",[t._v("\n                                        Type: "+t._s(e.type)+"\n                                    ")]),t._v(" "),e.stateMutability?n("b-card-text",[t._v("\n                                        State Mutability: "+t._s(e.stateMutability)+"\n                                    ")]):t._e(),t._v(" "),e.inputs&&e.inputs.length>0?n("b-card-text",[n("p",[t._v("Inputs:")]),t._v(" "),n("ul",t._l(e.inputs,(function(e,a){return n("li",{key:a},[n("b",[t._v(t._s(e.type))]),t._v(" "+t._s(e.name)+"\n                                            ")])})),0)]):t._e(),t._v(" "),e.outputs&&e.outputs.length>0?n("b-card-text",[n("p",[t._v("Outputs:")]),t._v(" "),n("ul",t._l(e.outputs,(function(e,a){return n("li",{key:a},[n("b",[t._v(t._s(e.type))]),t._v(" "+t._s(e.name)+"\n                                            ")])})),0)]):t._e()],1)],1):t._e()})),1)],1)],1)],1)],1)],1),t._v(" "),n("b-row",{staticClass:"bg-light text-dark mx-0"},[n("b-col",{staticClass:"mb-3 text-center",attrs:{lg:"10","offset-lg":"1"}},[n("h2",{staticClass:"pt-5 mb-4 font-weight-lighter text-dark"},[t._v("Ready to deploy your BEP20 Tether USDT?")]),t._v(" "),n("p",{staticClass:"font-weight-light"},[t._v("\n                Try building your BEP20 Tether USDT in less than a minute. You can try on Test Network before to go live.\n            ")]),t._v(" "),n("b-button",{staticClass:"my-5 py-3 px-5 text-uppercase",attrs:{to:"/create-token/",size:"lg",variant:"success"}},[t._v("\n                Create BEP20 Tether USDT\n            ")])],1)],1)],1)}),[],!1,null,null,null);e.default=c.exports}}]);
