import React from 'react'

export const ChildComponent2 = ({value,onChange}) => {
    const component2ChangeHandler = (e) => {
        onChange(e.target.value)
      }
  return (
    <>
        <input onChange={component2ChangeHandler} value={value}  />
    </>
  )
}
