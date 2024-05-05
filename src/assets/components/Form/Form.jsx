import React, { useState } from 'react'
import styles from './Form.module.css'

function Form({ data, setData }) {


  const [inputVal, setInputVal] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal !== '')
      setData((prev) => [...prev, { text: inputVal, checked: false }])
      setInputVal('');
      
  }

  const deleteItems = (index) => {
    const newData = data.filter((item, i) => i !== index)
    setData(newData)

  }

  const markCompleted = (index) => {
    const newData = [...data]
    newData[index].checked = !newData[index].checked
    setData(newData)
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Add Todo' value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
        <button type='submit'>Add</button>
      </form>
      <div className={styles.items}>
        {data.map((item, index) => {
          return (<div key={index} className={styles.item}><div><p style={{ display: 'inline-block', textDecoration: item.checked ? 'line-through' : 'none' }}>{item.text}</p><input type="checkbox" value={item.checked} onChange={() => markCompleted(index)} /></div> <button onClick={() => deleteItems(index)}>Delete</button></div>

          )
        })}
      </div>
    </>
  )
}

export default Form