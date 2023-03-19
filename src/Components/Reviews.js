import React from 'react'
import { ListGroup } from 'react-bootstrap'

function Reviews({data}) {
  return (
    <div>
        

      { data.map((item)=>(
        <>

        <h5>{item.name}</h5>

        <ListGroup>
            <ListGroup.Item>
            <p>{item.date}</p>
            <p>{item.comments}</p>
            </ListGroup.Item>
        </ListGroup>
           
        
        </>

        ))}
    </div>
  )
}

export default Reviews