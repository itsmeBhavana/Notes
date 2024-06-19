//call
let name = {
  firstName: "Bhavana",
  lastName: "Matavalam",
  printFullName: function (arg1, arg2) {
    console.log(
      this.firstName +
        " " +
        this.lastName +
        " and the age is " +
        arg1 +
        " from " +
        arg2
    );
  },
};

let name2 = {
  firstName: "Gowtham",
  lastName: "Kurapati",
};

//name.printFullName.call(name2);

name.printFullName.call(name2, 29, "Nellore");
name.printFullName(26, "Kanuru");

//apply
name.printFullName.apply(name2, [29, "Kavali"]);

let copyOfFunction = name.printFullName.bind(name2, 29, "Jaladhanki");
console.log(copyOfFunction);
