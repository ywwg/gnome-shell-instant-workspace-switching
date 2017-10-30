const Lang = imports.lang;
const Tweener = imports.ui.tweener;

const WindowManager = imports.ui.windowManager;

const wm = imports.ui.main.wm;

let myhandlerID;

function init() {
}

function removeSwitchTweens(shellwm, from, to, direction) {
    let switchData = this._switchData;
    if (!switchData) {
        return;
    }
    Tweener.removeTweens(switchData.inGroup);
    Tweener.removeTweens(switchData.outGroup);
    // We've removed the onComplete call so we must call it explicitly.
    this._switchWorkspaceDone(shellwm);
}

function enable() {
    // The workspace switch animation is triggered by a signal, so we can't
    // easily replace the function or bind to a new function because the old
    // binding will still exist.  Instead, add an additional binding that
    // blows away the animations after they are created.
    myhandlerID = global.window_manager.connect('switch-workspace', Lang.bind(wm, removeSwitchTweens));
}

function disable() {
    global.window_manager.disconnect(myhandlerID);
}

