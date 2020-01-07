const data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40,
    },
    {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54,
    },
    {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24,
    },
];


let outputName;
function searchFun() {
    let fname = document.getElementById('first_name').value;
    for (let i = 0; i < data.length; i++) {
        if (data[i].firstName.toUpperCase() == fname.toUpperCase()) {
            outputName = 'Имя: ' + data[i].firstName + '<br>Фамилия: ' + data[i].lastName + '<br>Возраст: ' + data[i].age;
            result.innerHTML = outputName;
            console.log(outputName);
            break
        }
    else {
            result.innerHTML = 'No results found for your request';
    }
    }
}

document.getElementById('search').addEventListener('click', searchFun);



