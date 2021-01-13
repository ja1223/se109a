//從陣列中找到符合資格的index

export function findIndex(array, types){
      for(let i=0; i < array.length; i++){
          if(array[i].user == types.user && array[i].active == types.active){
              return i
          }
      } 
  }
