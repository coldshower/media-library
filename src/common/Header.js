import React from 'react';
import { Link, IndexLink } from 'react-router';

export default () => {
  return (
    <div className="text-center">
      <nav className="navbar navbar-default">
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        { "|" }
        <Link to="library" activeClassName="active">Library</Link>
      </nav>
    </div>
  );
}