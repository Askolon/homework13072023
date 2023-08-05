const users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Alice', age: 30 },
    { id: 3, name: 'Bob', age: 20 },
    { id: 4, name: 'Sarah', age: 35 },
    { id: 5, name: 'Michael', age: 28 }
  ];


//Найти все имена пользователей в массиве users и сохранить их в новый массив.

  const usersName = users.map(user=> user.name);
  console.log(usersName);

// Проверить, есть ли в массиве users пользователь с возрастом меньше 18 лет. 
// Сформируйте массив из таких пользователей.

const youngUsers = users.filter(user => user.age < 18);
console.log(youngUsers);

//Найти пользователя с наибольшим возрастом в массиве users.

const resultOld = users.reduce((old, current) => {
    if( old.age > current.age){
        return old;
    } else{
        return current;    }
},0);
console.log(resultOld);

//Создать новый массив, содержащий только идентификаторы (свойство id)
// пользователей из массива users.

const idUs = users.map( user => user.id);
console.log(idUs);

//Посчитать общую сумму возрастов всех пользователей в массиве users.

const sumYears = users.reduce((sum, current)=> sum + current.age ,0);
console.log(sumYears);

//Изменить возраст пользователя с идентификатором 3 на 22.

const newOld = users.map(user => {
    if (user.id === 3){
        user.age = 22;
        return user;
    } return user;
});
console.log(newOld);

//Создать новый массив, содержащий имена пользователей, у которых возраст меньше 30.

const newUsersArr = users.filter( user => {
    if (user.age < 30){
        return user;
    }
})

console.log(newUsersArr);

//Найти средний возраст пользователей в массиве users.

const summe = users.reduce((sum, current)=> sum + current.age, 0);
const middleYear = summe / users.length;

console.log(middleYear);