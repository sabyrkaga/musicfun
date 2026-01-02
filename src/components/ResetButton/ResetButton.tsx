interface Props {
  onReset: () => void
}

export const ResetButton = ({ onReset }: Props) => {
  return <button onClick={() => onReset()}>Reset selection</button>
}
