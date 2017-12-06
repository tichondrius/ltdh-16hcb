import React, { Component } from 'react';
import {
    StyleSheet,
    View
  } from 'react-native';

  import { Text,Container,Content,Header,List,ListItem,Left,Icon,Body } from "native-base";


export default class SlideBar extends Component {
    state = {  }

    render() {
        return (
        
        
            
    
                    <Content  style={styles.container}>
                        <View style={{ height:200,  backgroundColor: 'red'}}>
                            <Text>dfsdf</Text>
                        </View>
                        <View>
                        <List > 
                            <ListItem icon >
                                <Left>
                                    <Icon name="plane"/>
                                </Left>     
                                <Body>
                                    <Text>Airplane Mode</Text>
                                </Body>       
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Icon name="plane"/>
                                </Left>
                                <Body>
                                    <Text>Airplane Mode</Text>
                                </Body>              
                            </ListItem>
                        </List>
                        </View>
                       
                    </Content>
      
                  
            
            
 
            
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    }
})