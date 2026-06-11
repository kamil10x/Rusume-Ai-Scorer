import React from 'react'
import styles from './Admin.module.css';
import { Skeleton } from '@mui/material';
import WithAuthHOC from '../../utils/HOC/withAuthHOC';

const Admin = () => {
  return (
    <div className={styles.Admin}>
      <div className={styles.AdminBlock}>

        <Skeleton
          variant="rectangular"
          width={260}
          height={260}
          sx={{ borderRadius: "20px" }}
        />

        <div className={styles.AdminCard}>
          <h3>Kamil</h3>
          <p style={{color:"blue"}}>shaikkamil@gmail.com</p>
          <h4>Score: 73%</h4> 
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, ullam ea. Ut suscipit quibusdam, numquam, aliquam quas expedita architecto nisi exercitationem corporis officiis blanditiis, eligendi maxime atque sapiente molestiae saepe!
          </p>
        </div>

        <div className={styles.AdminCard}>
          <h3>Kamil</h3>
          <p style={{color:"blue"}}>shaikkamil@gmail.com</p>
          <h4>Score: 73%</h4> 
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, ullam ea. Ut suscipit quibusdam, numquam, aliquam quas expedita architecto nisi exercitationem corporis officiis blanditiis, eligendi maxime atque sapiente molestiae saepe!
          </p>
        </div>

        <div className={styles.AdminCard}>
          <h3>Kamil</h3>
          <p style={{color:"blue"}}>shaikkamil@gmail.com</p>
          <h4>Score: 73%</h4> 
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, ullam ea. Ut suscipit quibusdam, numquam, aliquam quas expedita architecto nisi exercitationem corporis officiis blanditiis, eligendi maxime atque sapiente molestiae saepe!
          </p>
        </div>

        <div className={styles.AdminCard}>
          <h3>Kamil</h3>
          <p style={{color:"blue"}}>shaikkamil@gmail.com</p>
          <h4>Score: 73%</h4> 
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, ullam ea. Ut suscipit quibusdam, numquam, aliquam quas expedita architecto nisi exercitationem corporis officiis blanditiis, eligendi maxime atque sapiente molestiae saepe!
          </p>
        </div>

        <div className={styles.AdminCard}>
          <h3>Kamil</h3>
          <p style={{color:"blue"}}>shaikkamil@gmail.com</p>
          <h4>Score: 73%</h4> 
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, ullam ea. Ut suscipit quibusdam, numquam, aliquam quas expedita architecto nisi exercitationem corporis officiis blanditiis, eligendi maxime atque sapiente molestiae saepe!
          </p>
        </div>
        
        <div className={styles.AdminCard}>
          <h3>Kamil</h3>
          <p style={{color:"blue"}}>shaikkamil@gmail.com</p>
          <h4>Score: 73%</h4> 
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, ullam ea. Ut suscipit quibusdam, numquam, aliquam quas expedita architecto nisi exercitationem corporis officiis blanditiis, eligendi maxime atque sapiente molestiae saepe!
          </p>
        </div>

      </div>
    </div>
  )
}

export default WithAuthHOC(Admin)
