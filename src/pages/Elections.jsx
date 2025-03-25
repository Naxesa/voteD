import React from 'react'
import {elections as dummyElections, elections} from '../data'
import Election from '../components/Election'

const Elections = () => {
  return (
    <section className="section elections">
      <div className="container elections__conatiner">
        <header className="elections__header">
          <h1>Ongoing Elections</h1>
          <button className='btn primary'>Create New Election</button>
        </header>
        <menu className="election__menu">
          {
            elections.map(election => <Election key={election.id} {...election} />)
          }
        </menu>
      </div>

    </section>
  )
}

export default Elections