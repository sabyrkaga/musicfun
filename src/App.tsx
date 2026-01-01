import { useEffect, useState } from 'react'

interface TrackAttachment {
  url: string
}

interface TrackListItemAttributes {
  title: string
  attachments: TrackAttachment[]
}

interface TrackListItemResource {
  id: string
  attributes: TrackListItemAttributes
}

export const App = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
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

  if (tracks === null) {
    return (
      <>
        <h1>MusicFun Player</h1>
        <div>Loading...</div>
      </>
    )
  }

  if (tracks.length === 0) {
    return (
      <>
        <h1>MusicFun Player</h1>
        <div>No tracks available</div>
      </>
    )
  }

  return (
    <>
      <h1>MusicFun Player</h1>
      <button onClick={() => setSelectedTrackId(null)}>Reset selection</button>
      <ul>
        {tracks.map((track) => (
          <li
            key={track.id}
            style={{
              border: `1px solid ${
                track.id === selectedTrackId ? 'orange' : 'transparent'
              }`,
            }}
          >
            <div onClick={() => setSelectedTrackId(track.id)}>
              {track.attributes.title}
            </div>
            <audio src={track.attributes.attachments[0].url} controls></audio>
          </li>
        ))}
      </ul>
    </>
  )
}
