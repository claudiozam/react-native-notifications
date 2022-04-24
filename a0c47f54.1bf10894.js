(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{71:function(e,i,t){"use strict";t.r(i),t.d(i,"frontMatter",(function(){return c})),t.d(i,"metadata",(function(){return s})),t.d(i,"rightToc",(function(){return l})),t.d(i,"default",(function(){return p}));var n=t(2),o=t(6),r=(t(0),t(76)),a=["components"],c={id:"general-events",title:"General",sidebar_label:"General"},s={unversionedId:"api/general-events",id:"api/general-events",isDocsHomePage:!1,title:"General",description:"registerRemoteNotificationsRegistered()",source:"@site/docs/api/general-events.md",slug:"/api/general-events",permalink:"/react-native-notifications/api/general-events",editUrl:"https://github.com/wix/react-native-notifications/edit/master/docs/docs/api/general-events.md",version:"current",sidebar_label:"General",sidebar:"api",previous:{title:"Android Specific Commands",permalink:"/react-native-notifications/api/android-api"},next:{title:"iOS",permalink:"/react-native-notifications/api/ios-events"}},l=[{value:"registerRemoteNotificationsRegistered()",id:"registerremotenotificationsregistered",children:[]},{value:"registerNotificationReceivedForeground()",id:"registernotificationreceivedforeground",children:[]},{value:"registerNotificationReceivedBackground()",id:"registernotificationreceivedbackground",children:[]},{value:"registerNotificationOpened()",id:"registernotificationopened",children:[]},{value:"registerRemoteNotificationsRegistrationFailed()",id:"registerremotenotificationsregistrationfailed",children:[]},{value:"registerRemoteNotificationsRegistrationDenied()",id:"registerremotenotificationsregistrationdenied",children:[]}],d={rightToc:l};function p(e){var i=e.components,t=Object(o.a)(e,a);return Object(r.b)("wrapper",Object(n.a)({},d,t,{components:i,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"registerremotenotificationsregistered"},"registerRemoteNotificationsRegistered()"),Object(r.b)("p",null,"Fired when the user registers for remote notifications. The handler will be invoked with an event holding the hex string representing the ",Object(r.b)("inlineCode",{parentName:"p"},"deviceToken")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Notifications.events().registerRemoteNotificationsRegistered((event: Registered) => {\n  console.log(event.deviceToken);\n});\n")),Object(r.b)("h2",{id:"registernotificationreceivedforeground"},"registerNotificationReceivedForeground()"),Object(r.b)("p",null,"Fired when a remote notification is received in foreground state. The handler will be invoked with an instance of ",Object(r.b)("a",{parentName:"p",href:"notification-obj"},"Notification"),".\nShould call completion function on iOS, will be ignored on Android."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Notifications.events().registerNotificationReceivedForeground((notification: Notification, completion: (response: NotificationCompletion) => void) => {\n  console.log(JSON.stringify(notification.payload));\n\n  // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.\n  completion({alert: true, sound: true, badge: false});\n});\n")),Object(r.b)("h2",{id:"registernotificationreceivedbackground"},"registerNotificationReceivedBackground()"),Object(r.b)("h4",{id:"to-receive-background-notifications-on-ios-follow-this-guide"},"To receive background notifications on iOS follow ",Object(r.b)("a",{parentName:"h4",href:"https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/pushing_background_updates_to_your_app"},"this guide"),"."),Object(r.b)("p",null,"Fired when a remote notification is received in background state. The handler will be invoked with an instance of ",Object(r.b)("a",{parentName:"p",href:"notification-obj"},"Notification"),".\nShould call completion function on iOS, will be ignored on Android."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Notifications.events().registerNotificationReceivedBackground((notification: Notification, completion: (response: NotificationCompletion) => void) => {\n  console.log(JSON.stringify(notification.payload));\n\n  // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.\n  completion({alert: true, sound: true, badge: false});\n});\n")),Object(r.b)("h2",{id:"registernotificationopened"},"registerNotificationOpened()"),Object(r.b)("p",null,"Fired when a remote notification is opened from dead or background state. The handler will be invoked with an instance of ",Object(r.b)("a",{parentName:"p",href:"notification-obj"},"Notification"),".\nShould call completion function on iOS, will be ignored on Android.\nAndroid: This event will be called before the component is mounted, if you want to know the initial notification in the component please use ",Object(r.b)("a",{parentName:"p",href:"general-api#getInitialNotification"},"getInitialNotification")," on mount."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Notifications.events().registerNotificationOpened((notification: Notification, completion: () => void) => {\n  console.log(JSON.stringify(notification.payload));\n  completion();\n});\n")),Object(r.b)("h2",{id:"registerremotenotificationsregistrationfailed"},"registerRemoteNotificationsRegistrationFailed()"),Object(r.b)("p",null,"Fired when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. The handler will be invoked with {localizedDescription: string, code: string, domain: string}."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Notifications.events().registerRemoteNotificationsRegistrationFailed((event: RegistrationError) => {\n  console.log(event.code, event.localizedDescription, event.domain);\n});\n")),Object(r.b)("h2",{id:"registerremotenotificationsregistrationdenied"},"registerRemoteNotificationsRegistrationDenied()"),Object(r.b)("p",null,'Fired when the user does not grant permission to receive push notifications. Typically occurs when pressing the "Don\'t Allow" button in iOS permissions overlay.'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Notifications.events().registerRemoteNotificationRegistrationDenied(() => {\n  console.log('Notification permissions not granted')\n})\n")))}p.isMDXComponent=!0},76:function(e,i,t){"use strict";t.d(i,"a",(function(){return p})),t.d(i,"b",(function(){return u}));var n=t(0),o=t.n(n);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function a(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?a(Object(t),!0).forEach((function(i){r(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function s(e,i){if(null==e)return{};var t,n,o=function(e,i){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||(o[t]=e[t]);return o}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),d=function(e){var i=o.a.useContext(l),t=i;return e&&(t="function"==typeof e?e(i):c(c({},i),e)),t},p=function(e){var i=d(e.components);return o.a.createElement(l.Provider,{value:i},e.children)},f={inlineCode:"code",wrapper:function(e){var i=e.children;return o.a.createElement(o.a.Fragment,{},i)}},g=o.a.forwardRef((function(e,i){var t=e.components,n=e.mdxType,r=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(t),g=n,u=p["".concat(a,".").concat(g)]||p[g]||f[g]||r;return t?o.a.createElement(u,c(c({ref:i},l),{},{components:t})):o.a.createElement(u,c({ref:i},l))}));function u(e,i){var t=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var r=t.length,a=new Array(r);a[0]=g;var c={};for(var s in i)hasOwnProperty.call(i,s)&&(c[s]=i[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<r;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);