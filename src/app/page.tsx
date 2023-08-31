import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import HospitalCard from '@/components/HospitalCard'
import Navbar from '@/components/Navbar';

export default function Home() {
  const hospitalData = [
    {
      name: 'Chulalongkorn Hospital',
      imageSrc: '/CHULA-logo.png'
    },
    {
      name: 'Rajavithi Hospital',
      imageSrc: '/RAJAVITHI-logo.png'
    },
    {
      name: 'Thammasat University Hospital',
      imageSrc: '/THAMMASAT-logo.png'
    }
  ];
  return (
    <main >
       <Navbar />
        <Banner/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {hospitalData.map((hospital, index) => (
        <HospitalCard 
          key={index} 
          name={hospital.name} 
          imageSrc={hospital.imageSrc} 
        />
      ))}
    </div>
    </main>
  )
}