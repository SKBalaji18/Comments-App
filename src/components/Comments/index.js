import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  onSubmit = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const logoBackground = `${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      date: new Date(),
      initialClassName: logoBackground,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  likeComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  onName = event => {
    this.setState({name: event.target.value})
  }

  onComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentsList, name, comment} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="page-head">Comments</h1>
          <div className="comments-top-container">
            <form onSubmit={this.onSubmit}>
              <p className="form-head">Say something about 4.0 Technologies</p>
              <input
                value={name}
                onChange={this.onName}
                placeholder="Your Name"
                type="text"
              />
              <textarea
                value={comment}
                onChange={this.onComment}
                placeholder="Your Comment"
                rows="10"
                cols="35"
              />
              <button type="submit">Add Comments</button>
            </form>
            <div className="top-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
              />
            </div>
          </div>
          <hr />
          <p className="cmt-count-head">
            <span className="comments-count">{commentsList.length}</span>
            Comments
          </p>
          <ul>
            {commentsList.map(eachItem => (
              <CommentItem
                key={eachItem.id}
                likeComment={this.likeComment}
                eachComment={eachItem}
                deleteComment={this.deleteComment}
                initialContainerBackgroundClassNames={
                  initialContainerBackgroundClassNames
                }
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
