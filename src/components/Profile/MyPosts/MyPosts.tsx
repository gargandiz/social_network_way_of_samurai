import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";


const MyPosts = () => {
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
                <Post message={"Hello"} likesCount={15} />
                <Post message={"What is this"} likesCount={25} />
            </div>
        </div>
    )
}

export default MyPosts;