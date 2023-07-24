import React from 'react'

export const ChildComponent1 = ({value,onChange}) => {
    
    const component1ChangeHandler = (e) => {
        onChange(e.target.value)
    }

  return (
    <>
        <input value={value} onChange={component1ChangeHandler}   />
    </>
  )
}
