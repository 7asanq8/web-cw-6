function logger(array){
    for ( let friends of Array){
       console.log(friends);
    }
    let friends = ["Omar","Ali","Muhammed"];
    logger(friends);
    }
    
    // hottestDays
function hottestDays(array2, number) {
   for (let array2 of TEMPs) {
     if (array2 > number) {
       console.log(array2);
     }
   }
 }
 let TEMPs = [-1, 8, 20, 34, 47, 52, 58];
 
 hottestDays(TEMPs, 34);
 //
 
 function getBookById(books, bookId) {
   for (let ha of books) {
     0;
     if (ha.Id == bookId) {
       console.log(ha.boook);
       break;
     } else {
       console.log("undefined");
     }
   }
 }
 
 let boooks = [
   { boook: "Arabic", Id: 1 },
   { boook: "English", Id: 2 },
   { boook: "story", Id: 3 },
 ];
 
 getBookById(boooks, 3);
 
 // 2
 let iteam = prompt("ما هي السلعة؟ - اكتب انتهيت عندما تنتهي");
 let cart = [];
 
 while (iteam != "انتهيت") {
   let quantity = prompt("ما هي الكمية التي تريدها؟");
   let price = prompt("كم سعر المنتج؟");
   cart.push({ iteam: iteam, price: price, quantity: quantity });
   iteam = prompt("ما هي السلعة؟ - اكتب انتهيت عندما تنتهي");
 }
 console.log("------------");
 console.log("الفاتورة");
 console.log("------------");
 let total = 0;
 for (let fatora of cart) {
   console.log(
     fatora.quantity + " " + fatora.iteam + " " + fatora.price + " KD"
   );
   total = total + fatora.price * fatora.quantity;
 }
 
 console.log("------------");
 console.log("السعر الكلي : ", total);