import React, { VFC } from 'react'
import Button from 'src/base/Button'
import { INTRO_IMAGE_URL } from 'src/lib/constant'
import { fromPublicFolder } from 'src/lib/utils'
import './styles.scss'

type Props = { onScroll: () => void }
const Splash: VFC<Props> = (props) => {
  return (
    <div className="splash">
      <div className="splash-image" style={{ backgroundImage: `url('${fromPublicFolder(INTRO_IMAGE_URL)}` }}>
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
