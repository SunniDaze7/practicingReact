import React from 'react';
import PropTypes from 'prop-types';

const RenderName = (props) => {
  return <div>{props.count}</div>;
};

RenderName.propTypes = {
  count: PropTypes.string,
};

RenderName.defaultProps = {
  count: 50,
};

export default RenderName;