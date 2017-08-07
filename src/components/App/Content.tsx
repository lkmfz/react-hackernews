import * as React from 'react';
import * as Types from '../../types';
import './Content.css';
import Table from '../Table/Table';
import Button from '../Button/Button';

interface ContentState { }
interface ContentProps {
  hits: Types.Item[];
  isLoading: boolean;
  isReachedBottom: boolean;
  loadMoreOnClick(): void;
}

export default class Content extends React.Component<ContentProps, ContentState> {
  render() {
    const { hits } = this.props;
    return (
      <div className="content">
        <Table hits={hits} />
        <Button
          className="LoadMore"
          children="Load more"
          isLoading={this.props.isLoading}
          isLoadingHidden={this.props.isReachedBottom}
          onPress={this.props.loadMoreOnClick}
        />
      </div>
    );
  }
}