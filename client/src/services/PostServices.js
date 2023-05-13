import axios from 'axios'

class Post{

    create(formData){

        const url = 'http://localhost:4000/api/create-post'
        const config = {
            header: {
                'Content-Type': 'multipart/form-data'
            }
        }
        return axios.post(url,formData,config)
    }

}
const post = new Post()
export default post