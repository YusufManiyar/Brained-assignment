import React, {useEffect, useState} from 'react'
import { Modal, Button } from 'react-bootstrap'
import PostServices from '../services/PostServices.js'

function UpdateModalComponent(props) {
    const [isShow, invokeModal] = useState(false)

    const initModal = () => {
      return invokeModal(!isShow)
    }

    const [title, setTitle] = useState(props.title)
    const [date, setDate] = useState(props.date)
    const [selectedFile, setSelectedFile] = useState('')

    useEffect(()=> {
      setTitle(props.title)
      setDate(props.date)
    }, [props])

    const handleSubmit = async (event) => {

      event.preventDefault()

      const formData = new FormData()
      formData.append('id', props.id)
      formData.append('title', title)
      formData.append('date', date)

      if(selectedFile.length !== 0) {
        formData.append('image', selectedFile)
      }

      await PostServices.updatePost(formData)
      await props.fetchPosts()

      initModal()
    }
  return (
    <>
      <Button variant='success' onClick={initModal}>
        Edit
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
            <Modal.Title>Update Post</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>

          <Modal.Body>
            <input type='text'
              name='title'
              placeholder='Enter Title'
              value={title}
              onChange={event => setTitle(event.target.value)}

            />
            <br/><br/>
            <input type='date'
              name='date'
              value={date}
              onChange={event => setDate(event.target.value)}
              
            />
            <br/><br/>
            <input type='file'
              name='image'
              onChange={event => setSelectedFile(event.target.files[0])}
 
            />
            <br/><br/>
          </Modal.Body>

          <Modal.Footer>
            <Button variant='danger' onClick={initModal}>
              Close
            </Button>
            <Button type='submit' variant='dark'>
              Update
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default UpdateModalComponent