import React from 'react';
import ProfileScreen from '../screens/ProfileScreen';
import renderer from 'react-test-renderer';
import FollowersScreen from '../screens/FollowersScreen';
import FollowingScreen from '../screens/FollowingScreen';
import RepositoryScreen  from '../screens/RepositoryScreen';
import {FollowList} from '../Model/FollowList';
import { RepositoryList } from '../Model/RepositoryList';
import {ProfileData} from '../Model/ProfileData';
import {queryResult} from '../queryResult';

/**
* The purpose of this class is to check that all error handling is done properly
*/

/**
* Tests to ensure that that the error screen shows up properly for the followers screen when
* there is an error
*/
test('renders followers screen to error page because of exception', done => {

  let followList = new FollowList(queryResult.followerListStr, "user", "followers");
  const navigation = { navigate: jest.fn() };
  const tree = renderer.create(
        <FollowersScreen route = {{params: {userName: "***", loaded: true, followerList: followList,
             mock: jest.fn(() =>{ done();})}}} navigation = {navigation}/>
    );
  tree.toJSON();
  expect(tree).toMatchSnapshot();
});

/**
* Tests to ensure that that the error screen shows up properly for the following screen when
* there is an error
*/
test('renders following screen to error page because of exception', done => {

  let followList = new FollowList(queryResult.followingListStr, "user", "following");

  const navigation = { navigate: jest.fn() };
  const tree = renderer.create(
      <FollowingScreen route = {{params: {userName: "***", loaded: true, followingList: followList,
          mock: jest.fn(() =>{ done();})}}} navigation = {navigation}/>
  );

  tree.toJSON();
  expect(tree).toMatchSnapshot();

});

/**
* Tests to ensure that that the error screen shows up properly for the repository screen when
* there is an error
*/
test('renders repository screen to error page because of exception', done => {


  let repo_list = new RepositoryList(queryResult.repoListStr, "user");

  const navigation = { navigate: jest.fn() };
  const tree = renderer.create(
      <RepositoryScreen route = {{params: {userName: "***", loaded: true, repList: repo_list,
          mock: jest.fn(() =>{ done();})}}} navigation = {navigation}/>
  );

  tree.toJSON();
  expect(tree).toMatchSnapshot();

});

/**
* Tests to ensure that that the error screen shows up properly for the profile screen when
* there is an error
*/
test('renders profile screen to error page because of exception', done => {



  let profileData = new ProfileData(queryResult.profileInfoStr, "user");

  const navigation = { navigate: jest.fn() };
  const tree = renderer.create(
      <ProfileScreen route = {{params: {userName: "***", loaded: true, profile: profileData,
          mock: jest.fn(() =>{ done();})}}} navigation = {navigation}/>
  );

  tree.toJSON();
  expect(tree).toMatchSnapshot();

});
