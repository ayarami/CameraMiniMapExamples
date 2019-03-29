// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var MyComponent = require("MyComponent");

cc.Class({
    extends: MyComponent,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        
    },

    Acitivty () {
        console.log("CameraSystem[Acitivty]: Camera Acitivty");
        var Camera = this.node.getChildByName("Camera");
        if (Camera === undefined || Camera === null) {
            this.active = false;
            return;
        }

        var state = this.node.getComponent("RoleState");
        if (state === undefined || state === null || !state.mHasAuthority)
        {
            this.node.removeChild(Camera,true);
            this.active = false;
        }
    }

    // update (dt) {},
});
