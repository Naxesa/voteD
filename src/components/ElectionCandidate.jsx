import React from 'react'
import { IoMdTrash } from 'react-icons/io'

const ElectionCandidate = ({fullname, image, motto, id}) => {
  return (
    <div className="electioncandidate">
        <div className="electioncandidate__image">
            <img src={image} alt={fullname}/>
        </div>
        <div>
            <h5>{fullname}</h5>
            <small>{motto?.length >70 ? motto.substring(0, 70) + '...' : motto}</small>
            <button className="electioncandidate__btn"><IoMdTrash/></button>
        </div>
    </div>
  )
}

export default ElectionCandidate