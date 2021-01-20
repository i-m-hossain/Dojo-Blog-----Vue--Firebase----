<template>

    <div class="create">
       
        <form action="" @submit.prevent="handleSubmit"> <!--- click event attached when submit-->
            <label for="">Title</label>
            <input v-model="title" type="text" required>

            <label for="">Content</label>
            <textarea v-model="body" name="" id="" cols="10" rows="5" required></textarea>

            <Label>Tags (Hit 'Enter' to add a tag)</Label>
            <input v-model="tag" @keydown.enter.prevent="handleKeyDown" type="text" > <!--keydown event when presing 'Enter'--->
            
            <div v-for="tag in tags" :key="tag" class="pill">#{{tag}}</div>
            
            <button > Add Post</button>

        </form>
    </div>
  
</template>

<script>


import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { projectFirestore, timestamp } from '../firebase/config'

export default {

    
    setup(){

        const title = ref('')
        const body = ref('')
        const tag = ref('')
        const tags= ref([])

        const router = useRouter() //new instance of useRouter  which will be needed to push the current route(web page) to another route 
        // console.log( router )

        const handleKeyDown= () => { 
            if(!tags.value.includes(tag.value)){
                tag.value = tag.value.replace(/\s/, '') //replace the whitespace
                tags.value.push(tag.value)
            }
            tag.value = ''
          
          
        }//this handkleKeyDown function fires only when typing 'tag' value is not exist in 'tags'.After whitespace removed, typed data will be stored as a tag 
        const handleSubmit = async () => {

            const post={
                title: title.value,
                body: body.value,
                tags: tags.value,
                createdAt: timestamp() //check firebase/config.js how this is obtained 
            }
            const res = await projectFirestore.collection('posts').add(post)  //adding post to firebase (POST request)
           
            router.push({name: 'Home'})
        }
        

        return {title, body,tag, handleKeyDown, tags, handleSubmit}
  
    }


}
</script>

<style>
    form{
        max-width: 480px;
        margin: 0 auto;
        text-align: left;
    }
    input, textarea{
        display: block;
        margin: 10px 0;
        padding: 10px;
        width:100%;
        box-sizing: border-box;
        border: 1px solid #eee
    }
    textarea{
        height:160px
    }
    label{
        display: inline-block;
        margin-top:30px;
        position: relative;
        font-size:20px;
        color: #fff;
        margin-bottom: 10px
    }
    label::before{
        content:"";
        display: block;
        width:100%;
        height:100%;
        background:#ff8800;
        position: absolute;
        z-index: -1;
        padding-right: 40px;
        left: -30px;
        transform:rotateZ(-1.5deg)
    }
    button {
        display:block;
        background: #ff8800;
        margin-top:30px;
        color:white;
        padding: 8px 16px;
        font-size:18px;
        border: none;

    }
    .pill{
        display: inline-block;
        margin:10px 10px 0;
        color: #444;
        background: #ddd;
        padding: 8px;
        border-radius: 20px;
        font-size:14px
    }

</style>