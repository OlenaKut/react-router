import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            {' '}
            <Link to="/about"> About</Link>
          </li>
          <li>
            {' '}
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
        <hr />
      </nav>
      <Outlet />
    </>
  );
}