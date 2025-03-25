import React from 'react'
import { Link } from 'react-router-dom'

const Congrats = () => {
  return (
    <section className="congrats">
      <div className="container congrats__container">
        <h2>Thanks for voting</h2>
        <p>Your vote has been added to your candidates vote count. You'll be redirected shortly to see the new results.</p>
        <Link to='/results' className='btn sm primary'>See results</Link>
      </div>
    </section>
  )
}

export default Congrats