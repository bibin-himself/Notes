
import React from 'react'
import useRough from './useRough'

function rough2() {

    const {data, loading, error} = useRough("https://jsonplaceholder.typicode.com/users")

    if(loading){
        return <p>Loading....</p>
    }

    if(error){
        return <p>Error: {error}</p>
    }


  return (
    <div>
      {data ? (
        <ul>{
            data.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))
            }</ul>
      ): <p>No User Found</p>}
    </div>
  )
}

export default rough2
