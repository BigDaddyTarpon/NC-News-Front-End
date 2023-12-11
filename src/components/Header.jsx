function Header() {
  return (
    <div className="top-grid-container">
      <h1 className="header"> NC News</h1>
      <nav className="options-bar">
        <form>
        <label
    >Connection -  
    <select name="Connection">
      <option>set to: Good</option>
      <option>set to: Slow</option>
    </select>
  </label>
        <div>
    Volume ------ 
    <select name="Volume">
      <option>set to: On</option>
      <option>set to: Mute</option>
    </select>
  </div>
  
  <label
    >Dark mode --
    <select name="Dark mode">
      <option>set to: On</option>
      <option>set to: Off</option>
    </select>
  </label>
  </form>
      </nav>
    </div>
  );
}

export default Header;
