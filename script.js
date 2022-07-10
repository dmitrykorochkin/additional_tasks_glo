
const getData = (file) => {
    return fetch(file)
    .then(response => response.json());
}

const sendData = (url, data) => {
    fetch(url, {
        method: 'POST',
        body: data,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json());
}

getData('db.json')
    .then(data => sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(data)))
    .catch(error => console.log(error));