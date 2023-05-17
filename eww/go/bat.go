package main

import (
	"encoding/json"
	"fmt"
	"os/exec"
	"strconv"
	"strings"
)

func battperc() (int, string, error) {
	cmd := exec.Command("acpi", "-b")
	output, err := cmd.Output()
	if err != nil {
		return 0, "", err
	}

	data := strings.Split(string(output), ",")[1:3]
	perc, err := strconv.Atoi(strings.ReplaceAll(strings.TrimSpace(data[0]), "%", ""))
	if err != nil {
		return 0, "", err
	}
	timerem := strings.ReplaceAll(strings.ReplaceAll(strings.TrimSpace(data[1]), "remaining", ""), "until charged", "")
	timerem = strings.ReplaceAll(strings.TrimSpace(timerem), " ", "")
	return perc, timerem[:len(timerem)-3], nil
}

func batclass(perc int) string {
	if perc >= 0 && perc <= 20 {
		return "low"
	} else if perc > 20 && perc <= 60 {
		return "medium"
	} else if perc > 60 && perc <= 100 {
		return "high"
	}
	return "unknown"
}

func baticon(perc int) string {
	icons := []string{"󱃍", "󰁺", "󰁻", "󰁼", "󰁽", "󰁾", "󰁿", "󰂀", "󰂁", "󰂂", "󰁹"}
	return icons[perc/10]
}

type BatteryStatus struct {
	Icon       string `json:"icon"`
	Percentage int    `json:"percentage"`
	Timerem    string `json:"timerem"`
	Class      string `json:"class"`
}

func main() {
	perc, timerem, err := battperc()
	if err != nil {
		fmt.Println(err)
		return
	}
	d := BatteryStatus{
		Icon:       baticon(perc),
		Percentage: perc,
		Timerem:    timerem,
		Class:      batclass(perc),
	}
	jsonData, err := json.Marshal(d)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(string(jsonData))
}
