import { useState } from 'react'
import './App.css'
import Submit from './components/submit'

function App(){
  //state for if cv has been submitted or not
  const [submitted, setSubmitted] = useState(false)
  //default state for setting input
  const [input,setInput] = useState({
    name: '', phoneNumber: '', email: '', dateAttended: '', school: '', major: '', job: '', description: '', dateWorked: ''
  })

  //change input to user input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <>
    {submitted ? <>
    <Submit input={input} setSubmitted={setSubmitted} />
    </>
    :
      <>
        <h1>CV Editor</h1>
        <div className='document'>
          <section className='general'>
            <h2>General Information</h2>
            <input 
            type='text' name='name' value={input.name} onChange={handleChange} placeholder='name'/>
            <input
            type='text' name='phoneNumber' value={input.phoneNumber} onChange={handleChange}  placeholder='phone number'/>
            <input 
            type='text' name='email' value={input.email} onChange={handleChange} placeholder='email'/>
          </section>
          <section className='education'>
          <h2>Education</h2>
            <input 
            type='text' name='school' value={input.school} onChange={handleChange} placeholder='university name'/>
            <input 
            type='text' name='major' value={input.major} onChange={handleChange} placeholder='major'/>
            <input 
            type='text' name='dateAttended' value={input.dateAttended} onChange={handleChange} placeholder='date attended'/>
          </section>
          <section className='experience'>
          <h2>Experience</h2>
            <input 
            type='text' name='job' value={input.job} onChange={handleChange} placeholder='job title'/>
            <input 
            type='text' name='description' value={input.description} onChange={handleChange} placeholder='description'/>
            <input 
            type='text' name='dateWorked' value={input.dateWorked} onChange={handleChange} placeholder='date worked'/>
          </section>
        </div>
        <div className="card">
          <button onClick={() => setSubmitted(true)}>Submit</button>
        </div>
      </>
    }
    </>
  )
}

export default App