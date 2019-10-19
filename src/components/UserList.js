import React, { PropTypes } from "react";
import useResource from "./useResources";

const UserList = props => {
  const users = useResource("users");

  const renderUsers = users =>
    users.map(({ name, id }) => {
      return (
        <div key={id} className="item">
          {name}
        </div>
      );
    });

  return (
    <div className="ui list">
      {renderUsers(users)}
    </div>
  );
};

UserList.propTypes = {};

export default UserList;
