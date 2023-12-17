import popSound from "../assets/popSound.mp3";
import { MuteModeContext } from "../contexts/MuteModeContext";
import { useState, useContext } from "react";

function Home() {
  const [count, setCount] = useState(0);
  const { muteMode, setMuteMode } = useContext(MuteModeContext);
  

  function playWithCount() {
   muteMode=== "soundon" ? new Audio(popSound).play() : null;
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
        The options bar at the very top right, and the nav bar just below it
        will remain visible at all times as you navigate and will allow you to
        start fresh navigating at any time. You can use the nav-bar go to
        Articles, Topics, user, or come back here with 🏠 'Home' button.
      </p>
      <p>
        {" "}
        The app is designed with optional audio queues as an extra feedback
        mechanism on a successful click, if this is undesirable use the mute
        option at the top in the options bar. If you are not sure about having
        sound on, test out the press to 'play pop while counting' button below
        (with the mute option off) and compare it to the 'count silently'
        botton. Both include a subtle colour change on click for feedback on a
        successful click.
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

 