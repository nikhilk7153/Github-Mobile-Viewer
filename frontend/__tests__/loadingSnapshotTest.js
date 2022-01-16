import React from 'react';
import ProfileScreen from '../screens/ProfileScreen';
import renderer from 'react-test-renderer';
import FollowersScreen from '../screens/FollowersScreen';
import FollowingScreen from '../screens/FollowingScreen';
import RepositoryScreen  from '../screens/RepositoryScreen';
import {FollowList} from '../Model/FollowList';


/**
* Class does screenshot testing to see if the rendering of the screens is done properly
* for the loading
*/

/**
 * Checks if the followers screen is rendered properly
 */

beforeEach(() => {
  fetch.resetMocks();
  fetch.doMock();
});

/**
* The purpose of this class is to check that all error handling is done properly
*/

/**
* Tests to ensure that that the loading screen shows up properly for the followers screen
*/
test('renders followers loading view correctly', done => {
   const navigation = { navigate: jest.fn() };
    const tree = renderer.create(
        <FollowersScreen route = {{params: {userName: "khandekars", loaded: false, followerList: null,
            mock: jest.fn(() =>{ done();})}}} navigation = {navigation}/>
    );
  tree.toJSON();
  expect(tree).toMatchSnapshot();
});

/**
* Tests to ensure that that the loading screen shows up properly for the following screen
*/
test('renders following loading view correctly', done => {
   const navigation = { navigate: jest.fn() };
    const tree = renderer.create(
        <FollowingScreen route = {{params: {userName: "khandekars", loaded: false, followingList: null,
            mock: jest.fn(() =>{ done();})}}} navigation = {navigation}/>
    );
  tree.toJSON();
  expect(tree).toMatchSnapshot();
});

/**
* Tests to ensure that that the loading screen shows up properly for the repository screen
*/
test('renders repository loading view correctly', done => {
   const navigation = { navigate: jest.fn() };
    const tree = renderer.create(
        <RepositoryScreen route = {{params: {userName: "khandekars", loaded: false,
            mock: jest.fn(() =>{ done();})}}} navigation = {navigation}/>
    );
  tree.toJSON();
  expect(tree).toMatchSnapshot();
});

/**
* Tests to ensure that that the loading screen shows up properly for the profile screen
*/
test('renders profile loading view correctly', done => {
   const navigation = { navigate: jest.fn() };
    const tree = renderer.create(
        <ProfileScreen route = {{params: {userName: "khandekars", loaded: false,
            mock: jest.fn(() =>{ done();})}}} navigation = {navigation}/>
    );
  tree.toJSON();
  expect(tree).toMatchSnapshot();
});


