// Write your code here
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {
    activeId: 0,
  }

  onClickRightBtn = () => {
    const {reviewsList} = this.props
    const {activeId} = this.state
    if (activeId < reviewsList.length - 1) {
      this.setState(prevState => ({activeId: prevState.activeId + 1}))
    }
  }

  onClickIncLeftBtn = () => {
    const {activeId} = this.state
    if (activeId > 0) {
      this.setState(prevState1 => ({activeId: prevState1.activeId - 1}))
    }
  }

  onRenderMainCont = reviw => {
    const {imgUrl, username, companyName, description} = reviw

    return (
      <div>
        <img src={imgUrl} alt={username} />
        <p>{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  render() {
    const {activeId} = this.state
    const {reviewsList} = this.props
    const reviewDetails = reviewsList[activeId]

    return (
      <div>
      <h1>Reviews</h1>
        <button onClick={this.onClickIncLeftBtn} testid="leftArrow" type="button">
          <img src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png" alt=''/>
        </button>
        {this.onRenderMainCont(reviewDetails)}
        <button onClick={this.onClickRightBtn} testid="rightArrow" type="button">
          <img src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"alt='' />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
