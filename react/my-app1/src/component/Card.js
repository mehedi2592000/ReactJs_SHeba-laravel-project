import React from 'react'
import ReactDOM from 'react-dom'
const titlee="hi i am there";
const dodye="lorem is the vest soulation then it take too much";


function Card(props)
{
    return <div className='card'>
    <h3 className='cardtitle'>{props.name}</h3>
    <p className='cardbody'>{props.dis}</p>

  </div>
}

export default Card;