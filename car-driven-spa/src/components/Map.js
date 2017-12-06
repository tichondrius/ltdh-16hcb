import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { View,StyleSheet } from "react-native";


class Map extends Component {
    state = { showNewCus : false  }
    getInitialState() {
      return {
        region: {
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      };
    }
    
    componentDidMount(){
    var self  = this;
       this.getLocation();
      // let getCurrentLocation = setInterval(()=> {
        
      // }
      // ,1);
      //this.setState({ getCurrentLocation: getCurrentLocation} );

    }
     randomColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    getLocation(){
      navigator.geolocation.getCurrentPosition(
        (success) =>{
          console.log("Success",success); 
          // console.log("Self",self); 
          // this.setState({region: success.coords})
          this.setState({
            region: this.regionFrom(success.coords.latitude,success.coords.longitude,success.coords.accuracy),
            markers: [
              ...this.state.markers,
              {
                coordinate: success.coords,
                key: 1,
                color: this.randomColor(),
              },
            ],
          });
          // self.setState({region: success.coords})
        },
        (error) => { console.log("error")}
      );
    }
    constructor(props) {
      super(props);
      //this.getLocation = this.getLocation.bind(this);

      this.state = {
        markers: [],
      };

  }
   regionFrom(lat, lon, accuracy) {
    const oneDegreeOfLongitudeInMeters = 111.32 * 1000;
    const circumference = (40075 / 360) * 1000;

    const latDelta = accuracy * (1 / (Math.cos(lat) * circumference));
    const lonDelta = (accuracy / oneDegreeOfLongitudeInMeters);

    return {
      latitude: lat,
      longitude: lon,
      // latitudeDelta: Math.max(0, latDelta),
      // longitudeDelta: Math.max(0, lonDelta)
      //zoom value
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    };
  }

    componentWillUnmount(){
     // clearInterval(this.state.getCurrentLocation);
    
    }
    onRegionChange(region) {
      this.setState({ region });
    }

    render() {
        // const { region } = this.props;
        // console.log(region);
        return (
            <View style ={styles.container}>
            {/* <MapView
              style={styles.map}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            >
            </MapView> */}
            {
              this.state.showNewCus === true && <MapView
              style={styles.map2}
          region={this.state.region}
          onRegionChange={() =>this.onRegionChange}
        />
            }
            <MapView
              style={styles.map2}
          region={this.state.region}
          onRegionChange={() =>this.onRegionChange}
            >
              {this.state.markers.map(marker => (
            <MapView.Marker
              key={marker.key}
              coordinate={marker.coordinate}
              pinColor={marker.color}
            />
          ))}
            </MapView>
          </View>
        );
    }
}

export default Map;
const styles = StyleSheet.create({
    container: {

   
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    map2:{
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: 400,
      width: 400,
    }
  });