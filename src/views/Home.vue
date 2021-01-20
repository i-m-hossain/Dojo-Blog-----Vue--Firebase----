<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error"> {{ error }}</div>
    <div v-if="posts.length" >
      <PostList :posts = "posts"/>
    </div>
    <div v-else> 
      <Spinner/>
    </div>

  </div>
</template>

<script>
 
import Spinner from '@/components/Spinner'
import PostList from '@/components/PostList'
import getPosts from '@/composables/getPosts'

// @ is an alias to /src


export default {
  name: 'Home',
  components: {PostList, Spinner},
 
  setup(){
    const {posts, error, load} = getPosts()
    load()


    return {posts, error}
  }
}
</script>


<style>
  .home{
    margin: 0 auto;
    padding:10px;
    max-width:1200px
  }
</style>