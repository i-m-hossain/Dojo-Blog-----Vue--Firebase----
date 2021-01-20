<template>
  
    <div class="tags">
        <div v-if="error"> <!---First check if any json error occurs --> 
            {{ error }}
        </div>
        <div v-if="posts.length" class="layout"> <!--- if post exists only the 'Postlist will be showed--->
            <PostList :posts = "postWithTags"/> <!-- props value 'postWithTags' received from the computed property --->
            <TagCloud :posts = "posts"/>
        </div>
        <div v-else>  <!-- Showing the spinner until the data is loaded--->
            <Spinner/>
        </div>
    
    </div>

</template>

<script>

import Spinner from '@/components/Spinner'
import PostList from '@/components/PostList'
import getPosts from '@/composables/getPosts'
import TagCloud from '@/components/TagCloud'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
    components: {Spinner, PostList, TagCloud},
    setup(){

        const route = useRoute() //creating a useRoute instance
        const { posts, error, load} = getPosts()   //querying all the posts

        load()
        const postWithTags = computed(() => {   
            
            return posts.value.filter((p) => 
                p.tags.includes(route.params.tag) //route parameter recieved using useRoute
            )
        }) //this computed property return an array of posts which includes only tags are given in the route parameter
         
        return {posts, error, postWithTags}
    }
    
}
</script>

<style>
    .tags{
    margin: 0 auto;
    padding:10px;
    max-width:1200px
  }
</style>