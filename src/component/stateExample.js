import React, {useState} from 'react';

export default function Counter({initialCount}){
    const [count, setCount] = useState(initialCount);
    return (
        <>
          Count: {count}
          <br />
          <button onClick={() => setCount(initialCount)}>Reset</button>
          <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
          <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </>
    );
}

export function Person() {
    const [person, setPerson] = useState({ name: 'Huy', age: 21});

    const birthday = () => {
        setPerson({ ...person, age: person.age + 1});
    }

    return(
        <>
        <h1>{person.name}, {person.age}</h1>
        <button onClick={birthday}>Age</button>
        </>
    )
}

export function StateExample(props) {
    const [name, setName] = useState('Mary');
    const [surname, setSurname] = useState('Poppins')
  
    function handleNameChange(e) {
      setName(e.target.value);
    }
  
    function handleSurnameChange(e) {
      setSurname(e.target.value);
    }
  
  
    return (
      <section>
        <div>
          <input
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <input
            value={surname}
            onChange={handleSurnameChange}
          />
        </div>
      </section>
    )
  }