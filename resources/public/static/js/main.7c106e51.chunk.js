(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{61:function(e,t,a){e.exports=a.p+"static/media/yetibot_lambda_blue_with_grey.144cb52a.svg"},65:function(e,t,a){e.exports=a(94)},70:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(47),l=a.n(n),r=a(0),o=a.n(r),c=a(21),i=a(12),s=a(13),m=a(15),u=a(14),d=a(16),E=a(63),h=a(6),f=a(48),y=o.a.createContext({}),_=a(49),b=a.n(_),p=a(50),v=a.n(p),C=a(51),g=a.n(C),N=a(52),S=a.n(N),O=a(53),z=a.n(O),T=(a(70),a(1)),j=a(7),k=a(5),w=a.n(k),q=(new Date).getTimezoneOffset()/60,H=a(11),x=a.n(H);function I(){var e=Object(j.a)(["\n  query stats($timezone_offset_hours: Int!) {\n    stats(timezone_offset_hours: $timezone_offset_hours) {\n      adapter_count\n    }\n\n    adapters {\n      platform\n      uuid\n      is_connected\n      connection_latency\n      connection_last_active_timestamp\n    }\n  }\n"]);return I=function(){return e},e}x.a.relativeTimeThreshold("ss",0);var B=w()(I()),A=function(){return o.a.createElement(h.Query,{query:B,variables:{timezone_offset_hours:q}},function(e){var t=e.loading,a=e.error,n=e.data;return t?o.a.createElement(T.Notification,{isColor:"info"},"Loading..."):a?o.a.createElement(T.Notification,{isColor:"danger"},a.message):o.a.createElement("div",null,o.a.createElement(T.Hero,{isBold:!0,isColor:"info",isSize:"small"},o.a.createElement(T.HeroBody,null,o.a.createElement(T.Title,null,"Adapters"),o.a.createElement(T.Subtitle,null,n.stats.adapter_count," Adapters"))),o.a.createElement(T.Table,{isStriped:!0,className:"is-fullwidth is-hoverable"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Platform"),o.a.createElement("th",null,"UUID"),o.a.createElement("th",{title:"Is this adapter connected?"},"Connected?"),o.a.createElement("th",{title:"Round trip latency recorded at the last active timestamp"},"Last recorded latency"),o.a.createElement("th",{title:"Timestamp from when we last confirmed that the connection to this Adapter was active"},"Last active"))),o.a.createElement("tbody",null,n.adapters.map(function(e){var t=e.platform,a=e.uuid,n=e.is_connected,l=e.connection_last_active_timestamp,r=e.connection_latency,c=x()(new Date(parseInt(l)));return o.a.createElement("tr",{key:a},o.a.createElement("td",null,t),o.a.createElement("td",null,a),o.a.createElement("td",null,n?"\u2705":"\u274c"),o.a.createElement("td",null,r," ms"),o.a.createElement("td",{title:c.local().format()},c.fromNow()))}))))})};function $(){var e=Object(j.a)(["\n  {\n    adapters {\n      platform\n      uuid\n    }\n  }\n"]);return $=function(){return e},e}var L=w()($()),Q=function(){return o.a.createElement(h.Query,{query:L},function(e){var t=e.loading,a=e.error,n=e.data;return t?o.a.createElement("p",null,"Loading..."):a?o.a.createElement("p",null,"Error ",a):o.a.createElement("div",null,n.adapters.map(function(e){var t=e.platform,a=e.uuid;return o.a.createElement("div",{key:a},t," ",a)}),o.a.createElement(T.Title,null,"REPL"),o.a.createElement(T.Title,null,"Parser"))})},F=a(20),U=a.n(F),D=a(98),P=a(100),Y=a(22),M=a.n(Y);function R(){var e=Object(j.a)(["\n\n  query history($timezone_offset_hours: Int!, $yetibot_only: Boolean!, $commands_only: Boolean!, $search_query: String) {\n    stats(timezone_offset_hours: $timezone_offset_hours) {\n      history_count\n    }\n\n    history(limit: 30, offset: 0,\n      commands_only: $commands_only,\n      yetibot_only: $yetibot_only,\n      search_query: $search_query\n    ) {\n      id\n      chat_source_adapter\n      chat_source_room\n      command\n      correlation_id\n      created_at\n      user_name\n      is_command\n      is_yetibot\n      body\n      user_id\n      user_name\n    }\n  }\n"]);return R=function(){return e},e}var J=w()(R()),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={query:{}},a.hasFiltersSet=function(){return!M.a.isEmpty(a.state.query)},a.updateQueryState=function(e){var t=a.state.query,n=Object(c.a)({},t,e);a.props.history.push("/history?".concat(U.a.stringify(n)))},a.commandsOnlyChange=function(e){var t=e.target.checked?"1":"0";a.updateQueryState({co:t})},a.yetibotOnlyChange=function(e){var t=e.target.checked?"1":"0";a.updateQueryState({yo:t})},a.isCommandsOnly=function(){return"1"===a.state.query.co},a.isYetibotOnly=function(){return"1"===a.state.query.yo},a.searchQuery=function(){var e=a.state.query.s;return e||void 0},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=U.a.parse(this.props.location.search),t=e.s,a=e.co,n=e.yo;this.setStateFromQuery({s:t,co:a,yo:n}),console.log("History mounted")}},{key:"componentDidUpdate",value:function(e){if(!M.a.isEqual(e.location.search,this.props.location.search)){var t=U.a.parse(this.props.location.search),a=t.s,n=t.co,l=t.yo;this.setStateFromQuery({s:a,co:n,yo:l})}}},{key:"setStateFromQuery",value:function(e){var t=e.s,a=e.co,n=e.yo;this.setState({query:{s:t,co:a,yo:n}})}},{key:"render",value:function(){var e=this,t=this.searchQuery();return o.a.createElement(h.Query,{query:J,pollInterval:0,variables:{commands_only:this.isCommandsOnly(),yetibot_only:this.isYetibotOnly(),search_query:t,timezone_offset_hours:q}},function(a){var n=a.loading,l=a.error,r=a.data;return n?o.a.createElement(T.Notification,{isColor:"info"},"Loading..."):l?o.a.createElement(T.Notification,{isColor:"danger"},l.message):o.a.createElement("div",null,o.a.createElement(T.Hero,{isBold:!0,isColor:"info",isSize:"small"},o.a.createElement(T.HeroBody,null,o.a.createElement(T.Title,null,"History"),o.a.createElement(T.Subtitle,null,"Total items ",r.stats.history_count))),o.a.createElement("div",{className:"history-filters"},o.a.createElement(T.Field,{isHorizontal:!0},t?o.a.createElement(T.Field,{isHorizontal:!0,style:{marginRight:20}},o.a.createElement("span",null,"Searching for",o.a.createElement("span",{className:"query"},t))):"",o.a.createElement(T.Field,{isHorizontal:!0,className:"checkbox-field"},o.a.createElement("input",{id:"command-only",className:"is-small is-white has-background-color is-checkradio",type:"checkbox",checked:e.isCommandsOnly(),onChange:e.commandsOnlyChange}),o.a.createElement("label",{htmlFor:"command-only"},"Commands only")),o.a.createElement(T.Field,{isHorizontal:!0,className:"checkbox-field"},o.a.createElement("input",{id:"yetibot-only",className:"is-small is-white has-background-color is-checkradio",type:"checkbox",checked:e.isYetibotOnly(),onChange:e.yetibotOnlyChange}),o.a.createElement("label",{htmlFor:"yetibot-only"},"Yetibot only")),o.a.createElement(T.Field,{isHorizontal:!0}),o.a.createElement(T.Field,{isHorizontal:!0}),e.hasFiltersSet()?o.a.createElement(P.a,{className:"button is-small is-light",to:"/history"},o.a.createElement(T.Icon,{isSize:"small",isAlign:"left",className:"fa fa-times-circle"}),o.a.createElement("span",null,"Reset")):null)),o.a.createElement(T.Table,{isStriped:!0,className:"is-fullwidth is-hoverable"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"User"),o.a.createElement("th",null,"Body"),o.a.createElement("th",null,"Channel"),o.a.createElement("th",null,"Created"),o.a.createElement("th",null,"Command?"),o.a.createElement("th",null,"Yetibot?"))),o.a.createElement("tbody",null,r.history&&r.history.map(function(e){var t=x.a.utc(e.created_at);return o.a.createElement("tr",{key:e.id},o.a.createElement("td",{title:"User ID ".concat(e.user_id)},e.user_name),o.a.createElement("td",{title:e.id},e.body),o.a.createElement("td",{title:"Adapter ".concat(e.chat_source_adapter)},e.chat_source_room),o.a.createElement("td",{title:t.local().format()},t.fromNow()),o.a.createElement("td",null,e.is_command?"\u2705":""),o.a.createElement("td",null,e.is_yetibot?"\u2705":""))}))))})}}]),t}(r.Component),G=Object(D.a)(W);function K(){var e=Object(j.a)(["\n\n  query stats($timezone_offset_hours: Int!) {\n    stats(timezone_offset_hours: $timezone_offset_hours) {\n      user_count\n    }\n\n    users {\n      id\n      is_active\n      last_active\n      username\n    }\n  }\n"]);return K=function(){return e},e}var V=w()(K()),X=function(){return o.a.createElement(h.Query,{query:V,variables:{timezone_offset_hours:q}},function(e){var t=e.loading,a=e.error,n=e.data;return t?o.a.createElement(T.Notification,{isColor:"info"},"Loading..."):a?o.a.createElement(T.Notification,{isColor:"danger"},a.message):o.a.createElement("div",null,o.a.createElement(T.Hero,{isBold:!0,isColor:"info",isSize:"small"},o.a.createElement(T.HeroBody,null,o.a.createElement(T.Title,null,"Users"),o.a.createElement(T.Subtitle,null,n.stats.user_count," Users"))),o.a.createElement(T.Table,{isStriped:!0,className:"is-fullwidth is-hoverable"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"ID"),o.a.createElement("th",null,"User"),o.a.createElement("th",null,"Active?"),o.a.createElement("th",null,"Last active"))),o.a.createElement("tbody",null,n.users.map(function(e){var t=H.utc(e.last_active);return o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,e.id),o.a.createElement("td",null,o.a.createElement(P.a,{to:"/user/".concat(e.id)},e.username)),o.a.createElement("td",null,e.is_active?"\u2705":""),o.a.createElement("td",{title:t.local().format()},t.fromNow()))}))))})};function Z(){var e=Object(j.a)(["\n  query user($user_id: String!) {\n    user(id: $user_id) {\n      id\n      username\n    }\n  }\n"]);return Z=function(){return e},e}var ee=w()(Z()),te=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(h.Query,{query:ee,variables:{user_id:this.props.match.params.id}},function(e){var t=e.loading,a=e.error,n=e.data;return t?o.a.createElement(T.Notification,{isColor:"info"},"Loading..."):a?o.a.createElement(T.Notification,{isColor:"danger"},a.message):n.user?o.a.createElement("div",null,o.a.createElement(T.Hero,{isBold:!0,isColor:"info",isSize:"small"},o.a.createElement(T.HeroBody,null,o.a.createElement(T.Title,null,n.user.username)))):o.a.createElement("div",null,o.a.createElement(T.Hero,{isBold:!0,isColor:"danger",isSize:"small"},o.a.createElement(T.HeroBody,null,o.a.createElement(T.Title,null,"User not found"))))})}}]),t}(r.Component),ae=Object(D.a)(te);function ne(){var e=Object(j.a)(["\n\n  query stats($timezone_offset_hours: Int!) {\n    stats(timezone_offset_hours: $timezone_offset_hours) {\n      alias_count\n    }\n\n    aliases{\n      cmd\n      cmd_name\n      created_at\n      id\n      user_id\n    }\n\n  }\n"]);return ne=function(){return e},e}var le=w()(ne()),re=function(){return o.a.createElement(h.Query,{query:le,variables:{timezone_offset_hours:q}},function(e){var t=e.loading,a=e.error,n=e.data;return t?o.a.createElement(T.Notification,{isColor:"info"},"Loading..."):a?o.a.createElement(T.Notification,{isColor:"danger"},a.message):o.a.createElement("div",null,o.a.createElement(T.Hero,{isBold:!0,isColor:"info",isSize:"small"},o.a.createElement(T.HeroBody,null,o.a.createElement(T.Title,null,"Aliases"),o.a.createElement(T.Subtitle,null,n.stats.alias_count," Aliases"))),o.a.createElement(T.Table,{isStriped:!0,className:"is-fullwidth is-hoverable"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Alias"),o.a.createElement("th",null,"Command"),o.a.createElement("th",null,"Created by"),o.a.createElement("th",null,"Created at"))),o.a.createElement("tbody",null,n.aliases.map(function(e){var t=H.utc(e.created_at);return o.a.createElement("tr",{key:e.id},o.a.createElement("td",{title:e.id},e.cmd),o.a.createElement("td",null,e.cmd_name),o.a.createElement("td",null,e.user_id),o.a.createElement("td",{title:t.local().format()},t.fromNow()))}))))})},oe=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).search=M.a.debounce(function(e){console.log("executing search",e);var t=F.parse(a.props.location.search),n=Object(c.a)({},t,{s:e});a.props.history.push("/history?".concat(F.stringify(n)))},250,{maxWait:1e3}),a.searchChange=function(e){var t=e.target.value;a.setState({search:t}),a.search(t)};var n=F.parse(e.location.search);return a.state={search:n.s||""},console.log("SearchComponent",n),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){var t=F.parse(e.location.search),a=F.parse(this.props.location.search);M.a.isEqual(t,a)||this.setState({search:a.s||""})}},{key:"render",value:function(){return o.a.createElement(T.Control,{isExpanded:!0,hasIcons:"left"},o.a.createElement(T.Input,{value:this.state.search,onChange:this.searchChange,placeholder:"Search History",isColor:"light"}),o.a.createElement(T.Icon,{isSize:"small",isAlign:"left",className:"fa fa-search"}))}}]),t}(r.Component),ce=Object(D.a)(oe);function ie(){var e=Object(j.a)(["\n\n  query stats($timezone_offset_hours: Int!) {\n    stats(timezone_offset_hours: $timezone_offset_hours) {\n      observer_count\n    }\n\n    observers{\n      channel_pattern\n      cmd\n      event_type\n      id\n      pattern\n      user_id\n      user_pattern\n      created_at\n    }\n\n  }\n"]);return ie=function(){return e},e}var se=w()(ie()),me=function(){return o.a.createElement(h.Query,{query:se,variables:{timezone_offset_hours:q}},function(e){var t=e.loading,a=e.error,n=e.data;return t?o.a.createElement(T.Notification,{isColor:"info"},"Loading..."):a?o.a.createElement(T.Notification,{isColor:"danger"},a.message):o.a.createElement("div",null,o.a.createElement(T.Hero,{isBold:!0,isColor:"info",isSize:"small"},o.a.createElement(T.HeroBody,null,o.a.createElement(T.Title,null,"Observers"),o.a.createElement(T.Subtitle,null,n.stats.observer_count," Observers"))),o.a.createElement(T.Table,{isStriped:!0,className:"is-fullwidth is-hoverable"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"ID"),o.a.createElement("th",null,"Pattern"),o.a.createElement("th",null,"Command"),o.a.createElement("th",null,"Event type"),o.a.createElement("th",null,"Channel pattern"),o.a.createElement("th",null,"User pattern"),o.a.createElement("th",null,"Created by"),o.a.createElement("th",null,"Created at"))),o.a.createElement("tbody",null,n.observers.map(function(e){var t=H.utc(e.created_at);return o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,e.id),o.a.createElement("td",null,e.pattern),o.a.createElement("td",null,e.cmd),o.a.createElement("td",null,e.event_type),o.a.createElement("td",null,e.user_pattern),o.a.createElement("td",null,e.channel_pattern),o.a.createElement("td",null,e.user_id),o.a.createElement("td",{title:t.local().format()},t.fromNow()))}))))})};function ue(){var e=Object(j.a)(["\n\n  query stats($timezone_offset_hours: Int!) {\n    stats(timezone_offset_hours: $timezone_offset_hours) {\n      cron_count\n    }\n\n    crons {\n      chat_source_adapter\n      chat_source_room\n      cmd\n      created_at\n      id\n      schedule\n      user_id\n    }\n\n  }\n"]);return ue=function(){return e},e}var de=w()(ue()),Ee=function(){return o.a.createElement(h.Query,{query:de,variables:{timezone_offset_hours:q}},function(e){var t=e.loading,a=e.error,n=e.data;return t?o.a.createElement(T.Notification,{isColor:"info"},"Loading..."):a?o.a.createElement(T.Notification,{isColor:"danger"},a.message):o.a.createElement("div",null,o.a.createElement(T.Hero,{isBold:!0,isColor:"info",isSize:"small"},o.a.createElement(T.HeroBody,null,o.a.createElement(T.Title,null,"Cron Tasks"),o.a.createElement(T.Subtitle,null,n.stats.cron_count," Cron Tasks"))),o.a.createElement(T.Table,{isStriped:!0,className:"is-fullwidth is-hoverable"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"ID"),o.a.createElement("th",null,"Schedule"),o.a.createElement("th",null,"Command"),o.a.createElement("th",null,"Chat source adapter"),o.a.createElement("th",null,"Chat source room"),o.a.createElement("th",null,"Created by"),o.a.createElement("th",null,"Created at"))),o.a.createElement("tbody",null,n.crons&&n.crons.map(function(e){var t=H.utc(e.created_at);return o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,e.id),o.a.createElement("td",null,e.schedule),o.a.createElement("td",null,e.cmd),o.a.createElement("td",null,e.chat_source_adapter),o.a.createElement("td",null,e.chat_source_room),o.a.createElement("td",null,e.user_id),o.a.createElement("td",{title:t.local().format()},t.fromNow()))}))))})};function he(){var e=Object(j.a)(["\n  query stats($timezone_offset_hours: Int!) {\n    stats(timezone_offset_hours: $timezone_offset_hours) {\n      uptime\n      adapter_count\n      user_count\n      command_count_today\n      command_count\n      history_count\n      history_count_today\n      alias_count\n      observer_count\n      cron_count\n    }\n  }\n"]);return he=function(){return e},e}var fe=w()(he()),ye=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(h.Query,{query:fe,variables:{timezone_offset_hours:q}},function(e){var t=e.loading,a=e.error,n=e.data;if(t)return o.a.createElement(T.Notification,{isColor:"info"},"Loading...");if(a)return o.a.createElement(T.Notification,{isColor:"danger"},a.message);var l=n.stats;return o.a.createElement("div",null,o.a.createElement(T.Hero,{isBold:!0,isColor:"info",isSize:"small"},o.a.createElement(T.HeroBody,null,o.a.createElement(T.Title,null,"Dashboard"),o.a.createElement(T.Subtitle,null,"Uptime ",l.uptime))),o.a.createElement("div",{className:"tiles"},o.a.createElement(T.Tile,{isAncestor:!0,hasTextAlign:"centered"},o.a.createElement(P.a,{className:"tile is-parent is-4",to:"/adapters"},o.a.createElement(T.Tile,{isChild:!0,className:"box"},o.a.createElement(T.Title,null,l.adapter_count),o.a.createElement(T.Subtitle,null,"Adapters"))),o.a.createElement(P.a,{className:"tile is-parent is-4",to:"/history?co=1"},o.a.createElement(T.Tile,{isChild:!0,className:"box"},o.a.createElement(T.Title,null,l.command_count),o.a.createElement(T.Subtitle,null,"Commands"))),o.a.createElement(T.Tile,{isSize:4,isParent:!0},o.a.createElement(T.Tile,{isChild:!0,className:"box"},o.a.createElement(T.Title,null,l.command_count_today),o.a.createElement(T.Subtitle,null,"Commands today"))),o.a.createElement(P.a,{className:"tile is-parent is-4",to:"/users"},o.a.createElement(T.Tile,{isChild:!0,className:"box"},o.a.createElement(T.Title,null,l.user_count),o.a.createElement(T.Subtitle,null,"Users"))),o.a.createElement(P.a,{className:"tile is-parent is-4",to:"/history"},o.a.createElement(T.Tile,{isChild:!0,className:"box"},o.a.createElement(T.Title,null,l.history_count),o.a.createElement(T.Subtitle,null,"History items"))),o.a.createElement(T.Tile,{isSize:4,isParent:!0},o.a.createElement(T.Tile,{isChild:!0,className:"box"},o.a.createElement(T.Title,null,l.history_count_today),o.a.createElement(T.Subtitle,null,"History items today"))),o.a.createElement(P.a,{className:"tile is-parent is-4",to:"/aliases"},o.a.createElement(T.Tile,{isChild:!0,className:"box"},o.a.createElement(T.Title,null,l.alias_count),o.a.createElement(T.Subtitle,null,"Aliases"))),o.a.createElement(P.a,{className:"tile is-parent is-4",to:"/observers"},o.a.createElement(T.Tile,{isChild:!0,className:"box"},o.a.createElement(T.Title,null,l.observer_count),o.a.createElement(T.Subtitle,null,"Observers"))),o.a.createElement(P.a,{className:"tile is-parent is-4",to:"/cron"},o.a.createElement(T.Tile,{isChild:!0,className:"box"},o.a.createElement(T.Title,null,l.cron_count),o.a.createElement(T.Subtitle,null,"Cron tasks"))))))})}}]),t}(r.Component),_e=a(61),be=a.n(_e),pe=a(99),ve=a(87);f.a.library.add(z.a,b.a,v.a,g.a,S.a);var Ce=window&&window.Yetibot&&window.Yetibot.url||"http://localhost:3003",ge="".concat(Ce,"/graphql"),Ne=new E.a({uri:ge}),Se=function(e){function t(e){var a;return Object(i.a)(this,t),a=Object(m.a)(this,Object(u.a)(t).call(this,e)),P.a.defaultProps=Object(c.a)({},P.a.defaultProps,{activeClassName:"is-active"}),a.state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(h.ApolloProvider,{client:Ne},o.a.createElement(y.Provider,{value:this.state},o.a.createElement(pe.a,null,o.a.createElement("div",null,o.a.createElement(T.Navbar,{className:"is-white is-fixed-top"},o.a.createElement(T.Container,null,o.a.createElement(T.NavbarStart,null,o.a.createElement(T.NavbarBrand,null,o.a.createElement(T.NavbarItem,null,o.a.createElement(P.a,{to:"/"},o.a.createElement("img",{style:{width:120,height:28},src:be.a,className:"yetibot-lgo",alt:"Yetibot"}))))),o.a.createElement(T.NavbarEnd,null,o.a.createElement(T.NavbarItem,null,o.a.createElement(T.Field,null,o.a.createElement(ce,null)))))),o.a.createElement(T.Container,{id:"content-body"},o.a.createElement("div",{className:"columns"},o.a.createElement("div",{className:"column is-2"},o.a.createElement(T.Menu,null,o.a.createElement(T.MenuLabel,null,"Yetibot"),o.a.createElement(T.MenuList,null,o.a.createElement("li",null,o.a.createElement(P.a,{exact:!0,to:"/"},"Dashboard")),o.a.createElement("li",null,o.a.createElement(P.a,{to:"/history"},"History")),o.a.createElement("li",null,o.a.createElement(P.a,{to:"/users"},"Users")),o.a.createElement("li",null,o.a.createElement(P.a,{to:"/adapters"},"Adapters")),o.a.createElement("li",null,o.a.createElement(P.a,{to:"/aliases"},"Aliases")),o.a.createElement("li",null,o.a.createElement(P.a,{to:"/observers"},"Observers")),o.a.createElement("li",null,o.a.createElement(P.a,{to:"/cron"},"Cron tasks")),o.a.createElement("li",null,o.a.createElement(P.a,{to:"/repl"},"REPL"))),o.a.createElement(T.MenuLabel,null,"Links"),o.a.createElement(T.MenuList,null,o.a.createElement("li",null,o.a.createElement("a",{href:"https://yetibot.com"},o.a.createElement(T.Icon,{isSize:"small",isAlign:"left",className:"fa fa-external-link-alt"}),"Yetibot.com")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/yetibot/yetibot"},o.a.createElement(T.Icon,{isSize:"small",isAlign:"left",className:"fa fa-external-link-alt"}),"GitHub")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://yetibot.com/archives"},o.a.createElement(T.Icon,{isSize:"small",isAlign:"left",className:"fa fa-external-link-alt"}),"Blog")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://yetibot.com/user-guide"},o.a.createElement(T.Icon,{isSize:"small",isAlign:"left",className:"fa fa-external-link-alt"}),"Docs"))))),o.a.createElement("div",{id:"content-container",className:"column is-10"},o.a.createElement(ve.a,{path:"/",exact:!0,component:ye}),o.a.createElement(ve.a,{path:"/adapters",component:A}),o.a.createElement(ve.a,{path:"/history",component:G}),o.a.createElement(ve.a,{path:"/users",exact:!0,component:X}),o.a.createElement(ve.a,{path:"/user/:id",component:ae}),o.a.createElement(ve.a,{path:"/aliases",component:re}),o.a.createElement(ve.a,{path:"/observers",component:me}),o.a.createElement(ve.a,{path:"/cron",component:Ee}),o.a.createElement(ve.a,{path:"/repl",component:Q}))))))))}}]),t}(r.Component);a.d(t,"test",function(){return Oe});l.a.render(o.a.createElement(Se,{name:"yetibot dashboard"}),document.body.appendChild(document.createElement("div")));var Oe={isJestWorking:!0}}},[[65,2,1]]]);
//# sourceMappingURL=main.7c106e51.chunk.js.map