# Gnome-shell Instant Workspace Switching

A gnome-shell extension that eliminates the switch time between workspaces without disabling other animations

## Installation

1. Copy the folder disableworkspaceanim@owilliams.mixxx.org/ to $HOME/.local/share/gnome-shell/extensions
   (If the extensions/ folder doesn't exist, create it)

1. Either log out and log back in, or restart gnome-shell by pressing Alt-F2, then type r and hit enter.

1. Open gnome-tweak-tool and enable the extension.  It should take effect immediately.

## Publishing

1. Zip the files with:

   ```zip -j disableworkspaceanim@owilliams.mixxx.org.zip disableworkspaceanim@owilliams.mixxx.org/*
   ```

1. Go to https://extensions.gnome.org/upload/ and follow the instructions

## Debugging Tips

### Track log output

```bash
journalctl -f /usr/bin/gnome-shell
```

### Restart gnome-shell safely

```bash
busctl --user call org.gnome.Shell /org/gnome/Shell org.gnome.Shell Eval s 'Meta.restart("Restarting…")'
```