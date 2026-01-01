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

  return (
    <>
      <h1>MusicFun Player</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <div>{track.title}</div>
            <audio src={track.url} controls></audio>
          </li>
        ))}
      </ul>
    </>
  )
}
