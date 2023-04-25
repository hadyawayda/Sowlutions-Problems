import { useState } from 'react'
import './App.css'

export default function App() {
  const [email, setEmail] = useState('');
  const [sequence, setSequence] = useState('')
  const answer1 = validateEmail(email);
  // const answer2 = LinkedList;
  const answer4 = isValidBracketSequence(sequence)
  return (
    <div className='flex flex-col justify-between p-12 h-36 w-full'>
      <div>
        <h1 className='mb-4'>Email Checker</h1>
        <div className='mb-4'>
          <label>Input: </label>
          <input placeholder='Enter an Email' onChange={e => setEmail(e.target.value)} 
          className='border-1 border-solid focus:border-indigo-500 transition-colors 
          duration-300 bg-gray-200 ml-8 p-3 rounded-lg w-96' />
        </div>
        <div className="flex justify-center">
          {answer1 ? <div>true</div> : <div>false</div> }
        </div>
      </div>
      <div>
        <h1 className='mb-4 mt-12'>Bracket Sequence Validator</h1>
        <div className='mb-4'>
          <label>Input: </label>
          <input placeholder='Enter an brackets sequence' onChange={e => setSequence(e.target.value)} 
          className='border-1 border-solid focus:border-indigo-500 transition-colors 
          duration-300 bg-gray-200 ml-8 p-3 rounded-lg w-96' />
        </div>
        <div className="flex justify-center">
          {answer4 ? <div>true</div> : <div>false</div> }
        </div>
      </div>
    </div>
  )
}

function isValidBracketSequence (sequence :string) :boolean {

  const bracketsArray:string[] = sequence.split('');

  let bracketsCounter = 0;
  let squareBracketsCounter = 0;
  let curlyBracesCounter = 0;
  let isBracketsCountEven = false;
  let isClosingSequenceStarted = false;
  let isSymetrical = false;
  let isSequenceValid = false

  if ( bracketsArray.length < 2 || bracketsArray.length % 2 === 1 ) {
    return false
  }

  for (let i = 0; i < bracketsArray.length; i++) {
    
    if (bracketsArray[i] === '(') {
      bracketsCounter++
      isClosingSequenceStarted = false
    }

    if (bracketsArray[i] === ')') {
      bracketsCounter--
      isClosingSequenceStarted = true
    }

    if (bracketsArray[i] === '[') {
      squareBracketsCounter++
      isClosingSequenceStarted = false
    }

    if (bracketsArray[i] === ']') {
      squareBracketsCounter--
      isClosingSequenceStarted = true
    }

    if (bracketsArray[i] === '{') {
      curlyBracesCounter++
      isClosingSequenceStarted = false
    }

    if (bracketsArray[i] === '}') {
      curlyBracesCounter--
      isClosingSequenceStarted = true
    }

    if (isClosingSequenceStarted) {
      if (bracketsArray[i] === ')' && bracketsArray[bracketsArray.length - i - 1] === '(' ) {
        isSymetrical = true
      }
      if (bracketsArray[i] === ']' && bracketsArray[bracketsArray.length - i - 1] === '[' ) {
        isSymetrical = true
      }
      if (bracketsArray[i] === '}' && bracketsArray[bracketsArray.length - i - 1] === '{' ) {
        isSymetrical = true
      }
    }

  }

  if ((bracketsArray.length > 0) && bracketsCounter === 0 && squareBracketsCounter === 0 && curlyBracesCounter === 0 ) {
    isBracketsCountEven = true
  }

  if (isBracketsCountEven && isSymetrical) {
    isSequenceValid = true
  }

  return isSequenceValid
}





function validateEmail (email :string) :boolean {

  // Split the input string into an array of characters
  const a = email.split('');

  // Initiate @ counter, @ index and . index
  let atCount = 0;
  let atIndex = 0;
  let dotIndex = 0;

  // Check if the string includes @ character and is less than 256 characters long
  if (a.includes('@') && a.length < 256) {
    // Check if we have spaces
    if (a.includes(' ')) {
      return false
    }
    for (let i = 0; i < a.length; i++) {
      // Count number of @ characters in the string
      if (a[i] === '@') {
        atCount++
      }
      // Find indeces of @ and . to check if @ precedes . since we have checked that we only have 1 @ character
      if (a[i] === '@') {
        atIndex = i;
      }
      if (a[i] === '.') {
        dotIndex = i;
      }
      // Check if @ is not preceded or succeeded by a .
      if ((a[i] === '@' && a[i+1] === '.') || (a[i] === '@' && a[i-1] === '.'))
      return false
    }
    // Check if number of @ characters in the string are more than 1 and return false in that case
    if (atCount > 1) {
      return false
    }
    // Check if @ is not first or last character
    if (a[0] === '@' || a[a.length - 1] === '@') {
      return false
    }
    // Check if at least one . comes after our single @ character, if true then return true
    if (dotIndex>atIndex) {
      return true
    }
  }
  return false;
}

// class LinkedList {
//   constructor(list, int, x, y) {
//     this.list = list;
//     this.int = int;
//     this.x = x;
//     this.y = y
//   }

//   LinkedList() {
//     let list = []
//     return list
//   }

//   addNode(int) {
//     this.list.push(int)
//     return
//   }

//   removeNodes(x) {
//     return this.list.filter(e => e < x)
//   }
  
//   customFunction (y) {
//     // return this.list.filter(e => e < y)
//   }
// }
