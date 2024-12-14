
import React from 'react'
import styled from 'styled-components'

function Compo({count, incHandle, decHandle}) {

  const AddButton = styled.button`
  background: ${(props) => (props.primary ? 'Green' : 'lightcoral')};
  color: white;
  `;

  const SubButton = styled.button`
  background: ${(props) => (props.primary ? 'red' : 'blue')};
  color: white;
  `;

  
    
  return (
    <div>
      <p>Counter: {count}</p>
      <AddButton onClick={incHandle} primary>Add</AddButton>
      <SubButton onClick={decHandle}>Sub</SubButton>
<br />
      <AddButton onClick={incHandle} >Add</AddButton>
      <SubButton onClick={decHandle} primary>Sub</SubButton>
    </div>
  )
}

export default Compo
