#!/bin/bash
gnome-terminal --window --working-directory=/home/$USER/ -- /bin/bash -c 'pwd;cd Documents/electron/cli3/;sudo ./xampp-linux-x64-7.2.10-0-installer.run;sudo cp xampp.desktop /usr/share/applications/xampp.desktop; echo Press a key...;read -n1'
