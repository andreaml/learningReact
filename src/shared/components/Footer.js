import React from 'react';
import { string } from 'prop-types';

const Footer = (props) => {
  const { copyright } = props;
  return (
    <div className="Footer">
      {copyright}
    </div>
  );
}

Footer.propTypes = {
  copyright: string
};

export default Footer;