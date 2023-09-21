

// function get(){
//     let url_locale = document.getElementById('idurl')
//     let formData = new FormData();
//     formData.append('url', url_locale);
//     console.log(formData)
//     return formData;
// }



const url = document.getElementById('IDURL').value;

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Преобразуем ответ в JSON
    })
    .then(data => {
        // Обработка данных
        console.log(data);
    })
    .catch(error => {
        // Обработка ошибок
        console.error('Произошла ошибка:', error);
    });
// const xht =new XMLHttpRequest()
//
// let url_locale = document.getElementById('idurl')
//
//
// xht.open("GET","https://jsonplaceholder.typicode.com/posts")
// xht.responseType = "json"
//
// xht.onload = function (){
//   console.log(xht.response)
// }
//
// xht.onerror = function (){
//   console.log(xht.response)
// }
// xht.send()
