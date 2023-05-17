package main

import (
	"encoding/json"
	"fmt"
	"os/exec"
	"strconv"
	"strings"
)

type Workspace struct {
	Idx   int    `json:"idx"`
	Name  string `json:"name"`
	Class string `json:"class"`
}

func getDwmWorkspaceNames() ([]Workspace, error) {
	cmd := exec.Command("xprop", "-root", "_NET_DESKTOP_NAMES")
	output, err := cmd.Output()
	if err != nil {
		return nil, err
	}

	if strings.Contains(string(output), "_NET_DESKTOP_NAMES") {
		workspaces := make([]Workspace, 0)
		workspaceString := strings.Split(string(output), "=")[1]
		workspaceString = strings.Trim(workspaceString, "\"\n ")
		for idx, workspace := range strings.Split(workspaceString, "\", \"") {
			workspaces = append(workspaces, Workspace{Idx: idx + 1, Name: workspace, Class: "inactive"})
		}
		return workspaces, nil
	}

	return nil, nil
}

func activeWs() (int, error) {
	cmd := exec.Command("wmctrl", "-d")
	output, err := cmd.Output()
	if err != nil {
		return 0, err
	}

	lines := strings.Split(string(output), "\n")
	for _, line := range lines {
		if strings.Contains(line, "*") {
			fields := strings.Fields(line)
			activeWorkspace, err := strconv.Atoi(fields[0])
			if err != nil {
				return 0, err
			}
			return activeWorkspace, nil
		}
	}
	return 0, nil
}

func main() {
	workspaces, err := getDwmWorkspaceNames()
	if err != nil {
		fmt.Println(err)
		return
	}

	activeWorkspace, err := activeWs()
	if err != nil {
		fmt.Println(err)
		return
	}

	for i := range workspaces {
		if workspaces[i].Idx == activeWorkspace+1 {
			workspaces[i].Class = "active"
			break
		}
	}

	jsonData, err := json.Marshal(workspaces)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(string(jsonData))
}
