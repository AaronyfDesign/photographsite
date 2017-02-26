function reqListener() {
  var renderer = new VerticalRenderer('gallery');
  var config = new Config(JSON.parse(this.responseText), {
    maxHeight: 400,
    spacing: 10,
    shuffle: true,
    columns: 3
  });

  renderer.render(config);

  /**
   * Ideally, the API looks like a factory pattern
   * var renderer = Gallery.createRenderer(data, config);
   * renderer.render('#id');
   */
}


window.onload = function() {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "config.json");
  oReq.send();
};