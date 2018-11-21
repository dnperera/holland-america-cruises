import React from "react";
function NavBar() {
  return (
    <header className="navigation">
      <div className="navigation__logobox">
        <img
          className="navigation__logo"
          src="images/holland-america-line-vector-logo.png"
          alt=""
        />
      </div>
      <div className="navigation__btn">
        <label className="navigation__label" htmlFor="navigation__checkbox">
          <span />
          <span />
          <span />
        </label>
      </div>
      <input type="checkbox" id="navigation__checkbox" />
      <nav className="navigation__items">
        <a
          className="navigation__item"
          href="https://www.hollandamerica.com/en_US/find-a-cruise.html"
          target="_blank"
        >
          PLAN
        </a>
        <a
          className="navigation__item"
          href="https://www.hollandamerica.com/en_US/cruise-destinations.html"
          target="_blank"
        >
          WHERE WE GO
        </a>
        <a
          className="navigation__item"
          href="https://www.hollandamerica.com/en_US/cruise-ships.html"
          target="_blank"
        >
          THE EXPERIENCE
        </a>
        <a
          className="navigation__item"
          href="https://www.hollandamerica.com/en_US/deals.html"
          target="_blank"
        >
          CRUISE DEALS
        </a>
        <a
          className="navigation__item"
          href="https://www.hollandamerica.com/en_US/log-in.html"
          target="_blank"
        >
          ALREADY BOOKED
        </a>
      </nav>
    </header>
  );
}

export default NavBar;
