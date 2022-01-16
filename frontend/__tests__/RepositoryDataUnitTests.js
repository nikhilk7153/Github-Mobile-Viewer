import React from 'react';
import renderer from 'react-test-renderer';
import RepositoryScreen  from '../screens/RepositoryScreen';
import { RepositoryList } from '../Model/RepositoryList';
import { RepositoryData } from '../Model/RepositoryData';
import { FetchData }  from '../Model/FetchData';
import { assertAnyTypeAnnotation } from '@babel/types';
import { useEffect, useState } from 'react';

/**
* Checks to see if the different repository information inputted as json string can be properly
* parsed by the RepositoryData class
*/

/**
* Checks to see that the repository data class will not be able to parse a valid json string
*/
test('Repository Data class can get all of the individual components properly', () => {

    const json_str= `{
                  "name": "Chess",
                  "owner": {
                    "login": "nikhilk7153"
                  },
                  "description": "Implementation of a chess game with pieces and a board. There is a graphical interface for users to play with."
                }`;

    let repoData = new RepositoryData(json_str);
    expect(repoData.getRepositoryName()).toBe("Chess");
    expect(repoData.getOwnerUserName()).toBe("nikhilk7153");
    expect(repoData.getRepositoryDescription()).toBe("Implementation of a chess game with pieces and a board. There is a graphical interface for users to play with.");

});

/**
* Checks to see that the repository data class will not be able to parse an invalid json string
*/
test('Repository Data class can get all of the individual components properly', () => {

    const improper_json_str = `{
                  "name": "Chess", \
                  "owner":
                    "login": "nikhilk7153"
                  ,
                  "description" "Implementation of a chess game with pieces and a board. There is a graphical interface for users to play with."
                }`

    try {
        let repData = new RepositoryData(improper_json_str);
        expect(false).toBe(true);
    } catch(error) {
        expect(true).toBe(true);
    }

});