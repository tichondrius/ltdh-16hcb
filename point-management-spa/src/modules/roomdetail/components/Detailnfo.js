import React from 'react';
import {
    ContainerWrapperStyled,
    TextFieldStyled, ButtonStyled,
    LoadingProgressStyled,
    ContentBlockStyled,
    ContentBlockAllStyled,
    ContentBlockLStyled,
    SliderStyled 
  } from '../../core/stylesheets/core.styles';

import { 
   HeadingInfoStyled, MapContainerStyled,OverallScore,IconStartWrapper,BoldText,
   CommentStyled,TestTest,InformationContainer,ContainerDetailInforStyled,TestFlexColumn,
   ImageContainerStyled,DividerHoz
} from '../stylesheets/roomdetail.style';
import { CommentLists } from '../components'; 
import { Row, Column } from '../../core/stylesheets/column-row.styles'; 
import { Tab,Tabs } from 'material-ui/Tabs';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import GoogleMapReact from 'google-map-react';
import mapImage from '../../../images/test.jpg';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default  class Detailnfo extends React.Component {
  state = {
    value: 1,
  };
  
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 10
  };

  render(){
    console.log(this.state);
  
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };



     return (
      <Tabs>
        <Tab label ="Thong tin">
        <ContentBlockAllStyled>
          <ContainerWrapperStyled>
            <HeadingInfoStyled>Dia diem</HeadingInfoStyled>
          </ContainerWrapperStyled>
          <ContainerDetailInforStyled>
              <InformationContainer>
                  <div style={{width: '100%', height: '400px'}}> 
                  <GoogleMapReact
                      defaultCenter={this.props.center}
                      defaultZoom={this.props.zoom}
                    >
                        <AnyReactComponent 
                        lat={59.955413} 
                        lng={30.337844} 
                        text={'Kreyser Avrora'} 
                      />
                    </GoogleMapReact>
                </div>
                <HeadingInfoStyled>Address</HeadingInfoStyled>
              </InformationContainer>
              

          </ContainerDetailInforStyled>
        </ContentBlockAllStyled>
        
         
        </Tab>
        <Tab label ="Hinh anh">
            <Slider {...settings}>
            <div><ImageContainerStyled style={{backgroundImage:`url(${mapImage})`}}>
        </ImageContainerStyled></div>
            <div><ImageContainerStyled style={{backgroundImage:`url(${mapImage})`}}>
        </ImageContainerStyled></div>
            <div><ImageContainerStyled style={{backgroundImage:`url(${mapImage})`}}>
        </ImageContainerStyled></div>
            <div><ImageContainerStyled style={{backgroundImage:`url(${mapImage})`}}>
        </ImageContainerStyled></div>
            <div><ImageContainerStyled style={{backgroundImage:`url(${mapImage})`}}>
        </ImageContainerStyled></div>
            <div><ImageContainerStyled style={{backgroundImage:`url(${mapImage})`}}>
        </ImageContainerStyled></div>
          </Slider>
        </Tab>
        <Tab label ="Nhan xet">
         
            <HeadingInfoStyled>"Khach hang nhan xet"</HeadingInfoStyled>
            <CommentStyled>
              <Row>
              <Column md="4" sm = "4">
                <TestFlexColumn>
                <HeadingInfoStyled>
                   Đánh Giá Trung Bình
                </HeadingInfoStyled>
                <OverallScore >
                    <span>{8}+</span>
                 </OverallScore>
                 <BoldText>{8}</BoldText>
                </TestFlexColumn>
                
              </Column>

              <Column md="8" sm = "8">
                <TestFlexColumn>
                  <HeadingInfoStyled>
                        Chia sẻ nhận xét về dịch vụ
                  </HeadingInfoStyled>
                  <ButtonStyled>
                    Viết nhận xét của bạn
                  </ButtonStyled>
                </TestFlexColumn>
              
              </Column>
    
              </Row>
            </CommentStyled>
           <CommentStyled>
             <ContainerWrapperStyled>
             <Row>
             <Column md="2" sm="2">
                <ContentBlockAllStyled>
                    <ContainerWrapperStyled>
                      <span style={{  marginTop: '10px' , marginBottom: '20px'}}>Chon loai</span>
                
                    </ContainerWrapperStyled>
                </ContentBlockAllStyled>
                </Column>
             <Column md="10" sm="10">
                <ContentBlockAllStyled>
                 
                  <ContainerWrapperStyled> 
                    <SelectField  value={this.state.value}> 
                    <MenuItem value={1} primaryText="Never" /></SelectField>
                  </ContainerWrapperStyled>

                  <ContainerWrapperStyled>
                   <SelectField  value={this.state.value}>
                    <MenuItem value={1} primaryText="Never" /></SelectField>

                  </ContainerWrapperStyled>

                  <ContainerWrapperStyled>

                    <SelectField value={this.state.value}>
                     <MenuItem value={1} primaryText="Never" /></SelectField>
                    
                  </ContainerWrapperStyled>
                  
                  
                </ContentBlockAllStyled>
             </Column>
             </Row>
              <CommentLists length="5"  onChange={() => {}}>"sdfdsf"</CommentLists>

             
             </ContainerWrapperStyled>
           </CommentStyled>
        
        </Tab>
        <Tab label ="Tuong tu">
        </Tab>
      </Tabs>
    );
  }
}
  
  