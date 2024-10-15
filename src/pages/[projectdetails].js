import { useRouter } from 'next/router';
import React from 'react'


const projectdetails = () => {

    const router = useRouter()
    const {projectdetails} = router.query;
    
    

  return (
    
    <div className='aja'>
        {projectdetails}
    </div>
  )
}

export default projectdetails;
