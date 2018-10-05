import React from 'react';
const Content = (props) => {
  const { children } = props;
  return ( 
    <div className="Content">
      {children}
    </div>
  );
}

export default Content;