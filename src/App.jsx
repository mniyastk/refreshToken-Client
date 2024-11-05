// import axios from 'axios'
import { apiService } from "./utils/api"

function App() {
  let token = null
  function handleData(token){
   
    try {
      const data = apiService.getData(token)
      return data
    } catch (error) {
      console.error("Error :" ,error);
      
    }
  }
function handleLogin() {
  try {
   let data = apiService.login()
    return data
  } catch (error) {
    console.log(error);
    
  }
}
function handleLogOut() {
  try {
   let data = apiService.logout()
   return data
  } catch (error) {
  console.log(error);
  
  }
  
}


  return (
    <>
    <div className="app">
      <h1>Test Refresh Token</h1>
      <button type="button" onClick={handleData}>get data</button>
      <button type="button" onClick={handleLogin}>login</button>
      <button type="button" onClick={handleLogOut}>logout</button>
    </div>
    </>
  )
}

export default App
