# Timer in Electron with React
Pretty much the title. The plan is to make it as pretty as possible.

## Using
* React with useContext for state management. Might migrate to redux if the app gets big enough.
* Electron to build the standalone app.

# Roadmap
Down the line, just to make this case-study as functional as possible, I'll try add the
following functionality to the app:

* UI Cleaning
* A proper custom icon 
* Sound on the notification
    * Customize notification sounds
    * Add a default set of sounds for the notification
* Sequenced timers (For example, one to work, one to break)
* Custom notification messages for the timers

I'll try to make this my long-term prroject, mostly because it's good practice in my preferred language and it's super fun to build stuff with electron.

# Known issues
* When going into settings with an active timer and going back the app shows the set timer screen, and when that set timer button is clicked, the app then goes back to the original timer that was there