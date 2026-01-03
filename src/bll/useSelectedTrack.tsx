import { useState } from 'react'
import type { TrackDetailsResource } from '../types'

export const useSelectedTrack = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
  const [selectedTrack, setSelectedTrack] =
    useState<TrackDetailsResource | null>(null)

  const handleReset = () => {
    setSelectedTrackId(null)
    setSelectedTrack(null)
  }

  return {
    selectedTrackId,
    setSelectedTrackId,
    selectedTrack,
    setSelectedTrack,
    handleReset,
  }
}
