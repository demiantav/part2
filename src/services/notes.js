import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/notes'




  const getAll = async () => {

    const request = await axios.get(baseUrl)
    const nonExisting = {
      id: 10000,
      content: 'This note is not saved to server',
      important: true,
    }
    return request.data.concat(nonExisting)
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
