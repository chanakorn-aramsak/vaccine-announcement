'use client'
import HospitalCatalog from '@/components/HospitalCatalog'
import getHospitals from '@/libs/getHospitals'
import { LinearProgress } from '@mui/material'
import { Suspense } from 'react'

const HospitalCard = () => {
  const hospitals = getHospitals()
  return (
    <main className='mt-28'>
      <Suspense fallback={<p>Loading... <LinearProgress /> </p>}>
        <HospitalCatalog hospitalsResponse={hospitals} />
      </Suspense>
    </main>
  )
}

export default HospitalCard;
