/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,DrawerLayoutAndroid,Alert
} from 'react-native';
import { Drawer ,Content,Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


import  {SlideBar,Map,AnimatedViews}  from "./components";
export default class App extends Component {


  onPressLearnMore(){
    console.log(this._drawer);
  }
  closeDrawer = () => {
    console.log(this._drawer);
    this.drawer._root.close()
  };
  render() {

    openDrawer = () => {
      this.drawer._root.open()
    };
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'sdfsdf in the Drawer!</Text>
      </View>
    );
    return (
    //   <DrawerLayoutAndroid
    //     ref ={(c)=> this._drawer = c}
    //     drawerWidth={300}
    //     drawerPosition={DrawerLayoutAndroid.positions.Left}
    //     renderNavigationView={() => navigationView}>
            
    //         <Container>
    //         <Header>
    //           <Left>
    //             <Button transparent  onPress={this.onPressLearnMore}>
    //               <Icon name='arrow-back' />
    //             </Button>
    //           </Left>
    //           <Body>
    //             <Title>Header</Title>
    //           </Body>
    //           <Right>
    //             <Button transparent>
    //               <Icon name='menu' />
    //             </Button>
    //           </Right>
    //         </Header>
    //       </Container>
    // </DrawerLayoutAndroid>

        <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SlideBar navigator={this.drawer}/>}
        onClose={() => this.closeDrawer()} >
                      <Container>
             <Header>
               <Left>
                 <Button transparent  onPress={openDrawer}>
                   <Icon name='arrow-back' />
                 </Button>
               </Left>
               <Body>
                 <Title>Header</Title>
               </Body>
               <Right>
                 <Button transparent>
                   <Icon name='menu' />
                 </Button>
               </Right>
             </Header>
        
              <Map/>
                    
        
         
           </Container>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
