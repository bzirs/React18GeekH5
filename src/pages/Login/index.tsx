import styles from './index.module.scss'
import { Form, NavBar, Input, List, Button } from 'antd-mobile'

type FinishType = {
  mobile: string
  code: string
}
const Login = () => {
  const back = () => {}

  const onFinish = (values: FinishType) => {
    console.log(values)
  }

  const validateTriggerTime = ['onBlur']

  const mobileRules = [
    { required: true, message: '请输入手机号', validateTrigger: validateTriggerTime },
    {
      pattern: /^(?:(?:\+|00)86)?1\d{10}$/,
      message: '请输入正确的手机号'
    }
  ]

  return (
    <div className={styles.root}>
      {/* NavBar */}
      <NavBar onBack={back}></NavBar>
      {/* 主体 */}
      <div className='login-form'>
        <h2 className='title'>短信登录</h2>
        {/* 表单内容 */}
        <Form layout='vertical' mode='card' onFinish={onFinish}>
          <Form.Item validateTrigger={validateTriggerTime} name='mobile' className='login-item' rules={mobileRules}>
            <Input placeholder='请输入手机号' />
          </Form.Item>
          <List.Item className='login-code-extra' extra={<span className='code-extra'>发送验证码</span>}>
            <Form.Item validateTrigger={validateTriggerTime} rules={[{ required: true, message: '请输入验证码', validateTrigger: validateTriggerTime }]} name='code' className='login-item'>
              <Input placeholder='请输入验证码' autoComplete='off' />
            </Form.Item>
          </List.Item>
          <Form.Item>
            <Button className='login-submit' block type='submit' color='primary' size='large'>
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
