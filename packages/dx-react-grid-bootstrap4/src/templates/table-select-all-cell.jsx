import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'clsx';

import { SelectionControl } from './parts/selection-control';

export const TableSelectAllCell = ({
  className, allSelected, someSelected, disabled, onToggle,
  tableColumn, tableRow, rowSpan,
  refObject,
  ...restProps
}) => (
  <th
    className={classNames({
      'text-center': true,
      'align-middle': !rowSpan,
      'align-bottom': !!rowSpan,
    }, className)}
    rowSpan={rowSpan}
    ref={refObject}
    {...restProps}
  >
    <SelectionControl
      disabled={disabled}
      checked={allSelected}
      indeterminate={someSelected}
      onChange={onToggle}
    />
  </th>
);

TableSelectAllCell.propTypes = {
  className: PropTypes.string,
  allSelected: PropTypes.bool,
  someSelected: PropTypes.bool,
  disabled: PropTypes.bool,
  onToggle: PropTypes.func,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  rowSpan: PropTypes.number,
  refObject: PropTypes.object,
};

TableSelectAllCell.defaultProps = {
  className: undefined,
  allSelected: false,
  someSelected: false,
  disabled: false,
  onToggle: () => {},
  tableRow: undefined,
  tableColumn: undefined,
  rowSpan: undefined,
  refObject: undefined,
};