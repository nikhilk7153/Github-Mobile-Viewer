import React, {useState, useEffect } from "react";
import {View, StyleSheet, Text, Image, FlatList } from 'react-native';
import {FetchData} from '../Model/FetchData';
import {FollowData} from '../Model/FollowData';
import {FollowList} from '../Model/FollowList';
import ErrorScreen from './ErrorScreen';

/**
* Renders all of the followers information to the screen
*/
FollowersScreen = ({route, navigation}) => {

        const[followersList, setFollowersList] = useState(route.params.followerList);
        const[loaded, setLoaded] = useState(route.params.loaded);
        const[userName, setUserName] = useState(route.params.userName);

        fetchFollowerData = route.params.mock ? route.params.mock : async() => {

            try {
                let fetchData = new FetchData();
                fetchData.initFollow("followers", "user", userName).then((follower_list) => {
                    setFollowersList(follower_list);
                    setLoaded(true);
                });
            } catch{
                navigation.navigate("Error Screen");
            }
        }

       useEffect(fetchFollowerData, []);

       return(
              <View>
              {loaded ?
              <>
              <Text style = {{fontSize: 30, textAlign: 'center'}}> List of Followers </Text>
              <Text></Text>
              <Text></Text>
              <FlatList data = {followersList.getFollowList()}
                renderItem={({item}) => <>
                                        <Image source={{uri: item.getImageUrl()}}
                                            style={{width: 200, height: 200, justifyContent: 'center',
                                                alignItems: 'center'}}/>
                                        <Text></Text>
                                        <Text>Name: {item.getName()}  </Text>
                                        <Text></Text>
                                        <Text onPress={() => navigation.navigate('Profile Screen',
                                          {viewerType: "user", userName: item.getUserName()})} style={styles.bold}>
                                        Github Username: {item.getUserName()}</Text>
                                        <Text></Text>
                                        <Text></Text>
                                        <Text></Text>
                                        </>
                          }
                keyExtractor={(item) => {return item.getUserName()}}
              />
              </> : <Text> Loading... </Text>
              }
            </View>
       );

}


const styles = StyleSheet.create({
    container: {
      alignItems: 'center'
    },
    bold: {fontWeight: 'bold'}
});

export default FollowersScreen;
