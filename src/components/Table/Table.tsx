import * as React from 'react';
import * as Types from '../../types';
import './Table.css';

interface TableProps {
  results?: Types.Results | null;
}
interface TableState { }

export default class Table extends React.Component<TableProps, TableState> {
  render() {
    const { results } = this.props;

    if (results == null) {
      return <div>No result</div>;
    }
    return (
      <div className="table">
        <div className="table-header">
          <span className="table-coloumn-large">
            Title
          </span>
          <span className="table-coloumn-medium">
            Author
          </span>
          <span className="table-coloumn-small">
            Comments
          </span>
          <span className="table-coloumn-small">
            Points
          </span>
        </div>
        {results.hits.map(item =>
          <div key={item.objectID} className="table-row">
            <span className="table-coloumn-large">
              <a className="link" href={item.url}>{item.title}</a>
            </span>
            <span className="table-coloumn-medium">
              {item.author}
            </span>
            <span className="table-coloumn-small">
              {item.points}
            </span>
            <span className="table-coloumn-small">
              {item.num_comments}
            </span>
          </div>
        )}
      </div>
    );
  }
}