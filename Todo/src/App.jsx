import { useState } from 'react'
import './App.css'

function App() {
  const [todos,setTodos] = useState([]);
  const [inputValue,setInputValue] = useState("");

  
  const inputHandle = (e)=>{
    setInputValue(e.target.value);
  }
  const addHandle = ()=>{
    //console.log(todos);//   जब आप setTodos का उपयोग करते हैं, तो यह एक असिंक्रोनस (asynchronous) फंक्शन है। इसका मतलब है कि स्टेट अपडेट होने में थोड़ा समय लगता है और console.log तुरंत चल जाता है, जिससे आपको पुरानी स्टेट दिखती है।
      setTodos((todos)=>{
        const newTodos = [...todos,inputValue]
        console.log(newTodos);
        return newTodos;
      })
      setInputValue("")
    }
  
    const removeItem = (index) => {
      setTodos((todos) => {
        const newTodos = [...todos];
        console.log(newTodos);
        newTodos.splice(index, 1);
        return newTodos;
      });
    }
  
  return (
    <>
    <form onSubmit={(e)=>{
      e.preventDefault();
    }}>
      <input type="text" value={inputValue} onChange={inputHandle} />
      <button onClick={addHandle}>Add</button>
    </form>
    <ul>
      <li>TODO: </li>
      {
        todos.map((todo,index)=>{
         return ( 
          <li key={index} >
            {todo}
            <button onClick={()=>removeItem(index)} >Delete</button>
            </li>
          
         )
        })
      }

    </ul>
      
    </>
  )
}

export default App
