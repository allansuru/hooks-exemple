import React, { PropTypes, useEffect, useState } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  //   const fetchResource = async resource => {
  //     const response = await axios.get(
  //       `https://jsonplaceholder.typicode.com/${resource}`
  //     );

  //
  //   };

  useEffect(
    () => {
      (async resource => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/${resource}`
        );
        setResources(response.data);
      })(resource);
    },
    [resource]
  );

  const renderResources = resources =>
    resources.map(({ title }) => {
      return (
        <div className="item">
          {title}
        </div>
      );
    });

  return (
    <div className="ui list">
      {renderResources(resources)}
    </div>
  );
};

ResourceList.propTypes = {};

export default ResourceList;
