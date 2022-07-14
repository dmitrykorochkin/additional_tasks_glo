
// const getData = (file) => {
//     return fetch(file)
//     .then(response => response.json())
//     .then(file => {
//         console.log(file);
//     })
    
// }
// console.log()

// const sendData = (url, data) => {
//     fetch(url, {
//         method: 'POST',
//         body: data,
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       }).then((response) => response.json())
//         .then(data => {
//             console.log(data)
//         })
// }

// getData('db.json')
//     .then(data => sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(data)))
//     .catch(error => console.log(error));


const getData = (url) => {
    return fetch(url)
        .then(response => {
            console.log('Получение данных из ' + url);
            return response.json();
        });
};

const sendData = ({
    url,
    data,
    method
}) => {
    return fetch(url, {
        method: method,
        body: data,
        headers: {
            'Content-type': 'application/json;charset=utf-8'
        }
    }).then(response => {
        console.log('Отправление данных на ' + url);
        return response.json();
    });
};

getData('db.json')
    .then(data => {
        console.log(data);
        return sendData({
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: JSON.stringify(data),
            method: 'POST'
        });
    })
    .then(data => console.log(data))
    .catch(error => console.log('Ошибка: ' + error));