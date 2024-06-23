local wezterm = require 'wezterm'

local function color_scheme(appearance)
  if appearance:find "Dark" then
    return "Catppuccin Macchiato"
  else
    return "Catppuccin Latte"
  end
end

local function should_run_wayland()
  if os.getenv("XDG_CURRENT_DESKTOP") == "GNOME" then
    return false -- for decoration purposes
  else
    return true
  end
end

return {
  enable_wayland = should_run_wayland(),
  window_close_confirmation = 'NeverPrompt',
  audible_bell = "Disabled",
  hide_tab_bar_if_only_one_tab = true,
  tab_bar_at_bottom = true,
  use_fancy_tab_bar = false,
  show_new_tab_button_in_tab_bar = false,

  color_scheme = color_scheme(wezterm.gui.get_appearance()),
  font = wezterm.font "Fira Code Nerd Font Mono",
  font_size = 16,
}
