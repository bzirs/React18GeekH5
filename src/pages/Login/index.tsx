import { Button } from 'antd-mobile'

import styles from './index.module.scss'
const Login = () => {
  return (
    <div>
      <Button block color='primary' size='large' className={styles.btn}>
        登录
      </Button>
    </div>
  )
}

export default Login
