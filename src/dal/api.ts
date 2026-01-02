import type { TrackDetailsResponse, TrackListResponse } from '../types'

const fetchJson = async <T>(url: string): Promise<T> => {
  const res = await fetch(url, {
    headers: {
      'api-key': import.meta.env.VITE_API_KEY,
    },
  })

  if (!res.ok) {
    throw new Error('API error')
  }

  return res.json()
}

export const getTrack = (selectedTrackId: string) =>
  fetchJson<TrackDetailsResponse>(
    `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`
  )

export const getPlaylist = () =>
  fetchJson<TrackListResponse>(
    'https://musicfun.it-incubator.app/api/1.0/playlists/tracks'
  )
