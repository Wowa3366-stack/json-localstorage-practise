// const user = {
// name: "Vova",
// age: 14,
// isstudent: true,
// family: undefined,
// listening: () => {
//     console.log("I am listening");
// }
// }

// const userJson = JSON.stringify(user);
// console.log(userJson);
// console.log(user);
// user.listening()

// const catJson = '{"name": "fasolka","age": 4}';

// try {
//   const cat = JSON.parse(catJson);

//   console.log(cat.name);
// } catch (error) {
//   console.log(error);
// }

const formEl = document.querySelector(".js-feedback-form");
const textareaEl = formEl.querySelector('textarea[name="message"]');
const inputEl = formEl.querySelector('input[name="name"]');
const FORM_DATA = "form-data";
const onInputChange = (event) => {
  //   console.log(event.target.name, "target");
  // console.log(event.currentTarget);

  const formData = {
    name: inputEl.value,
    message: textareaEl.value,
  };
  const value = event.target.value;

  formData[event.target.name] = value;

  localStorage.setItem(FORM_DATA, JSON.stringify(formData));
};

formEl.addEventListener("input", onInputChange);

const populateData = () => {
  const data = localStorage.getItem(FORM_DATA);

  if (data) {
    const parsedData = JSON.parse(data);
    console.log(parsedData);

    textareaEl.value = parsedData.message;
    inputEl.value = parsedData.name;
  }
};
populateData();

const onSubmitForm = (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(FORM_DATA);
};

formEl.addEventListener("submit", onSubmitForm);

// storage.js

function save(key, value) {
  try {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  } catch (error) {
    console.log("Set data error", error);
  }
}



function load(key) {
  try {
const data = localStorage.getItem(key);
if (data) {
    return JSON.parse(data);
}else{
    return undefined
}

  } catch (error) {
    console.log("Get data error", error);
  }
}


