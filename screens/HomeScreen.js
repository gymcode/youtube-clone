
import React, {useState} from 'react';
import {View, 
        Text,
        TouchableOpacity,
        Image,
        ScrollView, 
        SafeAreaView, 
        FlatList
      } from 'react-native';
import {homeData, games} from '../data/data'
import {Entypo}from '@expo/vector-icons'

import Header from './Subcomponents/headerNav'


const Display = ({etag, channelUrl, ChannelName})=>{
  return(
    <View>     
      <View>
        <Image source={{uri: channelUrl}} style={{height: 220, width: 400}}/>
      </View>
      <View style={{flexDirection: "row", padding: 15}}>
        <View style={{height: 40, width: 40, borderRadius: 50,backgroundColor: "red", flex: 1}}/>
        <View style={{flex: 6, marginHorizontal: 15}}>
          <Text style={{color: "#000"}}>{etag}</Text>      
          <Text style={{color: "gray"}}>{ChannelName}</Text>
        </View>
        <View style={{flex: 1, alignItems: "flex-end"}}>
            <Entypo
              name="dots-three-vertical"
              size={14}
              color="#a8a8a8"
            />
        </View>
      </View>
    </View>
  )
}

const List = (props)=>{
  return(
    <View style={{paddingHorizontal: 20, marginRight: 10,height: 35, borderRadius: 20,backgroundColor: "#ededed", justifyContent: 'center', alignItems: "center", borderWidth: .8 ,borderColor: "#ccc"}}>
      <Text>{props.title}</Text>
    </View>
  )
}

const HomeScreen = ()=>{

  return(
    <SafeAreaView style={{flex:1}}>
        <View>
          {/* header */}
          <Header/>

          {/* sub header section */}
          <View style={{marginVertical: 10}}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={{paddingHorizontal: 20, marginRight: 10,height: 35,borderRadius: 20,backgroundColor: "#3f3f3f", justifyContent: 'center', alignItems: "center", borderColor: "gray"}}>
                    <Text style={{color: "#fff"}}>All</Text>
                  </View>
                  <FlatList
                    data={games}
                    horizontal={true}
                    renderItem={({item})=> <List
                      title={item.snippet.channelTitle}
                    />}
                  />
              </ScrollView>
          </View>
          

          <View>
            
            <FlatList
              data={homeData}
              renderItem={({item})=><Display 
                  etag={item.snippet.title} 
                  channelUrl={item.snippet.thumbnails.high.url} 
                  ChannelName={item.snippet.channelTitle}
                  />}
            />
          </View>
        </View>
    </SafeAreaView>
  )

}

HomeScreen.navigationOptions = {
  header: null
}


export default HomeScreen;