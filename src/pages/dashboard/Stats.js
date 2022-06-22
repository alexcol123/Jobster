import { useEffect } from 'react'
import { StatsContainer, Loading, ChartsContainer } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { showStats } from '../../features/AllJobs/allJobsSlice'

const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  )


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(() => {
      dispatch(showStats())
    })
  }, [])

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  )
}

export default Stats
