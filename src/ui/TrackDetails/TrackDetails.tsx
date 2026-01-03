import type { TrackDetailsResource } from '../../types'
import { useTrackDetails } from '../../bll/useTrackDetails'
import styles from './TrackDetails.module.css'

interface Props {
  selectedTrackId: string | null
  selectedTrack: TrackDetailsResource | null
  setSelectedTrack: (track: TrackDetailsResource | null) => void
}

export const TrackDetails = ({
  selectedTrackId,
  selectedTrack,
  setSelectedTrack,
}: Props) => {
  const { isTrackLoading } = useTrackDetails({
    selectedTrackId,
    setSelectedTrack,
  })

  return (
    <div className={styles.wrapper}>
      <h2>Track details</h2>

      {!selectedTrackId && <p>Track is not selected</p>}

      {selectedTrackId && isTrackLoading && <p>Loading...</p>}

      {selectedTrack && (
        <div>
          <h3>{selectedTrack.attributes.title}</h3>
          <div>
            <h4>Lyrics</h4>
            {selectedTrack.attributes.lyrics || <p>No lyrics</p>}
          </div>
        </div>
      )}
    </div>
  )
}
