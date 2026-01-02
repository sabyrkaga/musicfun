import type { TrackDetailsResource } from '../../types'
import { Playlist } from '../Playlist'
import { TrackDetails } from '../TrackDetails'

interface Props {
  selectedTrackId: string | null
  setSelectedTrackId: (id: string) => void
  selectedTrack: TrackDetailsResource | null
  setSelectedTrack: (track: TrackDetailsResource | null) => void
}

export const MainContent = ({
  selectedTrackId,
  setSelectedTrackId,
  selectedTrack,
  setSelectedTrack,
}: Props) => {
  return (
    <main style={{ display: 'flex', columnGap: '30px' }}>
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
