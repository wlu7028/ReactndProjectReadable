const API_AUTHCODE = "asdfjkl123"

export function getCategories () {
    let myInit = { method: 'GET',
                   headers: {
                    'Authorization': API_AUTHCODE
                   } 
            };  
  
    return fetch('http://localhost:3001/categories',myInit)
      .then((res) => res.json())
      
  }