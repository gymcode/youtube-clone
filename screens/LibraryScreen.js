import React, {useState} from 'react';
import {View, 
        Text,
        TouchableOpacity,
        Image,
        ScrollView, 
        SafeAreaView
      } from 'react-native';
import {Entypo, MaterialIcons, Foundation, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'

import Header from './Subcomponents/headerNav';
import Hr from './Subcomponents/hr'


const LibraryScreen = ()=>{

  return(
    <SafeAreaView style={{flex:1, backgroundColor: "#f8f8f8"}}>
        {/* header section */}
        <Header/>
          
        {/* section content */}
        <ScrollView>
            <View style={{padding: 17}}>
              <Text>Recent</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection: "row"}}>
                  <View style={{marginTop: 15, paddingHorizontal: 8}}>
                    <View style={{height: 90, width: 160, backgroundColor: "red"}}/>

                    <View style={{marginTop: 5, flex:1, flexDirection: "row"}}>
                      <View style={{flex:2}}>
                      <Text>Asbury Dunwell Church:</Text>
                        <Text>Sunday Online Worship</Text>
                        <Text>ADC Media</Text>
                      </View>

                      <View style={{flex: 1, marginTop: 3}}>
                        <Entypo
                          name="dots-three-vertical"
                          size={13}
                        />
                      </View>

                    </View>
                  </View>

                  <View style={{marginTop: 15, paddingHorizontal: 8}}>
                    <View style={{height: 90, width: 160, backgroundColor: "red"}}/>

                    <View style={{marginTop: 5, flex:1, flexDirection: "row"}}>
                      <View style={{flex:2}}>
                      <Text>Asbury Dunwell Church:</Text>
                        <Text>Sunday Online Worship</Text>
                        <Text>ADC Media</Text>
                      </View>

                      <View style={{flex: 1, marginTop: 3}}>
                        <Entypo
                          name="dots-three-vertical"
                          size={13}
                        />
                      </View>

                    </View>
                  </View>

                  <View style={{marginTop: 15, paddingHorizontal: 8}}>
                    <View style={{height: 90, width: 160, backgroundColor: "red"}}/>

                    <View style={{marginTop: 5, flex:1, flexDirection: "row"}}>
                      <View style={{flex:2}}>
                        <Text>Asbury Dunwell Church:</Text>
                        <Text>Sunday Online Worship</Text>
                        <Text>ADC Media</Text>
                      </View>

                      <View style={{flex: 1, marginTop: 3}}>
                        <Entypo
                          name="dots-three-vertical"
                          size={13}
                        />
                      </View>

                    </View>
                  </View>
                </ScrollView>
              </View>

                <Hr/>

                <View style={{marginTop: 10, padding:17}}>
                  <TouchableOpacity>
                    <View style={{flexDirection: "row"}}>
                        <View style={{flex:1}}>
                          <MaterialIcons
                            name="history"
                            size={25}
                            color="#595959"
                          />
                        </View>
                        <View style={{flex:7, marginTop: 5}}>
                          <Text style={{fontSize:16}}>History</Text>
                        </View>
                    </View>
                  </TouchableOpacity>

                  <View style={{flexDirection: "row", marginVertical:20}}>
                      <View style={{flex:1}}>
                        <MaterialIcons
                          name="file-download"
                          size={25}
                          color="#595959"
                        />
                      </View>
                      <View style={{flex:7, marginTop: 5}}>
                        <Text style={{fontSize:16}}>Downloads</Text>
                      </View>
                  </View>

                  <View style={{flexDirection: "row",}}>
                      <View style={{flex:1}}>
                        <Foundation
                          name="play-video"
                          size={25}
                          color="#595959"
                        />
                      </View>
                      <View style={{flex:7, marginTop: 5}}>
                        <Text style={{fontSize:16}}>Your videos</Text>
                      </View>
                  </View>

                  <View style={{flexDirection: "row", marginVertical:18}}>
                      <View style={{flex:1}}>
                        <MaterialCommunityIcons
                          name="clock"
                          size={25}
                          color="#595959"
                        />
                      </View>
                      <View style={{flex:7, marginTop: 5}}>
                        <Text style={{fontSize:16}}>Watch later</Text>
                      </View>
                  </View>
                </View>

                <Hr/>

                <View style={{padding: 17}}>
                    <View>
                      <Text style={{fontSize:16}}>Playlists</Text>
                    </View>

                    <View style={{flexDirection: "row", marginVertical:18}}>
                      <View style={{flex:1}}>
                        <AntDesign
                          name="plus"
                          size={25}
                          color="#595959"
                        />
                      </View>
                      <View style={{flex:6, marginTop: 5}}>
                        <Text style={{fontSize:16}}>New playlist</Text>
                      </View>
                  </View>

                  <View style={{flexDirection: "row",}}>
                      <View style={{flex:1}}>
                        <AntDesign
                          name="like1"
                          size={25}
                          color="#595959"
                        />
                      </View>
                      <View style={{flex:7, marginTop: 5}}>
                        <Text style={{fontSize:16}}>Liked videos</Text>
                      </View>
                  </View>
                </View>

            
        </ScrollView>
    </SafeAreaView>
  )

}

LibraryScreen.navigationOptions = {
  header: null
}


export default LibraryScreen;