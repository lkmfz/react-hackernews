import * as React from 'react';
import * as Types from '../../types';
import './Content.css';
import Table from '../Table/Table';
import Button from '../Button/Button';
import Loading from '../Miscs/Loading';

interface ContentState { }
interface ContentProps { 
  results?: Types.Results | null;
  loadMoreOnClick(): void;
}

export default class Content extends React.Component<ContentProps, ContentState> {
  render() {
    const { results } = this.props;

    if (results === null) {
      return <Loading />;
    }
    return (
      <div className="content">
        <Table results={results!} />
        <Button
          className="LoadMore"
          children="Load more"
          onPress={this.props.loadMoreOnClick}
        />
      </div>
    );
  }
}