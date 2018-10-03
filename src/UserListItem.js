import React from 'react';

const UserListItem = ({ avatar_url, login, html_url, site_admin }) => (
  <li className="list-group-item">
    <img className="userAvatar" src={ avatar_url } alt={`${login}'s avatar`} />
    <h4>
      { login + ' ' }
      { site_admin && <span className="badge badge-secondary">Admin</span> }
    </h4>
    <a href={html_url}>{html_url}</a>
  </li>
);

export default UserListItem;