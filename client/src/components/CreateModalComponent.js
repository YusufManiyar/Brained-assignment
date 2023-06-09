import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'
import PostServices from '../services/PostServices.js'

function CreateModalComponent(props) {
    const [isShow, invokeModal] = useState(false)

    const initModal = () => {
      return invokeModal(!isShow)
    }

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [selectedFile, setSelectedFile] = useState('')

    const handleSubmit = async (event) => {

      event.preventDefault()

      const formData = new FormData()
      formData.append('title', title)
      formData.append('date', date)

      if(selectedFile.length !== 0) {
        formData.append('image', selectedFile)
      }

      await PostServices.createPost(formData)
      await props.fetchPosts()

      initModal()
    }
  return (
    <>
      <Button onClick={initModal} style={{marginBottom: '0.5rem'}}>
        Create Post
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
            <Modal.Title>Create Post</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>

          <Modal.Body>
            <input type='text'
              name='title'
              placeholder='Enter Title'
              value={title}
              onChange={event => setTitle(event.target.value)}
              required
            />
            <br/><br/>
            <input type='date'
              name='date'
              value={date}
              onChange={event => setDate(event.target.value)}
              required
            />
            <br/><br/>
            <input type='file'
              name='image'
              onChange={event => setSelectedFile(event.target.files[0])}
              required
            />
            <br/><br/>
          </Modal.Body>

          <Modal.Footer>
            <Button variant='danger' onClick={initModal}>
              Close
            </Button>
            <Button type='submit' variant='dark'>
              Create
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default CreateModalComponent