import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';

import { fetchingRooms } from '../../../redux/modules/roomReducer'
import { FormSearch } from '../components';
import { LoadingComponent } from '../../core/components';
import { ContainerWrapperStyled, ButtonStyled, CardStyled } from '../../core/stylesheets/core.styles';
import { Row, Column } from '../../core/stylesheets/column-row.styles'; 
import { MapContainerStyled } from '../stylesheets/search.style';
import { RoomItem } from '../../roomdetail/components'


export class SearchPage extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchRooms();
  }
  redirectPath  = (path) => {
    this.props.history.push(path);
  }
  render() {
    const { rooms, errors, isFetching } = this.props;
    return (
      <DocumentTitle title="Booking App - Search">
        <ContainerWrapperStyled>
          
          <Row>
            <Column md="3" sm="3">
              <MapContainerStyled>
                <ButtonStyled label="Đến bản đồ"></ButtonStyled>
              </MapContainerStyled>
              <FormSearch />
            </Column>
            <Column md="9" sm="9">
              {
                rooms.map(room => <RoomItem redirectPath={this.redirectPath} room={room}/>)
              }
              {
                isFetching && <LoadingComponent />
              }
            </Column>
          </Row>
        </ContainerWrapperStyled>
      </DocumentTitle>
    );
  }
}

export const mapStateToProps = state => {
  const { rooms, errors, isFetching } = state.room.rooms;
  return {
    rooms: rooms || [],
    errors,
    isFetching,
  };
}

export const mapDispatchToProps = dispatch => ({
  fetchRooms: () => dispatch(fetchingRooms()), 
}) 

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage); 