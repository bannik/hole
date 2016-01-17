/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react';
import './Navigation.scss';
import Link from '../Link';

function Navigation() {
  return (
    <ul className="Navigation" role="menu">
      <li className="Navigation-item">
        <a className="Navigation-link" href="https://github.com/bannik/hole">Repo</a>
      </li>
      <li className="Navigation-item">
        <a className="Navigation-link" href="https://github.com/bannik/hole/issues">Issues</a>
      </li>
      <li className="Navigation-item">
        <a className="Navigation-link" href="https://github.com/bannik">My Github</a>
      </li>
    </ul>
  );
}

export default Navigation;
