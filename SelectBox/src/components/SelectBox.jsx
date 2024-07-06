/* eslint-disable no-unused-vars */
import { useState } from "react"

function SelectBox() {
  const [status,setStatus]=useState({
    check1 : false,
    check2 : false,
    check3 : false,
    check4 : false,
  })
  const handleChange = (key)=>{
    setStatus((prevStatus)=>({
      ...prevStatus,
      [key]: !prevStatus[key],
    }));    
  }
  const handleCheckAll = ()=>{
    const selectAll = status.check1 && status.check2 && status.check3 && status.check4;
    setStatus({
      check1 :!selectAll,
      check2 :!selectAll,
      check3 :!selectAll,
      check4 :!selectAll,
    });
  }
  const selectAll = status.check1 && status.check2 && status.check3 && status.check4;
  return (
    <div className="container">
      <input type="checkbox" id="allSelect" checked={selectAll} onChange={()=>handleCheckAll()}/>
      <label htmlFor="allSelect">All Select </label>

    
      <input type="checkbox" id="check1" checked={status.check1} onChange={()=>handleChange("check1")}/>
      <label htmlFor="check1">Option 1</label>

      <input type="checkbox" id="check2" checked={status.check2} onChange={()=>handleChange("check2") }/>
      <label htmlFor="check2">Option 2</label>

      <input type="checkbox" id="check3" checked={status.check3} onChange={()=>handleChange("check3")}/>
      <label htmlFor="check3">Option 3</label>

      <input type="checkbox" id="check4" checked={status.check4} onChange={()=>handleChange("check4")}/>
      <label htmlFor="check4">Option 4</label>
    
    </div>
  )
}

export default SelectBox
