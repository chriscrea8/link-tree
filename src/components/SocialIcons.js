import React from 'react'
import github from '../icons/github.svg'
import slack from '../icons/slack.svg'
import './SocialIcons.css'

function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="https://hng9.slack.com/chriscrea8" target="_blank" rel="noreferrer" id="slack">
        <img src={slack} alt="slack icon" className="slack-icon" />
      </a>
      <a href="https://chriscrea8.github.io/portfolio" target="_blank" rel="noreferrer">
        <img src={github} alt="github icon" className="github-icon" />
      </a>
    </div>
  )
}

export default SocialIcons
