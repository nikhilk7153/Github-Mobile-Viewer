/**
 * Class is meant to break apart a json and breaks each of their fields into a member variable. 
 */

export class ProfileData { 

    imageUrl // image url of the profile pic
    userName // github username
    email // email
    bio;  // biography
    website; // user's website
    name; // user's full name
    creationDate; //date when the file was created
    publicRepos; // total number of public repositories
    following; // total number of people who are following the user
    followers; // total number of followers
    
    /**
     * Break's the json string and places the fields as a member variable 
     * @param data is a string version of the json
     */
    constructor(data, viewerType) {
        let json = JSON.parse(data);
        let json_data_viewer = json.data[viewerType];

        this.imageUrl = json_data_viewer.avatarUrl;
        this.userName = json_data_viewer.login;
        this.email = json_data_viewer.email;
        this.creationDate = json_data_viewer.createdAt;
        this.website = json_data_viewer.websiteUrl;
        this.name = json_data_viewer.name;
        this.publicRepos = json_data_viewer.repositories.totalCount;
        this.following = json_data_viewer.following.totalCount;
        this.followers = json_data_viewer.followers.totalCount;
        this.bio = json_data_viewer.bio;
    }

    /**
     * Function returns the image url 
     */
    getImageUrl() {
        return this.imageUrl;
    }

    /**
     * Function returns the user's github username 
     */
    getUserName() {
        return this.userName;
    }

    /**
     * Function returns the user's email 
     */
    getEmail() { 
        return this.email;
    }

    /**
     * Function returns the user's bio
     */
    getBio() { 
        return this.bio;
    }

    /**
    * Function returns the user's website url
    */
    getWebsite() { 
        return this.website;
    }

    /**
    * Function returns the user's name
    */
    getName() { 
        return this.name;
    }

    /**
    * Function returns the user's creation date of their github account
    */
    getCreationDate() { 
        return this.creationDate;
    }

    /**
    * Function returns the user's creation date of their github account
    */
    getPublicCount() { 
        return this.publicRepos;
    }

    /**
    * Returns the number of individuals who are followers
    */
    getFollowers() {
        return this.followers;
    }
    
    /**
     * Returns the number of individuals following 
     */
    getFollowing() { 
        return this.following;
    }

}

