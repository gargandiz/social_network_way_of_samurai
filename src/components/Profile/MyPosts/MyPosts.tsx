import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = () => {

    const PostData = [
        {id: 1,message: "Hello", likesCount: 15},
        {id: 2,message: "In the middle", likesCount: 2},
        {id: 3,message: "At the top", likesCount: 24},
        {id: 4,message: "On the right", likesCount: 42}
    ]

    let postElements = PostData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Delete</button>
                </div>

            </div>
            <div className={classes.postsBlock}>
                { postElements }
            </div>
        </div>
    )
}

export default MyPosts;