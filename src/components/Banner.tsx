import React from 'react';
import styles from './Banner.module.css';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Image 
        src={'/banner.png'}
        alt='cover'
        layout="fill"
        objectFit='cover'
      />
      <div className={styles.bannerText}>
        <h1>🌐 ระบบจองคิวฉีดวัคซีนโควิด-19</h1>
        <h3>🏫 จุฬาลงกรณ์มหาวิทยาลัย</h3>
        <h2>📢 ประชาสัมพันธ์การให้บริการวัคซีน</h2>
      </div>
    </div>
  );
}

export default Banner;
