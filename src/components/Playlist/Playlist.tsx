import { useEffect, useState } from 'react'
import type { TrackListItemResource } from '../../types'
import { Track } from '../Track'

interface Props {
  selectedTrackId: string | null
  setSelectedTrackId: (id: string) => void
}

export const Playlist = ({ selectedTrackId, setSelectedTrackId }: Props) => {
  const [tracks, setTracks] = useState<TrackListItemResource[] | null>(null)

  useEffect(() => {
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY,
      },
    })
      .then((res) => res.json())
      .then((json) => setTracks(json.data))
  }, [])

  return (
    <>
      {tracks === null && <p>Loading...</p>}
      {tracks?.length === 0 && <p>No tracks available</p>}
      <ul>
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
