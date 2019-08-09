webpackHotUpdate("styles",{

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"header___1JQDr","logo":"logo___2IJZR","icon":"icon___3nm3l","span1":"span1___2DawK","span2":"span2___2IxWy","home":"home___2TddX","dot":"dot___1tdqt","pic":"pic___YjjNr","moveRight":"moveRight___1cFsX","shadowOverlay":"shadowOverlay___Ql9TT","subContenedorHome":"subContenedorHome___2yPOw","subContenedorHomeLetras":"subContenedorHomeLetras___WMC6h","welcome":"welcome___1md4j","moveLeft":"moveLeft___30qmH","introScroll":"introScroll___26na2","introScrollLink":"introScrollLink___1G0Ve","about":"about___O-FED","work":"work___2iM8E","contentWork":"contentWork___J9Y9d","card":"card___3tgRR"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1565338843639");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.9ad40d06d593d63840fb.hot-update.js.map