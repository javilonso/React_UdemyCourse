import React, { useState, useEffect } from "react";
import useResources from "./useResources";
import ResourceUsers from "./ResourceUsers";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <div>
      <ResourceUsers />

      <ul>
        {resources.map((record) => (
          <li key={record.id}>{record.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;

// const fetchResource = async (resource) =>{
//   const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
//   setResources(response.data)
// };

// useEffect(() => {
//   fetchResource(resource);
// }, [resource])
