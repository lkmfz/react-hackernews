import * as React from 'react';
import * as Types from '../../types';

interface TableRowInterface {
  item: Types.Item;
}

const TableRow: React.SFC<TableRowInterface> = (props) => {
  return (
    <div key={props.item.objectID} className="table-row">
      <span className="table-coloumn-large">
        <a className="link" target="_blank" href={props.item.url}>{props.item.title}</a>
      </span>
      <span className="table-coloumn-small">
        {props.item.author}
      </span>
      <span className="table-coloumn-small">
        {props.item.points}
      </span>
      <span className="table-coloumn-small">
        {props.item.num_comments}
      </span>
    </div>
  );
};

export default TableRow;
