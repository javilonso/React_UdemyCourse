import React from "react";
import useResources from "./useResources";

const ResourceUsers = () => {
  const users = useResources("users");
  console.log(users);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default ResourceUsers;
