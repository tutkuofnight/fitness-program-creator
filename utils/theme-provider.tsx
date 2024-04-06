'use client'
import { ConfigProvider, theme } from 'antd'

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ConfigProvider theme={{
      colorPrimary: '#95de64',
      colorBgContainer: '#f6ffed',
      algorithm: theme.darkAlgorithm,
    }}>
      {children}
    </ConfigProvider>
  )
}