import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark border-bot-primary">
      <Link class="navbar-brand text-white mx-3" href="/">Home</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link text-white" href="/Animals">Animals</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-white" href="/Persons">Persons</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;