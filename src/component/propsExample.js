import React from 'react';

export default function Image(props) {
  return(
    <div>
      <h2>Hi, I'm a {props.race}</h2>
      <img src={require(`.././img/${props.race}.png`)} alt={props.race} />
    </div>
  )
}