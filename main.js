const tracks = [
  {
    title: 'MusicFun Soundtrack',
    url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3',
  },
  {
    title: 'MusicFun Soundtrack - Instrumental',
    url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3',
  },
]

const rootElement = document.getElementById('root')

const titleElement = document.createElement('h1')
const trackListElement = document.createElement('ul')

titleElement.textContent = 'MusicFun Player'

tracks.forEach((track) => {
  const trackElement = document.createElement('li')
  const trackTitleElement = document.createElement('div')
  const trackAudioElement = document.createElement('audio')

  trackTitleElement.textContent = track.title

  trackAudioElement.controls = true
  trackAudioElement.src = track.url

  trackElement.append(trackTitleElement, trackAudioElement)
  trackListElement.appendChild(trackElement)
})

rootElement.append(titleElement, trackListElement)
