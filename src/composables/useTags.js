//take in an array of posts
//create a new tag set (no duplicate)
// add the tags of each post to the array set
//return a single array of tags based one the set 


import { ref } from 'vue'

const useTags = (posts) => {
    
    const tags = ref([])
    const tagSet = new Set()

    posts.forEach(item => {
        item.tags.forEach(tag => tagSet.add(tag))
    }) //cycle through all the post and stores the tags into the tagSet which are not duplicate

    tags.value = [...tagSet] //spreads operator to spread the value of tagSet into an array

    return {tags}

}
export default useTags
