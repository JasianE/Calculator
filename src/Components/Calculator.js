import React, {useState} from 'react'
import './general.css'
import basic from '../Logic/basic'
//Each button adds a number to the lhs
//when an operator is clicked it seals the lhs unless resetted
//the operator cannot be changed and is locked (for now)
//rhs continues taking inputs until equals button is pressed
//When pressed it fires basic.operate(f,a,b)
//I overestimated this project
function Calculator(){
    const [lhs, setLhs] = useState([])
    const [operator, setOperator] = useState([])
    const [rhs, setRhs] = useState([])
    const [answer, setAnswer] = useState(0)
    //i hate >;oo
    const [ldots, setLdots] = useState(0)
    const [rdots, setRdots] = useState(0)

    const operators = ['divide', 'multiply', 'subtract', 'add']

    function handleClick(e){
        setAnswer()
        if(e.target.value === 'equals' && lhs.length !== 0 && rhs.length !== 0){
            let lhsE = parseFloat([...lhs].join(''), 10)
            let rhsE = parseFloat([...rhs].join(''), 10)
            setLhs([])
            setRhs([])
            setLdots(0)
            setRdots(0)
            setOperator([])
            setAnswer(basic.operate(basic[operator], lhsE, rhsE))
        }
        else if(operator.length === 0 && operators.indexOf(e.target.value) !== -1 && lhs.length !== 0){
            setOperator(e.target.value)
        }
        else if(operators.indexOf(e.target.value) === -1  && e.target.value === '.'){
            if(typeof operator !== 'string' && ldots === 0 && lhs.length !== 0){
                setLdots(1)
                setLhs([...lhs, '.'])
            }
            else if(typeof operator === 'string' && rdots === 0 && rhs.length !== 0){
                setRdots('esambald')
                setRhs([...rhs, '.'])
            }
        }
        else if(operators.indexOf(e.target.value) === -1 && typeof operator !== 'string' && e.target.value !== 'equals'){
            setLhs([...lhs, e.target.value])
        }
        else if(e.target.value !== 'equals' && operators.indexOf(e.target.value) === -1){
            setRhs([...rhs, e.target.value])
        }
        
    }
    const lhsDisplay = [...lhs].join('')
    const rhsDisplay = [...rhs].join('')
    const operatorDisplay = operator === 'multiply' ? 'X' : operator === 'divide' ? '÷' : operator === 'add' ? '+' : operator.length > 0 ? '-' : null;
    return(
        <div className = 'main'>
            <div className = 'display'>
                <h3 className = 'rhs bruh'>{rhsDisplay}  </h3>
                <h3 className = 'operator bruh'>{operatorDisplay}  </h3>
                <h3 className = 'lhs bruh'>{lhsDisplay}</h3>
                <h3 className = 'answer bruh'>{answer}</h3>
            </div>
            <div className = 'buttons'>
                <button className = 'button' value = {7} onClick = {handleClick}>7</button>
                <button className = 'button' value = {8} onClick = {handleClick}>8</button>
                <button className = 'button' value = {9} onClick = {handleClick}>9</button>
                <button className = 'button' value = {'divide'} onClick = {handleClick}>÷</button>
                <button className = 'button' value = {4} onClick = {handleClick}>4</button>
                <button className = 'button' value = {5} onClick = {handleClick}>5</button>
                <button className = 'button' value = {6} onClick = {handleClick}>6</button>
                <button className = 'button' value = {'multiply'} onClick = {handleClick}>X</button>
                <button className = 'button' value =  {1} onClick = {handleClick}>1</button>
                <button className = 'button' value = {2} onClick = {handleClick}>2</button>
                <button className = 'button' value = {3} onClick = {handleClick}>3</button>
                <button className = 'button' value = {'subtract'} onClick = {handleClick}>-</button>
                <button className = 'button' value = {'.'} onClick = {handleClick}>.</button>
                <button className = 'button' value = {0} onClick = {handleClick}>0</button>
                <button className = 'button' value = {'equals'} onClick = {handleClick}>=</button>
                <button className = 'button' value = {'add'} onClick = {handleClick}>+</button>
            </div>
        </div>
    )
}

export default Calculator