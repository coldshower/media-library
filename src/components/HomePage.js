import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div className="jumbotron-center">
      <h1 className="lead">
        Welcome to Media Library built with React.
      </h1>
      <div>
        <Link to="library">
          <button className="btn btn-lg btn-primary">Visit Library</button>
        </Link>
      </div>
    </div>
  );
}