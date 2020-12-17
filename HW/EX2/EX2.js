function search(a, o) {//a是陣列
    var n = a.length//n是陣列的長度
    var from = 0
    var to = n
    
    while (from<=to){
        var mid = Math.floor((from + to)/2)//求出陣列的中間
        if (a[mid] === o)
            return mid
        else if (o > a[mid]){
            from = mid + 1
        }
        else {// 剩下o < a[mid]的可能
            to = mid - 1
        }
    }
    return null
}
  
var t = search([1, 3, 4, 6, 7, 8], 4)
console.log('t=', t)
var t = search([1, 3, 4, 6, 7, 8], 5)
console.log('t=', t)
var t = search([1, 3, 4, 6, 7, 8], 7)
console.log('t=', t)
var t = search([1, 3, 4, 6, 7, 8], 9)
console.log('t=', t)