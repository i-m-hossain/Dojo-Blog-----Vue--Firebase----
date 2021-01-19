<template>
  <div class="spin">
  
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .spin {
        
        display: block;
        margin: 30px auto;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: #ff8800;
        width: 40px;
        height: 40px;
        animation: spin 1s ease infinite;

        }
    @keyframes spin{
        to{transform: rotateZ(360deg)}

    }    
</style>