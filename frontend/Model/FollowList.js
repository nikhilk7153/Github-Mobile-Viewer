import { FollowData } from './FollowData';

/**
 * Class takes the initial repository query and returns a list of the repository queries
 */
export class FollowList {

    usersList = []; // list to store all queries

    /**
     * Takes in a json and gives the output
     */
    constructor(data, viewingType, followType) {
        let json = JSON.parse(data);
        let json_data = json.data;

        let user_list = json_data[viewingType][followType].edges;

        for (var user of user_list) {
            this.usersList.push(new FollowData(user.node));
        }

    }

    /**
     * Function returns the list of repositories from the query
     * @returns the repository list
     */
    getFollowList() {
        return this.usersList;
    }
}