import React, { useState } from 'react'
import './CreateComponent.css'
import PostServices from '../services/PostServices'

function CreateComponent() {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [image, setImage] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async(event) => {
        event.preventDefault()
         
        const formData = new FormData()

        formData.append('title', title)
        formData.append('date', date)
        formData.append('image', image)

        const response = await PostServices.create(formData)
        if(response.data.success  === true){
            
        }

        event.target.reset()
    }

return (
<div className='createPost'>
    <h2>CreateComponent</h2>
    <form onSubmit={handleSubmit}>
    <input type='text'
            name='title'
            placeholder='Enter Title'
            onChange={event => setTitle(event.target.value)}
            required />
        <br/><br/>
        <input type='date'
            name='date'
            onChange={event => setDate(event.target.value)}
            required />
        <br/><br/>
        <input type='file'
            name='image'
            onChange={event => setImage(event.target.files[0])}
            required />
        <br/><br/>
        <button>Submit</button>
    </form>
    <p>
        {message}
    </p>
    </div>
  )
}

export default CreateComponent