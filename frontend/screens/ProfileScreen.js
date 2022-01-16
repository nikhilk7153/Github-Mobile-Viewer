import React, {useState, useEffect} from "react";
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import { FetchData} from '../Model/FetchData';
import { ProfileData} from '../Model/ProfileData';
import ErrorScreen from './ErrorScreen';

/**
 * Function will render all of the relevant information for the user's profile 
 * @returns a view for all of the user's information 
 */
const ProfileScreen =({route, navigation}) => {

      const[profile, setProfile] = useState(route.params.profile);
      const[loaded, setLoaded] = useState(route.params.loaded);
      const viewerType = route.params.viewerType;
      const userName = route.params.userName;

      fetchProfileInfo = route.params.mock ? route.params.mock : async() => {
          try {
              let fetchData = new FetchData();
              fetchData.initProfileInfo(viewerType, userName).then((prof) => {
                  setProfile(prof);
                  setLoaded(true);
              });
          } catch{
              navigation.navigate("Error Screen");
          }
      }

      useEffect(fetchProfileInfo, [viewerType, userName]);

      return (
        <View>
             {loaded ?
                  <>
                  <Image source={{uri: profile.getImageUrl()}} style={{width: 200, height: 200}} />
                  <Text> </Text>
                  <Text>Github Repository: {profile.getUserName()} </Text>
                  <Text>Email: {profile.getEmail()} </Text>
                  <Text>Name: {profile.getName()} </Text>
                  <Text>Github Profile Creation Date: {profile.getCreationDate()} </Text>
                  <Text onPress={() => navigation.navigate('Repository Screen',
                   {userName: profile.getUserName()})} style={styles.bold}>
                       Public Repositories: {profile.getPublicCount()} </Text>
                  <Text onPress={() => navigation.navigate('Following Screen',
                    {userName: profile.getUserName()})} style={styles.bold}>
                    Total Following: {profile.getFollowing()} </Text>
                  <Text onPress={() => navigation.navigate('Followers Screen',
                    {userName: profile.getUserName()})} style={styles.bold}>
                    Total Followers: {profile.getFollowers()} </Text>
                  <Text> </Text>
                  <Text>Website: {profile.getWebsite()} </Text>
                  <Text> </Text>
                  <Text>Bio: {profile.getBio()} </Text>
                  </> : <Text> Loading... </Text>
              }
        </View>
      );
}

const styles = StyleSheet.create({
      bold: {fontWeight: 'bold'}
});

export default ProfileScreen;



