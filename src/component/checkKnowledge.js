import React from 'react';

export default function CheckKnowledge(props) {
  switch(props.level) {
    case '0': 
      return(
        <h1>Why are you even here</h1>
      )
    case 1: 
      return(
        <h1>U dumb</h1>
      )
    case 2:
      return(
        <h1>U are smarter than the 99% percentile. Still dumb</h1>
      )
    case 3:
      return(
        <h1>U are smarter than the 87% percentile. Still kinda dumb</h1>
      ) 
    case 4:
      return(
        <button>Click me!</button>
      ) 
    default:
      return(
        <p>There has been an error</p>
      )
  }
}