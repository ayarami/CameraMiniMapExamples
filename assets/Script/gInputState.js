// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

function gInputState () {
    this.mPos = {
        default : cc.v2(0,0),
        set (value) {
            if (typeof value != 'object')
                return;
            if (value.x == undefined || value.y == undefined)
                return;
            this.mPos.x = value.x;
            this.mPos.y = value.y;
            this.mNormalize = this.mPos.normalize();
        },
        get () {
            return this.mPos;
        }
    };

    this.mNormalize = cc.v2(0,0);
};
    
var gInputStateIns = new gInputState();
    
module.exports = gInputStateIns;
