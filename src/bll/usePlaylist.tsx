import { useEffect, useState } from 'react'
import type { TrackListItemResource } from '../types'
import { getPlaylist } from '../dal/api'

export const usePlaylist = () => {
  const [tracks, setTracks] = useState<TrackListItemResource[] | null>(null)

  useEffect(() => {
    getPlaylist().then((json) => setTracks(json.data))
  }, [])

  return tracks
}
