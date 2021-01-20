<template>
    <header>
        <router-link :to="{name: 'Home'}"><h1>Dojo Blog</h1></router-link>
        <nav>
            <router-link :to="{name: 'Home'}" >Home</router-link>
            <router-link :to="{name: 'Create'}" >Create Post</router-link>
        </nav>
    </header>
  
</template>

<script>
export default {

}
</script>

<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    padding: 10px;
    margin: 0 auto;

}

header h1 {
    color: #dfdfdf;
    font-size: 48px;
    
    }
header a{
    text-decoration: none;
    }    

header nav a{
    color: #bbb;
    text-decoration: none;
    display: inline-block;
    margin: 0 10px;

}
header nav a.router-link-active{
    color:#444;
    font-weight:bold

}
</style>