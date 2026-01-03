import clsx from 'clsx'
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
  const isSelected = track.id === selectedTrackId

  return (
    <li
      className={clsx(styles.track, {
        [styles.selected]: isSelected,
      })}
      onClick={() => {
        setSelectedTrackId(track.id)
      }}
    >
      <div className={styles.title}>{track.attributes.title}</div>
      <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
  )
}
