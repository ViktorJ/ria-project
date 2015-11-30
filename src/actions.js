module.exports = {
    initial: function(){
        return {type: 'INITIAL'};
    },
    alertLoginFail: function(){
        return {type: 'LOGIN_FAIL'};
    },
    alertRegisterSucc: function(){
        return {type: 'REGISTER_SUCC'};
    },
    alertRegisterFail: function(){
        return {type: 'REGISTER_FAIL'};
    }
};