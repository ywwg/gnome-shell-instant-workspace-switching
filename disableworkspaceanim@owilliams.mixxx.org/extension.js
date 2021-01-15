const Lang = imports.lang;

const wm = imports.ui.main.wm;

let _switchWorkspaceId;

function init() {
}

function removeSwitchTweens(shellwm, from, to, direction) {
    let switchData = this._switchData;
    if (!switchData) {
        return;
    }
    this._switchData.container.remove_all_transitions();
    // We've removed the onComplete call so we must call it explicitly.
    this._switchWorkspaceDone(shellwm);
}

function enable() {
    // The workspace switch animation is triggered by a signal, so we can't
    // easily replace the function or bind to a new function because the old
    // binding will still exist.  Instead, add an additional binding that
    // removes the animations after they are created.
    _switchWorkspaceId = global.window_manager.connect('switch-workspace', Lang.bind(wm, removeSwitchTweens));
}

function disable() {
    global.window_manager.disconnect(_switchWorkspaceId);
}

