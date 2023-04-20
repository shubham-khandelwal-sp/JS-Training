function loadJson(fetchurl){
    return fetch(fetchurl).then(response => {
      if(response.status==200){
        return response.json()
      }
       throw new HttpError(response)
    })
  }
  
  class HttpError extends Error{
    constructor(response){
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function fetchDetails(){
      let user;
      while(1){
        let userName=prompt('Enter the user name')
        try{
          user= await loadJson(`https://api.github.com/users/${userName}`);
          // Breaking this loop
          break;
        }
        catch(err){
          if(err instanceof HttpError && err.response.status==404){
            alert("Username not found, please try again")
          }
          else{
            throw err;
          }
        }
      }
      alert(`User name is ${user.name}`)
      console.log(user)
  }
  
  fetchDetails()