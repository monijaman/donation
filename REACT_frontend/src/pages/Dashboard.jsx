import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DonationItem from '../components/donationItem'
import Spinner from '../components/Spinner'
import { getDonations, reset } from '../features/donations/donationSlice'
function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { donations,  isLoading, isError, message } = useSelector(
    (state) => state.donations
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getDonations())
 
    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>

 

      <section className='content'>
         
        {donations && donations.length > 0 ? (
          <div className='donatins'>
            {donations.map((donation) => (
              <DonationItem key={donation._id} donation={donation} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}


        {/* {donations.length > 0 ? (
          <div className='donatins'>
            {Object.keys(donations).map((donation) => (
               console.log(donation[donation])
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )} */}
      </section>
    </>
  )
}

export default Dashboard