### Description ###

Front-end dashboard built for (hypothetical) employees at an event company to review and flag potentially fraudulent events (in real time) based on a data model that surfaces the likelihood of an event being fraudulent.

This was built by [JBallin](https://github.com/JBallin) and [hyperrex](https://github.com/hyperrex) in less than 2 days as part of a collaborative case study in partnership with 4 members from Galvanize's Data Science Immersive. The Data Science team analyzed training data to build the model as well as the API and the front-end pulls in the latest events in real-time.

*NOTE: The data is too sensitive to share publicly, so this uses made-up events from a simple [API](https://github.com/JBallin/fraud-api/).*

### Usage ###

Review all `?` events (shown as unread) by toggling them to either be thumbs up (not fraud) or thumbs down (fraud). 
The state/db is updated (onClick) and persists in the database!

### Screenshot ###

![screenshot](https://i.imgur.com/WBh1TI5.png)
