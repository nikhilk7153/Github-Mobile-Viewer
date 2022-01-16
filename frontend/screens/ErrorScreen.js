import React, {useState, useEffect } from "react";
import {View, StyleSheet, Text, Image, FlatList } from 'react-native';

/**
* Returns an error page if there is an error in the query
*/
ErrorScreen = () => {

        return(
          <View>
            <Text style={{fontSize: 45, alignItems: 'center', textAlign: 'center'}}>
                There appears to be an error, which is why the page has not loaded </Text>
          </View>
        );
}

export default ErrorScreen;