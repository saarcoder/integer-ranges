const solution = list => {
    let mem = {}, start = 0, count = 0, string = ''
    list.forEach((el,i) => {
      if(el === list[i+1]-1 && el !== list[i-1]+1) {  
          count++ 
          start = i 
          mem[start] = count 
      }      
      else if(el === list[i-1]+1 && el === list[i+1]-1) count++ 
      else if(el === list[i-1]+1 && el !== list[i+1]-1) {    
          count++
          mem[start] = start+count  
          start = 0
          count = 0
      }    
    })  
    for(let i=Object.keys(mem).length-1; i>=0; i--) {
      let range
      if(list[Object.entries(mem)[i][1]-1] - list[Object.entries(mem)[i][0]] === 1) range = [list[Object.entries(mem)[i][0]], list[Object.entries(mem)[i][1]-1]]
      else range = list[Object.entries(mem)[i][0]]+'-'+ list[Object.entries(mem)[i][1]-1]
      list.splice(Object.entries(mem)[i][0], Object.entries(mem)[i][1] - Object.entries(mem)[i][0], range)
    }    
    list.forEach(el=> string+=el+',')
    return string.slice(0,-1)
}
module.exports = solution