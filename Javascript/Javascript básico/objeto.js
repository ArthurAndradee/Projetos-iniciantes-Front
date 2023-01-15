let user = {
    name: "Walter",
    surname: "White",
    age: 50,
    teacher: true,
    city: "Albequerque",
};

let pc = {
    Marca: "Pichau",
    Cor: "Verde",
};

user["PC"] = pc;
user["age"] = 52;

console.table(user)

console.log(user['name']);