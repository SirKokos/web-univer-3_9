document.getElementById('b').addEventListener("click", function ()  {
    event.preventDefault();
    let data = document.getElementById('IDURL').value;

    fetch(data)
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




    let div = document.createElement("div");
    div.innerHTML = data;
    // Очистить содержимое body и добавить новый div
    document.body.appendChild(div);


});
