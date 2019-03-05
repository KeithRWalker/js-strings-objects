// function print(message) {
//     const outputDiv= document.getElementById('printDiv');
//     outputDiv.innerHTML += message;
//   };

  function print(id, message, br) {
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
console.log(iAmThirsty(18));

iAmThirsty(65);

print('printDiv', iAmThirsty(100));



    // under21? drink some water
    // over21, but under 65? have a beer
    //over 65 take a nap

    //bonus pring to dom