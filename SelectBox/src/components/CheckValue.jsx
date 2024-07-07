import { useState } from "react";

function CheckValue() {
    const [fruits, setFruits] = useState([]);

    const handleChange= (e)=>{
        const value=e.target.value;
        const checked = e.target.checked;

        if( checked ){
            setFruits([...fruits, value]);
        }else{
            setFruits(fruits.filter((item)=>(item!==value)));
        }
    }
    const showData = ()=>{
        console.log(fruits);
    }

return (
    <div>
        <label htmlFor="">Select : Fruits</label>


        <input type="checkbox" name="fruits" value="apple" onChange={handleChange}/>
        <label htmlFor="apple">Apple</label>


        <input type="checkbox" name="fruits" value="mango" onChange={handleChange} />
        <label htmlFor="mango">Mango</label>


        <input type="checkbox" name="fruits" value="banana" onChange={handleChange} />
        <label htmlFor="banana">Banana</label>


        <input type="checkbox" name="fruits" value="waterMalon" onChange={handleChange} />
        <label htmlFor="WaterMalon">WaterMalon</label>
    

        
       {
        fruits.length > 0 && <p>Selected Fruits:::   {fruits.join(",   ")}</p>

 
       }

        <button onClick={showData}>Clikc to see what you </button>
      
    </div>
  )
}

export default CheckValue
