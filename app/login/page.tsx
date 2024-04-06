'use client'
import { supabase } from "@/lib/supabase"
import { Form, Input, Button } from 'antd'
export default function Login() {
  const login = async (values: any) => {
    let { data, error } = await supabase.auth.signInWithPassword(values)
    if (error) {
      console.log('error', error)
    }
    console.log('data', data)
  }
  const onFinish = async (values: any) => {
    const res = await login(values)
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="E-Mail"
        name="email"
        rules={[{ required: true, message: 'Please input your E-Mail!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Sign In
        </Button>
      </Form.Item>
    </Form>
  )
}