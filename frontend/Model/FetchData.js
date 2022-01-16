import React, { useEffect, useState } from 'react';
import { ProfileData } from "./ProfileData";
import { RepositoryList } from './RepositoryList';
import token from './OAuthToken';
import { FollowList } from './FollowList';

/**
 * The purpose of this class was to fetch the data for getting the 
 * repository and profile information of a user. There is a function of getting the initial repository 
 * information and getting the initial profile information. Both of them will send the parsed json 
 * from the github account and place it into classes. 
 */

export class FetchData {
   
    static headers = { 
        "Content-Type": "application/json", 
        "Authorization": `Bearer ${token}`
    } // headers needed for getting the data

    static baseUrl = "https://api.github.com/graphql"; // url for querying

    /**
     * Function gets the json information for profile info and returns the code
     */
    initProfileInfo =(viewerType, userName) => {
        let queryType = FetchData.viewQuery(viewerType, userName);

        const query = `query {
            ${queryType} {
                avatarUrl,
                name,
                login,
                email,
                bio,
                websiteUrl,
                createdAt,
                repositories(first:0, privacy: PUBLIC) {
                    totalCount
                },
                followers(first:0) {
                    totalCount
                },
                following(first:0) {
                    totalCount
                }
            }
        }`;

        return fetch(FetchData.baseUrl, {
            method: "POST",
            headers: FetchData.headers,
            body: JSON.stringify({query})
        }).then(res => res.json())
        .then((data) => {
            return new ProfileData(JSON.stringify(data), viewerType);
        }).catch(err => {
            console.log("Fetch data error for profile");
            console.log(err);
            return err;
        });
    }

    /**
     * Function returns a repo list after parsing the query
     * @returns a promise to return a Repository List
     */

    initRepoList =(viewerType, userName) => {
        let queryType = FetchData.viewQuery(viewerType, userName);

        const repoQuery = {query: `query {
            ${queryType} {
                repositories(first:100, privacy:PUBLIC) {
                    nodes {
                    name,
                    owner {
                        login
                    },
                    description
                    }
                }
                }
            }`
        };

        return fetch(FetchData.baseUrl, {
            method: "POST",
            headers: FetchData.headers,
            body: JSON.stringify(repoQuery)
        }).then(res => res.json())
        .then((data) => {
            return new RepositoryList(JSON.stringify(data), viewerType);
        }).catch(err => {
            console.log("Fetch data error for repo");
            console.log(err);
            return err;
        });
    }

    /**
    * Function creates the list of users that the user is following or the list of users are
    * following.
    * @param followType indicates whether the github user belongs to the following or followers list
    * @param viewerType indicates whether the github user belongs
    * @param userName specifies the userName if the query is a user query
    */
    initFollow = (followType, viewerType, userName) => {

        let queryType = FetchData.viewQuery(viewerType, userName);

        let followersQuery = {query: `query {
                                         ${queryType} {
                                           ${followType} (last: 100) {
                                                edges {
                                               node {
                                                   name,
                                                   login,
                                                   avatarUrl
                                               }
                                             }
                                           }
                                         }
                                       }`
                              };

        return fetch(FetchData.baseUrl, {
                         method: "POST",
                         headers: FetchData.headers,
                         body: JSON.stringify(followersQuery)
                     }).then(res => res.json())
                     .then((data) => {
                         return new FollowList(JSON.stringify(data), viewerType, followType);
                     });
    }

    /**
    * Function returns the graphql syntax for a viewer or user query depending on the user's
    * specifications.
    * @viewerType specifies whether the search will be on a user or a viewer
    * @userName is the github username needed for a user query
    */

    static viewQuery (viewerType, userName) {
        let queryType = '';
        if (viewerType === "viewer") {
            queryType = 'viewer';
        } else if (viewerType === "user") {
            queryType = `user(login: \"${userName}\")`;
        }
        return queryType;
    }



}
