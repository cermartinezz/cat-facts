import { useEffect, useState } from 'react'
import { getRandomFact } from '../facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = async () => {
    getRandomFact().then(fact => setFact(fact))
  }

  useEffect(() => {
    refreshFact()
  }, [])

  return { fact, refreshFact }
}
