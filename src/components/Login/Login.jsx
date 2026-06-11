import React from 'react'
import styles from './Login.module.css';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import GoogleIcon from '@mui/icons-material/Google';
const Login = () => {
  return (
    <div className={styles.Login}>
        <div className={styles.LoginCard}> 
            <div className={styles.LoginCardTitle}>
                
                <h1>Login</h1>
                <VpnKeyIcon />

            </div>
            <div className={styles.googleBtn}>
                <GoogleIcon sx={{ color: "#4285F4", fontSize: 30 }} /> Sign in with Google
            </div>

        </div>
      
    </div>
  )
}



export default Login
