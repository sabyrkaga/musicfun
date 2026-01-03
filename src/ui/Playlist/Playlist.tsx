import { Track } from '../Track'
import { usePlaylist } from '../../bll/usePlaylist'
import styles from './Playlist.module.css'

interface Props {
  selectedTrackId: string | null
  setSelectedTrackId: (id: string) => void
}

export const Playlist = ({ selectedTrackId, setSelectedTrackId }: Props) => {
  const tracks = usePlaylist()

  return (
    <>
      {tracks === null && <p>Loading...</p>}
      {tracks?.length === 0 && <p>No tracks available</p>}
      <ul className={styles.playlist}>
        {tracks?.map((track) => (
          <Track
            key={track.id}
            track={track}
            selectedTrackId={selectedTrackId}
            setSelectedTrackId={setSelectedTrackId}
          />
        ))}
      </ul>
    </>
  )
}
