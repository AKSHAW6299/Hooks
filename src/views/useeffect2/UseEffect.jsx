import React, { useEffect, useState } from 'react'
import { apiGetDummyData } from '../../services/dummyApi'




function UseEffect() {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await apiGetDummyData()
    // console.log(response?.data);
    setData(response?.data)
  }

  console.log('Data::', data);


  return (
    <>
      <div>UseEffect</div>
      <p>please see the console.....</p>
    </>
  )
}

export default UseEffect