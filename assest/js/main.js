const data = {
    firstName: 'Hannah',
    lastName: 'Dakota',
    age: 24,
};

function searchFun() {
    let fname = document.getElementById('first_name').value;
    if (fname.toUpperCase() === data.firstName.toUpperCase()) {
        document.getElementById('result').innerHTML = 'Имя: ' + data.firstName + '<br>Фамилия:  ' + data.lastName + '<br>Возраст: ' + data.age;
    }
    else {
        document.getElementById('result').innerHTML = 'No results found for your request';
    }
}

document.getElementById('search').addEventListener('click', searchFun);
