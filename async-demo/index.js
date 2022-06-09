console.log('Before');
getUser(1, (user) => {
    console.log('User', user);
    getRepositories(user.gitHubUsername, (repos) => {
        console.log('Repos', repos);
    });

});
console.log('After'); 

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from database...');
        callback({ id: id, gitHubUsername: 'manish257' });
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}