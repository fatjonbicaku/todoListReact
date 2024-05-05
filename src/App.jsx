import { useState } from 'react'
import Form from './assets/components/Form/Form'


function App() {
  const [data, setData]= useState([]);

  return (
    <>
     <Form  data={data} setData={setData}/>
    </>
  )
}

export default App
