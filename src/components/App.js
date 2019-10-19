import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const handleResource = (setResource, newState) => setResource(newState);

const App = () => {
  const [resource, setResource] = useState("posts");
  // const [count, setCount] = useState(0);
  return (
    <div className="ui raised very padded text container segment">
      <div>
        <button
          className="ui violet button"
          onClick={() => handleResource(setResource, "posts")}
        >
          Posts
        </button>
        <button
          className="ui black button"
          onClick={() => handleResource(setResource, "todos")}
        >
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
      <UserList />
    </div>
  );
};

export default App;
