import React from 'react';
const Footer = (props) => {
  const { copyright } = props;
  return (
    <div className="Footer">
      {copyright}
    </div>
  );
}

export default Footer;