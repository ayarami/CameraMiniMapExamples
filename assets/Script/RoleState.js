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
        mRoleId : {
            default : null,
            visible : false
        },
        mHasAuthority : {
            default : false,
            visible : false
        },
        mSpeedDirty : {
            default : false,
            visible : false
        },
        mSpeed : {
            default : cc.v2(0,0),
            visible : false,
        },
        mPositionDirty : {
            default : false,
            visible : false
        },
        mPosition : {
            default : cc.v2(0,0),
            visible : false,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
