import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                New post
                <textarea></textarea>
                <button>Add</button>
                <button>Delete</button>
            </div>
            <div>
                <Post message={"Hello"} likesCount={15} />
                <Post message={"What is this"} likesCount={25} />
            </div>
        </div>
    )
}

export default MyPosts;