import { useState } from 'react'
import type { TrackDetailsResource } from '../../types'
import { Header } from '../Header'
import { MainContent } from '../MainContent'

export const MainPage = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
  const [selectedTrack, setSelectedTrack] =
    useState<TrackDetailsResource | null>(null)

  const handleReset = () => {
    setSelectedTrackId(null)
    setSelectedTrack(null)
  }

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
