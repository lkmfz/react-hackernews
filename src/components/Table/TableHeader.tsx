import * as React from 'react';

const TableHeader = () => {
  return (
    <div className="table-header">
      <span className="table-coloumn-large">
        Title
      </span>
      <span className="table-coloumn-small">
        Author
      </span>
      <span className="table-coloumn-small">
        Comments
      </span>
      <span className="table-coloumn-small">
        Points
      </span>
    </div>
  );
};

export default TableHeader;
