import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon />
        Keeper
      </h1>
      <Link to="/createpost" className="header-link">
        <span>Add Note</span>
      </Link>
    </header>
  );
}

export default Header;
