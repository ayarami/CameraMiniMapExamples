// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        renderCamera : cc.Camera
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {
        let texture = new cc.RenderTexture();
        let gl = cc.game._renderContext;
        // 如果小地图不包含 Mask 组件，可以不用传递第三个参数
        texture.initWithSize(cc.visibleRect.width, cc.visibleRect.height);
        this.renderCamera.targetTexture = texture;

        // 渲染一次摄像机，即更新一次内容到 RenderTexture 中
        this.renderCamera.render();

        //使用RenderTexture
        var sprite = this.node.getComponent(cc.Sprite);
        sprite.spriteFrame = new cc.SpriteFrame(texture);
    },
});
