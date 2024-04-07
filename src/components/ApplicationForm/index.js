import {Component} from 'react'

import CreateContext from '../../Context/CreateContext'

import Header from '../Header'

import './index.css'

class ApplicationForm extends Component {
  state = {
    nameInput: '',
    name: '',
    emailInput: '',
    email: '',
    coverLetterInput: '',
    coverLetter: '',
    requiredDetailsMg: '',
  }

  onClickNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onClickEmailInput = event => {
    this.setState({emailInput: event.target.value})
  }

  onClickCvInput = event => {
    this.setState({coverLetterInput: event.target.value})
  }

  renderRequiredDetails = () => {
    this.setState({
      requiredDetailsMg: '*Required Details',
    })
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {nameInput, emailInput, coverLetterInput} = this.state

    if (
      nameInput.length === 0 ||
      emailInput.length === 0 ||
      coverLetterInput.length === 0
    ) {
      this.renderRequiredDetails()
    } else {
      this.setState({
        name: nameInput,
        nameInput: '',
        email: emailInput,
        emailInput: '',
        coverLetter: coverLetterInput,
        coverLetterInput: '',
        requiredDetailsMg: '',
      })
    }
  }

  renderApplicationForm = () => {
    const {
      nameInput,
      emailInput,
      coverLetterInput,
      requiredDetailsMg,
    } = this.state

    return (
      <>
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="input"
            value={nameInput}
            onChange={this.onClickNameInput}
          />
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input"
            value={emailInput}
            onChange={this.onClickEmailInput}
          />
          <label htmlFor="cover-letter" className="label">
            Cover Letter
          </label>
          <textarea
            id="cover-letter"
            className="input text-area"
            onChange={this.onClickCvInput}
            value={coverLetterInput}
          />

          <div className="required-details">
            <p>{requiredDetailsMg}</p>
          </div>
          <div className="mb-submit-btn">
            <button type="submit" className="submit-button ">
              Submit
            </button>
          </div>
        </form>
      </>
    )
  }

  renderSubmit = () => (
    <CreateContext.Consumer>
      {value => {
        const {submit, toggleSubmit} = value

        const onClickSubmitBtn = () => {
          toggleSubmit()
        }
        const {name, email, coverLetter} = this.state

        return (
          <>
            {submit ? (
              <div className="submit-container">
                <div className="details-view-container">
                  <p>Name: {name}</p>
                  <p>Email: {email}</p>
                  <p>Cover Letter:</p>
                  <div className="cover-letter-desc">
                    <p>{coverLetter}</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="submit-btn"
                  onClick={onClickSubmitBtn}
                >
                  Submit
                </button>
              </div>
            ) : (
              <div>
                <div className="application-success-container">
                  <img
                    src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1689438440/VectorgreenTick_ooyohn.png"
                    alt="order success"
                    className="green-tick"
                  />
                  <p className="application-success-desc">
                    Application Successful
                  </p>
                </div>
              </div>
            )}
          </>
        )
      }}
    </CreateContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />

        <div className="application-form-container">
          <h1 className="application-form-hd">Application Form</h1>
          <div>{this.renderApplicationForm()}</div>
          <div>{this.renderSubmit()}</div>
        </div>
      </>
    )
  }
}

export default ApplicationForm
