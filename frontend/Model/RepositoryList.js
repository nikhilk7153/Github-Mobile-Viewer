import { RepositoryData } from './RepositoryData';

/**
 * Class takes the inital repository query and returns a list of the repository queries 
 */
export class RepositoryList { 
 
    repoList = [] // list to store all queries

    /**
     * Takes in a json and gives the output
     */
    constructor(data, viewerType) {
        let json = JSON.parse(data);

        for (var repo of json.data[viewerType].repositories.nodes) {
            this.repoList.push(new RepositoryData(JSON.stringify(repo)));
        }
    }

    /**
     * Function returns the list of repositories from the query
     * @returns the repository list 
     */
    getRepoList() { 
        return this.repoList;
    }
}