import {Link} from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const JobItem = props => {
  const {jobData} = props
  const {
    companyLogoUrl,
    employmentType,
    jobsDescription,
    location,
    packagePerAnnum,
    rating,
    title,
    id,
  } = jobData

  return (
    <>
      <Link to={`/jobs/${id}`} className="link-item">
        <li className="job-item-container">
          <div>
            <div className="img-title-container">
              <img
                src={companyLogoUrl}
                alt="company logo"
                className="company-logo"
              />
              <div className="title-rating-container">
                <h1 className="company-heading">{title}</h1>
                <div className="star-rating-container">
                  <AiFillStar className="star-icon" />
                  <p className="rating-text">{rating}</p>
                </div>
              </div>
            </div>
            <div className="location-package-container">
              <div className="location-icon-container">
                <MdLocationOn className="location-icon" />
                <p className="location">{location}</p>
              </div>
              <div className="job-type">
                <p>{employmentType}</p>
              </div>
              <div className="package">
                <p className="lpa">{packagePerAnnum}</p>
              </div>
            </div>
          </div>
          <hr className="item-hr-line" />
          <div className="second-part-container">
            <h1 className="description-heading">Description</h1>
            <p className="description-para">{jobsDescription}</p>
          </div>
        </li>
      </Link>
    </>
  )
}

export default JobItem
