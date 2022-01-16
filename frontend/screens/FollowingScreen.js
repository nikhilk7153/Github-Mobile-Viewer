import React, {useState, useEffect } from "react";
import {View, StyleSheet, Text, Image, FlatList } from 'react-native';
import {FetchData} from '../Model/FetchData';
import {FollowData} from '../Model/FollowData';
import {FollowList} from '../Model/FollowList';
import ErrorScreen from './ErrorScreen';

/**
* Renders all of the following information for the screen
*/
FollowingScreen = ({route, navigation}) => {

    const[followingList, setFollowingList] = useState(route.params.followingList);
    const[loaded, setLoaded] = useState(route.params.loaded);
    const[userName, setUserName] = useState(route.params.userName);

    fetchFollowingData = route.params.mock ? route.params.mock : async() => {
        try {
            let fetchData = new FetchData();
            fetchData.initFollow("following", "user", userName).then((following_list) => {
                setFollowingList(following_list);
                setLoaded(true);
            });
        } catch{
            navigation.navigate("Error Screen");
        }
    }

    useEffect(fetchFollowingData, []);

    return(
      <View>
      {loaded ?
      <>
      <Text style = {{fontSize: 30, textAlign: 'center'}}> List of Github users Following User </Text>
      <Text></Text>
      <Text></Text>
      <FlatList data = {followingList.getFollowList()}
        renderItem={({item}) => <>
                                <Image source={{uri: item.getImageUrl()}} style={{width: 200, height: 200,
                                alignItems: 'center', justifyContent: 'center'}} />
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
      </> :  <Text> Loading... </Text>
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


export default FollowingScreen;