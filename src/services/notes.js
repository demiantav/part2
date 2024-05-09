import axios from 'axios'
const baseUrl = '/api/notes'


  const getAll = async () => {

    const request = await axios.get(baseUrl);
    return request.data;

  }
  
  
  const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
  }
  
  const update = (id, newObject) => {

    try {

      const request = axios.put(`${baseUrl}/${id}`, newObject)
      return request.then(response => response.data)
      
    } catch (error) {

      return error
      
    }
    
  }

export default { getAll, create, update} 
