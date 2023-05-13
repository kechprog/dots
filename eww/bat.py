#!/usr/bin/pypy3

import subprocess
import json 

def battperc():
    battperc = subprocess.run(
        ["acpi", "-b"],
        capture_output=True,
        text=True,
    ).stdout

    [perc, timerem] = battperc.split(',')[1:3]
    perc = perc.strip().replace('%', '')
    timerem = timerem.strip().replace('remaining', '').replace('until charged', '').strip().replace(' ', '')
    return (int(perc), timerem[:-3])

def batclass(perc):
    if 0 <= perc <= 20:
        return "low"
    elif 20 < perc <= 60:
        return "medium"
    elif 60 < perc <= 100:
        return "high"

def baticon(perc):
          #   0   10   20   30   40   50   60   70   80   90   100
    icons = ['󱃍', '󰁺', '󰁻', '󰁼', '󰁽', '󰁾', '󰁿', '󰂀', '󰂁', '󰂂', '󰁹']
    return icons[perc // 10]

if __name__ == "__main__":
    perc, timerem = battperc()
    d = {
        "icon":       baticon(perc), 
        "percentage": perc,
        "timerem":    timerem,
        "class":      batclass(perc)
    }
    print(json.dumps(d))
