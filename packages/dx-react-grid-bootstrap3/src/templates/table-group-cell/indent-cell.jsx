import React, { useContext } from 'react';
import * as PropTypes from 'prop-types';
import { StyleContext } from '../layout';

export const IndentCell = ({
  tableRow,
  tableColumn,
  row, column,
  style, position, side,
  refObject,
  ...restProps
}) => {
  const { backgroundColor, stickyPosition } = useContext(StyleContext);

  return (
    <td
      ref={refObject}
      style={{
        [side]: position,
        backgroundColor,
        backgroundClip: 'padding-box',
        position: stickyPosition,
        zIndex: 300,
        ...style,
      }}
      {...restProps}
    />
  );
};

IndentCell.propTypes = {
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  row: PropTypes.any,
  column: PropTypes.object,
  style: PropTypes.object,
  side: PropTypes.string,
  position: PropTypes.number,
  refObject: PropTypes.object,
};

IndentCell.defaultProps = {
  tableRow: undefined,
  tableColumn: undefined,
  row: {},
  column: {},
  style: null,
  side: 'left',
  position: undefined,
  refObject: undefined,
};