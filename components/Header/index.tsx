import { Button, Flex } from 'antd'
import { MoveRight } from 'lucide-react'
import styles from './header.module.scss'
export default function Header(){
  return (
    <header className={styles.appHeader}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>FitProgram</div>
        <div>
          <Button className='icon-right' type="primary" icon={<MoveRight />}>Sign In</Button>
        </div>
      </div>
    </header>
  )
}