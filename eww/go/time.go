package main

import (
	"encoding/json"
	"fmt"
	"time"
)

type TimeFormat struct {
	Hour     string `json:"hour"`
	Minute   string `json:"min"`
	Meridian string `json:"meridian"`
}

func main() {
	currentTime := time.Now()

	t := TimeFormat{
		Hour:     currentTime.Format("03"), // 12-hour format
		Minute:   currentTime.Format("04"), // minute format
		Meridian: currentTime.Format("PM"), // AM/PM format
	}

	jsonData, err := json.MarshalIndent(t, "", "    ") // Indented for pretty print like jq
	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Println(string(jsonData))
}
