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
const FORM_DATA = "form-message"
const onInputChange = (event)=>{
// console.log("target", event.target);
// console.log(event.currentTarget);
const value = event.target.value;
localStorage.setItem(FORM_DATA, value);
}

formEl.addEventListener("input", onInputChange)

const populateData = ()=>{
const data = localStorage.getItem(FORM_DATA);  
textareaEl.value = data;
}
populateData();

const onSubmitForm = (event)=>{
event.preventDefault();
event.currentTarget.reset()
localStorage.removeItem(FORM_DATA)
}

formEl.addEventListener("submit", onSubmitForm);
