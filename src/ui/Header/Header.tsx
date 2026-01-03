import { PageTitle } from '../PageTitle'
import { ResetButton } from '../ResetButton'
import styles from './Header.module.css'

interface Props {
  onReset: () => void
}

export const Header = ({ onReset }: Props) => {
  return (
    <header className={styles.header}>
      <PageTitle />
      <ResetButton onReset={onReset} />
    </header>
  )
}
