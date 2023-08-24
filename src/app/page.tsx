import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import KnowledgeCard from '@/components/KnowledgeCard'

export default function Home() {
  return (
    <main >
        <Banner/>
       <KnowledgeCard />
    </main>
  )
}
