const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//es5
let emails = users.map(function (user){
    user = user.email;
    return user;
});
//es6
let es6emails = users.map(user => user.email);

let trilinguals = users.filter(function(user){
    return user.languages.length >= 3;
});

// let totalYearsOfExperience = users.reduce(function (total, user) {
//     let yearsOfExperience = user.yearsOfExperience;
//     return total + yearsOfExperience;
// }, 0);

totalYearsOfExperience = users.reduce((total, user) => total + user.yearsOfExperience, 0);

let emailsViaReduce = users.reduce(function (accumulator, user) {
    if (index === usersArray.length -1){
        accumulator.push(user.email);
        accumulator.sort(function(email1, email2) {
            return email2.length - email1.length;
        });
        return accumulator[0];
    } else {
        accumulator.push(user.email);
        return accumulator;
    }
}, []);

let longestUserEmail = emails.reduce((a, b) => a.length > b.length ? a : b);

// let longestUserEmail = users.reduce((a, b) => {
//     return a.length > b.email.length ? a : b.email;
// });

let usersNames = users.reduce((accumulator, user, index, arr) => {
    if (index === arr.length -1) {
        accumulator += `${user.name}.`;
    } else {
        accumulator += `${user.name}, `;
    }
    return accumulator;
},'Users names are: ');