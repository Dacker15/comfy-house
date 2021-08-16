import React, { VFC } from 'react'
import Button from 'src/base/Button'
import './styles.scss'

type Props = { onScroll: () => void }
const Splash: VFC<Props> = (props) => {
  return (
    <div className="splash">
      <div
        className="splash-image"
        style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/hero-bcg.jpeg')` }}
      >
        <div className="splash-image-explore">
          <p className="splash-image-explore-title">Welcome to Comfy House</p>
          <Button className="splash-image-explore-button" onClick={props.onScroll}>
            Explore
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Splash
