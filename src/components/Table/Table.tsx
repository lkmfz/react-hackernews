import * as React from 'react';
import * as Types from '../../types';
import './Table.css';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

interface TableState { }
interface TableProps {
  hits: Types.Item[];
}

export default class Table extends React.Component<TableProps, TableState> {

  render() {
    const { hits } = this.props;

    return (
      <div className="table">
        <TableHeader />
        {hits.map(item =>
          <TableRow key={item.objectID} item={item} />
        )}
      </div>
    );
  }
}
