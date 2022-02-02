import React from 'react'
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIconFilled } from '@heroicons/react/solid'

const Post = ({ id, username, userImg, caption, img }) => {
  return (
    <div className="rounded-s my-7 border bg-white">
      {/* Header */}

      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt="user_img"
          className="mr-3 h-12 w-12 rounded-full border object-cover p-1"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5 " />
      </div>

      {/* Img */}

      <img src={img} alt="post_img" className="h-screen w-full object-cover" />

      {/* Buttons */}

      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn rotate-45" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* Captions */}

      <div>
        <p className="truncate p-5">
          <span className="font-bold">{username} </span>
          {caption}
        </p>
      </div>

      {/* Coments */}

      {/* Input Box */}

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          className="flex-1 border-none outline-none focus:ring-0"
          placeholder="Add a comment..."
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  )
}

export default Post
