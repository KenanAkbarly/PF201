// //  function sumeBetween(a,b){
// //     let sum = 0;
// //     for(let i = a; i<=b ; i++){
// //         sum+=i
// //     }
// //     return sum;
// //  }

// // console.log( sumeBetween(10,15))
// // function anagram(param1,param2){
// //     if(param1.length !== param2.length) return false
// //     param1 = param1.toLowerCase();
// //     param2 = param2.toLowerCase();
// //      let Sortedparam1 = param1.split('').sort().join('');
// //      let Sortedparam2 = param2.split('').sort().join('');
// //      return Sortedparam1 === Sortedparam2;

// // }
// // console.log(anagram("salam", "Malas"))



// // function sumArrElements(arr){
// //     let sum = 0;
// //     for(let i = 0; i < arr.length; i++){
// //         sum += arr[i]
// //     }
// //     return sum;
// // }
// // console.log(sumArrElements([1,2,3]))

// // function wordsLength(sentence){
// //     let words = sentence.split(' ')
// //     let maxLength = 0;

// //     let longWord = []
// //     for(let i = 0; i < words.length; i++){
// //         let word = words[i];
// //         let wordLength = word.lengthwhat
// //         if(wordLength > maxLength){
// //             maxLength = wordLength;
// //             longWord = [word];
// //         }else if(wordLength === maxLength){
// //             longWord.push(words[i]);
// //         }
// //     }
// //     return longWord;
// // }
// // console.log(wordsLength('Bu cümlənin içindəki ən uzun sözü tapın.'))




// const athletes = [  {
//     name: "Usain Bolt",
//     sport: "Track and Field",
//     hasWorldRecord: true,
//     gender: "Male",
//     age: 35,
//     totalMedals: 8,
//     country: "Jamaica",
//   },
//   {
//     name: "Simone Biles",
//     sport: "Gymnastics",
//     hasWorldRecord: false,
//     gender: "Female",
//     age: 25,
//     totalMedals: 12,
//     country: "United States",
//   },
//   {
//     name: "Michael Phelps",
//     sport: "Swimming",
//     hasWorldRecord: true,
//     gender: "Male",
//     age: 37,
//     totalMedals: 28,
//     country: "United States",
//   },
//   {
//     name: "Katie Ledecky",
//     sport: "Swimming",
//     hasWorldRecord: true,
//     gender: "Female",
//     age: 25,
//     totalMedals: 10,
//     country: "United States",
//   },
//   {
//     name: "Allyson Felix",
//     sport: "Track and Field",
//     hasWorldRecord: false,
//     gender: "Female",
//     age: 36,
//     totalMedals: 9,
//     country: "United States",
//   },
//   {
//     name: "Nadia Comăneci",
//     sport: "Gymnastics",
//     hasWorldRecord: true,
//     gender: "Female",
//     age: 60,
//     totalMedals: 9,
//     country: "Romania",
//   },
//   {
//     name: "Birgit Fischer",
//     sport: "Canoeing",
//     hasWorldRecord: true,
//     gender: "Female",
//     age: 60,
//     totalMedals: 12,
//     country: "Germany",
//   },
//   {
//     name: "Mariana Pajón",
//     sport: "Cycling",
//     hasWorldRecord: false,
//     gender: "Female",
//     age: 30,
//     totalMedals: 4,
//     country: "Colombia",
//   },
//   {
//     name: "Wayne Gretzky",
//     sport: "Ice Hockey",
//     hasWorldRecord: true,
//     gender: "Male",
//     age: 61,
//     totalMedals: 4,
//     country: "Canada",
//   },
//   {
//     name: "Yuna Kim",
//     sport: "Figure Skating",
//     hasWorldRecord: false,
//     gender: "Female",
//     age: 31,
//     totalMedals: 6,
//     country: "South Korea",
//   },
// ];

// //1. Dünya rekordu olan atletlərdən ibarət array yaratmaq.

// // function hasWorldRecord(array){
// //     return array.filter(athlete=>athlete.hasWorldRecord)
// // }

// // console.log(hasWorldRecord(athletes))

// // const hasWorldRecord = (array)=> array.filter(athlete=>athlete.hasWorldRecord)
// // console.log(hasWorldRecord(athletes))

// //2. Medallarının sayı 10 və daha artıq olan qadın atletlərdən ibarət array yaratmaq.

// // function femaleAthlets(array){
// //     const femaleAthlets = array.filter(athlete=> athlete.gender ==='Female' && athlete.totalMedals >= 10)
// //     return femaleAthlets;
// // }
// // console.log(femaleAthlets(athletes))

