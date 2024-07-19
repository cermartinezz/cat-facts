import { useCatImage } from './services/hooks/useCatImage'
import { useCatFact } from './services/hooks/useCatFact'
import './App.css'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageURL } = useCatImage({ fact })

  const requestFact = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={requestFact}>Ask other fact</button>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt={`cat with three words taken from ${fact}`} />}
    </main>
  )
}
