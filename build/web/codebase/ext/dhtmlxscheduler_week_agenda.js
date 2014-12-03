/*
dhtmlxScheduler v.4.2.0 Stardard

This software is covered by GPL license. You also can obtain Commercial or Enterprise license to use it in non-GPL project - please contact sales@dhtmlx.com. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/
scheduler._wa={},scheduler.xy.week_agenda_scale_height=20,scheduler.templates.week_agenda_event_text=function(e,t,r){return scheduler.templates.event_date(e)+" "+r.text},scheduler.date.week_agenda_start=scheduler.date.week_start,scheduler.date.week_agenda_end=function(e){return scheduler.date.add(e,7,"day")},scheduler.date.add_week_agenda=function(e,t){return scheduler.date.add(e,7*t,"day")},scheduler.attachEvent("onSchedulerReady",function(){var e=scheduler.templates;e.week_agenda_date||(e.week_agenda_date=e.week_date)
}),function(){var e=scheduler.date.date_to_str("%l, %F %d");scheduler.templates.week_agenda_scale_date=function(t){return e(t)}}(),scheduler.attachEvent("onTemplatesReady",function(){scheduler.attachEvent("onSchedulerResize",function(){return"week_agenda"==this._mode?(this.week_agenda_view(!0),!1):!0});var e=scheduler.render_data;scheduler.render_data=function(){return"week_agenda"!=this._mode?e.apply(this,arguments):void scheduler.week_agenda_view(!0)};var t=function(){scheduler._cols=[];var e=parseInt(scheduler._els.dhx_cal_data[0].style.width);
scheduler._cols.push(Math.floor(e/2)),scheduler._cols.push(e-scheduler._cols[0]-1),scheduler._colsS={0:[],1:[]};for(var t=parseInt(scheduler._els.dhx_cal_data[0].style.height),r=0;3>r;r++)scheduler._colsS[0].push(Math.floor(t/(3-scheduler._colsS[0].length))),t-=scheduler._colsS[0][r];scheduler._colsS[1].push(scheduler._colsS[0][0]),scheduler._colsS[1].push(scheduler._colsS[0][1]),t=scheduler._colsS[0][scheduler._colsS[0].length-1],scheduler._colsS[1].push(Math.floor(t/2)),scheduler._colsS[1].push(t-scheduler._colsS[1][scheduler._colsS[1].length-1])
},r=function(){t(),scheduler._els.dhx_cal_data[0].innerHTML="",scheduler._rendered=[];for(var e="",r=0;2>r;r++){var s=scheduler._cols[r],a="dhx_wa_column";1==r&&(a+=" dhx_wa_column_last"),e+="<div class='"+a+"' style='width: "+s+"px;'>";for(var n=0;n<scheduler._colsS[r].length;n++){var d=scheduler.xy.week_agenda_scale_height-2,i=scheduler._colsS[r][n]-d-2,l=Math.min(6,2*n+r);e+="<div class='dhx_wa_day_cont'><div style='height:"+d+"px; line-height:"+d+"px;' class='dhx_wa_scale_bar'></div><div style='height:"+i+"px;' class='dhx_wa_day_data' day='"+l+"'></div></div>"
}e+="</div>"}scheduler._els.dhx_cal_date[0].innerHTML=scheduler.templates[scheduler._mode+"_date"](scheduler._min_date,scheduler._max_date,scheduler._mode),scheduler._els.dhx_cal_data[0].innerHTML=e;for(var _=scheduler._els.dhx_cal_data[0].getElementsByTagName("div"),o=[],r=0;r<_.length;r++)"dhx_wa_day_cont"==_[r].className&&o.push(_[r]);scheduler._wa._selected_divs=[];for(var c=scheduler.get_visible_events(),h=scheduler.date.week_start(scheduler._date),u=scheduler.date.add(h,1,"day"),r=0;7>r;r++){o[r]._date=h;
var v=o[r].childNodes[0],f=o[r].childNodes[1];v.innerHTML=scheduler.templates.week_agenda_scale_date(h);for(var p=[],g=0;g<c.length;g++){var m=c[g];m.start_date<u&&m.end_date>h&&p.push(m)}p.sort(function(e,t){return e.start_date.valueOf()==t.start_date.valueOf()?e.id>t.id?1:-1:e.start_date>t.start_date?1:-1});for(var n=0;n<p.length;n++){var y=p[n],x=document.createElement("div");scheduler._rendered.push(x);var b=scheduler.templates.event_class(y.start_date,y.end_date,y);x.className="dhx_wa_ev_body"+(b?" "+b:""),y._text_style&&(x.style.cssText=y._text_style),y.color&&(x.style.background=y.color),y.textColor&&(x.style.color=y.textColor),scheduler._select_id&&y.id==scheduler._select_id&&(scheduler.config.week_agenda_select||void 0===scheduler.config.week_agenda_select)&&(x.className+=" dhx_cal_event_selected",scheduler._wa._selected_divs.push(x));
var w="";y._timed||(w="middle",y.start_date.valueOf()>=h.valueOf()&&y.start_date.valueOf()<=u.valueOf()&&(w="start"),y.end_date.valueOf()>=h.valueOf()&&y.end_date.valueOf()<=u.valueOf()&&(w="end")),x.innerHTML=scheduler.templates.week_agenda_event_text(y.start_date,y.end_date,y,h,w),x.setAttribute("event_id",y.id),f.appendChild(x)}h=scheduler.date.add(h,1,"day"),u=scheduler.date.add(u,1,"day")}};scheduler.week_agenda_view=function(e){scheduler._min_date=scheduler.date.week_start(scheduler._date),scheduler._max_date=scheduler.date.add(scheduler._min_date,1,"week"),scheduler.set_sizes(),e?(scheduler._table_view=scheduler._allow_dnd=!0,scheduler._wa._prev_data_border=scheduler._els.dhx_cal_data[0].style.borderTop,scheduler._els.dhx_cal_data[0].style.borderTop=0,scheduler._els.dhx_cal_data[0].style.overflowY="hidden",scheduler._els.dhx_cal_date[0].innerHTML="",scheduler._els.dhx_cal_data[0].style.top=parseInt(scheduler._els.dhx_cal_data[0].style.top)-20-1+"px",scheduler._els.dhx_cal_data[0].style.height=parseInt(scheduler._els.dhx_cal_data[0].style.height)+20+1+"px",scheduler._els.dhx_cal_header[0].style.display="none",r()):(scheduler._table_view=scheduler._allow_dnd=!1,scheduler._wa._prev_data_border&&(scheduler._els.dhx_cal_data[0].style.borderTop=scheduler._wa._prev_data_border),scheduler._els.dhx_cal_data[0].style.overflowY="auto",scheduler._els.dhx_cal_data[0].style.top=parseInt(scheduler._els.dhx_cal_data[0].style.top)+20+"px",scheduler._els.dhx_cal_data[0].style.height=parseInt(scheduler._els.dhx_cal_data[0].style.height)-20+"px",scheduler._els.dhx_cal_header[0].style.display="block")
},scheduler.mouse_week_agenda=function(e){for(var t,r=e.ev,s=r.srcElement||r.target;s.parentNode;)s._date&&(t=s._date),s=s.parentNode;if(!t)return e;e.x=0;var a=t.valueOf()-scheduler._min_date.valueOf();if(e.y=Math.ceil(a/6e4/this.config.time_step),"move"==this._drag_mode){var n;this._drag_event._dhx_changed=!0,this._select_id=this._drag_id;for(var d=0;d<scheduler._rendered.length;d++)scheduler._drag_id==this._rendered[d].getAttribute("event_id")&&(n=this._rendered[d]);if(!scheduler._wa._dnd){var i=n.cloneNode(!0);
this._wa._dnd=i,i.className=n.className,i.id="dhx_wa_dnd",i.className+=" dhx_wa_dnd",document.body.appendChild(i)}var l=document.getElementById("dhx_wa_dnd");l.style.top=(r.pageY||r.clientY)+20+"px",l.style.left=(r.pageX||r.clientX)+20+"px"}return e},scheduler.attachEvent("onBeforeEventChanged",function(){if("week_agenda"==this._mode&&"move"==this._drag_mode){var e=document.getElementById("dhx_wa_dnd");e.parentNode.removeChild(e),scheduler._wa._dnd=!1}return!0}),scheduler.attachEvent("onEventSave",function(e,t,r){return r&&"week_agenda"==this._mode&&(this._select_id=e),!0
}),scheduler._wa._selected_divs=[],scheduler.attachEvent("onClick",function(e){if("week_agenda"==this._mode&&(scheduler.config.week_agenda_select||void 0===scheduler.config.week_agenda_select)){if(scheduler._wa._selected_divs)for(var t=0;t<this._wa._selected_divs.length;t++){var r=this._wa._selected_divs[t];r.className=r.className.replace(/ dhx_cal_event_selected/,"")}return this.for_rendered(e,function(e){e.className+=" dhx_cal_event_selected",scheduler._wa._selected_divs.push(e)}),scheduler.select(e),!1
}return!0})});
//# sourceMappingURL=../sources/ext/dhtmlxscheduler_week_agenda.js.map