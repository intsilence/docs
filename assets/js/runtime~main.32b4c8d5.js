!function(){"use strict";var e,f,a,c,d,b={},t={};function n(e){var f=t[e];if(void 0!==f)return f.exports;var a=t[e]={exports:{}};return b[e].call(a.exports,a,a.exports,n),a.exports}n.m=b,e=[],n.O=function(f,a,c,d){if(!a){var b=1/0;for(u=0;u<e.length;u++){a=e[u][0],c=e[u][1],d=e[u][2];for(var t=!0,r=0;r<a.length;r++)(!1&d||b>=d)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(t=!1,d<b&&(b=d));if(t){e.splice(u--,1);var o=c();void 0!==o&&(f=o)}}return f}d=d||0;for(var u=e.length;u>0&&e[u-1][2]>d;u--)e[u]=e[u-1];e[u]=[a,c,d]},n.n=function(e){var f=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(f,{a:f}),f},a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var d=Object.create(null);n.r(d);var b={};f=f||[null,a({}),a([]),a(a)];for(var t=2&c&&e;"object"==typeof t&&!~f.indexOf(t);t=a(t))Object.getOwnPropertyNames(t).forEach((function(f){b[f]=function(){return e[f]}}));return b.default=function(){return e},n.d(d,b),d},n.d=function(e,f){for(var a in f)n.o(f,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:f[a]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(f,a){return n.f[a](e,f),f}),[]))},n.u=function(e){return"assets/js/"+({53:"935f2afb",72:"f0989edc",98:"54fc379e",197:"abeb87c2",316:"79318c55",333:"4851a79e",361:"eb431618",373:"07145f9c",406:"fc8d1e75",472:"b6221690",492:"d9b7f075",539:"92302762",561:"e1544845",570:"87a33efa",679:"0f1fb33c",706:"f263ffd6",722:"786d22d5",759:"993caaee",798:"ab205afb",868:"6db5d1a2",893:"a39c37aa",954:"2117a46e",974:"a351d91d",1019:"3a95f3c9",1040:"e0ca784f",1103:"98ed44ca",1151:"8ffadbd0",1160:"cb5974a1",1200:"854f7886",1248:"4f41a408",1391:"7f8dcc03",1397:"ee40ae5c",1405:"e00723e0",1460:"3f19ff29",1528:"9f8f1719",1571:"6804366c",1672:"5a1d6e92",1696:"61ec1664",1721:"965e0f7e",1735:"fe122054",1736:"d2f1e944",1748:"cb3c46c9",1760:"77fa7f92",1782:"780a3379",1816:"269dc2d7",1834:"ddf58523",1856:"60587719",1861:"804a4eba",1865:"61014b6e",1894:"5389b6b3",1905:"e6610ace",2006:"8711c17c",2079:"7bd49ca3",2113:"fdb4ca2f",2246:"5ec5ad84",2277:"f543731c",2305:"d5fada13",2397:"98c0c0f4",2426:"5b9a6c82",2434:"4da25467",2521:"c03d6b72",2556:"fd09c6ea",2564:"bb23968c",2617:"67810b78",2651:"3fe85117",2746:"b4bb972e",2811:"e97a9bcc",2818:"8e15778c",2828:"4223dbae",2846:"cb33b72d",2935:"f5f9fc3b",2998:"96303c4e",3034:"6b50e287",3049:"8f110cf0",3061:"8436e6d0",3075:"1091fa18",3079:"1a18ef18",3249:"00dcc411",3254:"aa70a44f",3298:"62916d12",3359:"0e47be9c",3375:"0c691bfb",3378:"29f8d3bd",3421:"20b84aaf",3435:"58f8c4cc",3540:"427ebd7e",3551:"1d08614d",3590:"a48b24e1",3620:"f93f496e",3674:"f84dc53c",3713:"32cf6549",3748:"325bfa77",3768:"8140896f",3773:"0d4e0542",3874:"ef6398c7",3880:"357a5df9",3884:"85e50c6a",3921:"255e5546",3953:"46aa984f",4034:"283ad480",4189:"71ba7d30",4230:"73182117",4280:"7ffa924a",4315:"10bcdcb1",4349:"e9484bfe",4426:"c08a2307",4445:"41f58960",4449:"6ddc8bb6",4505:"daff3629",4512:"4a498064",4558:"12ccddbe",4609:"fd35d608",4620:"edfd7e5b",4621:"e4d53997",4637:"3aa3241c",4648:"4b9544c6",4665:"d4870dc8",4777:"342a5b40",4822:"bd0c41b6",4838:"2d34a582",4874:"2b4369f0",4938:"12faf5ab",4987:"3691e365",4991:"22a4fb83",5009:"a88d98a1",5042:"4a9d0c9b",5110:"cd37f35e",5202:"46d9669f",5214:"c0e3aee1",5232:"1a6ab749",5274:"b3369afe",5278:"f64ca9bb",5303:"9bee64de",5339:"59d3b468",5366:"2dbefea6",5396:"48104731",5403:"c6c9ae08",5411:"480b29d9",5416:"0f38ada3",5464:"02c04a91",5507:"08646e0c",5540:"3aad387e",5576:"4144a3f2",5621:"9cf3ea4d",5654:"40ec563d",5764:"602954ff",5889:"4879a78c",5907:"3a6a1e70",5967:"d6346bae",5977:"1fa2bff5",6024:"25daba0a",6060:"5e717b21",6065:"5955fc6a",6081:"2dba3098",6134:"3258ef15",6161:"a8c1f0c3",6185:"07378a5d",6187:"de827f6f",6195:"258b64b0",6299:"f9f4ed70",6381:"f22d49fc",6495:"a0a3f69a",6503:"93eda9c3",6540:"389cf9b6",6629:"823d4963",6641:"04983125",6665:"c8943f08",6686:"3bc3fd9c",6757:"df26bce7",6841:"83193822",6871:"b1ef1b75",6882:"8fd250a3",6897:"fd5bbe10",6945:"58a34323",6963:"04eb1e37",6992:"3e85ffb3",7015:"5d129107",7019:"f1184ac9",7037:"de0f9193",7056:"3fe6b277",7057:"10a12b15",7244:"ca34a2e6",7261:"52a6f77d",7399:"59dd4f08",7445:"077f402e",7492:"d032f616",7509:"4b6952f4",7554:"dcb660a1",7599:"60ada6b3",7650:"d80d0cb3",7715:"d12a62d9",7801:"2dba4458",7835:"8274d689",7843:"997805ff",7918:"17896441",7960:"bff28324",7973:"c2750337",7981:"25a64b3a",8031:"41bb7ef9",8065:"8b9c93a8",8070:"eb847969",8132:"5e5917cd",8150:"6b9ba9e5",8223:"0156fe75",8346:"85a5e713",8523:"8f5db588",8643:"8ba19c1d",8677:"395176a6",8694:"bf9a7948",8732:"35ce78ef",8737:"52b6893f",8832:"d844931b",8843:"054361e9",8934:"b571161f",8979:"5b9691a3",9041:"90f23e80",9048:"2e55472c",9052:"73af3b0f",9069:"068090ba",9137:"ea5d7cfc",9158:"090201b8",9159:"94279302",9168:"b9c06196",9206:"1a78d8a8",9220:"15e71439",9246:"b079cedf",9326:"b7eacd19",9334:"247783bb",9386:"d21df520",9398:"b56f06f0",9408:"96a85e44",9411:"6fdb3f66",9437:"559ea115",9457:"4baf5435",9501:"36d1fd9e",9514:"1be78505",9535:"7afce860",9620:"1731b6eb",9654:"224d3543",9655:"94bfde24",9663:"08ba70a8",9700:"6f2170eb",9712:"7981a0ab",9781:"7da724b8",9870:"4feec55f",9904:"04bb811d",9918:"10e36d3c",9999:"9716a407"}[e]||e)+"."+{53:"f5199f4e",72:"fce0d6db",98:"4a7cd0d8",197:"c0dbce7a",316:"831e626e",333:"a314f5b7",361:"a7c8ac9e",373:"30ab2361",406:"477d5bc6",472:"5431b1e2",492:"10ce84db",539:"bd0eb9ba",561:"364376c6",570:"255a5105",679:"0bec5e94",706:"eed05c6d",722:"95af39d1",759:"877a6b14",798:"f2a617ee",868:"336aa8e8",893:"c10a2bf9",954:"89d68b38",974:"e3f75db9",1019:"ccdb43cc",1040:"4c1bed37",1103:"5aa2ee0a",1151:"48643e39",1160:"495cdb05",1200:"01c80c7f",1248:"745cfead",1391:"ffe19b02",1397:"196a4119",1405:"1aaa56a4",1460:"9aceb1ed",1528:"e3b17d20",1571:"8fab45e4",1672:"52eee9b1",1696:"fd53f79c",1721:"63b8563b",1735:"f9204e44",1736:"d4a263d8",1748:"ec5629d8",1760:"daa14192",1782:"31d1320c",1816:"cfc43cfb",1834:"2fdfaf43",1856:"86e4aead",1861:"ab0b8cca",1865:"5c5ae5a2",1894:"c51eda09",1905:"bb8901c8",2006:"9c8993a4",2079:"08235927",2113:"1b09bb73",2246:"7d7d482a",2277:"2bfe7d7f",2305:"45a17eb2",2397:"ee739107",2426:"dff25680",2434:"5eeefe32",2521:"9e9b74f8",2556:"088d274c",2564:"6d6d751c",2617:"777d32e1",2651:"9716b346",2746:"9d1470bf",2811:"ba85028e",2818:"035677c0",2828:"3231699b",2846:"d757e10e",2935:"92ddb675",2998:"1aa062cb",3034:"ad2dffb9",3049:"66e0459b",3061:"96581ac1",3075:"76bf9b28",3079:"8711c496",3249:"a4f6ca65",3254:"3241f7a0",3298:"3a297ccf",3359:"0c345fc6",3375:"64bcf633",3378:"8ff0292d",3421:"9334b87d",3435:"9dfa9576",3540:"3d655e15",3551:"ee0a01f6",3590:"bc36e18f",3620:"0a9b3909",3674:"9f6fb079",3713:"beaa1a4e",3748:"646fa131",3768:"e59edeea",3773:"a839c3e5",3874:"667a743d",3880:"0b306532",3884:"2cdc090b",3921:"090332f3",3953:"d4df8604",4034:"f31144a2",4189:"76a20704",4230:"048ea244",4280:"73879898",4315:"02ae325d",4349:"f7b9e623",4426:"f6e76d31",4445:"2f46a806",4449:"c71ef477",4505:"347a66df",4512:"314bc262",4558:"6a11e7ef",4609:"5fad6d4c",4620:"2e4ee2bc",4621:"f37dc774",4637:"e1a1dd19",4648:"43c89193",4665:"13e2c247",4777:"dddebcf3",4822:"2bfb2e3e",4838:"86078d8b",4874:"4d214711",4938:"4c87bbab",4987:"5f3eff7a",4991:"0d6eb1bd",5009:"df45ae74",5042:"ceb4e084",5110:"f423250e",5202:"51976aaf",5214:"d86b07ca",5232:"27757c98",5274:"8a244b38",5278:"3679a937",5303:"4225779e",5339:"90f3aed7",5366:"1d0a4304",5396:"08a86bff",5403:"e3c5d389",5411:"3b270759",5416:"f9b7bf5d",5464:"f211dff8",5507:"55b38aa7",5540:"4cdb56af",5576:"7f75d9df",5621:"b533b190",5654:"b6ae2ecc",5764:"802cd840",5889:"3ae784c3",5907:"3e1e7e69",5967:"ba01af27",5977:"cbb425ac",6024:"342811d6",6060:"60f33436",6065:"900b3062",6081:"2bfbfe15",6134:"2bfc9c95",6161:"41825f00",6185:"0a2595fa",6187:"b459b202",6195:"71d82a8e",6299:"52d026a4",6381:"62c24504",6495:"3f44856f",6503:"d0d8caca",6540:"b124d29b",6629:"7d468967",6641:"a1172b43",6665:"0c24774a",6686:"614b544c",6757:"1e8457ab",6841:"4584fb6a",6871:"10d2b35c",6882:"075c1fd5",6897:"d4628ef7",6945:"81354701",6963:"ea8f5ba2",6992:"41d22138",7015:"1500f6ea",7019:"0e290ca7",7037:"4b315bab",7056:"92fbe2bc",7057:"f1e18c69",7244:"9efeb08c",7261:"4a89688b",7399:"6c086302",7445:"134e12de",7492:"331f9b50",7509:"976a0be8",7554:"ce66fa32",7599:"036a4fe3",7650:"8a1aced1",7715:"a14f063b",7801:"b1d47c7b",7835:"413694e0",7843:"89aea7f9",7918:"c72c405a",7960:"f0f539e4",7973:"50af1a4b",7981:"8d7c76dc",8031:"ff90f25c",8065:"a7175bf2",8070:"b1e0bfdb",8132:"ba7fde6b",8150:"644bc1ed",8223:"50057e8a",8346:"0e22414f",8523:"52c4b675",8643:"bf1129f0",8677:"aac651c9",8694:"90c9371a",8732:"804f15b1",8737:"7b331e30",8832:"4116256f",8843:"c3df4474",8934:"c7acc527",8979:"3591ddcd",9041:"4a1c627e",9048:"c071bb94",9052:"cf7e1f69",9069:"f59b0813",9137:"56ee3fe9",9158:"5b4c5b7a",9159:"8b5b14bd",9168:"1f5cbae6",9206:"5503a969",9220:"e5841344",9246:"b6fc2699",9326:"22c6f1a1",9334:"4c8ac4b5",9386:"5d65b932",9398:"8671e3f5",9408:"f098e9ab",9411:"c3533daa",9437:"9c73b928",9457:"8cca426f",9501:"467d8ec6",9514:"38ccb4c2",9535:"6c700d9c",9620:"96a7820e",9654:"8a3b691f",9655:"21dec77b",9663:"e1c7a565",9700:"78d6cda3",9712:"5bec8dc3",9781:"8cc97468",9870:"20100a08",9904:"d3b9fb55",9918:"4a1f5106",9957:"446b11cb",9999:"1a250501"}[e]+".js"},n.miniCssF=function(e){},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,f){return Object.prototype.hasOwnProperty.call(e,f)},c={},d="@logto/docs:",n.l=function(e,f,a,b){if(c[e])c[e].push(f);else{var t,r;if(void 0!==a)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==d+a){t=i;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,n.nc&&t.setAttribute("nonce",n.nc),t.setAttribute("data-webpack",d+a),t.src=e),c[e]=[f];var l=function(f,a){t.onerror=t.onload=null,clearTimeout(s);var d=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((function(e){return e(a)})),f)return f(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),r&&document.head.appendChild(t)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.gca=function(e){return e={17896441:"7918",48104731:"5396",60587719:"1856",73182117:"4230",83193822:"6841",92302762:"539",94279302:"9159","935f2afb":"53",f0989edc:"72","54fc379e":"98",abeb87c2:"197","79318c55":"316","4851a79e":"333",eb431618:"361","07145f9c":"373",fc8d1e75:"406",b6221690:"472",d9b7f075:"492",e1544845:"561","87a33efa":"570","0f1fb33c":"679",f263ffd6:"706","786d22d5":"722","993caaee":"759",ab205afb:"798","6db5d1a2":"868",a39c37aa:"893","2117a46e":"954",a351d91d:"974","3a95f3c9":"1019",e0ca784f:"1040","98ed44ca":"1103","8ffadbd0":"1151",cb5974a1:"1160","854f7886":"1200","4f41a408":"1248","7f8dcc03":"1391",ee40ae5c:"1397",e00723e0:"1405","3f19ff29":"1460","9f8f1719":"1528","6804366c":"1571","5a1d6e92":"1672","61ec1664":"1696","965e0f7e":"1721",fe122054:"1735",d2f1e944:"1736",cb3c46c9:"1748","77fa7f92":"1760","780a3379":"1782","269dc2d7":"1816",ddf58523:"1834","804a4eba":"1861","61014b6e":"1865","5389b6b3":"1894",e6610ace:"1905","8711c17c":"2006","7bd49ca3":"2079",fdb4ca2f:"2113","5ec5ad84":"2246",f543731c:"2277",d5fada13:"2305","98c0c0f4":"2397","5b9a6c82":"2426","4da25467":"2434",c03d6b72:"2521",fd09c6ea:"2556",bb23968c:"2564","67810b78":"2617","3fe85117":"2651",b4bb972e:"2746",e97a9bcc:"2811","8e15778c":"2818","4223dbae":"2828",cb33b72d:"2846",f5f9fc3b:"2935","96303c4e":"2998","6b50e287":"3034","8f110cf0":"3049","8436e6d0":"3061","1091fa18":"3075","1a18ef18":"3079","00dcc411":"3249",aa70a44f:"3254","62916d12":"3298","0e47be9c":"3359","0c691bfb":"3375","29f8d3bd":"3378","20b84aaf":"3421","58f8c4cc":"3435","427ebd7e":"3540","1d08614d":"3551",a48b24e1:"3590",f93f496e:"3620",f84dc53c:"3674","32cf6549":"3713","325bfa77":"3748","8140896f":"3768","0d4e0542":"3773",ef6398c7:"3874","357a5df9":"3880","85e50c6a":"3884","255e5546":"3921","46aa984f":"3953","283ad480":"4034","71ba7d30":"4189","7ffa924a":"4280","10bcdcb1":"4315",e9484bfe:"4349",c08a2307:"4426","41f58960":"4445","6ddc8bb6":"4449",daff3629:"4505","4a498064":"4512","12ccddbe":"4558",fd35d608:"4609",edfd7e5b:"4620",e4d53997:"4621","3aa3241c":"4637","4b9544c6":"4648",d4870dc8:"4665","342a5b40":"4777",bd0c41b6:"4822","2d34a582":"4838","2b4369f0":"4874","12faf5ab":"4938","3691e365":"4987","22a4fb83":"4991",a88d98a1:"5009","4a9d0c9b":"5042",cd37f35e:"5110","46d9669f":"5202",c0e3aee1:"5214","1a6ab749":"5232",b3369afe:"5274",f64ca9bb:"5278","9bee64de":"5303","59d3b468":"5339","2dbefea6":"5366",c6c9ae08:"5403","480b29d9":"5411","0f38ada3":"5416","02c04a91":"5464","08646e0c":"5507","3aad387e":"5540","4144a3f2":"5576","9cf3ea4d":"5621","40ec563d":"5654","602954ff":"5764","4879a78c":"5889","3a6a1e70":"5907",d6346bae:"5967","1fa2bff5":"5977","25daba0a":"6024","5e717b21":"6060","5955fc6a":"6065","2dba3098":"6081","3258ef15":"6134",a8c1f0c3:"6161","07378a5d":"6185",de827f6f:"6187","258b64b0":"6195",f9f4ed70:"6299",f22d49fc:"6381",a0a3f69a:"6495","93eda9c3":"6503","389cf9b6":"6540","823d4963":"6629","04983125":"6641",c8943f08:"6665","3bc3fd9c":"6686",df26bce7:"6757",b1ef1b75:"6871","8fd250a3":"6882",fd5bbe10:"6897","58a34323":"6945","04eb1e37":"6963","3e85ffb3":"6992","5d129107":"7015",f1184ac9:"7019",de0f9193:"7037","3fe6b277":"7056","10a12b15":"7057",ca34a2e6:"7244","52a6f77d":"7261","59dd4f08":"7399","077f402e":"7445",d032f616:"7492","4b6952f4":"7509",dcb660a1:"7554","60ada6b3":"7599",d80d0cb3:"7650",d12a62d9:"7715","2dba4458":"7801","8274d689":"7835","997805ff":"7843",bff28324:"7960",c2750337:"7973","25a64b3a":"7981","41bb7ef9":"8031","8b9c93a8":"8065",eb847969:"8070","5e5917cd":"8132","6b9ba9e5":"8150","0156fe75":"8223","85a5e713":"8346","8f5db588":"8523","8ba19c1d":"8643","395176a6":"8677",bf9a7948:"8694","35ce78ef":"8732","52b6893f":"8737",d844931b:"8832","054361e9":"8843",b571161f:"8934","5b9691a3":"8979","90f23e80":"9041","2e55472c":"9048","73af3b0f":"9052","068090ba":"9069",ea5d7cfc:"9137","090201b8":"9158",b9c06196:"9168","1a78d8a8":"9206","15e71439":"9220",b079cedf:"9246",b7eacd19:"9326","247783bb":"9334",d21df520:"9386",b56f06f0:"9398","96a85e44":"9408","6fdb3f66":"9411","559ea115":"9437","4baf5435":"9457","36d1fd9e":"9501","1be78505":"9514","7afce860":"9535","1731b6eb":"9620","224d3543":"9654","94bfde24":"9655","08ba70a8":"9663","6f2170eb":"9700","7981a0ab":"9712","7da724b8":"9781","4feec55f":"9870","04bb811d":"9904","10e36d3c":"9918","9716a407":"9999"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,532:0};n.f.j=function(f,a){var c=n.o(e,f)?e[f]:void 0;if(0!==c)if(c)a.push(c[2]);else if(/^(1303|532)$/.test(f))e[f]=0;else{var d=new Promise((function(a,d){c=e[f]=[a,d]}));a.push(c[2]=d);var b=n.p+n.u(f),t=new Error;n.l(b,(function(a){if(n.o(e,f)&&(0!==(c=e[f])&&(e[f]=void 0),c)){var d=a&&("load"===a.type?"missing":a.type),b=a&&a.target&&a.target.src;t.message="Loading chunk "+f+" failed.\n("+d+": "+b+")",t.name="ChunkLoadError",t.type=d,t.request=b,c[1](t)}}),"chunk-"+f,f)}},n.O.j=function(f){return 0===e[f]};var f=function(f,a){var c,d,b=a[0],t=a[1],r=a[2],o=0;if(b.some((function(f){return 0!==e[f]}))){for(c in t)n.o(t,c)&&(n.m[c]=t[c]);if(r)var u=r(n)}for(f&&f(a);o<b.length;o++)d=b[o],n.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return n.O(u)},a=self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[];a.forEach(f.bind(null,0)),a.push=f.bind(null,a.push.bind(a))}()}();