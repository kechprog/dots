package main

import (
	"fmt"
	"os/exec"
	"strconv"
	"strings"
)

func getVolumeAndMuteStatus() (int, bool, error) {
	// Get the current volume
	volumeBytes, err := exec.Command("pamixer", "--get-volume").Output()
	if err != nil {
		return 0, false, err
	}
	volume, err := strconv.Atoi(strings.TrimSpace(string(volumeBytes)))
	if err != nil {
		return 0, false, err
	}

	// Get the mute status
	mutedBytes, err := exec.Command("pamixer", "--get-mute").Output()
	if err != nil {
		return 0, false, err
	}
	muted := strings.TrimSpace(string(mutedBytes)) == "true"

	return volume, muted, nil
}

func main() {
	volume, muted, err := getVolumeAndMuteStatus()
	if err != nil {
		fmt.Println(err)
		return
	}

	if volume > 0 && !muted {
		fmt.Println(" ") // Volume is greater than 0 and not muted
	} else {
		fmt.Println("󰝟 ") // Volume is 0 or muted
	}
}