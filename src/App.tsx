export const App = () => {
  const tracks = [
    {
      id: 1,
      title: 'MusicFun Soundtrack',
      url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3',
    },
    {
      id: 2,
      title: 'MusicFun Soundtrack - Instrumental',
      url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3',
    },
  ]

  const selectedTrackId = 1

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
            <div>{track.title}</div>
            <audio src={track.url} controls></audio>
          </li>
        ))}
      </ul>
    </>
  )
}
