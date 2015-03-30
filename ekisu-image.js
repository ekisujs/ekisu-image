;(function () {
    var isCommonJS = typeof module !== 'undefined' && module.exports;
    var ekisuImage = {
        load: (isCommonJS ? require('ekisu') : ekisu).browser.loadImage,
        extract: function (image) {
            return new Promise(function (resolve) {
                resolve({
                    get img() {
                        return image;
                    },
                    get image() {
                        return image;
                    },
                    get canvas() {
                        var canvas = document.createElement('canvas');
                        canvas.width = image.width;
                        canvas.height = image.height;
                        var context = canvas.getContext('2d');
                        context.drawImage(image, 0, 0);
                        return canvas;
                    },
                    get canvasContext() {
                        return this.canvas.getContext('2d');
                    },
                    get canvasImageData() {
                        var context = this.canvasContext;
                        var canvas = context.canvas;
                        return context.getImageData(0, 0, canvas.width, canvas.height);
                    }
                });
            });
        }
    };
    if (isCommonJS) {
        module.exports = ekisuImage;
    } else {
        this.ekisuImage = ekisuImage;
    }
})();
