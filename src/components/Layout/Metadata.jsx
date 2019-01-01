import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Metadata = (props) => {
  const {
    title, description, robots,
  } = props;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="google-site-verification" content="ZwC1ZTsoP45swAD5qd6Lw_jOVbNOh-2jz8Jki5Jh6A8" />

      {description
        && <meta name="description" content={description} />
      }

      <meta name="robots" content={robots} />
    </Helmet>
  );
};

Metadata.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  robots: PropTypes.string,
};
Metadata.defaultProps = {
  description: null,
  robots: 'index, follow',
};

export default Metadata;