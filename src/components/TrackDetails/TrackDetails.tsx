import { useEffect, useState } from 'react'
import type { TrackDetailsResource } from '../../types'

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
  const [isTrackLoading, setIsTrackLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!selectedTrackId) return

    setIsTrackLoading(true)
    setSelectedTrack(null)

    fetch(
      `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`,
      {
        headers: {
          'api-key': import.meta.env.VITE_API_KEY,
        },
      }
    )
      .then((res) => res.json())
      .then((json) => setSelectedTrack(json.data))
      .finally(() => setIsTrackLoading(false))
  }, [selectedTrackId])

  return (
    <div>
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
