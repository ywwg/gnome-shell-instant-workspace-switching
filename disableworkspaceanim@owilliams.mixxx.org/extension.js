const Lang = imports.lang;
const wm = imports.ui.main.wm;

let _switchWorkspaceId;

function init() {
}

function cancelAnimation(shellwm, from, to, direction) {
    this._workspaceAnimation.cancelSwitchAnimation();
    this._switchWorkspaceDone();
}

function enable() {
    // The workspace switch animation is triggered by a signal, so we can't
    // easily replace the function or bind to a new function because the old
    // binding will still exist.  Instead, add an additional binding that
    // removes the animations after they are created.
    _switchWorkspaceId = global.window_manager.connect('switch-workspace', Lang.bind(wm, cancelAnimation));
}

function disable() {
    global.window_manager.disconnect(_switchWorkspaceId);
}

