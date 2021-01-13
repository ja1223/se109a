//從陣列的右邊移除多少個數

export function dropRight(array:any[], count:number):any[] {
    return array.slice(0, array.length-count)
  }
  
  //drop([1,2,3,4,5,6,7,8], 2)
  //  [1, 2, 3, 4, 5, 6]
