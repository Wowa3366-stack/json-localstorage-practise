const user = {
name: "Vova",
age: 14,
isstudent: true,
family: undefined,
listening: () => {
    console.log("I am listening");
}
}

const userJson = JSON.stringify(user);
console.log(userJson);
console.log(user);
user.listening()

const catJson = '{"name": "fasolka","age": 4}';

try {
  const cat = JSON.parse(catJson);

  console.log(cat.name);
} catch (error) {
  console.log(error);
}




