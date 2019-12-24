import React, { useState, useEffect } from "react"
import axios from "axios"

// https://quote-garden.herokuapp.com/quotes/random

const RandomQuote = () => {
  const [quote, setQuote] = useState(null)

  const getQuote = async () => {
    let _quote = null

    _quote = await axios.get("https://quote-garden.herokuapp.com/quotes/random")

    return _quote
  }

  useEffect(() => {
    getQuote().then(res => {
      console.log(res)
      setQuote({ text: res.data.quoteText, author: res.data.quoteAuthor })
    })
  }, [])

  return (
    <div className="l-random-quote">
      <div className="l-container">
        <h3 className="title-section">Few words of wisdom ...</h3>
        {quote && (
          <div className="l-content">
            <p>{quote.text}</p>
            <strong>{quote.author}</strong>
          </div>
        )}
      </div>
    </div>
  )
}

export default RandomQuote
