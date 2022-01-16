import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { RepositoryList } from '../Model/RepositoryList';
import { FetchData } from '../Model/FetchData';
import ErrorScreen from './ErrorScreen';

/**
* Function will render all of the relevant information for each of the repositories onto a screen
* @returns a view of the list of repositories
*/
const RepositoryScreen = ({route, navigation}) => {

    const[loaded, setLoaded] = useState(route.params.loaded);
    const[repList, setRepList] = useState(route.params.repList);
    const{userName} = route.params;

    fetchRepoData = route.params.mock ? route.params.mock : async() => {
        try {
            let fetchData = new FetchData();
            fetchData.initRepoList("user", userName).then((repo_list) => {
                setRepList(repo_list);
                setLoaded(true);
            });
        } catch{
            navigation.navigate("Error Screen");
        }
    }

    useEffect(fetchRepoData, []);

    return(
      <View>
      {loaded ?
      <>
      <FlatList data = {repList.getRepoList()}
        renderItem={({item}) => <>
                                <Text>Repository name: {item.getRepositoryName()}</Text>
                                <Text></Text>
                                <Text onPress={() => navigation.navigate('Profile Screen',
                                    {viewerType: "user", userName: item.getOwnerUserName()})} style={styles.bold}>
                                    Owner name: {item.getOwnerUserName()}</Text>
                                <Text></Text>
                                <Text>Repository Description: {item.getRepositoryDescription()} </Text>
                                <Text></Text>
                                <Text> --- </Text>
                                </>
                  }
        keyExtractor={(item) => {return item.getRepositoryName()}}
      />
      </> : <Text> Loading... </Text>
      }
    </View>
    );

}

const styles = StyleSheet.create({
      bold: {fontWeight: 'bold'}
})

export default RepositoryScreen;
