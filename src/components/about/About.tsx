import React, { useRef, VFC } from 'react'
import Button from 'src/base/Button'
import { ABOUT_ID, INTRO_IMAGE_URL } from 'src/lib/constant'
import { fromPublicFolder, useInViewAnimation } from 'src/lib/utils'
import './styles.scss'

type Props = { onScroll: () => void }
const About: VFC<Props> = (props) => {
  const imageRef = useRef<HTMLImageElement | null>(null)
  useInViewAnimation(imageRef.current, 'about-screen-image--animated')

  return (
    <div id={ABOUT_ID} className="about">
      <div className="about-description">
        <p className="about-description-title">Hello</p>
        <p className="about-description-paragraph">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum."
        </p>
        <Button onClick={props.onScroll} className="about-description-button" variant="outlined" color="secondary">
          Explore
        </Button>
      </div>
      <div className="about-screen">
        <div className="about-screen-container">
          <img ref={imageRef} className="about-screen-image" src={fromPublicFolder(INTRO_IMAGE_URL)} alt="About us" />
        </div>
      </div>
    </div>
  )
}

export default About
