pcall(require, "luarocks.loader")
require("awful.autofocus")
require("awful.hotkeys_popup.keys")
local gears = require("gears")
local awful = require("awful")
local wibox = require("wibox")
local beautiful = require("beautiful")
local menubar = require("menubar")
local hotkeys_popup = require("awful.hotkeys_popup")
local func_keys = require("func_keys")


local TERMINAL = "kitty"
local MODKEY = "Mod1"


-- launcher widget
local mylauncher = awful.widget.launcher({
  image = beautiful.awesome_icon,
  menu = awful.menu({ items = {
    { "open terminal", TERMINAL },
    { "restart", awesome.restart },
    { "quit", function() awesome.quit() end },
  } })
})


local taglist_buttons = gears.table.join(
  awful.button({}, 1, function(t) t:view_only() end),
  awful.button({ MODKEY }, 1, function(t)
    if client.focus then
      client.focus:move_to_tag(t)
    end
  end),
  awful.button({}, 3, awful.tag.viewtoggle),
  awful.button({ MODKEY }, 3, function(t)
    if client.focus then
      client.focus:toggle_tag(t)
    end
  end),
  awful.button({}, 4, function(t) awful.tag.viewnext(t.screen) end),
  awful.button({}, 5, function(t) awful.tag.viewprev(t.screen) end)
)


awful.screen.connect_for_each_screen(function(s)
  -- Each screen has its own tag table.
  awful.tag({ "1", "2", "3", "4", "5" }, s, awful.layout.layouts[0])

  for _, tag in ipairs(s.tags) do
    tag.master_width_factor = 0.55
  end

  local mylayoutbox = awful.widget.layoutbox(s)
  mylayoutbox:buttons(gears.table.join(
    awful.button({}, 1, function() awful.layout.inc(1) end),
    awful.button({}, 3, function() awful.layout.inc(-1) end),
    awful.button({}, 4, function() awful.layout.inc(1) end),
    awful.button({}, 5, function() awful.layout.inc(-1) end)
  ))


  local mytaglist = awful.widget.taglist {
    screen  = s,
    filter  = awful.widget.taglist.filter.all,
    buttons = taglist_buttons
  }


  -- Create an actual bar
  s.mywibox = awful.wibar({ position = "top", screen = s }):setup {
    layout = wibox.layout.align.horizontal,

    { -- Left widgets
      layout = wibox.layout.fixed.horizontal,
      mylauncher,
      mytaglist,
    },

    { -- Middle widget,
      layout = wibox.layout.align.horizontal,
      expand = "none",
      nil,
      nil,
    },

    { -- Right widgets
      layout = wibox.layout.fixed.horizontal,
      require("widget.control_center"),
      require("widget.battery")(60),
      wibox.widget.systray(),
      mylayoutbox,
    },
  }
end)
