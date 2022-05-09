// console.log('jjjhh!')
// var h1Element = document.querySelector('h1')
// var inputElement = document.querySelector('input[type = "text"]')
// inputElement.oninput = function(e) {
//   console.log(e.target.value) ; 

user = [{
  id : 1 ,
  name : 'tan' 
},{
  id : 2 ,
  name : 'hoi' 
},]
comment = [{
  id : 1 , 
  id_user : 1 , 
  content : 'may h roi ?' 
},{
  id : 2 , 
  id_user : 2 , 
  content : 'kbt' 
},{
  id : 3 , 
  id_user : 1 , 
  content : 'ok' 
}]
function getComment(){
  return new Promise(function(resolve){
    resolve(comment)
  })
}
getComment()
  .then(function(comment){
    var userId = comment.map(function(comment){
      return comment.id_user ; 
    });
        return getUserById(userId)
        .then(function(user){
        return {
          user : user , 
          comment : comment
        } ;
       });
    })
    .then(function(data){
      var commentBlock = document.getElementById('comment-box')
      hmml = ''
      data.comment.forEach(function(comment){
        var user = data.user.find(function(user){
          return user.id == comment.id ; 
           
        })
        html += `<li>${user.name} : ${comment.content}<li>`
      })
      commentBlock.innerHTML =  html ; 
    })

  function getUserById(userId){
    return new Promise(function(resolve){
      var result = user.filter(function(user){
        return userId.includes(user.id)
      })
      resolve(result)
    })
  }

