import { useState, useEffect } from 'react'

const CAT_ENDPOINT_PREFIX = 'https://cataas.com/cat'

export function useCatImage ({ fact }) {
  const [imageURL, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 3).join(' ')

    fetch(`${CAT_ENDPOINT_PREFIX}/says/${firstWord}?json=true`)
      .then(res => res.json())
      .then(response => {
        const id = response._id
        const url = `${CAT_ENDPOINT_PREFIX}/${id}/says/${firstWord}?width=320&height=320`
        setImageUrl(url)
      })
  }, [fact])

  return { imageURL }
}
