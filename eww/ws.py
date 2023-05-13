#!/usr/bin/pypy3

import subprocess
import json

def get_dwm_workspace_names():
    dwm_status = subprocess.run(
        ["xprop", "-root", "_NET_DESKTOP_NAMES"],
        capture_output=True,
        text=True,
    ).stdout

    if "_NET_DESKTOP_NAMES" in dwm_status:
        workspace_string = dwm_status.split('=')[-1].strip()
        workspace_string = workspace_string.strip('"')
        return [ {
            "idx":  idx+1,
            "name": workspace.strip(),
            "class": "inactive"
        } for idx, workspace in enumerate(workspace_string.split('", "'))]
    else:
        return []

def active_ws():
    wmctrl_output = subprocess.run(
        ["wmctrl", "-d"],
        capture_output=True,
        text=True,
    ).stdout

    lines = wmctrl_output.splitlines()
    for line in lines:
        if '*' in line:  # This line represents the active workspace
            return int(line.split()[0])  # The workspace number is the first field

    return None  # Return None if no active workspace was found



def main():
    workspaces = get_dwm_workspace_names()
    active_workspace = active_ws()

    if active_workspace is not None:
        for workspace in workspaces:
            if workspace["idx"] == active_workspace + 1:  # Indices in wmctrl start at 0
                workspace["class"] = "active"
                break

    workspaces = json.dumps(workspaces)
    print(workspaces)


if __name__ == "__main__":
    main()
