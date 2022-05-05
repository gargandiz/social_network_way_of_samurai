import React from "react";
import classes from "./Post.module.css"

type PostPropsType={
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={classes.item}>
            <img src="https://i.pinimg.com/736x/ba/1e/dc/ba1edc6334faa704c42f69a0a77bdf84.jpg"/>
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;