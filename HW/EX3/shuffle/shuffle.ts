//將陣列中的值隨機洗牌

export function shuffle(array:any[]){
    for(let i=0 ; i < array.length; i++){
      var rand = Math.floor(Math.random() * array.length)
      var temp = array[rand]
      array[rand] = array[i]                      
      array[i] = temp
    }
    return array
  } 

  