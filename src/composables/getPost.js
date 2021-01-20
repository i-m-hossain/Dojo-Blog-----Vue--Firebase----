import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'


const getPost = (id) => {

    const post = ref(null)
    const error = ref(null)
    
    const load = async() => {
        
        try {
        
            /**** Getting posts from firebase using firestore  ****/

            const res = await projectFirestore.collection('posts').doc(id).get()  //connecting to firebase collection
            console.log(res) 
            if (!res.exists) {
                throw Error('the post is not exist')
            }
            post.value = { ...res.data(), id: res.id}
            console.log(post.value)            
            
        } catch (err) {
            error.value = err.message
            
        }
    }
    return {post, error, load}
    
}

export default getPost