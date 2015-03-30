# ekisu-image
ekisu image plugin for browser.


## usage
```js
ekisu.plugin(
    ['jpg', 'jpeg', 'png', 'gif', 'svg'],
    ekisuImage // or require('ekisu-image')
);
ekisu('something.png').then(function (result) {
    result // FYI, see below
});
```

## ekisu result interface

every property is read only.

* `result.image` - return loaded [HTMLImageElement][img] instance.
* `result.img` - equivalent to `result.image`
* `result.canvas` - return new [HTMLCanvasElement][canvas] instance. evaluated when it accessed.
* `result.canvasContext` - return new [CanvasRenderingContext2D][context] instance. evaluated when it accessed.
* `result.canvasImageData` - return new [ImageData][imageData] instance. evaluated when it accessed.

[img]: https://developer.mozilla.org/en/docs/Web/API/HTMLImageElement
[canvas]: https://developer.mozilla.org/en/docs/Web/API/HTMLCanvasElement
[context]: https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D
[imageData]: https://developer.mozilla.org/en/docs/Web/API/ImageData
