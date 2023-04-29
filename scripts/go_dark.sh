#!/bin/bash

rm -r ~/.config/gtk-4.0/*
ln -s ~/.themes/Catppuccin-Macchiato-Standard-Peach-Dark/gtk-4.0/* ~/.config/gtk-4.0
rm ~/.config/assets
ln -s ~/.themes/Catppuccin-Macchiato-Standard-Peach-Dark/gtk-4.0/assets ~/.config/assets
