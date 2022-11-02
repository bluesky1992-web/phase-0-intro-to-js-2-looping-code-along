// for (let age = 30; age < 40; age++) {
//    console.log(`Im ${age} years old. Happy birthday to me!`);
  
// }

// const gifts = ["teddy bear","drone","doll"]

// const wrapGifts = (gifts) => {
//     for (let i =0; i < gifts.length; i++) {
//         console.log(`wrapped ${gifts[i]} and added a bow!`);
       
//     }
//     return gifts
// }

// wrapGifts(gifts)

const writeCards = (arr,event) => {
    const messages = []
    for(let i = 0; i < arr.length;i++) {
        
           const greetingMessgae = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`
           messages.push(greetingMessgae)
        
    }
    return messages
    
   

}
console.log(writeCards(["Charlie", "Samip", "Ali"], "Birthday"))



const countDown = (num) => {
  let i = 0
  while(i <= num) {
    
   console.log(num--)
    
  }
  return num
}
countDown(10)
