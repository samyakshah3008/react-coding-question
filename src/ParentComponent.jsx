// Problem: parent componet, in that two components, from input component1 field, it should reflect in component2's filed.

import { useState } from "react"
import { ChildComponent1 } from "./ChildComponent1"
import { ChildComponent2 } from "./ChildComponent2"

 const ParentComponent = () => {
    const [value,setValue] = useState("")

    const changeHandler = (newValue) => {
        setValue(newValue);
      };

    return(
        <>
           <ChildComponent1 value={value} onChange={changeHandler} />
           <ChildComponent2 value={value} onChange={changeHandler} /> 
        </>
    )
}

export default ParentComponent