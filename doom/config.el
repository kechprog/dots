(setq vterm-module-cmd '("vterm" "-e" "less"))

(setq user-full-name "Eduard Kechedzhiev"
      user-mail-address "ed.kechedzhiev@gmail.com")

(setq doom-font (font-spec :family "FiraMono Nerd Font" :size 18 :weight 'normal)
     doom-big-font (font-spec :family "FiraMono Nerd Font" :size 24))

(setq doom-theme 'doom-vibrant)
(setq display-line-numbers-type 'relative)

(setq org-directory "~/org/")

;;; Keybinds ;;;
(map! :n "C-t" #'vterm)
(map! :i "C-t" #'vterm)

(map! :leader "ec" #'ellama-code-complete
      :desc "complete")

(map! :leader "ea" #'ellama-chat
      :desc "ask general")

(map! :leader "es" #'ellama-provider-select
      :desc "select provider")

(map! :leader "eg" #'ellama-code-add
      :desc "generate")


(after! ellama
        (require 'llm-ollama)
        (setq ellama-provider
                (make-llm-ollama
                        :chat-model "llama3.2:3b"
                        :embedding-model "llama3.2:3b"))
        (setq ellama-providers
              '(("command-r" . (make-llm-ollama
                        :chat-model "command-r:35b-08-2024-q4_K_M"
                        :embedding-model "command-r:35b-08-2024-q4_K_M"))
              (("mistral" . (make-llm-ollama
                        :chat-model "mistral-nemo:12b-instruct-2407-q4_K_S"
                        :embedding-model "mistral-nemo:12b-instruct-2407-q4_K_S"))))))
