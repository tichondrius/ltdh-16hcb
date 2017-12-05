import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Redirect } from 'react-router-dom';
import { RomApi } from '../../api';
import axios from 'axios';
import Divider from 'material-ui/Divider';
import {
  ContainerWrapperStyled,
  TextFieldStyled, ButtonStyled,
  LoadingProgressStyled,
  ContentBlockStyled,
  ContentBlockAllStyled,
  ContentBlockLStyled,
  CardStyled,
  CardHeaderStyled,
  ContentBlockRStyled, ButtonWrapper} from '../../core/stylesheets/core.styles'
// import { IntroducePanelStyled,
//   TopPanelStyled, BranchStyled, BranchDescStyled, BottomPanelStyled
//   } from '../stylesheets/homepage.style';
import { connect } from 'react-redux';
import { FetchByID } from '../../../redux/modules/roomReducer'

import { InforRoom, Detailnfo,PriceComp} from '../components'; 
import { ROUTE_PATH } from '../../../Routes';
import mapImage from '../../../images/test.jpg';

 class RoomDetailPage extends React.Component {

  // loadRoomsByIdFromServer(id){
    
  //   console.log(id);
  //   const url = "https://chiasephong.herokuapp.com/api/posts/" + id;
  //   axios.get(url)
  //   .then(res => {
      
  //     this.setState({ data: res.data[0] });
  //     console.log(this.state.data.title);
  //   })
  // }
  componentDidMount() {


   // console.log(this.props.match.params.id);
   // this.loadRoomsByIdFromServer(this.props.match.params.id);

   
  }
  componentWillMount(){
    console.log('zzz')
    this.props.loadRoom(this.props.match.params.id);
  }
  constructor(props) {
    super(props);
    this.state = { data : [] };
    var foo = {}

    console.log(this.props);
    //this.loadRoomsByIdFromServer = this.loadRoomsByIdFromServer.bind(this);
    this.pollInterval = null;

  }
  render(){
    const { title,address,price} = this.props.room;
    console.log(address);
    //console.log(this.props.room.description);
    return (
      <DocumentTitle title="Booking App - Room Details">
    
       <CardStyled>
        <ContentBlockAllStyled>
          <ContentBlockLStyled>
        
                  <InforRoom
                  title = {title}
                  background = {mapImage}
                  address={address}
             />  
              
              
          </ContentBlockLStyled>
          <ContentBlockRStyled>
              <PriceComp text="test" discountPrice ="100" currentPrice= {price}/>
          </ContentBlockRStyled>>
      </ContentBlockAllStyled>
          
          <Divider/>
          <Detailnfo>
  
          </Detailnfo>
        </CardStyled>
      </DocumentTitle>
    );
  }
  
}


export const mapPropsToState = (state) => ({
  error: state.auth.errorMessage,
  fetched: state.room.fetched,
  room : state.room.room,
})

export const mapProps = dispatch => ({
  loadRoom: (id) => dispatch(FetchByID(id)),
})

export default connect(mapPropsToState, mapProps)(RoomDetailPage);
