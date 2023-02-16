let user = {
    name: "Taelen",
    email: "taelenmachado@gmail.com",
    img: "https://imagens-revista-pro.vivadecora.com.br/uploads/2022/05/Plumeria.-Fonte-Flores-e-Folhagens.jpg"
};

let userJSON = JSON.stringify(user);
localStorage.setItem("user",userJSON);

let userLocalStorage = localStorage.getItem("user");
console.log(userLocalStorage);

user.name = "Natan"

userJSON = JSON.stringify(user);
localStorage.setItem("user",userJSON);

userLocalStorage = localStorage.getItem("user");
console.log(userLocalStorage);
