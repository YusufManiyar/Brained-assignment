import axios from 'axios'

class Post{

    async createPost(formData){

        const url = 'http://localhost:4000/api/create-post'
        const config = {
            header: {
                'Content-Type': 'multipart/form-data'
            }
        }
        try{
            const response = await axios.post(url,formData,config)
            return response
        }
        catch(error){
            const response = {
                data: {
                    success: false,
                    errMsg: error.toString()
                }
            }
            return response
        }
    }

    async getPosts(){

        const url = 'http://localhost:4000/api/get-posts'
        try{
            const response = await axios.get(url)
            return response
        }
        catch(error){
            const response = {
                data: {
                    success: false,
                    errMsg: error.toString()
                }
            }
            return response
        }
    }

    async deletePost(id){

        const url = 'http://localhost:4000/api/delete-post/'+id
        try{
            const response = await axios.delete(url)
            return response
        }
        catch(error){
            const response = {
                data: {
                    success: false,
                    errMsg: error.toString()
                }
            }
            return response
        }
    }

    async updatePost(formData){

        const url = 'http://localhost:4000/api/update-post'
        const config = {
            header: {
                'Content-Type': 'multipart/form-data'
            }
        }
        try{
            const response = await axios.put(url,formData,config)
            return response
        }
        catch(error){
            const response = {
                data: {
                    success: false,
                    errMsg: error.toString()
                }
            }
            return response
        }
    }
}
const post = new Post()
export default post