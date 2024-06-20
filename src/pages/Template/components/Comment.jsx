import React from "react";
import "bulma/css/bulma.min.css";

const MediaComponent = ({ username, handle, timeAgo, content, avatarUrl }) => {
  return (
    <article className="card media p-2">
      <figure className="media-left">
        <p className="image is-64x64">
          <img src={avatarUrl} alt={`${username}'s avatar`} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{username}</strong> <small>@{handle}</small>{" "}
            <small>{timeAgo}</small>
            <br />
            {content}
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a className="level-item">
              <span className="icon is-small">
                <i className="fas fa-reply"></i>
              </span>
            </a>
            <a className="level-item">
              <span className="icon is-small">
                <i className="fas fa-retweet"></i>
              </span>
            </a>
            <a className="level-item">
              <span className="icon is-small">
                <i className="fas fa-heart"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  );
};

export default MediaComponent;
