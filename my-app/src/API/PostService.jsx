import axios from 'axios';

class PostService {
   static async getPosts() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return response.data
   }
}

export default PostService;