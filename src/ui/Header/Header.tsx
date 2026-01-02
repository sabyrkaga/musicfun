import { PageTitle } from '../PageTitle'
import { ResetButton } from '../ResetButton'

interface Props {
  onReset: () => void
}

export const Header = ({ onReset }: Props) => {
  return (
    <header>
      <PageTitle />
      <ResetButton onReset={onReset} />
    </header>
  )
}
