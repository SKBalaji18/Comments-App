import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {eachComment, likeComment, deleteComment} = props
  const {id, name, comment, date, initialClassName, isLiked} = eachComment

  const likedImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeClass = isLiked ? 'liked-cls' : 'not-liked'

  const onLike = () => {
    likeComment(id)
  }

  const onDelete = () => {
    deleteComment(id)
  }

  return (
    <li className="comment-list-container">
      <div className="comment-container">
        <div>
          <div className={`logo-container ${initialClassName}`}>
            <p className="logo">{name[0]}</p>
          </div>
        </div>
        <div>
          <div className="comment-top-container">
            <p className="commender-name">{name}</p>
            <p className="cmt-time">{formatDistanceToNow(date)}</p>
          </div>
          <p className="comment-by-user">{comment}</p>
        </div>
      </div>
      <div className="icons-container">
        <div className="like-container">
          <button type="button" onClick={onLike} className="icon-click-button">
            <img className="like-img" src={likedImg} alt="like" />
            <p className={likeClass}>Like</p>
          </button>
        </div>
        <button
          type="button"
          data-testid="delete"
          onClick={onDelete}
          className="icon-click-button"
        >
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="list-hr" />
    </li>
  )
}

export default CommentItem
