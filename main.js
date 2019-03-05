////////////////////////strings//////////////////////////////////////
const print = (id, message, br) => {
    const selectedDiv = document.getElementById(id);
    selectedDiv.innerHTML += message;
    if(br){selectedDiv.innerHTML +='<br>'};
  };

const iAmThirsty = (num) => {
    const tooYoung = `You are only ${num} that's too young to drink! Have some water instead!`;
    const tooOld = `You are ${num} years old, you should go take a nap!`;
    const oldEnough = `You are ${num}, here have a drink!`;

    if(num < 21){
        print('printDiv', tooYoung, true);
        return tooYoung;
    } else if(num >= 21 && num < 65){
        print('printDiv', oldEnough , true);
        return oldEnough;
    } else {                                //if(num >= 65)
        print('printDiv', tooOld, true);
        return tooOld;
    };
};

console.log(iAmThirsty(21));
iAmThirsty(65);

////////////////////////objects//////////////////////////////////////

let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};

console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);

let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010",
  }


const answer1 = console.log(`Our companies lawyer is ${employee.name}!`);   // 1.
const answer2 = console.log(`He was hired on ${employee.hire_date}!`);      // 2
const answer3 = employee.vacation_days = 20;                                // 3
const answer3b = employee['bracket_vacation'] = 20;                          // 3b
// the " " in eom require you to use bracket notations since you can't do employee."employee_of_the_month" = false
let eom = "employee_of_the_month";                          // 4a
employee[eom] = false;                                       // 4b


print('objectDiv', employee.eom + `<br><br>`, true);

const employeeInfo = () => {
    let name = `NAME: ${employee.name} <br>`;
    let age = `AGE: ${employee.age} <br>`;
    let dep = `DEP: ${employee.department} <br>`;
    let hired = `HIRE_DATE: ${employee.department} <br>`;
    let vac = `VACATION_DAYS: ${employee.vacation_days} <br>`;
    let eoms = `EMPLOYEE_OF_THE_MONTH: ${employee.employee_of_the_month} <br>`;

    const a1 = `<br>Our companies lawyer is ${employee.name}!<br>`
    const a2 = `He was hired on ${employee.hire_date}!<br>`
    const atitle = `<br>ANSWERS: `
    

    print('objectDiv', name+age+dep+hired+vac+eoms+atitle+a1+a2+vac+eoms, true);

};

employeeInfo();



// //////////////////////////////////// example object
// const catName = () => {
//     return 'Killer';
// }
// const bucketOCats= {
//     cat1:'fluffy',
//     cat2: 5,
//     cat3: cancelAnimationFrame,
//     cat4: {
//         water: 'nope',
//         sunglight: 'yep',
//     }
// };
// console.log(bucketOCats.cat2);
// console.log(bucketOCats.cat4.water);

// ////////////bracket notation
// console.log(bucketOCats['cat1']);




