
(ns guestbook.ws
  (:require [taoensso.sente :as sente]))

(let [connection (sente/make-channel-socket! "/ws" {:type :auto})]
  (def ch-chsk (:ch-recv connection))
  (def send-message! (:send-fn connection)))

(defn state-handler [{:keys [?data]}]
  (.log js/console (str "state changed: " data)))

(defn handshake-handler [{:keys [?data]}]
  (.log js/console (str "connection established: " ?data)))

(defn default-event-handler [ev-msg]
  (.log js/console (str "Unhandled event: " ev-msg)))

(defn event-msg-handler [& [{:keys [message state handshake]
                             :or {state state-handler
                                  handshake handshake-handler}}]]
  (fn [ev-msg]
    (case (:id ev-msg)
      :chsk/handshake (handshake ev-msg)
      :chsk/state (state ev-msg)
      :chsk/recv (message ev-msg)
      (default-event-handler ev-msg))))

(def router (atom nil))

(defn stop-router! []
  (when-let [stop-f @router] (stop-f)))

(defn start-router! [message-handler]
  (stop-router!)
  (reset! router (sente/start-chsk-router!
                  ch-chsk
                  (event-msg-handler
                   {:message message-handler
                    :state handshake-handler
                    :handshake state-handler}))))

;; ;; You should Add! (not in textbook!)
;; (defn connect! [url receive-handler]
;;   (if-let [chan (js/WebSocket. url)]
;;     (do
;;       (set! (.-onmessage chan) (receive-message! receive-handler))
;;       (reset! ws-chan chan))
;;     (throw (js/Error. "Websocket connection failed!"))))