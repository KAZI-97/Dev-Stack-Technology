import { Suspense, useState} from "react"
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import type {ITechType} from './type'
import Technologies from "./Components/Technologies/Technologies"


const fetchData = async():Promise<ITechType[]> =>{
    const response = await fetch('Data.json')
    const data = await response.json()
    return data
  }

function App() {
  const[TechPromise] = useState(() => fetchData())


  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h1>Loading...Data</h1>}>
          <Technologies TechPromise={TechPromise}></Technologies>
      </Suspense>
    
    </>
  )
}

export default App