// // const femaleAthlets = athletes.filter(athlete=>athlete.gender === 'Female' && athlete.totalMedals >= 10)
// // console.log(femaleAthlets)

// //3. Atletlərin adlarından ibarət array yaratmaq.

// // const athlatesNames = (athlateler)=> athlateler.map(athlate => athlate.name)
// // console.log(athlatesNames(athletes))

// //4. Atletlərin adları və ölkələri olan obyektlərdən ibarət array yaratmaq.

// // function athlateNameAndCountry(data){
// //         return data.map(athlete =>({name:athlete.name, country:athlete.country}))
// // }
// // console.log(athlateNameAndCountry(athletes))

// //5. Bütün atletlərin ümumi medallarının sayını hesablamaq.

// // function totalMedals(data){
// //     let total = 0;
// //     for(let i=0; i<data.length; i++){
// //      total+=data[i].totalMedals
// //     }
// //     return total;
// // }
// // console.log(totalMedals(athletes))

// // let total = 0
// // athletes.forEach(athlete => total += athlete.totalMedals)
// // console.log(total)

// //6. Atletin adına əsasən spesifik obyekti tapıb console-a yazmaq.

// // function specialObject(data,name){
// //     const athletName = data.find(athlete => athlete.name === name)
// //     if(athletName) return console.log(athletName)
// //     console.log('Atlet tapılmadı error 404')
// // }

// // specialObject(athletes,"Wayne Gretzky")
// // function specialObject(data,name){
// //     const athletName = data.find(athlete => athlete.name === name)
// //     athletName? console.log(athletName): console.log('tapilmadi')
// // }
// // specialObject(athletes,"Wayne Gretzky")

// // 7. Hər hansı bir kişi atletin dünya rekordu olub olmamasını yoxlamaq.
// // let prompValue = prompt('ad daxil edin')
// //  function maleHasOwnWorlRecord(data,userName){
// //     const athletName = data.find(athlete => athlete.gender ==='Male' && athlete.name === userName && athlete.hasWorldRecord)
// //     athletName? console.log(athletName) : console.log('tapilmadi')
// //  }
// // maleHasOwnWorlRecord(athletes,prompValue)

// //8. Amerikalı və dünya rekordu olan atletlərin adlarından ibarət array yaratmaq.
// // const maleHasOwnWorldRecorMales = athletes.filter(athlete => athlete.country === 'United States' && athlete.hasWorldRecord).map(athlete => athlete.name)
// // console.log(maleHasOwnWorldRecorMales)

// // 9. Kişi atletlərin yaşlarının ortalamasını tapmaq.
// // let totalAge = 0;
// // let maleCount = 0
// // const maleAthlates = athletes.forEach(athlete => {
// //     if(athlete.gender === "Male"){
// //         maleCount++;
// //         totalAge += athlete.age
// //     }
// // })
// // console.log(totalAge/maleCount)



// // 0 + 1 + 2 + 3 + 4
// // const initialValue = 0;
// // const sumWithInitial = array1.reduce(
// //   (accumulator, currentValue) => accumulator + currentValue,
// //   initialValue,
// // );

// // console.log(sumWithInitial);
// // let text = 'salam world'
// // const myArray = text.split("").reverse().join('');
// // console.log(myArray)

// const array1 = [1,2,3,4];
// // console.log(!!array1)
// const sdt = 'kenan'
// console.log(sdt.length)
// const arr2 = [2, 5, 3, 4, 1];

// //

// const reverseArray = arr2.sort(()=> 1)
// console.log(reverseArray)

const sentence = "Salam dünya, bu gün hava çox gözəldir b b b b b b b .";

// function findMostFrequentChar(str) {
//   const letters = str.split('').filter(char => char.toLowerCase() !== char.toUpperCase());
//   const uniqueLetters = [];
//   const counts = [];

//   letters.forEach(char => {
//     char = char.toLowerCase();
//     const index = uniqueLetters.indexOf(char);
//     if (index === -1) {
//       uniqueLetters.push(char);
//       counts.push(1);
//     } else {
//       counts[index]++;
//     }
//   });

//   let mostFrequentChar = '';
//   let maxCount = 0;

//   uniqueLetters.forEach((char, index) => {
//     if (counts[index] > maxCount) {
//       maxCount = counts[index];
//       mostFrequentChar = char;
//     }
//   });

//   return mostFrequentChar;
// }

// const mostFrequentChar = findMostFrequentChar(sentence);
// console.log(mostFrequentChar); // "a"


function mostFrequentChar(str){
    const letters = str.split('').filter(char=> char.toLowerCase() !== char.toUpperCase())
    const uniqueLetters= []
    const counts = []

    letters.forEach(char => {
        char = char.toLowerCase()
        
    });
}