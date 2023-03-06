const newPost = (post, addedAt = Date()) => {
 let twoPost = {
       ...post,
    addedAt,
 }
 return twoPost
}
const firstPost =  {
    id: 1,
    author: 'Bogdan'
}
 newPost(firstPost)