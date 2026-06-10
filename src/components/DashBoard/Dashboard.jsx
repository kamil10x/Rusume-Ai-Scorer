import React from 'react'
import styles from './Dashboard.module.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import DescriptionIcon from '@mui/icons-material/Description';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import Skeleton from '@mui/material/Skeleton';

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <div className={styles.DashboardLeft}>
        
        <div className={styles.DashboardHeader}>
          <div className={styles.DashboardHeaderTitle1}>Smart Resume Screening</div>
          <div className={styles.DashboardHeaderTitle2}>Resume Match Score</div>
        </div>

        <div className={styles.InstructionBox}>
          <div>🔔 Important Instructions:</div>
          <div className={styles.Instructions}>
            <div>
              📝 Please paste the complete job description in the "Job Description" field before submitting
            </div>
            <div >
              📎 Only PDF format(.pdf) resumes are accepted
            </div>
          </div>
        </div>

        <div className={styles.uploadResume}>
          <div className={styles.resumeBlock}>
            Upload your resume
          </div>

          <div className={styles.DashboardinputField}>
              <label htmlFor="inputfield" className={styles.inputBtn}>Upload Resume</label>
              <input type="file" accept='.pdf' id='inputfield' />
          </div>
        </div>

        <div className={styles.jobDesc}>
          <textarea className={styles.textArea} placeholder='Paste your job Description' rows={10} cols={50}/>

          <div className={styles.analyzeBtn}>Analyze</div>
        </div>
        
      </div>

      <div className={styles.DashboardRight}>

        <div className={styles.DashboardTopCard}>
          <div>Analyze with AI</div>
          <img className={styles.profileImg} src="luffy.jpg" />
          <div className={styles.topCardBottomContent}>Kamil</div>
        </div>
        
        


        {/*
        <div className={styles.ResultCard}>
        <div>Result</div>
        
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <h1>75%</h1>
        <ShowChartIcon sx={{marginLeft:2}}/>
        
        </div>
        <div className={styles.feedBack}>
        <h2>Feedback</h2>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dolorum sint dolores molestiae sit! Beatae ipsum earum ex atque, assumenda eos voluptatem aperiam perferendis doloribus hic debitis. Repellat ipsa optio ea, asperiores quas similique ipsam adipisci beatae omnis quibusdam unde? Eveniet fugiat iure quia dicta saepe dignissimos quam mollitia nostrum.
        </p>
        </div>
        </div>*/}


        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: "20px" }}
          width={280}
          height={280}
          />
    
        </div>
      
    </div>

    
  )
}

export default Dashboard
