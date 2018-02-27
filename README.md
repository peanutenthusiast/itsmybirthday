# #ItsMyBirthday

## WHERE THE FUN AT
You need plans? It's your birthday? Fret not.

## HUH WHAT
ItsMyBirthday retrieves and renders free events in your area and within the day/week/month. Boom.

[Live Demo](itsmybirthday.surge.sh)

## OH SO THAT'S HOW IT WORKS
I implemented a number of technologies--Node.js, React.js, Google's Materialize CSS library, and the Eventbrite and IP API's to create a full-stack that simplifies the stress of making plans when Eventbrite's got it all.

As the site loads, it retrieves your approximate city/location via the IP API, and sends a request to the Node.js specific endpoint, which upon success from the Eventbrite API, sends matching events back to the client-side. The client-side then renders the events, and as you type, your search queries are processed to re-render matching results.

## STRETCH GOALS
Implementing Mapbox technologies to render events around a user's current location

Registering saved events

Rendering a user's events and tickets through MyEvents component


[Backend Here](https://github.com/peanutenthusiast/events)

