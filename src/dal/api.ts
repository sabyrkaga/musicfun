export const getTrack = async (selectedTrackId: string) => {
  const res = await fetch(
    `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`,
    {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY,
      },
    }
  )
  return await res.json()
}

export const getPlaylist = async () => {
  const res = await fetch(
    'https://musicfun.it-incubator.app/api/1.0/playlists/tracks',
    {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY,
      },
    }
  )
  return await res.json()
}
