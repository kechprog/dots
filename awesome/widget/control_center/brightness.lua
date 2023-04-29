local wibox = require("wibox")
local gears = require("gears")

local progress_bar = wibox.widget {
	max_value = 100,
	value = 40,
	forced_height = 10,
	forced_width = 100,
	paddings = 1,
	margins = 1,
	border_width = 1,
	border_color = "#777777",
	background_color = "#ff0000",
	color = "#00ff00",
	shape = gears.shape.rounded_bar,
	widget = wibox.widget.progressbar
}

local slider_widget = wibox.widget {
    bar_shape           = gears.shape.rounded_rect,
    bar_height          = 10,
    bar_color           = "#CCCCCC00",
    -- bar_active_color    = "#4CAF5000",
    handle_shape        = gears.shape.circle,
    handle_width        = 20,
    handle_border_width = 1,
    handle_border_color = "#000000",
	handle_color     = "#CCCCCC",
    widget              = wibox.widget.slider,
}



return wibox.widget {
	progress_bar,
	slider_widget,
	layout = wibox.layout.stack
}