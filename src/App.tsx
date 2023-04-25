import { useState } from 'react'
import './App.css'

export default function App() {
  const [email, setEmail] = useState('');
  const answer1 = Solution1(email);
  const input = ['diamonds', 'lion', 'papaya']
  const answer2 = Solution2(input);
  return (
    <div className='flex flex-col justify-between p-12 h-36 w-full'>
      <div>
        <h1 className='mb-4'>Problem 1</h1>
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
        <h1 className='mb-4'>Problem 2</h1>
        <div className='mb-4'>
          <label>Input: </label>
          <input placeholder='Enter an Email' onChange={e => setEmail(e.target.value)} 
          className='border-1 border-solid focus:border-indigo-500 transition-colors 
          duration-300 bg-gray-200 ml-8 p-3 rounded-lg w-96' />
        </div>
        <div className="flex justify-center">
          {answer2 ? <div>true</div> : <div>false</div> }
        </div>
      </div>
    </div>
  )
}

function Solution2 (input :any[]) : boolean {

  return false
}

function Solution1 (email :string) :boolean {

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

