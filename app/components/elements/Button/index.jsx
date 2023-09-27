import styles from './button.module.scss'
export default function Button({children , type = 'solid'}){
  return <button className={`${styles.btn} ${styles[type]}`}>{children}</button>
}