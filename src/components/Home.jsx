import popSound from "../assets/popSound.mp3";
import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);
  function playWithCount() {
    new Audio(popSound, { volume: 1.0 }).play();
    setCount((count) => count + 1);
  }
  return (
    <main>
      <h2>Welcome to the home page</h2>
      <p>
        {" "}
        If you have not loggd in, you can log in by clicking the 'logged in as'
        button above, then simply clicking a user of your choice!
      </p>
      <p>
        {" "}
        While logged in, you will access full functionality of the app,
        including posting, deleting comments by the logged-in user (but not any
        other user, of course) and voting.
      </p>
      <p>
        {" "}
        If not logged in, you will not be able to access all the features, so
        there is no security on this showcase App.
      </p>
      <p>
        {" "}
        The options bar at the very top right, and the nav bar just below it will
        remain visible at all times as you navigate and will allow you to start
        fresh navigating at any time. You can use the nav-bar go to Articles,
        Topics, user, or come back here with 🏠 'Home' button.
      </p>
      <p>
        {" "}
        The app is designed with optional audio queues as an extra feedback
        mechanism on a successful click, if this is undesirable use the mute option at the top in the
        options bar. If you are not sure about having sound on, test out the press to 'play pop while
        counting' button below (with the mute option off) and compare it to the
        'count silently' botton. Both include a subtle colour change on click
        for feedback on a successful click.
      </p>

      <button id="red-button" onClick={playWithCount}>
        {" "}
        Play Pop while counting
      </button>
      <button id="red-button" onClick={() => setCount((count) => count + 1)}>
        count silently; total is {count}
      </button>
    </main>
  );
}

export default Home;

// Simple to Mute, just use if condition to allow/prevent playback, but ...
// IF figure out how to set vol, can have 1.0, 0.5 or 0 (mute)
// {volume: 0.5} in JS is half volume
// You can controll the volume of your Audio object using the volume atrribute (0=no sound, 1=max volume).
// "So just set the range of your input to be between 0 and 1 and use a useffect to change the volume attribute whenever the input's value changes".
