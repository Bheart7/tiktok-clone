import React, { useState } from 'react';
import './VideoSidebar.css';

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

const VideoSidebar = ({ likes, shares, messages }) => {
  // const [like, setLike] = useState(false);

  // const likeStatus = () => {
  //   setLike(!like);
  //   console.log('clicked');
  // };

  const [liked, setLiked] = useState(false);

  return (
    <div className='videoSidebar'>
      <div className='videoSidebar__button'>
        {liked ? (
          <FavoriteIcon fontSize='large' onClick={e => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon fontSize='large' onClick={e => setLiked(true)} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className='videoSidebar__button'>
        <MessageIcon fontSize='large' />
        <p>{shares}</p>
      </div>
      <div className='videoSidebar__button'>
        <ShareIcon fontSize='large' />
        <p>{messages}</p>
      </div>

      {/* {like ? (
        <FavoriteIcon onClick={likeStatus} />
      ) : (
        <FavoriteBorderIcon onClick={likeStatus} />
      )}
      <MessageIcon />
      <ShareIcon /> */}
    </div>
  );
};

export default VideoSidebar;
