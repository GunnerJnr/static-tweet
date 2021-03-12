import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet ()
{
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author />
        <Message />
      </div>
    </div>
  );
}

function Avatar ()
{
  return (
    <img src="https://www.gravatar.com/avatar/02a48bbe949fd860327e8d9ade169c9a" className="avatar" alt="avatar" />
  );
}

function Message ()
{
  return (
    <div className="message">
      This is less than 140 characters.
    </div>
  );
}

function Author ()
{
  return (
    <span className="author">
      <span className="name">David Gunner</span>
      <span className="handle">@gunnerjnr</span>
    </span>
  );
}

ReactDOM.render(
  <Tweet />,
  document.querySelector( '#root' )
);