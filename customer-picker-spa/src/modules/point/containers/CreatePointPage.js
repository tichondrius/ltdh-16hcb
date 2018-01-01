import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import GoogleMapReact from 'google-map-react';
import {
  ContainerWrapperStyled, TextFieldStyled } from '../../core/stylesheets/core.styles';
import { PaperStyled } from '../../login/stylesheets/login.page.style'
import { Row, Column } from '../../core/stylesheets/column-row.styles';
import { MapPickerWrapper } from '../stylesheets/create-point.style';

export class CreatePointPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      real_address: '',
      location: null,
      center: {
        lat: 10.7626825,
        lng: 106.6803805,
      },
      zoom: 11,
    }
  }
  render() {
    const { loading, info } = this.props;
    return (
      <DocumentTitle title="GrabFake - Tạo điểm">
        <ContainerWrapperStyled>
          <h1>Tạo điểm - định vị từ thông tin</h1>
          <Row>
            <Column md={7}>
            <MapPickerWrapper>
              <GoogleMapReact
                center={this.state.center}
                zoom={this.state.zoom}
                onChange={({ center, zoom }) => { this.setState({
                  center,
                  zoom,
                })}}
              >
              </GoogleMapReact>
            </MapPickerWrapper>
            </Column>
            <Column md={5}>
            {
              loading === false &&
              <PaperStyled>
                <TextFieldStyled
                disabled
                fullWidth={true}
                hintText="Tên khách hàng"
                floatingLabelText="Tên khách hàng"
                value={info.name}
              /><br />
               <TextFieldStyled
                disabled
                fullWidth={true}
                hintText="Số điện thoại"
                floatingLabelText="Số điện thoại"
                value={info.phone}
              /><br />
               <TextFieldStyled
                disabled
                fullWidth={true}
                hintText="Loại"
                floatingLabelText="Loại"
                value={info.type}
              /><br />
              <TextFieldStyled
                disabled
                fullWidth={true}
                hintText="Đ/c KH cung cấp"
                floatingLabelText="Đ/c KH cung cấp"
                value={info.address}
              /><br />
              </PaperStyled>
            }
              
            </Column>
          </Row>
        </ContainerWrapperStyled>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { infoId } = ownProps.match.params;
  const infos = state.info.infos || [];
  const info = infos.find(item => item._id === infoId);
  return {
    loading: !Boolean(info),
    info,
  }
}
export default connect(mapStateToProps)(CreatePointPage);