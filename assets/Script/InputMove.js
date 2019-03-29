// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var InputMove = cc.Class({
    extends: cc.Component,

    properties: {
        mEnableTouch : {
            default : false,
            visible : false
        },
        mInputNode : cc.Node,
        mMaxDistance : {
            default : 100,
            tooltip : "最大拖动距离",
            displayName : "拖动距离",
            min : 100,
            max : 200,
            step : 10,
        }
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.mInputNode.position = cc.v2(0,0);
        this.EnableTouch();
    },

    EnableTouch () {
        if (this.mEnableTouch)
            return;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.mEnableTouch = true;
    },

    DisableTouch () {
        if (!this.mEnableTouch)
            return;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.mEnableTouch = false;
    },

    onTouchStart (event) {
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();//获得当前触摸点的坐标
        var moveToPos = this.node.convertToNodeSpaceAR(touchLoc);
        if (moveToPos.mag() <= this.mMaxDistance)
        {
            this.mInputNode.position = moveToPos;
        }
        else
        {
            var direction = moveToPos.normalize();
            this.mInputNode.position = direction.mul(this.mMaxDistance);
        }
    },
    onTouchMove (event) {
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();//获得当前触摸点的坐标
        var moveToPos = this.node.convertToNodeSpaceAR(touchLoc);
        if (moveToPos.mag() <= this.mMaxDistance)
        {
            this.mInputNode.position = moveToPos;
        }
        else
        {
            var direction = moveToPos.normalize();
            this.mInputNode.position = direction.mul(this.mMaxDistance);
        }
    },
    onTouchEnd (event) {
        this.mInputNode.position = cc.v2(0,0);
    },

    getDirection() {
        return this.mInputNode.position;
    }

    // update (dt) {},
});

module.exports = InputMove;