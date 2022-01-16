/**
 * Purpose of this class to get a github user's information from the followers and following list
 */
export class FollowData {

   imageUrl; // the image url of the github user
   name; // the name of the github user
   userName; // the user name of the github user

    /**
     * Creates an object that stores the information for followers and following users
     * @param data the json string of the object
     */
    constructor(data) {

        this.imageUrl = data.avatarUrl;
        this.name = data.name;
        this.userName = data.login;
    }

    /**
     * Returns the user's avatar url
     */
    getImageUrl() {
        return this.imageUrl;
    }

    /**
     * Returns user's name
     */
    getName() {
        return this.name;
    }

    /**
     * Returns the user's github username
     */
    getUserName() {
        return this.userName;
    }

}