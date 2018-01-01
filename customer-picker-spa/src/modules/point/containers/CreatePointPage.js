import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentTitle from 'react-document-title';
import GoogleMapReact from 'google-map-react';
import {
  ContainerWrapperStyled, TextFieldStyled, ButtonStyled } from '../../core/stylesheets/core.styles';
import { PaperStyled } from '../../login/stylesheets/login.page.style'
import { Row, Column } from '../../core/stylesheets/column-row.styles';
import { MapPickerWrapper } from '../stylesheets/create-point.style';
import { codeAddress, geocodeLatLng } from '../../../utils/mapHelpler';
import { MapMarker } from '../components';
import { MARKER_TYPE, CAR_STATUS, INFO_STATUS } from '../../../utils/enums'
import { ROUTE_PATH } from '../../../Routes';
import { pointActionCreator } from '../../../redux/modules/pointReducer'

export class CreatePointPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchAddress: '',
      real_address: '',
      location: null,
      center: {
        lat: 10.7626825,
        lng: 106.6803805,
      },
      zoom: 15,
    }
  }
  componentWillReceiveProps(nextProps) {
    const { info } = this.props;
    if (info && !nextProps.info) {
      this.changePath(ROUTE_PATH.INFO_LIST);
    }
    if (info && nextProps.info && info.status === INFO_STATUS.NEW && nextProps.info.status === INFO_STATUS.CREATED_POINT) {
      this.changePath(ROUTE_PATH.INFO_LIST);
    }
  }
  componentWillUnmount () {
    this.props.flushCreation();
  }
  changePath = (path) => {
    this.props.history.push(path);
  }
  handleCreatePointClick = () => {
    const { location, real_address } = this.state;
    const { info: { _id }} = this.props;
    this.props.creatingPoint(_id, location, real_address);

  }
  handleClickMap = (ltn) => {
    geocodeLatLng(ltn).then(location => {
      this.setState({
        location: location.location,
        real_address: location.name,
        center: location.location,
        zoom: 15,
      });
    });
  }
  handlePickerClick = (address) => {
    codeAddress(address).then(location => {
      this.setState({
        location: location.location,
        real_address: location.name,
        center: location.location,
        zoom: 15,
      });
    }).catch(error => {

    });
  }
  render() {
    const { loading, info, cars, creation } = this.props;
    const { real_address, center, zoom, location, searchAddress } = this.state;
    return (
      <DocumentTitle title="GrabFake - Tạo điểm">
        <ContainerWrapperStyled>
          <h1>Tạo điểm - định vị từ thông tin</h1>
          <Row>
            <Column md={7}>
            <MapPickerWrapper>
              <GoogleMapReact
                onClick={this.handleClickMap}
                center={center}
                zoom={zoom}
                onChange={({ center, zoom }) => { this.setState({
                  center,
                  zoom,
                })}}
              >
                {
                  real_address && location &&
                    <MapMarker
                      {...this.state.location}
                      type={MARKER_TYPE.CUSOMTER} />
                }
                {
                  cars.map(car => <MapMarker {...car.location} key={car._id} type={MARKER_TYPE.CAR} />)
                }
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
              />
               <TextFieldStyled
                disabled
                fullWidth={true}
                hintText="Số điện thoại"
                floatingLabelText="Số điện thoại"
                value={info.phone}
              />
               <TextFieldStyled
                disabled
                fullWidth={true}
                hintText="Loại"
                floatingLabelText="Loại"
                value={info.type}
              />
              <TextFieldStyled
                disabled
                fullWidth={true}
                hintText="Đ/c KH cung cấp"
                floatingLabelText="Đ/c KH cung cấp"
                value={info.address}
              />
               <ButtonStyled fullWidth primary label="Định vị theo địa chỉ cung cấp" onClick={() => this.handlePickerClick(info.address)} />
               <TextFieldStyled
                fullWidth={true}
                hintText="Vd: Bến xe bến thành"
                floatingLabelText="Đ/c tự nhập"
                value={searchAddress}
                onChange={(event, newValue) => { this.setState({searchAddress: newValue})}}
              />
               <ButtonStyled fullWidth primary label="Định vị theo địa chỉ tự nhập" onClick={() => this.handlePickerClick(this.state.searchAddress)} />
               <TextFieldStyled
                fullWidth={true}
                hintText="Đ/c thật sự"
                floatingLabelText="Đ/c thật sự"
                value={real_address ? real_address : 'Chưa định vị'}
              />
              <TextFieldStyled
                fullWidth={true}
                hintText="Tọa độ"
                floatingLabelText="Tọa độ"
                value={location ? `${location.lat.toFixed(5)}, ${location.lng.toFixed(5)}`: 'Chưa định vị'}
              />
              <ButtonStyled
                disabled={!(location && real_address) || info.status === INFO_STATUS.CREATED_POINT || creation.isCreating}
                fullWidth primary label="Tạo điểm"
                onClick={this.handleCreatePointClick} />
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
  const carsFromState = state.car.cars || [];
  const info = infos.find(item => item._id === infoId);
  const cars = carsFromState.filter(car => Boolean(car.location) && car.status === CAR_STATUS.FREE);
  return {
    loading: !Boolean(info),
    info,
    cars,
    creation: state.point.creation,
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(pointActionCreator, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(CreatePointPage);