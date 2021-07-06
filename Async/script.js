// //--------XMLHttpRequest------

// //--------------Callback function-----------
// const getTodo = (resource, callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText)
//             callback(undefined, data);
//         } else if (request.readyState === 4) {
//             callback('could not fetch data', undefined);
//         }
//     })

//     request.open('GET', resource);
//     request.send();
// }

// getTodo('https://jsonplaceholder.typicode.com/posts/1', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
//     getTodo('https://jsonplaceholder.typicode.com/posts/2', (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data);
//         }
//         getTodo('https://jsonplaceholder.typicode.com/posts/3', (err, data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(data);
//             }
//         });
//     });
// });

// //---------Promise function-----------

//stencil// const getSomething = () => {
/////     return new Promise((resolve, reject) => {
/////         //fetch endpoint data logic
/////         resolve(data);
/////         //fetch endpoint error logic
/////         reject(err);
/////     });
///// }

///// getSomething('endpoint1').then(data => {
/////     console.log(data);
/////     return getSomething('endpoint2'); //nesting promises as return functions
///// }).then(data => {
/////     console.log(data);
///// }).catch(err => {
/////     console.log(err);
///// })

//code/

// const getTodo = (resource) => {

//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText)
//                 resolve(data);
//             } else if (request.readyState === 4) {
//                 reject('could not fetch data');
//             }
//         })

//         request.open('GET', resource);
//         request.send();
//     });

// }

// getTodo('https://jsonplaceholder.typicode.com/comments/1').then(data => {
//     console.log('Promise 1 resolved: ', data);
//     return getTodo('https://jsonplaceholder.typicode.com/comments/2');
// }).then(data => {
//     console.log('Promise 2 resolved: ', data);
//     return getTodo('https://jsonplaceholder.typicode.com/comments/3');
// }).then(data => {
//     console.log('Promise 3 resolved: ', data);
// }).catch(err => {
//     console.log('Promise rejected', err);
// });



// //-------------Fetch API-------

// fetch('https://jsonplaceholder.typicode.com/users').then(response => {
//     console.log('Resolved', response);
//     return response.json(); //data handling
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log('Rejected', err);
// });



// //-----------Async & Await--------

const getTodo = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return data;
}

getTodo().then(data => {
    console.log('Resolved:', data);
}).catch(err => {
    console.log('Rejected:', err);
})