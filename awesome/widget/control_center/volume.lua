local wibox = require("wibox")
local beautiful = require("beautiful")
local gears = require("gears")

local volume_slider = wibox.widget {
    bar_shape           = gears.shape.rounded_rect,
    bar_height          = 3,
    bar_color           = beautiful.bg_focus,
    handle_color        = beautiful.fg_normal,
    handle_shape        = gears.shape.circle,
    handle_width        = 15,
    handle_border_color = beautiful.bg_focus,
    handle_border_width = 1,
    widget              = wibox.widget.slider,
}

return volume_slider
