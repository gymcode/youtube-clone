
import React from 'react';
import {View, 
        Text,
        TouchableOpacity,
        Image} from 'react-native';
import Icon from "@expo/vector-icons/MaterialIcons"


const HomeScreen = ()=>{

  return(

    <View style={{flex: 1, backgroundColor: "#f8f8f8"}}>
      
      <View style={{flexDirection: "row", backgroundColor: "#ffffff", height: 60,  borderBottomWidth: .5, borderColor: "whitesmoke"}}>
        <View style={{flex: 6, justifyContent: "center", alignContent: "center"}}>
          <Image source={require('../assets/images/youtube.png')} style={{height: 50, marginHorizontal: 10, width: 100}}/>
        </View>
        <View style={{flex: .8, height:25, justifyContent: "space-between", marginTop: 15, marginHorizontal:7, borderRadius: 100}}>
          <TouchableOpacity>
            <Icon 
                  name="cast"
                  size={25}
                />
          </TouchableOpacity>
        </View>
        <View style={{flex: .8, height:25, justifyContent: "space-between", marginTop: 15, marginHorizontal:7, borderRadius: 100}}>
          <TouchableOpacity>
            <Icon 
                  name="videocam"
                  size={25}
                />
          </TouchableOpacity>
        </View>
        <View style={{flex: .8, height:25, justifyContent: "space-between", marginTop: 15, marginHorizontal:7, borderRadius: 100}}>
          <TouchableOpacity>
            <Icon 
                name="search"
                size={25}
              />
          </TouchableOpacity>
        </View>
        <View style={{flex: .8, height:25, justifyContent: "space-between", marginTop: 15, marginHorizontal:7, borderRadius: 100}}>
          <TouchableOpacity>
            <Icon 
                  name="account-circle"
                  size={25}
                />
          </TouchableOpacity>
        </View>
       
      </View>

      <View>

      </View>

    </View>

  )

}

export default HomeScreen;