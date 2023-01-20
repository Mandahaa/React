import axios from "axios"
import React, { useEffect, useState } from "react"
import "./index.css"

export default function Translate() {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [selectedLanguageKey, setSelectedLanguageKey] = useState("")
  const [languagesList, setLanguagesList] = useState([])
  const [detectedLanguageKey, setDetectedLanguageKey] = useState("")

  const getLanguageSource = () => {
    axios
      .post("https://libretranslate.de/detect", {
        q: inputText,
      })
      .then((res) => {
        setDetectedLanguageKey(res.data[0].language)
      })
  }
  const translateText = () => {
    setOutputText(inputText)
    getLanguageSource()

    let data = {
      q: inputText,
      source: detectedLanguageKey,
      terget: selectedLanguageKey,
    }
    axios.post("https://libretranslate.de/translate", data)
        .then((res) => {
        setOutputText(res.data.translatedText)
    })
  }
  const languageKey = (selectedLanguage) => {
    setSelectedLanguageKey(selectedLanguage.target.value)
  }
  useEffect(() => {
    axios.get("https://libretranslate.de/languages")
        .then((res) => {
        setSelectedLanguageKey(res.data)
    })
    getLanguageSource()
  }, [inputText])
  return (
    <div className="border">
      <div className="container">
        <h1 className="header">Mandahaa's Translator</h1>
      </div>
      <div className="body">
        <input
          type={"text"}
          className="input"
          placeholder="Enter text"
          onChange={(e) => setInputText(e.target.value)}
        ></input>

        <select className="language-select" onChange={languageKey}>
          <option>Select Language...</option>
          {languagesList.map((language) => {
            return <option value={language.code}>{language.name}</option>
          })}
        </select>

        <input
          type={"text"}
          className="output"
          placeholder="Result"
          value={outputText}
        ></input>
        <button className="translate-button" onClick={translateText}>
          Translate
        </button>
      </div>
    </div>
  )
}
