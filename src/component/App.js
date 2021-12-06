import React, {useState, useContext} from 'react';
import CheckKnowledge from './checkKnowledge.js';
import LogIn from './login'
import Clock from './clock'
import {comment} from './extracting'
import {Extracting} from './extracting'
import Counter, {Person, StateExample} from './stateExample'
import Image from './propsExample'
import '../index.css'
import {ReducerExample} from './reducer'
import {Callback} from './callback'
import {Memo} from './memo'
import {Countdown} from './ref'
import {Form} from './event'
import {Toggle} from './event'
import {NameForm} from './forms'
import {EssayForm} from './forms'
import {ChooseFruit} from './forms'
import {ReservationForm} from './forms'
import {UserForm} from './MultiStepForm/UserForm'

let CheckAge = ({x}) => <h1>{(x) < 18 ? "You aren't allowed here" : "Why hello there!"}</h1>;

let Multiply = ( {x, y , ...rest} ) => <h1>{x} * {y} = {x * y}</h1>;

const ThemeContext = React.createContext()

function Content() {
    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    return(
        <div style={themeStyles}>
            <UserForm />
            <CheckAge x = {18} />
            <Clock />
            <Counter initialCount={0} />
            <Multiply x = {6} y = {9} z ={10}/>
            <Person />
            <CheckKnowledge level={2}/>
            <Image race="bordercollie"/>
            <Extracting
                date={comment.date}
                text={comment.text}
                author={comment.author}
            />
            <CheckKnowledge level="4" />
            <StateExample />
            <span>useReducer: </span>
            <ReducerExample />
            <Callback />
            <Memo />
            <Countdown />
            <Form />
            <Toggle />
            <NameForm />
            <br />
            <EssayForm />
            <br />
            <ChooseFruit />
            <br />
            <ReservationForm />
            <br />
            
        </div>
    )
}

export default function App() {
    const [darkTheme, setDarkTheme] = useState(true)

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return(
        <>
            <LogIn />
            <ThemeContext.Provider value={darkTheme}>
                <button className="btn btn-dark m-4" onClick={toggleTheme}>Toggle Theme</button>
                <Content/>
            </ThemeContext.Provider>
        </>
    )
  }