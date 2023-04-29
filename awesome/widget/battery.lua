local wibox = require("wibox")
local awful = require("awful")
local watch = require("awful.widget.watch")
local beautiful = require("beautiful")
local gears = require("gears")

local function create_battery_widget(width)
  ------------------------------------------------
  ---               BATTERY WIDGET             ---
  ------------------------------------------------
  local battery_shape = function(cr, width, height)
    gears.shape.rounded_rect(cr, width, height, 2)
  end


  local battery_progress = wibox.widget {
    max_value        = 100,
    value            = 50,
    border_width     = 1,
    border_color     = "#f5a97f",
    forced_width     = width,
    margins          = 2,
    shape            = battery_shape,
    bar_shape        = battery_shape,
    progressbar_fg   = beautiful.fg_normal,
    background_color = beautiful.bg_normal,
    widget           = wibox.widget.progressbar
  }

  local battery_text = wibox.widget {
    text          = "50%",
    valign        = "center",
    align         = "center",
    forced_width  = 100,
    forced_height = 20,
    widget        = wibox.widget.textbox
  }

  local battery_widget = wibox.widget {
    battery_progress,
    battery_text,
    layout = wibox.layout.stack
  }

  local colors = {
    low  = "#ed8796",
    mid  = "#f5a97f",
    high = "#a6da95"
  }

  watch("acpi", 60, function(_, stdout)
    local percentage = tonumber(stdout:match("(%d?%d?%d)%%"))
    battery_progress:set_value(percentage)
    battery_text.markup = "<span foreground='#181926'>"
        .. percentage .. "%" .. "</span>"

    battery_progress:set_color(
      percentage < 15 and colors.low
      or percentage < 40 and colors.mid
      or colors.high
    )
  end, battery_widget)


  return battery_widget
end

return setmetatable({}, {
  __call = function(_, ...)
    return create_battery_widget(...)
  end
})
