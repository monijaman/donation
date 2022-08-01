import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className='donations'>
      <div>Payment Date: {new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h2>{goal.payment} tk</h2>
      <h2>{goal.paymenttype}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default GoalItem
