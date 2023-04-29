local wibox = require("wibox")
local awful = require("awful")
local gears = require("gears")
local volume_slider = require("widget.control_center.volume")
local brightness_slider = require("widget.control_center.brightness")

local control_center = wibox.widget {
    {
        brightness_slider,
        layout = wibox.layout.fixed.vertical,
    },
    forced_width = 200,
    forced_height = 200,
    widget = wibox.container.constraint,
}

local control_center_popup = awful.popup {
    widget = control_center,
    visible = false,
    ontop = true,
    bg = "#ffffff",
    shape = gears.shape.rounded_rect,
    border_width = 1,
    border_color = "#777777",
    maximum_width = 200,
    maximum_height = 200,
    opacity = 1,
    placement = awful.placement.right + awful.placement.top,
}
client.connect_signal("focus", function(c)
    control_center_popup.visible = false
end)

local control_center_button = wibox.widget {
    {
        text = "Control Center",
        widget = wibox.widget.textbox,
    },
    buttons = gears.table.join(
        awful.button({}, 1, function()
            control_center_popup.visible = not control_center_popup.visible
        end)
    ),
    widget = wibox.container.background,
}

return control_center_button