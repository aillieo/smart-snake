
var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();



        var layerBackground = new LayerBackground();
        this.addChild(layerBackground);

        var layerBlocks = new LayerBlocks();
        this.addChild(layerBlocks);

        var layerOperation = new LayerOperation();
        this.addChild(layerOperation);
    }
});

