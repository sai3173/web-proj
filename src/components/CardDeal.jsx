import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Collaborative <br className='sm:block hidden'/>Partnership.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Beyond code delivery, we foster collaborative partnerships, working hand-in-hand for shared visions and mutual success. Experience a unique alliance where our shared goals become extraordinary achievements, setting us apart from the ordinary.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
