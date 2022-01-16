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
* Tests to ensure that the content of the fetch shows up properly for the followers screen
*/
test('renders followers data correctly', done => {

  let followList = new FollowList(queryResult.followerListStr, "user", "followers");

  const navigation = { navigate: jest.fn() };
  const tree = renderer.create(
      <FollowersScreen route = {{params: {userName: "khandekars", loaded: true, followerList: followList,
          mock: jest.fn(() =>{ done();})}}} navigation = {navigation}/>
  );

  tree.toJSON();
  expect(tree).toMatchSnapshot();

});

/**
* Tests to ensure that that the content of the fetch shows up properly for the following screen
*/
test('renders following data correctly', done => {

  let followList = new FollowList(queryResult.followingListStr, "user", "following");

  const navigation = { navigate: jest.fn() };
  const tree = renderer.create(
      <FollowingScreen route = {{params: {userName: "khandekars", loaded: true, followingList: followList,
          mock: jest.fn(() =>{ done();})}}} navigation = {navigation}/>
  );

  tree.toJSON();
  expect(tree).toMatchSnapshot();

});

/**
* Tests to ensure that that the content of the fetch shows up properly for the repository screen
*/
test('renders repository data correctly', done => {

  let repo_list = new RepositoryList(queryResult.repoListStr, "user");

  const navigation = { navigate: jest.fn() };
  const tree = renderer.create(
      <RepositoryScreen route = {{params: {userName: "khandekars", loaded: true, repList: repo_list,
          mock: jest.fn(() =>{ done();})}}} navigation = {navigation}/>
  );

  tree.toJSON();
  expect(tree).toMatchSnapshot();

});

/**
* Tests to ensure that that the content of the fetch shows up properly for the profile screen
*/
test('renders profile data correctly', done => {

  let profileData = new ProfileData(queryResult.profileInfoStr, "user");

  const navigation = { navigate: jest.fn() };
  const tree = renderer.create(
      <ProfileScreen route = {{params: {userName: "khandekars", loaded: true, profile: profileData,
          mock: jest.fn(() =>{ done();})}}} navigation = {navigation}/>
  );

  tree.toJSON();
  expect(tree).toMatchSnapshot();

});
