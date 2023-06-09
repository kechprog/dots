pcall(require, "luarocks.loader")
require("awful.autofocus")
require("awful.hotkeys_popup.keys")
local awful = require("awful")
local naughty = require("naughty")
local gears   = require("gears")

if awesome.startup_errors then
  naughty.notify({ preset = naughty.config.presets.critical,
    title = "Oops, there were errors during startup!",
    text = awesome.startup_errors })
end

do
  local in_error = false
  awesome.connect_signal("debug::error", function(err)
    -- Make sure we don't go into an endless error loop
    if in_error then return end
    in_error = true

    naughty.notify({ preset = naughty.config.presets.critical,
      title = "Oops, an error happened!",
      text = tostring(err) })
    in_error = false
  end)
end

-- global variables



awful.layout.layouts = {
  awful.layout.suit.tile,
  awful.layout.suit.floating,
}

require 'theme'
require 'bars'
require 'callbacks'
require 'clients'
require 'keymap'
require 'switcher'
require 'restore_floating_pos'

collectgarbage("setpause", 160)
collectgarbage("setstepmul", 400)

gears.timer.start_new(10, function()
  collectgarbage("step", 20000)
  return true
end)
