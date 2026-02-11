// // // // Exo 1 
// // // // function separationindex(liste){
// // // //    let pair=[];
// // // //    let impair=[];  

// // // // for(let i=0; i<liste.length; i++){

// // // // if(liste[i] % 2 == 0){
// // // //     pair.push(liste[i]);

// // // // }else { impair.push(liste[i])

// // // // }
// // // // }
// // // // return pair, impair 
// // // // }
// // // // const liste =[11, 34, 22, 76, 31, 12, 29];
// // // // console.log(separationindex(liste));  


// // // //Exo 2

// // // function comparaisonVoiture(prix){
// // //   if(voiture1.prix > voiture2.prix){
// // //     return "voiture la plus chere :" + voiture1.marque + " " + voiture1.modele; 
// // //   } else if(voiture1.prix < voiture2.prix){
// // // return "voiture la plus chere :" + voiture2.marque + " " + voiture2.modele;
// // //   }
// // // }

// // // const voiture1 = {
// // // marque: "Renault",
// // // modele: "Clio",
// // // prix: 13000
// // // };
// // // const voiture2 = {
// // // marque: "Renault",
// // // modele: "Megane",
// // // prix: 18000
// // // };

// // // console.log(comparaisonVoiture(voiture1, voiture2));



// // //Exo3
// //   function leplusgrandnombre(tableau){
// // let max = tableau50[0]; 

// // for (let i = 1; i < tableau50.length; i++) {
// //     if (tableau50[i] > max) {
// //         max = tableau50[i]; 
// //     }
// // }
// // return max;
// //   }

// // const tableau50 = [
// // 523, 12, 87, 432, 234, 91, 678, 45, 234, 12,
// // 876, 34, 210, 56, 789, 123, 345, 987, 54, 321,
// // 432, 210, 654, 76, 89, 12, 98, 765, 234, 567,
// // 890, 12, 345, 678, 901, 234, 567, 123, 876, 543,
// // 12, 345, 678, 234, 567, 89, 90, 123, 456, 789
// // ];

// // console.log("Le plus grand nombre est :", leplusgrandnombre(tableau50));

// //Exo4 
//   function multiplede6(tableau){
//     let multiplesDe6 = [];
    
//     for (let i = 0; i < tableau.length; i++) {
//         if (tableau50[i] % 6 === 0) {
//             multiplesDe6.push(tableau50[i]);
//         }
//     }

//    return multiplesDe6;
//   }
// const tableau50 = [
//  523, 12, 87, 432, 234, 91, 678, 45, 234, 12,
//  876, 34, 210, 56, 789, 123, 345, 987, 54, 321,
//  432, 210, 654, 76, 89, 12, 98, 765, 234, 567,
//  890, 12, 345, 678, 901, 234, 567, 123, 876, 543,
//  12, 345, 678, 234, 567, 89, 90, 123, 456, 789
//  ];

// console.log("Multiples de 6 :", multiplede6(tableau50));


//Exo5
function multiples(tab, n){
   let newTab = []
     for (i=0;i<tab.length;i++){
         if (tab[i] % n == 0) {
             newTab.push(tab[i])
         }
     } console.log(newTab)
 }

 const tableau50 = [
 523, 12, 87, 432, 234, 91, 678, 45, 234, 12,
  876, 34, 210, 56, 789, 123, 345, 987, 54, 321,
 432, 210, 654, 76, 89, 12, 98, 765, 234, 567,
  890, 12, 345, 678, 901, 234, 567, 123, 876, 543,
 12, 345, 678, 234, 567, 89, 90, 123, 456, 789
 ];

 console.log(multiples(tableau50,4))
  


