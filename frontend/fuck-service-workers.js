// A simple, no-op service worker that takes immediate control.

self.addEventListener("install", () => {
  // Skip over the "waiting" lifecycle state, to ensure that our
  // new service worker is activated immediately, even if there's
  // another tab open controlled by our older service worker code.
  self.skipWaiting();
});

// navigator.serviceWorker.getRegistrations().then(function(registrations) {
//   for (let registration of registrations) {
//     registration.unregister();
//     console.log("unregistering service worker");
//   }
// });
// alert(
//   "Oh man I had a horrible bug involving service workers that makes it super hard to reload this page. Try refreshing, and if that doesn't work tweet me @cgenco"
// );
