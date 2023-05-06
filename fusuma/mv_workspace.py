#!/usr/bin/python

import os,sys

if __name__ == "__main__":
    current_workspace = int(os.popen("wmctrl -d | grep '*' | cut -d ' ' -f1").read())

    print(current_workspace)
    if sys.argv[1] == "left":
        if current_workspace == 0:
            exit()
        os.system(f"xdotool key alt+{current_workspace}")
    elif sys.argv[1] == "right":
        if current_workspace == 8:
            os.system("xdotool key alt+0")
        os.system(f"xdotool key alt+{current_workspace+2}")
    else:
        print("ERROOOOR!!!!")
