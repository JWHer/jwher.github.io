/*! coi-serviceworker v0.1.7 - Guido Zuidhof and contributors, licensed under MIT */
/*! Modified: strip Content-Encoding: gzip on positions.db HEAD/GET so sql.js-httpvfs can read file length */
let coepCredentialless=!1;"undefined"==typeof window?(self.addEventListener("install",(()=>self.skipWaiting())),self.addEventListener("activate",(e=>e.waitUntil(self.clients.claim()))),self.addEventListener("message",(e=>{e.data&&("deregister"===e.data.type?self.registration.unregister().then((()=>self.clients.matchAll())).then((e=>{e.forEach((e=>e.navigate(e.url)))})):"coepCredentialless"===e.data.type&&(coepCredentialless=e.data.value))})),self.addEventListener("fetch", function(e) {
  const req = e.request;
  if ("only-if-cached" === req.cache && "same-origin" !== req.mode) return;
  const s = coepCredentialless && "no-cors" === req.mode
    ? new Request(req, { credentials: "omit" })
    : req;
  e.respondWith(
    (async () => {
      const r = await fetch(s);
      if (0 === r.status) return r;

      const h = new Headers(r.headers);
      h.set("Cross-Origin-Embedder-Policy", coepCredentialless ? "credentialless" : "require-corp");
      coepCredentialless || h.set("Cross-Origin-Resource-Policy", "cross-origin");
      h.set("Cross-Origin-Opener-Policy", "same-origin");

      // GitHub Pages CDN sends Content-Encoding: gzip on full/HEAD responses for .db files.
      // sql.js-httpvfs sees gzip → discards Content-Length → throws "Length of the file not known".
      // Fix: read actual size from SQLite header (bytes 16-17: page size, 28-31: page count).
      if (req.url.includes("positions.db") && h.get("Content-Encoding")) {
        const chunk = await fetch(new Request(req.url, { headers: { Range: "bytes=16-31" } }));
        const buf = await chunk.arrayBuffer();
        const view = new DataView(buf);
        const pageSize = view.getUint16(0, false);
        const numPages = view.getUint32(12, false);
        h.delete("Content-Encoding");
        h.set("Content-Length", String(pageSize * numPages));
      }

      return new Response(r.body, { status: r.status, statusText: r.statusText, headers: h });
    })().catch(() => fetch(req))
  );
})):(()=>{const e=window.sessionStorage.getItem("coiReloadedBySelf");window.sessionStorage.removeItem("coiReloadedBySelf");const o="coepdegrade"==e,s={shouldRegister:()=>!e,shouldDeregister:()=>!1,coepCredentialless:()=>!0,coepDegrade:()=>!0,doReload:()=>window.location.reload(),quiet:!1,...window.coi},r=navigator,t=r.serviceWorker&&r.serviceWorker.controller;t&&!window.crossOriginIsolated&&window.sessionStorage.setItem("coiCoepHasFailed","true");const i=window.sessionStorage.getItem("coiCoepHasFailed");if(t){const e=s.coepDegrade()&&!(o||window.crossOriginIsolated);r.serviceWorker.controller.postMessage({type:"coepCredentialless",value:!(e||i&&s.coepDegrade())&&s.coepCredentialless()}),e&&(!s.quiet&&console.log("Reloading page to degrade COEP."),window.sessionStorage.setItem("coiReloadedBySelf","coepdegrade"),s.doReload("coepdegrade")),s.shouldDeregister()&&r.serviceWorker.controller.postMessage({type:"deregister"})}!1===window.crossOriginIsolated&&s.shouldRegister()&&(window.isSecureContext?r.serviceWorker?r.serviceWorker.register(window.document.currentScript.src).then((e=>{!s.quiet&&console.log("COOP/COEP Service Worker registered",e.scope),e.addEventListener("updatefound",(()=>{!s.quiet&&console.log("Reloading page to make use of updated COOP/COEP Service Worker."),window.sessionStorage.setItem("coiReloadedBySelf","updatefound"),s.doReload()})),e.active&&!r.serviceWorker.controller&&(!s.quiet&&console.log("Reloading page to make use of COOP/COEP Service Worker."),window.sessionStorage.setItem("coiReloadedBySelf","notcontrolling"),s.doReload())}),(e=>{!s.quiet&&console.error("COOP/COEP Service Worker failed to register:",e)})):!s.quiet&&console.error("COOP/COEP Service Worker not registered, perhaps due to private mode."):!s.quiet&&console.log("COOP/COEP Service Worker not registered, a secure context is required."))})();