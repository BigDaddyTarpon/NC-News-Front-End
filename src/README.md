The deployed version is available on: https://steve-nc-news-front-end.netlify.app/

This project is the Front End to work with the earlier Back End, creating a complete full stack application. It uses react and JSX.
The back end is available on https://steves-nc-news-project.onrender.com

This is built on Node version 21.1.0

To run this project locally

1. clone the repo https://github.com/BigDaddyTarpon/NC-News-Front-End
2. open the repo in VS Code or similar.
3. run npm install to automatically install dependencies.
4. to run a local server type npm run dev or npm run start and navigate your browser to http://localhost:5173/

This should dispay the welcome page of the app.

Instructions and Description
The welcome page describes the app. There are buttons at the bottom to test the sound with a simple counter in both sound and silent mode.
The first nav bar and header are visible, and will remain visible throughout. For ease the demonstartion version includes a default logged in user, but any other user account can also be logged in. A logged in user can post new comments and delete current or historical comments. The 'delete comment' option only shows for the user's own comments.
There is one additional nav bar which is context specific and only visible when viewing a list of articles. This nav bar allows sorting and ordering of the displayed articles. To save space it is not displayed unless the user is in a situation where it is useful.
Another example of a context specific navbar is the add comments option. When viewing a single article, the add comments button becomes available, clicking it will addionally open a comment box to add a comment and an option to either submit the comment or close the comment box.
Comments are displayed straight away using state, and posted in the background. This means the new user comment appears on the top, even if other users are posting symultaneously. Only if there is an error (such as an internet outage) which prevents the actual comment appearing in the common space, the user is allerted that the comment did not post even though it was seen locally.
If a user switches viws to another article, topic, home etc then returns the 'real' comment order will show. This will make more sense in the event of a conversation where users reply to each other. Although this not is primarily a live message board.

Technical decisions
I used the z-axis to make sure that the selected buttons don't ride over the top of the menus when scrolling. Default behaviour will have only the selected button rise past the menu out of view on a scroll, like anything else, but there is a point where it has not left the top of the screen and by default will be visible over the nav bar at the top of the page.

I used sticky to tack the header, options and nav bar(s) in place.But on a small screen, when multiple layers of nav bars are available (i.e. when viewing a range of articles a context-only nav bar allows sorting by various properties, or when posting a comment) allow the in use nav bar to ride over the top of the other nav bar stopping over the header NC NEWS area. Having the context menus occupy the space of the header while scrolling offers an advantage in user experience as more screen is available to view comments, or a reply can be made whiel viewing a comment lower in the list, but without losing screen area available to view comments . This is particularly important on smaller screens. I experiemnted with allowing the context menus to leave the view, (but a user viewing a comment deep in the list was unable to reply while viewing the comment), with keeping the contect menus in their original position (which is fine on a large screen but offers too little viewing area on a smaller screen). While a media qury could be used to differentiate behaviour patterns, the simple solution of using the header area under the very specific situation of context headers being visible seems like the best overall solution, coming only at the cost of not seeing the title NC NEWS or the options settings for dark, mute and connection speed.

I implemented sound, a single 'pop' sound on click to provide user feedback on a successful click. This adds to the colour change of buttons and the use of scale to make them grow larger when clicked. Use of css on focus allowed the addition of a heavy black bored to highlight even more when a successful click had happened. This is both useful feedback to enhance user experience and will hopefully reduce the tendency to multiple click if using a slow internet connection.
