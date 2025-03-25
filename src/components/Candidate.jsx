import React from 'react';
import { useDispatch } from 'react-redux';
import { UiActions } from '../store/ui-slice';
import { voteActions } from '../store/vote-slice'

const Candidate = ({ image, id, fullname, motto }) => {
  const dispatch = useDispatch()

   const openCandidateModal = () => {
          dispatch(UiActions.openVoteCandidateModal())
          dispatch(voteActions.changeSelectedVoteCandidate(id))
  
      }

  return (
    <article className="candidate">
      <div className="candidate__image">
        <img src={image} alt={fullname} />
      </div>
      <h5>{fullname?.length > 20 ? fullname.substring(0, 20) + "..." : fullname}</h5>
      <small>{motto?.length > 25 ? motto.substring(0, 25) + "..." : motto}</small>
      <button className="btn-primary" onClick={openCandidateModal}>Vote</button>
    </article>
  );
};

export default Candidate;
