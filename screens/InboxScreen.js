
import React, {useState} from 'react';
import {View, 
        Text,
        TouchableOpacity,
        Image,
        ScrollView, 
        SafeAreaView
      } from 'react-native';


import Header from './Subcomponents/headerNav'


const InboxScreen = ()=>{

  const [content, setContent] = useState([])

    //youtube Api key 
  const API_key = 'AIzaSyCb5NbNKnJ2YLGooHqp5hSnFU-gN0-UQDk';
  const YoutubeUri = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=${API_key}`;

  // fetching from the API
  fetch(YoutubeUri)
        .then((response)=> response.json())
        .then((data)=>{
          console.log(data.items)
          setContent()
        })

  return(
    <SafeAreaView>
    <View style={{flex: 1, backgroundColor: "#f8f8f8"}}>
      {/* header section */}
      <Header/>

      <View>
        <ScrollView>
          {/* content for youtube */}
          {
           
          }
          <View>  
            <Text>sdcdfdfvfvfdvdfvvfd</Text>
          </View>
        </ScrollView>
      </View>

    </View>
    </SafeAreaView>
  )

}

InboxScreen.navigationOptions = {
  header: null
}


export default InboxScreen;