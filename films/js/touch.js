!function(a){function f(a,b){if(!(a.originalEvent.touches.length1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent(MouseEvents);d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch=ontouchendin document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,mouseover),f(a,mousemove),f(a,mousedown))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,mousemove))},b._touchEnd=function(a){e&&(f(a,mouseup),f(a,mouseout),this._touchMovedf(a,click),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstarta.proxy(b,_touchStart),touchmovea.proxy(b,_touchMove),touchenda.proxy(b,_touchEnd)}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstarta.proxy(b,_touchStart),touchmovea.proxy(b,_touchMove),touchenda.proxy(b,_touchEnd)}),d.call(b)}}}(jQuery);