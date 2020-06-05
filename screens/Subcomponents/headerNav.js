import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import Icon from "@expo/vector-icons/MaterialIcons"

export default function Header(){
    return(
    <View style={{flexDirection: "row", backgroundColor: "#ffffff", height: 50,  borderBottomWidth: .7, borderColor: "whitesmoke"}}>
        <View style={{flex: 6, justifyContent: "center", alignContent: "center"}}>
          <Image source={require('../../assets/images/youtube.png')} style={{height: 50, marginHorizontal: 10, width: 100}}/>
        </View>
        <View style={{flex: .8, height:25, justifyContent: "space-between", marginTop: 15, marginHorizontal:7, borderRadius: 100}}>
          <TouchableOpacity>
            <Icon 
                  name="videocam"
                  size={25}
                  color="#595959"
                />
          </TouchableOpacity>
        </View>
        <View style={{flex: .8, height:25, justifyContent: "space-between", marginTop: 15, marginHorizontal:7, borderRadius: 100}}>
          <TouchableOpacity>
            <Icon 
                name="search"
                size={25}
                color="#595959"
              />
          </TouchableOpacity>
        </View>
        <View style={{flex: .8, height:25, justifyContent: "space-between", marginTop: 15, marginHorizontal:7, borderRadius: 100}}>
          <TouchableOpacity>
            <Icon 
                  name="account-circle"
                  size={25}
                  color="#595959"
                />
          </TouchableOpacity>
        </View>
       
      </View>
    )
}