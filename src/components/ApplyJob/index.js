import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'

import './index.css'

class ApplyJob extends Component {
  renderApplyJobView = () => (
    <div className="apply-job-container">
      <Link to="/application-form">
        <button type="button" className="apply-job-btn">
          Click to Apply
        </button>
      </Link>
    </div>
  )

  render() {
    return <>{this.renderApplyJobView()}</>
  }
}

export default withRouter(ApplyJob)
