#!/usr/bin/bash
echo "{\"hour\": \"$(date +%I)\", \"min\": \"$(date +%M)\", \"meridian\": \"$(date +%p)\"}" | jq
