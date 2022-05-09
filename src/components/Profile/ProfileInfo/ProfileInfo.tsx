import React from "react";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return <div>
        <div className={classes.item}>
            <img
                src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
        </div>
        <div className={classes.descriptionBlock}>
            ava+description
        </div>
    </div>
}

export default ProfileInfo;