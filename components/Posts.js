import React from 'react'
import Post from './Post'

const posts = [
  {
    id: '123',
    username: 'marlon_morales',
    userImg:
      'https://s3.narvii.com/image/ibu4hrlvibkm2aqx4ges36l3rjxpdque_hq.jpg',
    img: 'https://s3.narvii.com/image/ibu4hrlvibkm2aqx4ges36l3rjxpdque_hq.jpg',
    caption: 'Be the best programer in the world and build your dreams',
  },

  {
    id: '123',
    username: 'marlon_morales',
    userImg:
      'https://s3.narvii.com/image/ibu4hrlvibkm2aqx4ges36l3rjxpdque_hq.jpg',
    img: 'https://s3.narvii.com/image/ibu4hrlvibkm2aqx4ges36l3rjxpdque_hq.jpg',
    caption: 'Be the best programer in the world and build your dreams',
  },

  {
    id: '123',
    username: 'marlon_morales',
    userImg:
      'https://s3.narvii.com/image/ibu4hrlvibkm2aqx4ges36l3rjxpdque_hq.jpg',
    img: 'https://s3.narvii.com/image/ibu4hrlvibkm2aqx4ges36l3rjxpdque_hq.jpg',
    caption: 'Be the best programer in the world and build your dreams',
  },
]

const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
