import type { TrackDetailsResource } from '../../types'
import { Playlist } from '../Playlist'
import { TrackDetails } from '../TrackDetails'
import styles from './MainContent.module.css'

interface Props {
  selectedTrack: TrackDetailsResource | null
  selectedTrackId: string | null
  setSelectedTrack: (track: TrackDetailsResource | null) => void
  setSelectedTrackId: (id: string) => void
}

export const MainContent = ({
  selectedTrack,
  selectedTrackId,
  setSelectedTrack,
  setSelectedTrackId,
}: Props) => {
  return (
    <main className={styles.wrapper}>
      <Playlist
        selectedTrackId={selectedTrackId}
        setSelectedTrackId={setSelectedTrackId}
      />
      <TrackDetails
        selectedTrackId={selectedTrackId}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
    </main>
  )
}
