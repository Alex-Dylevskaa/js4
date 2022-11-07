//Циклы while и for
//1
// let i = 0;
// while (i < 10) {
// 	i++;
// 	alert(i);
// }
//
//2
// let i = 10;
// while (i < 33) {
// 	i++;
// 	alert(i);
// }
//
//3
// let i = -1;
// while (i < 100) {
// 	i++;
// 	alert(i);
// }
//
//4
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     sum += i;
// }
// alert(sum);
//
//
//Работа с for для массивов
//1
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i <= arr.length-1; i++) {
// 	alert(arr[i]);
// }
//
//2
// let result = 1;
// let arr = [2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
// 	result = result * arr[i];
// }
// alert(result);
//
//3
// var obj = {green: 'зелёный', red: 'красный', blue: 'голубой'}
// for (key in obj) {
// 	alert(key);
// }
// for (key in obj) {
// 	alert(obj[key]);
// }
//
//
//Задачи
//1
// let arr = [2, 5, 9, 15, 0, 4];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i])
//     }
// }
//
//2


//3 
// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 4) {
//         console.log('Есть!');
//     }
// }
//
//4
// let arr = ['10', '20', '30', '50', '235', '3000'];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i][0] == 1 ) {
//         console.log(arr[i]);
//     }
//     if (arr[i][0] == 2) {
//         console.log(arr[i]);
//     }
//     if (arr[i][0] == 5) {
//         console.log(arr[i]);
//     }
// }
//
//5
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (var i = 0; i < arr.length; i++){
//     document.write('-' + arr[i]);
// }
