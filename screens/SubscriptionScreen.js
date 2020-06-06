import React from 'react';
import {View, Text,SafeAreaView, FlatList, Image, ScrollView} from 'react-native';
import {homeData, games, hiphop} from '../data/data'
import Header from './Subcomponents/headerNav'
import {Entypo} from '@expo/vector-icons'

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

export default function SubscriptionScreen() {
  return(
    <SafeAreaView style={{flex: 1}}>
      <View>
          <Header/>

          <View>
            <View style={{backgroundColor: "whitesmoke"}}>
              <View style={{flexDirection: "row"}}>
               
                <ScrollView style={{flex: 6}} horizontal={true}>
                    <View style={{justifyContent: 'center', alignItems: 'center',flexDirection: "row"}}>
                      <View>
                        <Text>fsdfsdfdsfsfs</Text>
                      </View>
                      <View>
                        <Text>fsdfsdfdsfsfs</Text>
                      </View>
                      <View>
                        <Text>fsdfsdfdsfsfs</Text>
                      </View>
                      <View>
                        <Text>fsdfsdfdsfsfs</Text>
                      </View>
                        
                    </View>
                </ScrollView>
                <View style={{alignItems: 'center', justifyContent: 'center', width: 70, height: 100}}>
                  <Text style={{fontSize: 18, color: "blue"}}>ALL</Text>
                </View>

              </View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingVertical: 6,borderTopWidth: .3, borderBottomWidth: .4, borderColor: "#ccc", backgroundColor: "whitesmoke"}}>
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
              data={hiphop}
              renderItem={({item})=><Display 
                  etag={item.snippet.title} 
                  channelUrl={item.snippet.thumbnails.high.url} 
                  ChannelName={item.snippet.channelTitle}
                  />}
            />
            </View>

          </View>
      </View>
    </SafeAreaView>
  ) 
}

SubscriptionScreen.navigationOptions = {
  header: null
};
