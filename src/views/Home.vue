<template>
  <div class="home">
    <h1>Home</h1>
    
    <div v-if="error"> {{ error }}</div> <!---Checks if any error(json) exists-->
    <div v-if="posts.length" > <!--Post will be shown only when posts exist-->
      <PostList :posts = "posts"/>
      <TagCloud :posts = "posts"/>
    </div>
    <div v-else> <!--If posts are not available spinner will be loaded-->
      <Spinner/>
    </div>

  </div>
</template>

<script> 
import Spinner from '@/components/Spinner'
import PostList from '@/components/PostList'
import getPosts from '@/composables/getPosts'
import TagCloud from '@/components/TagCloud'

// @ is an alias to /src


export default {
  name: 'Home',
  components: {PostList, Spinner, TagCloud},
 
  setup(){
    const {posts, error, load} = getPosts() //getting posts by fetching firebase from getPosts 
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