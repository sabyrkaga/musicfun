import { useEffect, useState } from 'react'
import type { TrackDetailsResource } from '../types'
import { getTrack } from '../dal/api'

interface Props {
  selectedTrackId: string | null
  setSelectedTrack: (track: TrackDetailsResource | null) => void
}

export const useTrackDetails = ({
  selectedTrackId,
  setSelectedTrack,
}: Props) => {
  const [isTrackLoading, setIsTrackLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!selectedTrackId) return

    setIsTrackLoading(true)
    setSelectedTrack(null)

    getTrack(selectedTrackId)
      .then((json) => setSelectedTrack(json.data))
      .finally(() => setIsTrackLoading(false))
  }, [selectedTrackId])

  return { isTrackLoading }
}
