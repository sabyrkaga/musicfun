import type { TrackListItemResource } from '../../types'
import styles from './Track.module.css'

interface Props {
  track: TrackListItemResource
  selectedTrackId: string | null
  setSelectedTrackId: (id: string) => void
}

export const Track = ({
  track,
  selectedTrackId,
  setSelectedTrackId,
}: Props) => {
  return (
    <li
      className={`${styles.track} ${
        selectedTrackId === track.id ? styles.selected : ''
      }`}
      onClick={() => {
        setSelectedTrackId(track.id)
      }}
    >
      <div className={styles.title}>{track.attributes.title}</div>
      <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
  )
}
