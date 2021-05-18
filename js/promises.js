'use strict';

const userLastCommit = username => {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GITHUB_ACCESS_TOKEN}`}})
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            let lastPush;
            for (let event of data) {
                if (event.type === "PushEvent") {
                    lastPush = new Date(event.created_at);
                    break;
                }
            }
            console.log(lastPush);
        });
}

userLastCommit("JosephRHopkins88");

// const github = fetch('https://api.github.com/users/JosephRHopkins88', {
//     method: 'GET',
//     headers: {'Authorization': 'GITHUB_ACCESS_TOKEN' }
// }).then(resp => resp.json());
// console.log(github)
//
// const wait = new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//         resolve();
//     } else {
//         reject();
//     }
// });
//
// wait.then(() => console.log('resolved!'));
// wait.catch(() => console.log('rejected!'));