// const getFirstLetters = (str) => {
//     const firstLetters = str.split(' ').map(word => word[0]).join('');
//     return firstLetters
// }
// console.log(getFirstLetters('Hello'));


// const drain = (upperText, lowerText) => {
//     return console.log(upperText.toUpperCase(), lowerText)
// }

// drain('ali', 'goes to school');

// const upperFirstWord = (para) => {
//     const [firstWord, ...others] = para.split(' ');
//     return [firstWord.toUpperCase(), ...others].join(' ');
//     // console.log(firstWord, others)
// }
// console.log(upperFirstWord('ade go to school'));

// function calcArr(arr) {
//     if (arr.length >= 4) {
//         return arr.reduce((accm, el, i, array) => {
//             return accm + el / arr.length
//         })

//     } else {
//         return 'Bad array'
//     }

// }
// console.log(calcArr([6, 9, 10, 14]));

// PROMISE
// const lotto = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hello')

//     }, 2000);
// });
// lotto.then(res => {
//     console.log(res)
// }).catch(error => {
//     console.log(error)
// })


const addFn = (x, y) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (x < 0 || y < 0) {
                reject('Your number is less than 0');
            } else {
                resolve(x + y);
            }

        }, 2000);
    })
}


addFn(4, -6).then(sum => {
    console.log(sum);
    return addFn(sum2);

}).then(sum2 => {
    console.log(sum2);
    return addFn(sum2, 9)
}).then(sum3 => {
    console.log(sum3);
}).catch((err) => {
    console.log(err);
})




const logger = async () => {
    const sum1 = await addFn(1, 9);
    const sum2 = await addFn(sum1, 15);
    return { sum2 };

}
logger().then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

// PROMISE CHAINING
// addFn(4, 6).then((sum) => {
//     console.log(sum)
//     addFn(sum, 6).then((sum2) => {
//         console.log(sum2)
//         addFn(sum2, 9).then((sum3) => {
//             console.log(sum3)
//         }).catch((err) => {
//             console.log(err);
//         })
//     }).catch((err) => {
//         console.log(err)
//     })

// }).catch((err) => {
//     console.log(err)
// })


// function calcArr(nums) {
//     const positions = nums.length - 1;
//     return nums[0] == 2 || nums[positions] == 2;
// }


// console.log(calcArr([2, 3, 5]));
// console.log(calcArr([2, 3, 5, 2]));
// console.log(calcArr([1, 4, 6]));

const firstLast = (num, arr) => {
    const first = arr[0];
    const last = arr[arr.length - 1];

    console.log(num === first || num === last);

    if (arr.length >= 3 && (num === first || num === last)) {
        console.log('Good Job');

    } else {
        console.log('bad Array')
    }
}

firstLast(7, [5, 7, 8, 9, 6]);  // false
firstLast(3, [3, 18, 75, 20, 4]);  //True
firstLast(5, [5, 18]);  //False



