import React from 'react'
import "./portfolio.scss"

function PortfolioTile({link, title, flipType}) {
  let classType = `flip ${flipType}`
  return (
      <>
        <div class={classType}>
            <div class="front" style={{backgroundImage: `url(${link})`}}>
                <h1 class="text-shadow">{title}</h1>
            </div>
            <div class="back">
                <div class="positionFlip">
                    <a href="/" class='viewCircle'>
                        <p>View</p>
                    </a>
                </div>
            </div>
        </div>
      </>

  )
}

export default PortfolioTile