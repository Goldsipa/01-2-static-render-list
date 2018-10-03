import React from 'react';
import UserListItem from './UserListItem';

const users = require('./users.json');

const UserList = () => (
  <ul className="list-group">
    {users ? users.map(
      user => (
        <UserListItem
          avatar_url={user.avatar_url}
          login={user.login}
          html_url={user.html_url}
          site_admin={user.site_admin}
          key={user.id}
        />
      )
    ) : 'no users'}
  </ul>
);

export default UserList;