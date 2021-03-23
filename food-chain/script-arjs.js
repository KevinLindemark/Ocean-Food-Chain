// I need a way to differentiate the markers
  // Could be that I just make markers with QR to each model (seperate webpages for each)
  // https://medium.com/chialab-open-source/how-to-deliver-ar-on-the-web-only-with-a-qr-code-e24b7b61f8cb
  var found = false;
  // https://ar-js-org.github.io/AR.js-Docs/ui-events/
  AFRAME.registerComponent('markerhandler', {
    init: function () {
      this.el.sceneEl.addEventListener('markerFound', () => {
        // redirect to custom URL e.g. google.com
        //window.location = '../../modelviewer';
        found = true;
      })
      this.el.sceneEl.addEventListener('markerLost', () => {
        // redirect to custom URL e.g. google.com
        found = false;
      })
    }
  });

  // https://aframe.io/docs/1.0.0/introduction/javascript-events-dom-apis.html
  window.onload = function () {
    document
      .querySelector(".say-hi-button")
      .addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        if (found == true) {
          window.location = 'dish1_MV.html';
        }
      });
  };