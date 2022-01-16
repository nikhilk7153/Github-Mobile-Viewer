import React from 'react';
import ProfileScreen from '../screens/ProfileScreen';
import renderer from 'react-test-renderer';
import RepositoryScreen  from '../screens/RepositoryScreen';
import  {FetchData}  from '../Model/FetchData';
import {ProfileData} from '../Model/ProfileData';
import { assertAnyTypeAnnotation } from '@babel/types';

/**
 * Purpose of this class was to test if the ProfileData class is able to parse valid and invalid jsons that
 * are given to it
 */

/**
 * Checks to see if the constructor can break down a valid json string
 */
test("For proper formatting, the Profile Data can be made into an object", () => {

    let json_str = `{
        "data": {
          "viewer": {
            "avatarUrl": "https://avatars.githubusercontent.com/u/78981399?u=95fb0da55ec89bc50d660313e27fb350ac0814c3&v=4",
            "name": "Nikhil Khandekar",
            "login": "nikhilk7153",
            "email": "nskhandekar7153@gmail.com",
            "bio": "I am a junior majoring in Statistics and Computer Science at UIUC. Shown below are some of the projects that I've been working on the last two years.",
            "websiteUrl": "https://www.linkedin.com/in/nikhil-khandekar-ab322117b/",
            "repositories": {
              "totalCount": 7
            },
            "followers": {
              "totalCount": 0
            },
            "following": {
              "totalCount": 0
            }
          }
        }
      }
    ` ;

    let profData = new ProfileData(json_str, "viewer");
    expect(profData.getName()).toBe('Nikhil Khandekar');
    expect(profData.getUserName()).toBe('nikhilk7153');
    expect(profData.getEmail()).toBe('nskhandekar7153@gmail.com');
    expect(profData.getImageUrl()).toBe('https://avatars.githubusercontent.com/u/78981399?u=95fb0da55ec89bc50d660313e27fb350ac0814c3&v=4');
    expect(profData.getWebsite()).toBe('https://www.linkedin.com/in/nikhil-khandekar-ab322117b/');
    expect(profData.getFollowers()).toBe(0);
    expect(profData.getFollowing()).toBe(0);
    expect(profData.getPublicCount()).toBe(7);

});

/**
 * Checks to see if the constructor can break down an invalid json string
 */
test("For improper formatting, the Profile Data can properly be rendered", () => {

  let improper_json_str= `{
      "data" {
        "viewer" {
          "avatarUrl": "https://avatars.githubusercontent.com/u/78981399?u=95fb0da55ec89bc50d660313e27fb350ac0814c3&v=4",
          "name" "Nikhil Khandekar",
          "login": "nikhilk7153",
          "email": "nskhandekar7153@gmail.com",
          "bio": "I am a junior majoring in Statistics and Computer Science at UIUC. Shown below are some of the projects that I've been working on the last two years. ",
          "websiteUrl": "https://www.linkedin.com/in/nikhil-khandekar-ab322117b/",
          "repositories": {
            "totalCount": 7
          },
          "followers": {
            "totalCount": 0
          },
          "following": {
            "totalCount": 0
          }
        }
      }
    }
  ` ;

  try {
    let profData = new ProfileData(improper_json_str);
    expect(false).toBe(true);
  } catch(error) {
    expect(true).toBe(true)
  }
});
