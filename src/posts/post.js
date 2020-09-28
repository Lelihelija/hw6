import React from 'react';
import './styles.css';

import CommentsIcon from '../images/chat.svg';
import SharesIcon from '../images/reload.svg';
import LikesIcon from '../images/heart.svg';
import DownloadsIcon from '../images/download.svg';


const Post  = ({name, photo, nickname, content, image, date, comments, shares, likes, downloads}) => {
    
    return (
        <div className="post-wrapper">
            <div className="author">
                <img src={photo} className="logo" alt="logo"></img>
                <div className="text-wrapper">
                    <p className="text"> {name} <span className="nickname-date"> {nickname}  · {date.day} </span><br/> 
                        <span className="content-text">{content.text}</span></p>
                    <div className="img-post-container">
                    <img src={image.src} className="img-post" alt="post"></img>
                     </div>
                    <div className="posts-interaction-wrapper">
                        <div className="posts-interaction-comments posts-interaction-items">
                            <img src={CommentsIcon} className="comment-icon icon" alt="comment icon"/>
                            {comments.quantity}
                        </div>
                        <div className="posts-interaction-share posts-interaction-items">
                            <img src={SharesIcon} className="share-icon icon" alt="share icon"/>
                            {shares.quantity}
                        </div>
                        <div className="posts-interaction-likes posts-interaction-items">
                            <img src={LikesIcon} className="likes-icon icon posts-interaction-items" alt="likes icon"/>
                            {likes.quantity}
                        </div>
                        <div className="posts-interaction-download posts-interaction-items">
                            <img src={DownloadsIcon} className="download-icon icon" alt="download icon"/>
                            {downloads.quantity}
                        </div>
                    </div> 
                </div>
            </div>

        </div>

    );
};

export default Post;
