import React, { PropTypes } from "react";
import useResource from "./useResources";

const ResourceList = ({ resource }) => {
  const resources = useResource(resource);

  const renderResources = resources =>
    resources.map(({ title, id }) => {
      return (
        <div key={id} className="item">
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
