import React from 'react'
import styles from './History.module.css';
import { Skeleton } from '@mui/material';
import WithAuthHOC from '../../utils/HOC/withAuthHOC';

const History = () => {
  return (
    <div className={styles.History}>
      <div className={styles.HistoryCardBlock}>

        <Skeleton
          variant="rectangular"
          width={260}
          height={260}
          sx={{ borderRadius: "20px" }}
        />

        <div className={styles.HistoryCard}>

          <div className={styles.cardPercentage}>80%</div>
          <h3>Frontend Developer</h3>
          <p>Resume Name: Resume.pdf</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam impedit explicabo laudantium ipsa ullam dolor minima officiis porro aut doloremque nostrum expedita reiciendis, illo debitis iure perspiciatis repellendus soluta modi.</p>

          <p>Dated: 10-06-2006</p>

        </div>

        <div className={styles.HistoryCard}>

          <div className={styles.cardPercentage}>80%</div>
          <h3>Frontend Developer</h3>
          <p>Resume Name: Resume.pdf</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam impedit explicabo laudantium ipsa ullam dolor minima officiis porro aut doloremque nostrum expedita reiciendis, illo debitis iure perspiciatis repellendus soluta modi.</p>

          <p>Dated: 10-06-2006</p>

        </div>

        <div className={styles.HistoryCard}>

          <div className={styles.cardPercentage}>80%</div>
          <h3>Frontend Developer</h3>
          <p>Resume Name: Resume.pdf</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam impedit explicabo laudantium ipsa ullam dolor minima officiis porro aut doloremque nostrum expedita reiciendis, illo debitis iure perspiciatis repellendus soluta modi.</p>

          <p>Dated: 10-06-2006</p>

        </div>

        <div className={styles.HistoryCard}>

          <div className={styles.cardPercentage}>80%</div>
          <h3>Frontend Developer</h3>
          <p>Resume Name: Resume.pdf</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam impedit explicabo laudantium ipsa ullam dolor minima officiis porro aut doloremque nostrum expedita reiciendis, illo debitis iure perspiciatis repellendus soluta modi.</p>

          <p>Dated: 10-06-2006</p>

        </div>

        <div className={styles.HistoryCard}>

          <div className={styles.cardPercentage}>80%</div>
          <h3>Frontend Developer</h3>
          <p>Resume Name: Resume.pdf</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam impedit explicabo laudantium ipsa ullam dolor minima officiis porro aut doloremque nostrum expedita reiciendis, illo debitis iure perspiciatis repellendus soluta modi.</p>

          <p>Dated: 10-06-2006</p>

        </div>


      </div>
    </div>
  )
}

export default WithAuthHOC(History)
