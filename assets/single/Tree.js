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
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        treeCamera2 : cc.Camera,
        treeCamera4 : cc.Camera,
        Role : cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
    },

    update (dt) {
        var a = this.node.getBoundingBoxToWorld();
        var b = this.Role.getBoundingBoxToWorld();
        var intersection = new cc.Rect();
        a.intersection(intersection, b);
        if (intersection === undefined) return;
        var intersectionLength = Math.min(intersection.height, intersection.width);
        if (intersectionLength < 0) return;
        if (intersectionLength >= b.height / 2 && this.treeCamera2.active !== true) {
            this.treeCamera2.active = true;
            this.treeCamera4.active = false;
        }
        else if (intersectionLength < b.height / 2 && this.treeCamera4.active !== true) {
            this.treeCamera2.active = false;
            this.treeCamera4.active = true;
        }
    },
});
