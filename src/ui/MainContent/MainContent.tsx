import type { TrackDetailsResource } from '../../types'
import { Playlist } from '../Playlist'
import { TrackDetails } from '../TrackDetails'

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
