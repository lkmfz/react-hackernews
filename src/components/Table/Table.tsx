import * as React from 'react';
import * as Types from '../../types';
import './Table.css';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

interface TableProps {
  results?: Types.Results | null;
}
interface TableState { }

export default class Table extends React.Component<TableProps, TableState> {
  render() {
    const { results } = this.props;

    if (results == null) {
      return <div className="loader">Loading...</div>;
    }
    return (
      <div className="table">
        <TableHeader />
        {results.hits.map(item =>
          <TableRow item={item} />
        )}
      </div>
    );
  }
}
