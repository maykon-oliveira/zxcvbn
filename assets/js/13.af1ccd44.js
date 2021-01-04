(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{235:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migration"}},[t._v("#")]),t._v(" Migration")]),t._v(" "),a("h2",{attrs:{id:"zxcvbn-4-4-2-to-zxcvbn-ts-0-1-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zxcvbn-4-4-2-to-zxcvbn-ts-0-1-0"}},[t._v("#")]),t._v(" "),a("code",[t._v("zxcvbn 4.4.2")]),t._v(" to "),a("code",[t._v("zxcvbn-ts 0.1.0")])]),t._v(" "),a("ul",[a("li",[t._v("Everything is written in TypeScript, this should make it easier for other people to contribute and it will generate types that everybody can use.")]),t._v(" "),a("li",[t._v("There are now some more options. This is how it changed")])]),t._v(" "),a("p",[t._v("Old")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" zxcvbn "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zxcvbn'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'somePassword'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zxcvbn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("New")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" zxcvbn "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@zxcvbn-ts/core'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" zxcvbnCommonPackage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@zxcvbn-ts/language-common'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" zxcvbnEnPackage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@zxcvbn-ts/language-en'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'somePassword'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  translations"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" zxcvbnEnPackage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("translations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  dictionary"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("zxcvbnCommonPackage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dictionary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("zxcvbnEnPackage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dictionary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zxcvbn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("It is a lot more but this is the configuration to improve the handling. This way you could add some more dictionaries.\nFor example if you are from Germany you could also include the german package to improve efficiency.\nYou can even generate your own dictionaries if you want and include it.")]),t._v(" "),a("ul",[a("li",[t._v("the userInputs options from before is now just a dictionary in the dictionary options with some special sanitizing.\nIf you are using it you need to move the parameter into the options like this:")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" zxcvbn "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@zxcvbn-ts/core'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'somePassword'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  dictionary"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    userInputs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'someEmail@email.de'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zxcvbn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("there are a few things that will slightly change the password crack estimation:\n"),a("ul",[a("li",[t._v("the password list is newly generated this means that some passwords are at a different rank.")]),t._v(" "),a("li",[t._v("dates should be better recognized. At least the password list has more dates in them than before")]),t._v(" "),a("li",[t._v("Passwords as single tokens are now consistent rewarded for capitalization like in "),a("a",{attrs:{href:"https://github.com/dropbox/zxcvbn/issues/232",target:"_blank",rel:"noopener noreferrer"}},[t._v("#232"),a("OutboundLink")],1),t._v(" described.")]),t._v(" "),a("li",[t._v("there are new keyboard layouts.")])])]),t._v(" "),a("li",[t._v("the german language package should not be used without the english and common language package because it is not matured yet")])])])}),[],!1,null,null,null);s.default=e.exports}}]);