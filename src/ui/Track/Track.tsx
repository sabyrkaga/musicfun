import type { TrackListItemResource } from '../../types'

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
      style={{
        border: `1px solid ${
          track.id === selectedTrackId ? '#646cff' : 'transparent'
        }`,
      }}
    >
      <div
        onClick={() => {
          setSelectedTrackId(track.id)
        }}
      >
        {track.attributes.title}
      </div>
      <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
  )
}
