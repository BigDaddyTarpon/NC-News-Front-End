FrontEnd NC News project.

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
There is two additional nav bars which is context specific, one and only visible when viewing a list of articles, offering sort and order functionality only usefull while viewing the list of articels. To save space it is not displayed unless the user is in a situation where it is useful.
the other example of a context specific navbar is the add comments option. When viewing a single article, the add comments button becomes available, clicking it will addionally open a comment box to add a comment and an option to either submit the comment or close the comment box.
Both of these context specific nav bars will scroll with their content, but will not scroll out of view, rather they will stick to the top of the page. This does reduce access to the mute and dark mode options, but it is far more likely a user searching articles will want to sort or order those than it is likely the user will want to change options. Similarly, the nav bar for showing, posting new comments is more likely to be useful while browsing comments. 

Newly posted comments are displayed straight away using state, and posted in the background. This means the new user comment appears on the top, even if other users are posting symultaneously. Only if there is an error (such as an internet outage) which prevents the actual comment appearing in the common space, the user is allerted that the comment did not post even though it was seen locally.
If a user switches viws to another article, topic, home etc then returns the 'real' comment order will show. This will make more sense in the event of a conversation where users reply to each other. Although this not is primarily a live message board.

Technical decisions
I used the z-axis to make sure that the selected buttons don't ride over the top of the menus when scrolling. Default behaviour will have only the selected button rise past the menu out of view on a scroll, like anything else, but there is a point where it has not left the top of the screen and by default will be visible over the nav bar at the top of the page.

I implemented sound, a single 'pop' sound on click to provide user feedback on a successful click. This adds to the colour change of buttons and the use of scale to make them grow larger when clicked. Use of css on focus allowed the addition of a heavy black bored to highlight even more when a successful click had happened. This is both useful feedback to enhance user experience and will hopefully reduce the tendency to multiple click if using a slow internet connection. 
To complement the sound I used context to offer a mute option which mutes all sounds.

I also used context for a dark-mode which switches all backgrounds to dark and text to light for contrast.

Finally, I used context for the logging on of users as a logged on user has privileges such as posting and deleteing comments.

In all these three cases, there is a clear use case for context over extensive props drilling. In other cases, props have been used.
