const e=()=>{const e=new Date;return{time:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),date:e.toLocaleDateString([],{}),monthNum:e.getMonth()+1,monthNumLZ:String(e.getMonth()+1).padStart(2,0),monthNameShort:e.toLocaleDateString([],{month:"short"}),monthNameLong:e.toLocaleDateString([],{month:"long"}),dayNum:e.getDate(),dayNumLZ:String(e.getDate()).padStart(2,0),dayNameShort:e.toLocaleDateString([],{weekday:"short"}),dayNameLong:e.toLocaleDateString([],{weekday:"long"}),hours12:e.getHours()>12?e.getHours()-12:e.getHours(),hours12LZ:String(e.getHours()>12?e.getHours()-12:e.getHours()).padStart(2,0),hours24:e.getHours(),hours24LZ:String(e.getHours()).padStart(2,0),minutes:e.getMinutes(),minutesLZ:String(e.getMinutes()).padStart(2,0),year2d:String(e.getFullYear()).substr(-2),year4d:e.getFullYear(),AMPM:e.getHours()>=12?"PM":"AM",ampm:e.getHours()>=12?"pm":"am"}};var t={},o=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,n="[^\\s]+",r=/\[([^]*?)\]/gm,a=function(){};function i(e,t){for(var o=[],n=0,r=e.length;n<r;n++)o.push(e[n].substr(0,t));return o}function s(e){return function(t,o,n){var r=n[e].indexOf(o.charAt(0).toUpperCase()+o.substr(1).toLowerCase());~r&&(t.month=r)}}function c(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}var l=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],d=["January","February","March","April","May","June","July","August","September","October","November","December"],u=i(d,3),h=i(l,3);t.i18n={dayNamesShort:h,dayNames:l,monthNamesShort:u,monthNames:d,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10)*e%10]}};var m={D:function(e){return e.getDate()},DD:function(e){return c(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return e.getDay()},dd:function(e){return c(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return e.getMonth()+1},MM:function(e){return c(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return c(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return c(e.getFullYear(),4)},h:function(e){return e.getHours()%12||12},hh:function(e){return c(e.getHours()%12||12)},H:function(e){return e.getHours()},HH:function(e){return c(e.getHours())},m:function(e){return e.getMinutes()},mm:function(e){return c(e.getMinutes())},s:function(e){return e.getSeconds()},ss:function(e){return c(e.getSeconds())},S:function(e){return Math.round(e.getMilliseconds()/100)},SS:function(e){return c(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return c(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+c(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)}},p={D:["\\d\\d?",function(e,t){e.day=t}],Do:["\\d\\d?"+n,function(e,t){e.day=parseInt(t,10)}],M:["\\d\\d?",function(e,t){e.month=t-1}],YY:["\\d\\d?",function(e,t){var o=+(""+(new Date).getFullYear()).substr(0,2);e.year=""+(t>68?o-1:o)+t}],h:["\\d\\d?",function(e,t){e.hour=t}],m:["\\d\\d?",function(e,t){e.minute=t}],s:["\\d\\d?",function(e,t){e.second=t}],YYYY:["\\d{4}",function(e,t){e.year=t}],S:["\\d",function(e,t){e.millisecond=100*t}],SS:["\\d{2}",function(e,t){e.millisecond=10*t}],SSS:["\\d{3}",function(e,t){e.millisecond=t}],d:["\\d\\d?",a],ddd:[n,a],MMM:[n,s("monthNamesShort")],MMMM:[n,s("monthNames")],a:[n,function(e,t,o){var n=t.toLowerCase();n===o.amPm[0]?e.isPm=!1:n===o.amPm[1]&&(e.isPm=!0)}],ZZ:["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",function(e,t){var o,n=(t+"").match(/([+-]|\d\d)/gi);n&&(o=60*n[1]+parseInt(n[2],10),e.timezoneOffset="+"===n[0]?o:-o)}]};p.dd=p.d,p.dddd=p.ddd,p.DD=p.D,p.mm=p.m,p.hh=p.H=p.HH=p.h,p.MM=p.M,p.ss=p.s,p.A=p.a,t.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},t.format=function(e,n,a){var i=a||t.i18n;if("number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date in fecha.format");n=t.masks[n]||n||t.masks.default;var s=[];return(n=(n=n.replace(r,(function(e,t){return s.push(t),"@@@"}))).replace(o,(function(t){return t in m?m[t](e,i):t.slice(1,t.length-1)}))).replace(/@@@/g,(function(){return s.shift()}))},t.parse=function(e,n,a){var i=a||t.i18n;if("string"!=typeof n)throw new Error("Invalid format in fecha.parse");if(n=t.masks[n]||n,e.length>1e3)return null;var s={},c=[],l=[];n=n.replace(r,(function(e,t){return l.push(t),"@@@"}));var d,u=(d=n,d.replace(/[|\\{()[^$+*?.-]/g,"\\$&")).replace(o,(function(e){if(p[e]){var t=p[e];return c.push(t[1]),"("+t[0]+")"}return e}));u=u.replace(/@@@/g,(function(){return l.shift()}));var h=e.match(new RegExp(u,"i"));if(!h)return null;for(var m=1;m<h.length;m++)c[m-1](s,h[m],i);var b,y=new Date;return!0===s.isPm&&null!=s.hour&&12!=+s.hour?s.hour=+s.hour+12:!1===s.isPm&&12==+s.hour&&(s.hour=0),null!=s.timezoneOffset?(s.minute=+(s.minute||0)-+s.timezoneOffset,b=new Date(Date.UTC(s.year||y.getFullYear(),s.month||0,s.day||1,s.hour||0,s.minute||0,s.second||0,s.millisecond||0))):b=new Date(s.year||y.getFullYear(),s.month||0,s.day||1,s.hour||0,s.minute||0,s.second||0,s.millisecond||0),b};(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}})(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}();const b=document.body.querySelector("home-assistant").hass,y=function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null}(),f=function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root"))return e.shadowRoot}(),_={};_.main=document.querySelector("home-assistant").shadowRoot.querySelector("home-assistant-main"),_.tabs=Array.from((f.querySelector("paper-tabs")||f).querySelectorAll("paper-tab")),_.activeTab=f.querySelector("paper-tab.iron-selected"),_.menu=f.querySelector("ha-menu-button"),_.menuDot=_.menu.shadowRoot.querySelector(".dot"),_.options=f.querySelector("paper-menu-button"),_.voice=f.querySelector("ha-start-voice-button")||f.querySelector('[icon="hass:microphone"]'),_.drawer=_.main.shadowRoot.querySelector("#drawer"),_.sidebar={},_.sidebar.main=_.main.shadowRoot.querySelector("ha-sidebar"),_.sidebar.menu=_.sidebar.main.shadowRoot.querySelector(".menu"),_.sidebar.listbox=_.sidebar.main.shadowRoot.querySelector("paper-listbox"),_.sidebar.divider=_.sidebar.main.shadowRoot.querySelector("div.divider"),_.appHeader=f.querySelector("app-header"),_.appLayout=f.querySelector("ha-app-layout"),_.partialPanelResolver=_.main.shadowRoot.querySelector("partial-panel-resolver");const w=e=>{let t;const{views:o}=y.config;return isNaN(e)?o.forEach(n=>{n.title!==e&&n.path!==e||(t=o.indexOf(n))}):t=parseInt(e,10),t},g=e=>{const t=[],o=(e,t)=>new Array(t-e+1).fill(void 0).map((t,o)=>o+e);if(e.includes("to")){const n=e.split("to");parseInt(n[1])>parseInt(n[0])?t.push(o(parseInt(n[0]),parseInt(n[1]))):t.push(o(parseInt(n[1]),parseInt(n[0])))}return t.flat()},S=e=>{let t=[];e="string"==typeof e?e.replace(/\s+/g,"").split(","):e;for(const o in e)"string"==typeof e[o]&&e[o].includes("to")?t.push(g(e[o])):t.push(e[o]);t=t.flat();for(const e in t)isNaN(t[e])?t[e]=w(t[e]):t[e]=parseInt(t[e]);return t.sort((e,t)=>e-t)},v=e=>{let t={},o=0;return e.exceptions&&e.exceptions.forEach(e=>{const n=(e=>{const t={user:b.user.name,user_agent:navigator.userAgent};let o=0;for(const n in e)if("user"==n&&e[n].includes(","))e[n].split(/[ ,]+/).forEach(e=>{t[n]==e&&o++});else{if(!(t[n]==e[n]||"query_string"==n&&window.location.search.includes(e[n])||"user_agent"==n&&t[n].includes(e[n])||"media_query"==n&&window.matchMedia(e[n]).matches))return 0;o++}return o})(e.conditions);n>o&&(o=n,t=e.config)}),t.hide_tabs&&e.show_tabs&&t.hide_tabs.length&&e.show_tabs.length?delete e.show_tabs:t.show_tabs&&e.hide_tabs&&t.show_tabs.length&&e.hide_tabs.length&&delete e.hide_tabs,{...e,...t}},q=(()=>{if(f.querySelector("cch-header"))return;const e={};e.tabContainer=document.createElement("paper-tabs"),e.tabContainer.setAttribute("scrollable",""),e.tabContainer.setAttribute("dir","ltr"),e.tabContainer.style.width="100%",e.tabContainer.style.marginLeft="0",_.tabs.forEach(t=>{const o=_.tabs.indexOf(t),n=t.cloneNode(!0),r=n.querySelector("ha-icon");r&&r.setAttribute("icon",y.config.views[o].icon),n.addEventListener("click",()=>{_.tabs[o].dispatchEvent(new MouseEvent("click",{bubbles:!1,cancelable:!0}))}),e.tabContainer.appendChild(n)}),e.tabs=e.tabContainer.querySelectorAll("paper-tab");const t=(t,o)=>{if("options"===t){e[t]=_[t].cloneNode(!0),e[t].removeAttribute("horizontal-offset"),e[t].querySelector("paper-icon-button").style.height="48px";const o=Array.from(e[t].querySelectorAll("paper-item"));o.forEach(e=>{const n=o.indexOf(e);e.addEventListener("click",()=>{_[t].querySelectorAll("paper-item")[n].dispatchEvent(new MouseEvent("click",{bubbles:!1,cancelable:!0}))})})}else{if(!_[t])return;e[t]=document.createElement("paper-icon-button"),e[t].addEventListener("click",()=>{(_[t].shadowRoot.querySelector("paper-icon-button")||_[t]).dispatchEvent(new MouseEvent("click",{bubbles:!1,cancelable:!0}))})}e[t].setAttribute("icon",o),e[t].setAttribute("buttonElem",t),e[t].style.flexShrink="0",e[t].style.height="48px"};t("menu","mdi:menu"),t("voice","mdi:microphone"),t("options","mdi:dots-vertical");const o=document.createElement("cch-stack"),n=document.createElement("div");return n.setAttribute("id","contentContainer"),e.container=document.createElement("cch-header"),e.menu&&e.container.appendChild(e.menu),e.container.appendChild(o),e.stack=e.container.querySelector("cch-stack"),e.stack.appendChild(n),e.stack.appendChild(e.tabContainer),e.voice&&"hidden"!=e.voice.style.visibility&&e.container.appendChild(e.voice),e.options&&e.container.appendChild(e.options),_.appLayout.appendChild(e.container),e})(),M=(e,t,o)=>{const n=(e,t)=>{let o;const n=document.querySelector("home-assistant").hass;return o="raw_editor"===t?n.localize("ui.panel.lovelace.editor.menu.raw_editor"):"unused_entities"==t?n.localize("ui.panel.lovelace.unused_entities.title"):n.localize(`ui.panel.lovelace.menu.${t}`),e.innerHTML.includes(o)||e.getAttribute("aria-label")==o};(o?document.querySelector("home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot.querySelector("ha-panel-lovelace").shadowRoot.querySelector("hui-root").shadowRoot.querySelector("app-toolbar > paper-menu-button"):t.options).querySelector("paper-listbox").querySelectorAll("paper-item").forEach(t=>{e.hide_help&&n(t,"help")||e.hide_unused&&n(t,"unused_entities")||e.hide_refresh&&n(t,"refresh")||e.hide_config&&n(t,"configure_ui")||e.hide_raw&&n(t,"raw_editor")?t.style.display="none":t.style.display=""})},x=e=>{if(window.location.href.includes("disable_ch"))return;let t=document.createElement("style");t.setAttribute("id","cch_header_style"),t.innerHTML+="\n        #drawer {\n          display: none;\n        }\n      ",e||(t.innerHTML+="\n        cch-header {\n          display: none;\n        }\n        app-header {\n          display: none;\n        }\n        hui-view, hui-panel-view {\n          min-height: 100vh;\n        }\n      ");const o=f.querySelector("#cch_header_style");o&&o.innerText==t.innerHTML||(f.appendChild(t),o&&o.remove()),_.drawer.style.display="none",_.sidebar.main.shadowRoot.querySelector("#cch_sidebar_style")||((t=document.createElement("style")).setAttribute("id","cch_sidebar_style"),t.innerHTML=":host(:not([expanded])) {width: 0px !important;}",_.sidebar.main.shadowRoot.appendChild(t)),_.main.shadowRoot.querySelector("#cch_sidebar_style")||((t=document.createElement("style")).setAttribute("id","cch_sidebar_style"),t.innerHTML=":host {--app-drawer-width: 0px !important;}",_.main.shadowRoot.appendChild(t)),window.dispatchEvent(new Event("resize"))},R=()=>{_.drawer.style.display="";let e=_.main.shadowRoot.querySelector("#cch_sidebar_style");e&&e.remove(),(e=_.sidebar.main.shadowRoot.querySelector("#cch_sidebar_style"))&&e.remove(),_.drawer.style.display=""},H=e=>{if(window.location.href.includes("disable_ch")&&(e.disabled_mode=!0),window.customHeaderConfig=e,e.disabled_mode)return window.customHeaderDisabled=!0,R(),q.container&&(q.container.style.visibility="hidden"),f.querySelector("#cch_header_style")&&f.querySelector("#cch_header_style").remove(),f.querySelector("#cch_view_style")&&f.querySelector("#cch_view_style").remove(),q.tabContainer.shadowRoot.querySelector("#cch_chevron")&&q.tabContainer.shadowRoot.querySelector("#cch_chevron").remove(),q.menu.style.display="none",f.querySelector("ha-menu-button").style.display="",_.sidebar.main.shadowRoot.querySelector(".menu").style="",_.sidebar.main.shadowRoot.querySelector("paper-listbox").style="",_.sidebar.main.shadowRoot.querySelector("div.divider").style="",void window.dispatchEvent(new Event("resize"));if(window.customHeaderDisabled=!1,M(e,q,!1),q.menu.style.display="",q.container&&(q.container.style.visibility="visible"),q.tabs.length||(e.compact_mode=!1),e.disable_sidebar?x(!0):e.disable_sidebar||e.kiosk_mode||(R(),_.sidebar.main.shadowRoot.querySelector(".menu").style="height:49px;",_.sidebar.main.shadowRoot.querySelector("paper-listbox").style="height:calc(100% - 155px);",_.sidebar.main.shadowRoot.querySelector("div.divider").style="margin-bottom: -10px;"),(e=>{let t=48;e.compact_mode||("rtl"==e.button_direction?(q.container.querySelector("#contentContainer").dir="ltr",q.container.querySelector("#contentContainer").style.textAlign="right"):(q.container.querySelector("#contentContainer").style.textAlign="",q.container.querySelector("#contentContainer").dir=""),q.container.querySelector("#contentContainer").innerHTML=e.header_text,t=q.tabs.length?96:48);let o=document.createElement("style");o.setAttribute("id","cch_header_style"),o.innerHTML=`\n      cch-header {\n        padding-left: 10px;\n        padding-right: 10px;\n        width: calc(100% - 20px);\n        display:flex;\n        justify-content: center;\n        font: 400 20px Roboto, sans-serif;\n        background: ${e.background||"var(--primary-color)"};\n        color: ${e.elements_color||"var(--text-primary-color)"};\n        margin-top: 4px;\n        margin-bottom: 0px;\n        margin-top: ${e.footer_mode?"4px;":"0px"};\n        ${e.footer_mode?"position: sticky; bottom: 0px;":"position: sticky; top: 0px;"}\n      }\n      cch-stack {\n        flex-direction: column;\n        width: 100%;\n        margin-left: 9px;\n        margin-right: 9px;\n      }\n      #contentContainer {\n        padding: 12px 6px 12px 6px;\n        color: var(--text-primary-color);\n        ${e.compact_mode?"display: none;":""}\n      }\n      app-header {\n        display: none;\n      }\n      paper-tab.iron-selected {\n        ${e.active_tab_color?`color: ${e.active_tab_color};`:""}\n      }\n      paper-listbox {\n        position: fixed;\n        width: fit-content;\n        ${"rtl"==e.button_direction?"left: 0":"right: 0"};\n        ${e.footer_mode?"bottom: 0":"top: 0"};\n      }\n      [buttonElem="menu"] {\n        ${e.menu_color?`color: ${e.menu_color};`:""}\n        ${e.menu_hide?"display: none;":""}\n      }\n      [buttonElem="options"] {\n        ${e.options_color?`color: ${e.options_color};`:""}\n        ${e.options_hide?"display: none;":""}\n      }\n      [buttonElem="voice"] {\n        ${e.voice_color?`color: ${e.voice_color};`:""}\n        ${e.voice_hide?"display: none;":""}\n      }\n      paper-tab {\n        ${e.all_tabs_color?`color: ${e.all_tabs_color};`:""}\n      }\n      paper-tabs {\n        ${e.indicator_color?`--paper-tabs-selection-bar-color: ${e.indicator_color} !important;`:""}\n      }\n    `,e.tabs_color&&Object.keys(e.tabs_color).forEach(t=>{o.innerHTML+=`\n      paper-tab:nth-child(${w(t)+1}) {\n        color: ${e.tabs_color[t]};\n      }\n    `}),e.hide_tabs&&e.hide_tabs.forEach(e=>{o.innerHTML+=`\n      paper-tab:nth-child(${w(e)+1}) {\n        display: none;\n      }\n    `});let n=f.querySelector("#cch_header_style");f.appendChild(o),n&&n.remove(),(o=document.createElement("style")).setAttribute("id","cch_view_style"),o.innerHTML=`\n        hui-view, hui-panel-view {\n          min-height: calc(100vh - ${t}px);\n          padding-top: 2px;\n          ${e.footer_mode?`padding-bottom: ${t}px;`:""}\n          ${e.footer_mode?`margin-bottom: -${t+4}px;`:""}\n        }\n        hui-panel-view {\n          padding-top: 0px;\n        }\n        #view {\n          ${e.footer_mode?`min-height: calc(100vh - ${t+4}px) !important;`:""}\n        }\n      `,(n=f.querySelector("#cch_view_style"))&&o.innerHTML==n.innerHTML||(f.appendChild(o),n&&n.remove()),(o=document.createElement("style")).setAttribute("id","cch_chevron"),o.innerHTML='\n      .not-visible[icon*="chevron"] {\n        display:none;\n      }\n    ',n=q.tabContainer.shadowRoot.querySelector("#cch_chevron"),q.tabContainer.shadowRoot.appendChild(o),n&&n.remove()})(e),e.chevrons?q.tabContainer.hideScrollButtons=!1:q.tabContainer.hideScrollButtons=!0,e.indicator_top?q.tabContainer.alignBottom=!0:q.tabContainer.alignBottom=!1,e.footer_mode?q.options.setAttribute("vertical-align","bottom"):q.options.removeAttribute("vertical-align"),e.footer_mode?q.container.removeAttribute("slot"):q.container.setAttribute("slot","header"),q.tabContainer.dir=e.tab_direction,q.container.dir=e.button_direction,e.tab_icons)for(const t in e.tab_icons){const o=w(t),n=q.tabs[o].querySelector("ha-icon");e.tab_icons[t]?n.icon=e.tab_icons[t]:n.icon=y.config.views[o].icon}if(e.button_icons)for(const t in e.button_icons)e.button_icons[t]?"options"===t?q[t].querySelector("paper-icon-button").icon=e.button_icons[t]:q[t].icon=e.button_icons[t]:"menu"===t?q.menu.icon="mdi:menu":"voice"===t?q.voice.icon="mdi:microphone":"options"===t&&(q[t].querySelector("paper-icon-button").icon="mdi:dots-vertical");if(e.button_text)for(const t in e.button_text){const o=document.createElement("p");o.className="buttonText";const n="options"===t?q[t].querySelector("paper-icon-button"):q[t];e.button_text[t]||!n.shadowRoot.querySelector(".buttonText")?e.button_text[t]&&(n.shadowRoot.querySelector(".buttonText")?n.shadowRoot.querySelector(".buttonText").innerText=e.button_text[t]:(o.innerText=e.button_text[t],n.shadowRoot.appendChild(o)),"rtl"==e.button_direction?n.shadowRoot.querySelector(".buttonText").dir="ltr":n.shadowRoot.querySelector(".buttonText").dir="",n.shadowRoot.querySelector("iron-icon").style.display="none",n.style.width="auto",n.shadowRoot.querySelector(".buttonText").style.margin="5.5px 0px 0px 0px"):(n.shadowRoot.querySelector(".buttonText").remove(),n.shadowRoot.querySelector("iron-icon").style.display="",n.style.width="")}const t=null!=e.default_tab?w(e.default_tab):null;if(e.hidden_tab_redirect&&q.tabs.length){const o=q.tabContainer.indexOf(q.tabContainer.querySelector("paper-tab.iron-selected"));if(e.hide_tabs.includes(o)&&e.hide_tabs.length!=q.tabs.length)if(t&&!e.hide_tabs.includes(w(t)))"none"!=getComputedStyle(q.tabs[t]).display&&q.tabs[t].click();else for(const e of q.tabs)if("none"!=getComputedStyle(e).display){e.click();break}}null!=t&&!window.customHeaderDefaultClicked&&q.tabs[t]&&"none"!=getComputedStyle(q.tabs[t]).display&&q.tabs[t].click(),window.customHeaderDefaultClicked=!0,q.tabs.length&&_.activeTab?q.tabs[_.tabs.indexOf(_.activeTab)].click():q.tabContainer.style.display="none",((e,t)=>{const o=()=>{const t=document.createElement("div");return t.className="dot",t.style.cssText=`\n        pointer-events: none;\n        position: relative;\n        background-color: ${e.notification_dot_color};\n        width: 12px;\n        height: 12px;\n        top: -28px;\n        right: ${"rtl"==e.button_direction?"":"-"}16px;\n        border-radius: 50%;\n    `,t},n=()=>{e.disable_sidebar||window.customHeaderDisabled||("hidden"===_.menu.style.visibility?t.menu.style.display="none":t.menu.style.display="initial")},r=e=>{const t=document.querySelector("home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot.querySelector("ha-panel-lovelace").shadowRoot.querySelector("hui-root");e.forEach(({addedNodes:e,removedNodes:n})=>{if(e)for(const n of e)"dot"!==n.className||t.shadowRoot.querySelector('[buttonElem="menu"]').shadowRoot.querySelector(".dot")||t.shadowRoot.querySelector('[buttonElem="menu"]').shadowRoot.appendChild(o());if(n)for(const e of n)"dot"===e.className&&t.shadowRoot.querySelector('[buttonElem="menu"]').shadowRoot.querySelector(".dot")&&t.shadowRoot.querySelector('[buttonElem="menu"]').shadowRoot.querySelector(".dot").remove()})};if(!window.customHeaderMenuObserver){window.customHeaderMenuObserver=!0,new MutationObserver(r).observe(_.menu.shadowRoot,{childList:!0}),new MutationObserver(n).observe(_.menu,{attributes:!0,attributeFilter:["style"]})}n();const a=t.menu.shadowRoot.querySelector(".dot");a&&a.style.cssText!=o().style.cssText&&a.remove(),!t.menu.shadowRoot.querySelector(".dot")&&_.menu.shadowRoot.querySelector(".dot")&&t.menu.shadowRoot.appendChild(o())})(e,q),window.dispatchEvent(new Event("resize"))},D={footer_mode:!1,kiosk_mode:!1,disabled_mode:!1,compact_mode:!1,disable_sidebar:!1,background:"var(--primary-color)",elements_color:"var(--text-primary-color)",menu_color:"",voice_color:"",options_color:"",all_tabs_color:"",tabs_color:[],tab_direction:"ltr",button_direction:"ltr",chevrons:!0,indicator_top:!1,hide_tabs:[],show_tabs:[],template_variables:"",exceptions:[],header_text:"Home Assistant",hidden_tab_redirect:!0,default_tab:0,sidebar_right:!1,hide_help:!1,hide_unused:!1,hide_refresh:!1,hide_config:!1,hide_raw:!1,notification_dot_color:"#ff9800"},C=t=>{let o={...D,...y.config.custom_header};const n=(o={...o,...v(o)}).template_variables;delete o.template_variables;const r=()=>{o.hide_tabs&&(o.hide_tabs=S(o.hide_tabs)),o.show_tabs&&(o.show_tabs=S(o.show_tabs)),o.show_tabs&&o.show_tabs.length&&(o.hide_tabs=(e=>{if(e&&e.length){const t=[];for(let e=0;e<_.tabs.length;e+=1)t.push(e);return t.filter(t=>!e.includes(t))}})(o.show_tabs)),o.disable_sidebar&&(o.menu_hide=!0),o.kiosk_mode&&!o.disabled_mode?x(!1):H(o)};let a=!1;const i=JSON.stringify(o),s=!!n||i.includes("{{")||i.includes("{%");let c;s?c=((t,o)=>{const n=b.connection,r={user:b.user.name,browser:navigator.userAgent,...o.variables,...e()},a=o.template,i=o.entity_ids;return n.subscribeMessage(e=>t(e.result),{type:"render_template",template:a,variables:r,entity_ids:i})})(e=>{if(a=!0,t||window.customHeaderLastTemplateResult!=e){window.customHeaderLastTemplateResult=e;try{o=JSON.parse(e.replace(/"true"/gi,"true").replace(/"false"/gi,"false").replace(/""/,""))}catch(t){console.log(`Custom-Header: There was an issue with the template: ${((e,t)=>{const o=t.toString().match(/\d+/g)[0],n=e.substr(0,o).match(/[^,]*$/),r=e.substr(o).match(/^[^,]*/);return`${n?n[0]:""}${r?r[0]:""}`.replace('":"',":")})(e,t)}`)}r()}},{template:JSON.stringify(n).replace(/\\/g,"")+JSON.stringify(o).replace(/\\/g,"")}):r(),!t&&s&&window.setTimeout(()=>{(async()=>{const e=await c;c=void 0,await e()})(),C(!1)},1e3*(60-(new Date).getSeconds())),setTimeout((function(){!a&&s&&console.log("Custom-Header: There was an issue with one or more templates in your config.")}),1e4)};C(!1),(()=>{const e=new MutationObserver(e=>{const t=window.customHeaderConfig;e.forEach(({addedNodes:e,target:o})=>{e.length&&"PARTIAL-PANEL-RESOLVER"==o.nodeName?C(!0):"edit-mode"===o.className&&e.length?(window.customHeaderDisabled||M(t,q,!0),q.menu.style.display="none",f.querySelector("cch-header").style.display="none",_.appHeader.style.display="block",window.scrollTo({top:0,behavior:"smooth"}),f.querySelector("#cch_view_style")&&f.querySelector("#cch_view_style").remove()):"APP-HEADER"===o.nodeName&&e.length&&(C(!0),_.appHeader.style.display="none",q.menu.style.display="",f.querySelector("cch-header").style.display="")})});e.observe(_.partialPanelResolver,{childList:!0}),e.observe(_.appHeader,{childList:!0})})();
