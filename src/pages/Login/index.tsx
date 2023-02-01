import styles from './index.module.scss'
import { Form, Input, NavBar } from 'antd-mobile'
import { FormItem } from 'antd-mobile/es/components/form/form-item'
const Login = () => {
  const back = () => {}

  return (
    <div className={styles.root}>
      {/* NavBar */}
      <NavBar onBack={back}></NavBar>
      {/* 主体 */}
      <div className='login-form'>
        <h2 className='title'>短信登录</h2>
        {/* 表单内容 */}
        <Form>
          <FormItem className='login-item' name='mobile'>
            <Input placeholder='请输入手机号'></Input>
          </FormItem>
        </Form>
      </div>
    </div>
  )
}

export default Login
