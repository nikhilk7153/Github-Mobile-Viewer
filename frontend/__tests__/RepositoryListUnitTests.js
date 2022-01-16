import React from 'react';
import ProfileScreen from '../screens/ProfileScreen';
import renderer from 'react-test-renderer';
import RepositoryScreen  from '../screens/RepositoryScreen';
import { RepositoryList } from '../Model/RepositoryList';
import  {FetchData}  from '../Model/FetchData';
import {ProfileData} from '../Model/ProfileData';
import { assertAnyTypeAnnotation } from '@babel/types';
import { useEffect, useState } from 'react';
import {RepositoryData} from '../Model/RepositoryData';


/**
 * Checks to see that the json can be properly broken down into it's individual components for properly
 * formatted json strings and the class will not break down invalid json strings
 */

/**
 * Checks to see that repository will not break down a json string that is properly formatted
 */


test('Repository List can accept a proper string and convert it into a list with correct number of Respository Data items', () => {

    const json_str = `{
        "data": {
          "viewer": {
            "repositories": {
              "nodes": [
                {
                  "name": "Chess",
                  "owner": {
                    "login": "nikhilk7153"
                  },
                  "description": "Implementation of a chess game with pieces and a board. There is a graphical interface for users to play with. "
                },
                {
                  "name": "Cryptocurrency",
                  "owner": {
                    "login": "nikhilk7153"
                  },
                  "description": "Project which gives users a visual interpretation for the fluctuations in cryptocurrency everyday. "
                },
                {
                  "name": "MLB-Fantasy-Predictions",
                  "owner": {
                    "login": "nikhilk7153"
                  },
                  "description": "Project for recommending MLB players for users for their fantasy teams. "
                }
              ]
            }
          }
       }
    }`

    let repoList = new RepositoryList(json_str, "viewer");
    expect(repoList.getRepoList().length).toBe(3);

});


/**
 * Checks to see that repository will not break down a json string that is not properly formatted
 */

test('Repository List will throw an exception for an improper formatted string', () => {
    const json_str = `{
        "d": {
          "vievers" {
            "repositories": {
              "nodes": [
                {
                  "name": "Chess",
                  "owner": {
                    "login": "nikhilk7153"
                  },
                  "description": "Implementation of a chess game with pieces and a board. There is a graphical interface for users to play with. "
                },
                {
                  "name": "Cryptocurrency",
                  "owner": {
                    "login": "nikhilk7153"
                  },
                  "description": "Project which gives users a visual interpretation for the fluctuations in cryptocurrency everyday. "
                }
              ]
            }
          }
        }
      }`;

      try {
        let repoList = new RepositoryList(json_str, "viewer");
        expect(false).toBe(true);
      } catch(error) {
        expect(true).toBe(true);
      }

});
