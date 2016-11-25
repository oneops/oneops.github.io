# Email Notification Relay

OneOps introduced notification relays at environment level. A notification relay allows notification filtering and routing configuration for a given environment. All notification for a given environment will be matched against existing environment relays for filtering based on source, severity, subject/text and ns path to specified list destination addresses.

## Relay Location

edit environment->relay tab

## Additional Information on Relay


* There is a default relay available to all environments, which route alerts to assembly owner. Users have the privilege to delete default relay
* Environment can have multiple relays.
* Relay can be enabled/disabled.

## Relay Attributes


* **Name:**
* **Destination Email:** comma list of email addresses to be alerted
* **Severity Filters:
* **Source Filters:
* **NS Path:** blank nspath defaults to all notifications for the environment. Additional nspath can be added for platforms specific notification e.g
  * /<org-name>/<assembly-name>/<env-name>/manifest/<platform-name>/<platform-version> -> bulk action notification
  * /<org-name>/<assembly-name>/<env-name>/bom/<platform-name>/<platform-version> -> single operation notification
* **Message Pattern:** Regexp to match against subject or text of notification. If blank notifications will not be filtered
* **Component Correlation:** If this flag is turned on, email notifications will be sent only at the state change of component. Suppose tomcat component has 20 instances and 5 instances are flipped to unhealthy state.
  * One email will be sent:
    * When state of first few instances changes to unhealthy
    * All instances get recovers back to good state
  * No email will be sent:
    * If one or more instances under this component go unhealthy
    * If one or more instances recover from unhealthy state however some continues to remain unhealthy
    * For repair action execution

Relay configuration management is available as "relays" tab on the environment transition edit page.

