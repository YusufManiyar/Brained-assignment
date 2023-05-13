import React, {useEffect, useState} from 'react'
import './ShowComponent.css'
import PostServices from '../services/PostServices'
import CreateModalComponent from './CreateModalComponent'
import UpdateModalComponent from './UpdateModalComponent'
import ImageModalComponent from './ImageModalComponent'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function ShowComponent() {
    
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        setPosts(await PostServices.getPosts())
    }

    const deletePost = async (id, e) => {
        alert(id)
        await PostServices.deletePost(id) 
        await fetchPosts()
    }

    useEffect(() => {
        console.log('Api calls made')
        fetchPosts()
    }, [])


  return (
    <div className='container'>
        <h1>Posts</h1>
        <CreateModalComponent fetchPosts={fetchPosts}/>
        <table style={{width: '100%'}} border = '1'>
            <thead>
                <th>Title</th>
                <th>Date</th>
                <th>Image</th>
                <th>Delete</th>
                <th>Edit</th>
            </thead>
            <tbody>
            { posts.data !== undefined && posts.data.data && posts.data.data.length > 0 && (
                posts.data.data.map(post => (
                    <tr>
                        <td>{post.title}</td>
                        <td>{post.date}</td>
                        <td>
                        <ImageModalComponent imageUrl={'http://localhost:4000/api/postImages/'+post.image}/>
                            {/* <img src={'http://localhost:4000/api/postImages/'+post.image} style={{ width: '100px', height: '100px'}} alt='' /> */}
                        </td>
                        <td>
                            <button id={post._id} onClick={(e) => deletePost(post._id, e)}>Delete</button>
                        </td>
                        <td>
                            <UpdateModalComponent id={post._id} title={post.title} date={post.date} fetchPosts={fetchPosts}/>
                        </td>
                    </tr>
            )))}
            </tbody>
        </table>
    </div>
  )
}

export default ShowComponent