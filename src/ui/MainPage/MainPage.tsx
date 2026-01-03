import { Header } from '../Header'
import { MainContent } from '../MainContent'
import { useSelectedTrack } from '../../bll/useSelectedTrack'

export const MainPage = () => {
  const {
    selectedTrackId,
    setSelectedTrackId,
    selectedTrack,
    setSelectedTrack,
    handleReset,
  } = useSelectedTrack()

  return (
    <>
      <Header onReset={handleReset} />
      <MainContent
        selectedTrackId={selectedTrackId}
        setSelectedTrackId={setSelectedTrackId}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
    </>
  )
}
