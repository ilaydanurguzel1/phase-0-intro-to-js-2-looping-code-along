// Code your solutions in this file

// for (let age=30; age<40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }

// const gifts=["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i=0; i<gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }
// wrapGifts(gifts);

//For
function writeCards(names,event){
    const messages=[];
    for(let i=0;i<names.length;i++){
      const message=`Thank you, ${names[i]}, for the wonderful ${event} gift!`
      messages.push(message);
    //   debugger;
    }
    return messages;
};
writeCards(["Charlie", "Samip", "Ali"],"birthday");


//While
function countDown(number){
    while (number>=0){
        console.log(number--)
    }

};
countDown(10);