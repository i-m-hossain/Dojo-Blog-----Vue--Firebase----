<template>

    <div class="create">
        <h2>Create a new post</h2>
        <form action="" @submit.prevent="handleSubmit">
            <label for="">Title</label>
            <input v-model="title" type="text" required>

            <label for="">Content</label>
            <textarea v-model="body" name="" id="" cols="10" rows="5" required></textarea>

            <Label>Tags</Label>
            <input v-model="tag" @keydown.enter.prevent="handleKeyDown" type="text" placeholder="Hit 'Enter' to add a tag">
            
            <div v-for="tag in tags" :key="tag" class="pill">#{{tag}}</div>
            
            <button > Add Post</button>

        </form>
    </div>
  
</template>

<script>

import { ref } from 'vue'
import { projectFirestore, timestamp } from '../firebase/config'

export default {

    setup(){

        const title = ref('')
        const body = ref('')
        const tag = ref('')
        const tags= ref([])

        const handleKeyDown= () => {
            if(!tags.value.includes(tag.value)){
                tag.value = tag.value.replace(/\s/, '') //replace the whitespace
                tags.value.push(tag.value)
            }
            tag.value = ''
          
          
        }
        const handleSubmit = async () => {

            const post={
                title: title.value,
                body: body.value,
                tags: tags.value,
                createdAt: timestamp()
            }
            const res = await projectFirestore.collection('posts').add(post)  //adding post to firebase
           
            
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