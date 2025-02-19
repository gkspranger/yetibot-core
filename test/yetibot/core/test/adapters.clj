(ns yetibot.core.test.adapters
  (:require [yetibot.core.adapters :as a]
            [yetibot.core.adapters.adapter :as aa]
            [clojure.test :refer [function?]]
            [midje.sweet :refer [=> fact facts provided anything
                                 every-checker contains just throws
                                 with-state-changes before as-checker]]
            [yetibot.core.config :refer [get-config]]))

(facts
 "about adapters-config"
 (fact
  "merges adapter from config"
  (a/adapters-config) => (every-checker map?
                                        not-empty
                                        (contains a/web-adapter-config)
                                        (contains {:example {:type "slack"
                                                             :token "abc123"}}))
  (provided (get-config anything [:adapters]) =>
            {:value {:example {:type "slack"
                               :token "abc123"}}}))
 (fact
  "returns only web adapter config if no legit adapter is present in confif"
  (a/adapters-config) => (every-checker map?
                                        not-empty
                                        (just a/web-adapter-config))
  (provided (get-config anything [:adapters]) =>
            {:error :not-found})))

(facts
 "about make-adapter"
 (fact
  "makes slack adapter"
  (instance? yetibot.core.adapters.slack.Slack
             (a/make-adapter {:type "slack"})) => true)
 (fact
  "makes IRC adapter"
  (instance? yetibot.core.adapters.irc.IRC
             (a/make-adapter {:type "irc"})) => true)
 (fact
  "makes web adapter"
  (instance? yetibot.core.adapters.web.Web
             (a/make-adapter {:type "web"})) => true)
 (fact
  "makes mattermost adapter"
  (instance? yetibot.core.adapters.mattermost.Mattermost
             (a/make-adapter {:type "mattermost"})) => true)
 (fact
  "throws exception for unknown adapter"
  (a/make-adapter {:type "throwme"}) => (throws Exception)))

(facts
 "about stop"
 (with-state-changes [(before :facts
                              (aa/register-adapter! "some-uuid" {:config {:type "web"}}))]
   (fact
    "stops and drops all active adapters"
    ;; prove the adapter exists
    (aa/active-adapters) => '({:config {:type "web"}})
    ;; stop all adapters
    (a/stop) => {}
    (provided (run! anything anything) => {})
    ;; prove adapter no longers exists
    (aa/active-adapters) => nil)))

(facts
 "about report-ex"
 (fact
  "it will run the provided function that doesn't throw an exception and
   return its value"
  (a/report-ex (fn [] true)
               :valid-func) => true)

 (fact
  "it will run the provided function, catch the exception, log it and
   return nil"
  (a/report-ex (fn [] (throw
                       (Exception. "i am suppose to throw an exception")))
               :invalid-func) => nil))

(facts
 "about ->registerable-adapter"
 (fact
  "it will return a map containing the config info for a specific adapter,
   which contains the name and type, as well as a predicate showing connection"
  (let [mu :myuuid
        ac {:type "web"}]
    (a/->registerable-adapter mu ac)
    => (every-checker map?
                      not-empty
                      (contains {:config {:name :myuuid
                                          :type "web"}})
                      (contains {:connected? anything})))))

(facts
 "about register-adapters!"
 (fact
  "it will register all adapters found by the adapter config"
  (let [mu :myuuid
        ac {:type "web"}]
    (a/register-adapters!) => nil
    (provided (a/adapters-config) => [[mu ac]]
              (aa/register-adapter!
               mu (a/->registerable-adapter mu ac)) => nil))))

(facts
 "about start-adapters!"
 (fact
  "it will attempt to register all active adapters"
  (let [mu :im-an-adapter]
    (a/start-adapters!) => nil
    (provided (aa/active-adapters) => [mu]
              (a/report-ex (as-checker function?)
                           (aa/platform-name mu)) => :did-try))))
