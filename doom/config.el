(setq user-full-name "John Doe"
      user-mail-address "john@doe.com")

(map! :leader
      :desc "Close current buffer"
      "q q" #'kill-this-buffer)

(map! :leader
      :desc "Save buffer"
      "w" #'save-buffer)

(map! :leader
      :desc "Toggle Treemacs"
      "e" #'treemacs)

(map! :leader
      :desc "Focus on Treemacs"
      "E" #'treemacs-select-window)

(map! :n "L" #'next-buffer
      :n "H" #'previous-buffer)

(map! :leader
      :desc "find file"
      "s f" #'find-file)

(map! :leader
      :desc "search current buffer"
      "s s" #'consult-line)

(map! :leader
      :desc "Toggle comments"
      "/" #'evilnc-comment-or-uncomment-lines)

(map! :leader
      :desc "format"
      "l f" #'+format/region-or-buffer)

(after! vertico
  (map! :map vertico-map "TAB" #'vertico-next)
  (map! :map vertico-map "<backtab>" #'vertico-previous))

;;;; UNMAPPED DEFUALTS ;;;;
(map! :leader
      "b [" nil
      "b ]" nil
      "f s" nil
      "f f" nil
      "s b" nil
      "c f" nil)


(setq doom-font (font-spec :family "Fira Code Nerd Font" :size 20))
(setq display-line-numbers-type t)
(setq org-directory "~/org/")

(setq doom-theme 'catppuccin)
(after! catppuccin
  (setq catppuccin-flavor 'macchiato)
  (catppuccin-reload))

;; remove auto format
(add-hook! 'before-save-hook #'+format/buffer)
(remove-hook! 'before-save-hook #'+format/buffer)

;; Whenever you reconfigure a package, make sure to wrap your config in an
;; `after!' block, otherwise Doom's defaults may override your settings. E.g.
;;
;;   (after! PACKAGE
;;     (setq x y))
;;
;; The exceptions to this rule:
;;
;;   - Setting file/directory variables (like `org-directory')
;;   - Setting variables which explicitly tell you to set them before their
;;     package is loaded (see 'C-h v VARIABLE' to look up their documentation).
;;   - Setting doom variables (which start with 'doom-' or '+').
;;
;; Here are some additional functions/macros that will help you configure Doom.
;;
;; - `load!' for loading external *.el files relative to this one
;; - `use-package!' for configuring packages
;; - `after!' for running code after a package has loaded
;; - `add-load-path!' for adding directories to the `load-path', relative to
;;   this file. Emacs searches the `load-path' when you load packages with
;;   `require' or `use-package'.
;; - `map!' for binding new keys
;;
;; To get information about any of these functions/macros, move the cursor over
;; the highlighted symbol at press 'K' (non-evil users must press 'C-c c k').
;; This will open documentation for it, including demos of how they are used.
;; Alternatively, use `C-h o' to look up a symbol (functions, variables, faces,
;; etc).
;;
;; You can also try 'gd' (or 'C-c c d') to jump to their definition and see how
;; they are implemented.
