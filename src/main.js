var greet = require('./greet.js');
/**
 * 为按钮绑定弹框问候
 */
function bindButtonElementEvent(btnElement) {
    btnElement.addEventListener('click', function () {
        greet();
    });
}

window.bindButtonElementEvent = bindButtonElementEvent;