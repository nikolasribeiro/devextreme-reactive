(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+wNj":function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}r.d(t,"a",(function(){return a}))},"3WRX":function(e,t,r){e.exports={title:"menu-sub-section-module--title--r-hSz",list:"menu-sub-section-module--list--1RryR"}},"5Dcv":function(e,t,r){var a=r("ZORK").match(/firefox\/(\d+)/i);e.exports=!!a&&+a[1]},"6hyP":function(e,t,r){"use strict";var a=r("fGyu"),i=(r("tQbP"),r("KOtZ"),r("ERkP")),c=r("R+GN"),n=r("+wNj"),o=r("tYqs"),l=r("O+tk"),s=r.n(l),d=r("WKVI"),u=r.n(d),p=function(e){var t=e.title,r=e.items,a=e.location,c=e.onHeaderClick,n=e.listClassName,o=e.titleClassName,l=e.subSectionComponent,s=e.itemComponent,d=e.titleComponent;return i.createElement(i.Fragment,{key:t},i.createElement(d,{className:o,onClick:c,title:t}),i.createElement("ul",{className:"list-unstyled "+n+" "+u.a.menuList},r.map((function(e){return e.items?i.createElement(l,Object.assign({},e,{key:e.title,itemComponent:s,location:a})):i.createElement(s,Object.assign({},e,{key:e.title}))}))))};p.defaultProps={onHeaderClick:function(){},listClassName:"",titleClassName:""};var h=p,m=r("3WRX"),g=r.n(m),f=["title"],v=function(e){var t=e.title,r=Object(n.a)(e,f);return i.createElement("h6",r,t)},b=function(e){return i.createElement(h,Object.assign({},e,{titleComponent:v,listClassName:g.a.list,titleClassName:g.a.title}))},S=r("P9gp"),C=r.n(S),E=["title"],w=["items","path","location"],y=function(e){var t=e.title,r=Object(n.a)(e,E);return i.createElement("h3",r,t)},P=function(e){var t=e.items,r=e.path,a=e.location,c=Object(n.a)(e,w),o=!function e(t,r,a){return t?t.some((function(t){var r=t.items,i=t.path;return e(r,i,a)})):a.pathname.endsWith(r)}(t,r,a),l=i.useState(o),s=l[0],d=l[1],u=C.a.title+" "+(s?C.a.collapsed:""),p=C.a.list+" "+(s?C.a.collapsed:"");return i.createElement(h,Object.assign({},c,{items:t,location:a,onHeaderClick:function(){return d(!s)},titleClassName:u,listClassName:p,subSectionComponent:b,titleComponent:y}))};P.defaultProps={path:void 0};var k=P,T=r("FKj8"),R=r.n(T),x=function(e){var t=e.path,r=e.title;return i.createElement("li",{key:t,className:R.a.item},i.createElement(s.a,{activeClassName:R.a.activeLink,to:t},r))},A=function(e){return i.createElement("ul",{className:"list-unstyled "+R.a.singleItem},i.createElement(x,e))},N=function(e){var t=e.sectionComponent,r=e.items,a=e.menuAddon,c=e.location;return i.createElement("div",{className:R.a.leftMenu},a,r.map((function(e){return i.createElement(i.Fragment,{key:e.title},e.items?i.createElement(t,Object.assign({},e,{itemComponent:x,location:c})):i.createElement(A,e),i.createElement("hr",null))})))};N.defaultProps={menuAddon:null};var D=function(e){return i.createElement(o.Location,null,(function(t){var r=t.location;return i.createElement(N,Object.assign({},e,{location:r,sectionComponent:k}))}))},I=r("Rq7c"),O=r.n(I),G=["children"],z=function(e){var t=e.children,r=Object(n.a)(e,G);return i.createElement("div",{className:"row"},i.createElement("div",{className:"col-lg-9 col-md-8 order-md-2 docs-content"},i.createElement("div",{className:O.a.content},t)),i.createElement("div",{className:"col-lg-3 col-md-4 order-md-1 main-menu"},i.createElement("div",{className:O.a.sidebar},i.createElement(D,r))))},F=r("htE9"),L=r.n(F),j=function(e){var t=e.technologyName,r=e.sectionName;return i.useEffect((function(){if("demos"!==r){var e=t.split("/")[0];docsearch({apiKey:"4cd7a76d4bc286ae69fe26182a8d4b18",indexName:"devextreme_reactive",inputSelector:"#docsearch",algoliaOptions:{facetFilters:["techno:"+e]},debug:!0})}})),i.createElement("input",{id:"docsearch",className:L.a.search+" form-control",placeholder:"Search..."})},V=r("X+uD"),B={"react/grid":"Grid","react/chart":"Chart","react/scheduler":"Scheduler","react/common":"Common Concepts","react/core":"Core"},M=function(e){return e[0]===e[0].toUpperCase()},H=function(e){var t,r=e.children,n=e.sectionName,o=e.technologyName;return i.createElement(c.a,{sectionName:"docs"},i.createElement(z,{items:(t=n,[{title:"OVERVIEW",path:"/"+t+"/"}].concat(Object(a.a)(Object.keys(V).reduce((function(e,r){return V[r][t]&&e.push({title:B[r],items:V[r][t].reduce((function(e,i){var c,n,o,l,s=i;return 1===V[r][t].length?s.items:("API Reference"===s.title&&(s=Object.assign({},i,{items:(c=i.items,n=c.filter((function(e){var t=e.title;return M(t)})),o=c.filter((function(e){var t=e.title;return!M(t)})),l=function(e){return e.sort((function(e,t){return e.title.localeCompare(t.title)}))},[].concat(Object(a.a)(l(n)),Object(a.a)(l(o))))})),[].concat(Object(a.a)(e),[s]))}),[])}),e}),[])))),menuAddon:i.createElement(j,{technologyName:o,sectionName:n})},r))};H.defaultProps={children:void 0,technologyName:"react"};t.a=H},"8/ho":function(e,t,r){var a=r("ZORK");e.exports=/MSIE|Trident/.test(a)},FKj8:function(e,t,r){e.exports={leftMenu:"left-menu-module--left-menu--2Fy_7",item:"left-menu-module--item--3pste",singleItem:"left-menu-module--single-item--3AZDf",activeLink:"left-menu-module--active-link--2KBXY"}},IBdH:function(e,t,r){var a=r("ZORK").match(/AppleWebKit\/(\d+)\./);e.exports=!!a&&+a[1]},LD01:function(e,t){var r=Math.floor,a=function(e,t){var n=e.length,o=r(n/2);return n<8?i(e,t):c(a(e.slice(0,o),t),a(e.slice(o),t),t)},i=function(e,t){for(var r,a,i=e.length,c=1;c<i;){for(a=c,r=e[c];a&&t(e[a-1],r)>0;)e[a]=e[--a];a!==c++&&(e[a]=r)}return e},c=function(e,t,r){for(var a=e.length,i=t.length,c=0,n=0,o=[];c<a||n<i;)c<a&&n<i?o.push(r(e[c],t[n])<=0?e[c++]:t[n++]):o.push(c<a?e[c++]:t[n++]);return o};e.exports=a},P9gp:function(e,t,r){e.exports={title:"root-menu-section-module--title--3uqTy",collapsed:"root-menu-section-module--collapsed--bmXvw",list:"root-menu-section-module--list--3THih"}},"R+GN":function(e,t,r){"use strict";var a=r("BFfR"),i=r("ERkP"),c=r("8pZI"),n=r("Rb52"),o=r("Wbzz"),l=r("RMIM"),s=r.n(l),d=function(){return i.createElement(o.StaticQuery,{query:"3662068265",render:function(e){return i.createElement("a",{href:"https://github.com/DevExpress/devextreme-reactive/tree/master/CHANGELOG.md#"+e.site.siteMetadata.version,target:"_blank",rel:"noopener noreferrer",className:s.a.versionLink},i.createElement("span",{className:s.a.version},"Version"," ",e.site.siteMetadata.version))}})},u=r("Q0CA"),p=r("YL5U"),h=r.n(p),m=function(e){var t=e.children;return i.createElement("div",{className:h.a.contentContainer},i.createElement("div",{className:"container"},t))},g=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.sectionName,r=e.children,a="docs"===t;return i.createElement(c.a,null,i.createElement(n.a,{links:i.createElement(i.Fragment,null,a?i.createElement(d,null):null,i.createElement(u.a,null))}),i.createElement(m,null,r))},t}(i.PureComponent);g.defaultProps={children:void 0};t.a=g},RMIM:function(e,t,r){e.exports={versionLink:"version-link-module--version-link--1GmT-",version:"version-link-module--version--2v1Bs"}},Rq7c:function(e,t,r){e.exports={sidebar:"container-with-menu-module--sidebar--2iieL",content:"container-with-menu-module--content--12C8D"}},WKVI:function(e,t,r){e.exports={menuList:"menu-section-module--menu-list--TJtK9"}},"X+uD":function(e){e.exports=JSON.parse('{"react/grid":{"demos":[{"title":"Demos","items":[{"title":"Integrated Data Shaping","path":"/react/grid/demos/featured/integrated-data-shaping/"},{"title":"Data Editing","path":"/react/grid/demos/featured/data-editing/"},{"title":"Virtual Scrolling","path":"/react/grid/demos/featured/virtual-scrolling/"},{"title":"Redux Integration","path":"/react/grid/demos/featured/redux-integration/"},{"title":"Remote Data","path":"/react/grid/demos/featured/remote-data/"},{"title":"Tree Data","path":"/react/grid/demos/featured/tree-data/"},{"title":"Chart Integration","path":"/react/grid/demos/featured/chart-integration/"}]}],"docs":[{"title":"Guides","items":[{"title":"Getting Started","path":"/react/grid/docs/guides/getting-started/"},{"title":"Plugin Overview","path":"/react/grid/docs/guides/plugin-overview/"},{"title":"Fundamentals","path":"/react/grid/docs/guides/fundamentals/"},{"title":"Controlled and Uncontrolled Modes","path":"/react/grid/docs/guides/controlled-and-uncontrolled-modes/"},{"title":"Data Accessors","path":"/react/grid/docs/guides/data-accessors/"},{"title":"Data Formatting","path":"/react/grid/docs/guides/data-formatting/"},{"title":"Sorting","path":"/react/grid/docs/guides/sorting/"},{"title":"Paging","path":"/react/grid/docs/guides/paging/"},{"title":"Filtering","path":"/react/grid/docs/guides/filtering/"},{"title":"Searching","path":"/react/grid/docs/guides/searching/"},{"title":"Grouping","path":"/react/grid/docs/guides/grouping/"},{"title":"Selection","path":"/react/grid/docs/guides/selection/"},{"title":"Editing","path":"/react/grid/docs/guides/editing/"},{"title":"Editing in a Popup Form","path":"/react/grid/docs/guides/editing-in-popup/"},{"title":"Detail Row","path":"/react/grid/docs/guides/detail-row/"},{"title":"Editing in Detail Row","path":"/react/grid/docs/guides/editing-in-detail-row/"},{"title":"Column Reordering","path":"/react/grid/docs/guides/column-reordering/"},{"title":"Column Resizing","path":"/react/grid/docs/guides/column-resizing/"},{"title":"Column Visibility","path":"/react/grid/docs/guides/column-visibility/"},{"title":"Banded Columns","path":"/react/grid/docs/guides/banded-columns/"},{"title":"Fixed Columns","path":"/react/grid/docs/guides/fixed-columns/"},{"title":"Virtual Scrolling","path":"/react/grid/docs/guides/virtual-scrolling/"},{"title":"Lazy Loading","path":"/react/grid/docs/guides/lazy-loading/"},{"title":"Tree Data","path":"/react/grid/docs/guides/tree-data/"},{"title":"Summary Row","path":"/react/grid/docs/guides/summary-row/"},{"title":"Export","path":"/react/grid/docs/guides/export/"},{"title":"Localization","path":"/react/grid/docs/guides/localization/"},{"title":"TypeScript Support","path":"/react/grid/docs/guides/typescript/"},{"title":"Custom Plugin Development","path":"/react/grid/docs/guides/custom-plugin-development/"}]},{"title":"API Reference","items":[{"title":"Grid","path":"/react/grid/docs/reference/grid/"},{"title":"GridExporter","path":"/react/grid/docs/reference/grid-exporter/"},{"title":"FilteringState","path":"/react/grid/docs/reference/filtering-state/"},{"title":"SortingState","path":"/react/grid/docs/reference/sorting-state/"},{"title":"GroupingState","path":"/react/grid/docs/reference/grouping-state/"},{"title":"PagingState","path":"/react/grid/docs/reference/paging-state/"},{"title":"SearchPanel","path":"/react/grid/docs/reference/search-panel/"},{"title":"SearchState","path":"/react/grid/docs/reference/search-state/"},{"title":"SelectionState","path":"/react/grid/docs/reference/selection-state/"},{"title":"EditingState","path":"/react/grid/docs/reference/editing-state/"},{"title":"RowDetailState","path":"/react/grid/docs/reference/row-detail-state/"},{"title":"TableColumnReordering","path":"/react/grid/docs/reference/table-column-reordering/"},{"title":"IntegratedFiltering","path":"/react/grid/docs/reference/integrated-filtering/"},{"title":"IntegratedSelection","path":"/react/grid/docs/reference/integrated-selection/"},{"title":"IntegratedSorting","path":"/react/grid/docs/reference/integrated-sorting/"},{"title":"IntegratedGrouping","path":"/react/grid/docs/reference/integrated-grouping/"},{"title":"CustomGrouping","path":"/react/grid/docs/reference/custom-grouping/"},{"title":"IntegratedPaging","path":"/react/grid/docs/reference/integrated-paging/"},{"title":"Table","path":"/react/grid/docs/reference/table/"},{"title":"VirtualTable","path":"/react/grid/docs/reference/virtual-table/"},{"title":"TableHeaderRow","path":"/react/grid/docs/reference/table-header-row/"},{"title":"TableSelection","path":"/react/grid/docs/reference/table-selection/"},{"title":"TableFilterRow","path":"/react/grid/docs/reference/table-filter-row/"},{"title":"TableRowDetail","path":"/react/grid/docs/reference/table-row-detail/"},{"title":"TableGroupRow","path":"/react/grid/docs/reference/table-group-row/"},{"title":"TableEditRow","path":"/react/grid/docs/reference/table-edit-row/"},{"title":"TableEditColumn","path":"/react/grid/docs/reference/table-edit-column/"},{"title":"TableBandHeader","path":"/react/grid/docs/reference/table-band-header/"},{"title":"TableColumnResizing","path":"/react/grid/docs/reference/table-column-resizing/"},{"title":"PagingPanel","path":"/react/grid/docs/reference/paging-panel/"},{"title":"GroupingPanel","path":"/react/grid/docs/reference/grouping-panel/"},{"title":"ExportPanel","path":"/react/grid/docs/reference/export-panel/"},{"title":"DragDropProvider","path":"/react/grid/docs/reference/drag-drop-provider/"},{"title":"DataTypeProvider","path":"/react/grid/docs/reference/data-type-provider/"},{"title":"ColumnChooser","path":"/react/grid/docs/reference/column-chooser/"},{"title":"TableColumnVisibility","path":"/react/grid/docs/reference/table-column-visibility/"},{"title":"Toolbar","path":"/react/grid/docs/reference/toolbar/"},{"title":"CustomPaging","path":"/react/grid/docs/reference/custom-paging/"},{"title":"TreeDataState","path":"/react/grid/docs/reference/tree-data-state/"},{"title":"CustomTreeData","path":"/react/grid/docs/reference/custom-tree-data/"},{"title":"TableTreeColumn","path":"/react/grid/docs/reference/table-tree-column/"},{"title":"TableFixedColumns","path":"/react/grid/docs/reference/table-fixed-columns/"},{"title":"SummaryState","path":"/react/grid/docs/reference/summary-state/"},{"title":"IntegratedSummary","path":"/react/grid/docs/reference/integrated-summary/"},{"title":"CustomSummary","path":"/react/grid/docs/reference/custom-summary/"},{"title":"TableSummaryRow","path":"/react/grid/docs/reference/table-summary-row/"},{"title":"VirtualTableState","path":"/react/grid/docs/reference/virtual-table-state/"},{"title":"createRowCache","path":"/react/grid/docs/reference/create-row-cache/"},{"title":"TableInlineCellEditing","path":"/react/grid/docs/reference/table-inline-cell-editing/"}]}]},"react/chart":{"demos":[{"title":"Demos","items":[{"title":"Overview","path":"/react/chart/demos/overview/multiple-axes/"}]},{"title":"Area Chart","items":[{"title":"Simple Area","path":"/react/chart/demos/area/simple-area/"},{"title":"Spline Area","path":"/react/chart/demos/area/spline-area/"},{"title":"Stacked Area","path":"/react/chart/demos/area/stacked-area/"},{"title":"Full-Stacked Area","path":"/react/chart/demos/area/fullstacked-area/"},{"title":"Step Area","path":"/react/chart/demos/area/step-area/"},{"title":"Streamgraph","path":"/react/chart/demos/area/streamgraph/"}]},{"title":"Bar Chart","items":[{"title":"Simple Bar","path":"/react/chart/demos/bar/simple-bar/"},{"title":"Side-By-Side Bars","path":"/react/chart/demos/bar/side-by-side/"},{"title":"Side-By-Side Stacked Bars","path":"/react/chart/demos/bar/side-by-side-stacked-bar/"},{"title":"Stacked Bar","path":"/react/chart/demos/bar/stacked-bar/"},{"title":"Full-Stacked Bar","path":"/react/chart/demos/bar/fullstacked-bar/"},{"title":"Component Customization","path":"/react/chart/demos/bar/component-customization/"},{"title":"Series Interaction","path":"/react/chart/demos/bar/series-interaction/"},{"title":"Rotated Bar","path":"/react/chart/demos/bar/rotated-bar/"}]},{"title":"Line Chart","items":[{"title":"Simple Line","path":"/react/chart/demos/line/line/"},{"title":"Spline","path":"/react/chart/demos/line/spline/"},{"title":"Step Line","path":"/react/chart/demos/line/step-line/"},{"title":"Step Line With Gaps","path":"/react/chart/demos/line/step-line-with-gaps/"},{"title":"Axes Type Customization","path":"/react/chart/demos/line/log-time-axes/"}]},{"title":"Point Chart","items":[{"title":"Scatter Series","path":"/react/chart/demos/point/scatter/"}]},{"title":"Pie Chart","items":[{"title":"Pie Chart","path":"/react/chart/demos/pie/pie/"},{"title":"Doughnut Chart","path":"/react/chart/demos/pie/doughnut/"}]},{"title":"Combination","items":[{"title":"Multiple Axes","path":"/react/chart/demos/combination/multiple-axes/"}]},{"title":"More Features","items":[{"title":"Export","path":"/react/chart/demos/export/demo/"},{"title":"Zoom and Pan","path":"/react/chart/demos/more_features/zoom-and-pan/"}]}],"docs":[{"title":"Guides","items":[{"title":"Getting Started","path":"/react/chart/docs/guides/getting-started/"},{"title":"Plugin Overview","path":"/react/chart/docs/guides/plugin-overview/"},{"title":"Series","path":"/react/chart/docs/guides/series/"},{"title":"Axes","path":"/react/chart/docs/guides/axes/"},{"title":"Legend and Title","path":"/react/chart/docs/guides/legend_title/"},{"title":"Stacked Series","path":"/react/chart/docs/guides/stacked-series/"},{"title":"Palette","path":"/react/chart/docs/guides/palette/"},{"title":"Animation","path":"/react/chart/docs/guides/animation/"},{"title":"Hover and Selection","path":"/react/chart/docs/guides/hover-and-selection/"},{"title":"Tooltip","path":"/react/chart/docs/guides/tooltip/"},{"title":"Zoom and Pan","path":"/react/chart/docs/guides/zoom-and-pan/"},{"title":"Rotated","path":"/react/chart/docs/guides/rotated/"},{"title":"TypeScript Support","path":"/react/chart/docs/guides/typescript/"}]},{"title":"API Reference","items":[{"title":"Animation","path":"/react/chart/docs/reference/animation/"},{"title":"AreaSeries","path":"/react/chart/docs/reference/area-series/"},{"title":"ArgumentAxis","path":"/react/chart/docs/reference/argument-axis/"},{"title":"ArgumentScale","path":"/react/chart/docs/reference/argument-scale/"},{"title":"BarSeries","path":"/react/chart/docs/reference/bar-series/"},{"title":"Chart","path":"/react/chart/docs/reference/chart/"},{"title":"EventTracker","path":"/react/chart/docs/reference/event-tracker/"},{"title":"HoverState","path":"/react/chart/docs/reference/hover-state/"},{"title":"Legend","path":"/react/chart/docs/reference/legend/"},{"title":"LineSeries","path":"/react/chart/docs/reference/line-series/"},{"title":"Palette","path":"/react/chart/docs/reference/palette/"},{"title":"PieSeries","path":"/react/chart/docs/reference/pie-series/"},{"title":"ScatterSeries","path":"/react/chart/docs/reference/scatter-series/"},{"title":"SelectionState","path":"/react/chart/docs/reference/selection-state/"},{"title":"SplineSeries","path":"/react/chart/docs/reference/spline-series/"},{"title":"Stack","path":"/react/chart/docs/reference/stack/"},{"title":"Title","path":"/react/chart/docs/reference/title/"},{"title":"Tooltip","path":"/react/chart/docs/reference/tooltip/"},{"title":"ValueAxis","path":"/react/chart/docs/reference/value-axis/"},{"title":"ValueScale","path":"/react/chart/docs/reference/value-scale/"},{"title":"ZoomAndPan","path":"/react/chart/docs/reference/zoom-and-pan/"}]}]},"react/scheduler":{"demos":[{"title":"Demos","items":[{"title":"Overview","path":"/react/scheduler/demos/featured/overview/"},{"title":"Integrated Data Shaping","path":"/react/scheduler/demos/featured/integrated-data-shaping/"},{"title":"Data Editing","path":"/react/scheduler/demos/featured/data-editing/"},{"title":"Appearance Customization","path":"/react/scheduler/demos/featured/appearance-customization/"},{"title":"Remote Data","path":"/react/scheduler/demos/featured/remote-data/"},{"title":"Redux Integration","path":"/react/scheduler/demos/featured/redux-integration/"}]}],"docs":[{"title":"Guides","items":[{"title":"Getting Started","path":"/react/scheduler/docs/guides/getting-started/"},{"title":"Fundamentals","path":"/react/scheduler/docs/guides/fundamentals/"},{"title":"Views","path":"/react/scheduler/docs/guides/views/"},{"title":"Appointments","path":"/react/scheduler/docs/guides/appointments/"},{"title":"View Switching","path":"/react/scheduler/docs/guides/view-switching/"},{"title":"Date Navigation","path":"/react/scheduler/docs/guides/date-navigation/"},{"title":"Appointment Tooltip","path":"/react/scheduler/docs/guides/appointment-tooltip/"},{"title":"Editing","path":"/react/scheduler/docs/guides/editing/"},{"title":"Resources","path":"/react/scheduler/docs/guides/resources/"},{"title":"Grouping","path":"/react/scheduler/docs/guides/grouping/"},{"title":"Current Time Indication","path":"/react/scheduler/docs/guides/current-time-indication/"},{"title":"Localization","path":"/react/scheduler/docs/guides/localization/"},{"title":"TypeScript Support","path":"/react/scheduler/docs/guides/typescript/"}]},{"title":"API Reference","items":[{"title":"Scheduler","path":"/react/scheduler/docs/reference/scheduler/"},{"title":"ViewState","path":"/react/scheduler/docs/reference/view-state/"},{"title":"DayView","path":"/react/scheduler/docs/reference/day-view/"},{"title":"WeekView","path":"/react/scheduler/docs/reference/week-view/"},{"title":"MonthView","path":"/react/scheduler/docs/reference/month-view/"},{"title":"Appointments","path":"/react/scheduler/docs/reference/appointments/"},{"title":"AppointmentForm","path":"/react/scheduler/docs/reference/appointment-form/"},{"title":"AppointmentTooltip","path":"/react/scheduler/docs/reference/appointment-tooltip/"},{"title":"EditingState","path":"/react/scheduler/docs/reference/editing-state/"},{"title":"DragDropProvider","path":"/react/scheduler/docs/reference/drag-drop-provider/"},{"title":"EditRecurrenceMenu","path":"/react/scheduler/docs/reference/edit-recurrence-menu/"},{"title":"IntegratedEditing","path":"/react/scheduler/docs/reference/integrated-editing/"},{"title":"TodayButton","path":"/react/scheduler/docs/reference/today-button/"},{"title":"Toolbar","path":"/react/scheduler/docs/reference/toolbar/"},{"title":"AllDayPanel","path":"/react/scheduler/docs/reference/all-day-panel/"},{"title":"DateNavigator","path":"/react/scheduler/docs/reference/date-navigator/"},{"title":"ViewSwitcher","path":"/react/scheduler/docs/reference/view-switcher/"},{"title":"ConfirmationDialog","path":"/react/scheduler/docs/reference/confirmation-dialog/"},{"title":"Resources","path":"/react/scheduler/docs/reference/resources/"},{"title":"CurrentTimeIndicator","path":"/react/scheduler/docs/reference/current-time-indicator/"},{"title":"GroupingState","path":"/react/scheduler/docs/reference/grouping-state/"},{"title":"IntegratedGrouping","path":"/react/scheduler/docs/reference/integrated-grouping/"},{"title":"GroupingPanel","path":"/react/scheduler/docs/reference/grouping-panel/"}]}]},"react/common":{"docs":[{"title":"Common Concepts","items":[{"title":"Optimize performance","path":"/react/common/docs/guides/performance-optimization/"},{"title":"Create a Custom Theme","path":"/react/common/docs/guides/custom-theme/"},{"title":"Localization","path":"/react/common/docs/guides/localization/"}]}]},"react/core":{"docs":[{"title":"Guides","items":[{"title":"Fundamentals","path":"/react/core/docs/guides/fundamentals/"},{"title":"Render Markup","path":"/react/core/docs/guides/rendering-markup/"},{"title":"Provide Values","path":"/react/core/docs/guides/providing-values/"},{"title":"Provide Actions","path":"/react/core/docs/guides/providing-actions/"}]},{"title":"API Reference","items":[{"title":"PluginHost","path":"/react/core/docs/reference/plugin-host/"},{"title":"Plugin","path":"/react/core/docs/reference/plugin/"},{"title":"Action","path":"/react/core/docs/reference/action/"},{"title":"Getter","path":"/react/core/docs/reference/getter/"},{"title":"Template","path":"/react/core/docs/reference/template/"},{"title":"TemplatePlaceholder","path":"/react/core/docs/reference/template-placeholder/"},{"title":"TemplateConnector","path":"/react/core/docs/reference/template-connector/"},{"title":"connectProps","path":"/react/core/docs/reference/connect-props/"}]}]}}')},YL5U:function(e,t,r){e.exports={contentContainer:"content-container-module--content-container--3FCdz"}},htE9:function(e,t,r){e.exports={search:"search-module--search--vtgsv"}},tQbP:function(e,t,r){"use strict";var a=r("ax0f"),i=r("hpdy"),c=r("N9G2"),n=r("tJVe"),o=r("ct80"),l=r("LD01"),s=r("f4p7"),d=r("5Dcv"),u=r("8/ho"),p=r("T+0C"),h=r("IBdH"),m=[],g=m.sort,f=o((function(){m.sort(void 0)})),v=o((function(){m.sort(null)})),b=s("sort"),S=!o((function(){if(p)return p<70;if(!(d&&d>3)){if(u)return!0;if(h)return h<603;var e,t,r,a,i="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(a=0;a<47;a++)m.push({k:t+a,v:r})}for(m.sort((function(e,t){return t.v-e.v})),a=0;a<m.length;a++)t=m[a].k.charAt(0),i.charAt(i.length-1)!==t&&(i+=t);return"DGBEFHACIJK"!==i}}));a({target:"Array",proto:!0,forced:f||!v||!b||!S},{sort:function(e){void 0!==e&&i(e);var t=c(this);if(S)return void 0===e?g.call(t):g.call(t,e);var r,a,o=[],s=n(t.length);for(a=0;a<s;a++)a in t&&o.push(t[a]);for(r=(o=l(o,function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:String(t)>String(r)?1:-1}}(e))).length,a=0;a<r;)t[a]=o[a++];for(;a<s;)delete t[a++];return t}})}}]);
//# sourceMappingURL=2102b7d9a1a1acccefbbbafc28d6c2e31e357a97-6f1b962a920e2e2b5c09.js.map