/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';

function Header() {
  return (
    <div className={s.root}>
      <header>
        <a href="/d-dagen">D-dagen</a>
        <a href="/signup">Signup</a>
        <a href="/faq">FAQ</a>
        <a href="/contact">Kontakt</a>
        <a href="/who">Projektgruppen</a>
      </header>
    </div>
  );
}

export default withStyles(s)(Header);
