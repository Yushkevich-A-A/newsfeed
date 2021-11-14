import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import Like from '../../Actions/Like/Like';
import Reply from '../../Actions/Reply/Reply';
import Comment from '../../Actions/Comment/Comment';
import Visibility from '../../Actions/Visibility/Visibility';
import moment from 'moment';
import 'moment/locale/ru';

moment().local('ru');


function Post(props) {
    const { item } = props;

    const likes = item.likes.count;
    const comments = item.comments.count;
    const reposts = item.reposts.count;
    const views = item.views.count;
    const timestamp = item.date;
    

    return (
        <div className='post'>
            <div className="post-header">
                <div className="post-avatar"></div>
                <div className="post-header-info">
                    <div className="post-name-group"></div>
                    <div className="date-post">
                        {moment(timestamp).format('D MMM')} в {moment(timestamp).format('HH:mm')}
                    </div>
                </div>
            </div>
            <div className="post-body">
                <p className="post-body-text">
                    {item.text}
                </p>
            </div>
            <div className="vision-info-block">
                <div className="action-vision-info">
                    <Like count={likes}/>
                    <Comment count={comments}/>
                    <Reply count={reposts}/>
                </div>
                <Visibility count={views}/>
            </div>
        </div>
    )
}

Post.propTypes = {
    item: PropTypes.object.isRequired,
};

export default Post;

