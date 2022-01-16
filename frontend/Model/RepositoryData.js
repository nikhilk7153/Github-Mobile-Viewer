/**
 * Purpose of this class is to break down repository information and create data fields for it 
 */
export class RepositoryData { 

    ownerUserName; // username of the owner of the repo
    repositoryName;  // name of the repo
    repositoryDescription; // description of the rep

    /**
     * Creates the 
     * @param data the json string of the object
     */
    constructor(data) { 
        let json = JSON.parse(data);

        this.repositoryName = json.name;
        this.ownerUserName = json.owner.login;
        this.repositoryDescription = json.description;
    }

    /**
     * Return the username of the owner 
     */
    getOwnerUserName() { 
        return this.ownerUserName;
    }

    /**
     * Returns the repository name
     */
    getRepositoryName() { 
        return this.repositoryName;
    }

    /**
     * Returns the repository description of the repo
     */
    getRepositoryDescription() { 
        return this.repositoryDescription;
    }
   
}