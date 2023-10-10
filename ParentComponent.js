// ParentComponent.js
import React from 'react';
import { Link } from 'react-router-dom';
const ParentComponent = () => {
  return (
    <div>
      <h2>Parent Component</h2>
      <Link to="/ChildComponent1">ChildComponent1</Link>
      
      <Link to="/ChildComponent2">ChildComponent2</Link>
      {/* Child routes will be rendered here */}
    </div>
  );
};

export default ParentComponent;
