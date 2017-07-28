import * as React from 'react';
import * as Types from '../../types';

interface TableRowInterface {
  item: Types.Item;
}

const TableRow: React.SFC<TableRowInterface> = ({item}) => {
  return (
    <div key={item.objectID} className="table-row">
      <span className="table-coloumn-large">
        <a className="link" target="_blank" href={item.url}>{item.title}</a>
      </span>
      <span className="table-coloumn-small">
        {item.author}
      </span>
      <span className="table-coloumn-small">
        {item.points}
      </span>
      <span className="table-coloumn-small">
        {item.num_comments}
      </span>
    </div>
  );
};

export default TableRow;
