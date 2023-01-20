import axios from "axios"
import React, { useEffect, useState } from "react"
import "./index.css"
import { SwapOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { json, useFetcher } from "react-router-dom"

export default function Translate() {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [languageLists, setLanguageLists] = useState([])
  const [translatedText, setTranslatedText] = useState("")
  const [langs, setLangs] = useState({ lang1: "en", lang2: "en" })
  const [detects, setDetects] = useState([])
  const [usedInput, setUsedInput] = useState(localStorage.getItem('searchedWords') ?
  JSON.parse(localStorage.getItem('searchedWords'))
  : [])

  useEffect(() => {
    axios.get("https://libretranslate.de/languages").then((res) => {
      return setLanguageLists(res.data)
    })
  }, [])

  useEffect(()=>{
    //  console.log(JSON.parse(localStorage.getItem('searchedWords')).includes(inputText))
    // if(JSON.parse(localStorage.getItem('searchedWords')).includes(inputText))
    localStorage.setItem('searchedWords',JSON.stringify(usedInput))
    // else
    // alert("ene ug bn")
  },[usedInput])
  const onDetect = () => {
    const formData = new FormData()

    formData.append("q", inputText) //text to detect
    formData.append("api_key", "")

    axios.post("https://libretranslate.de/detect", formData).then((res) => {
      setDetects(res.data)
      console.log(res.data)
    })
    alert(`select : ${detects[0].language}`)
    alert(`${detects[0].confidence}% confident`)
  }
  const OnSwap = () => {
    console.log("hi")
  }
const onTranslate = () => {

    const formData = new FormData()

    formData.append("q", inputText) //text to translate
    formData.append("source", langs?.lang1) //from language
    formData.append("target", langs?.lang2) //to language
    formData.append("format", "text") //format of source text
    formData.append("api_key", "") //apikey

    axios
      .post("https://libretranslate.de/translate", formData)
      .then((response) => {
        setTranslatedText(response.data.translatedText)
        
      })
    
  }
    return (
      <div className="body">
        <div>{
          usedInput.map((input,id)=>{
            return<div>{input}</div>
          })}</div>
        <div className="container">
          <div className="wrapper">
            <div className="text-input">
              <textarea
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onTranslate()
                   setUsedInput((currState)=>{
                    return[
                      ...currState,
                      inputText
                    ]
                   }) 
                  }
                }}
                type={"text"}
                className="from-text"
                placeholder="Enter text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              ></textarea>
              <textarea
                type={"text"}
                className="to-text"
                placeholder="Result"
                readOnly
                disabled
                value={translatedText ? translatedText : ""}
                onChange={(e) => setOutputText(e.target.value)}
              ></textarea>
            </div>
            <ul className="controls">
              <li className="row-from">
                <select
                  className="from-language-selector"
                  onChange={(lang1) => {
                    console.log(lang1.target.value)
                    setLangs((currState) => {
                      return {
                        ...currState,
                        lang1: lang1.target.value,
                      }
                    })
                  }}
                >
                  {languageLists.map((language1, idx) => {
                    return (
                      <option key={idx} value={language1.code}>
                        {language1.name}
                      </option>
                    )
                  })}
                </select>
              </li>

              <li className="exchange">
                <Button
                  type="primary"
                  shape="round"
                  icon={
                    <SwapOutlined
                      onClick={() => {
                        OnSwap()
                      }}
                    />
                  }
                />
              </li>
              <li className="row-to">
                <select
                  className="to-language-selector"
                  onChange={(lang2) => {
                    console.log(lang2.target.value)
                    setLangs((currState) => {
                      return {
                        ...currState,
                        lang2: lang2.target.value,
                      }
                    })
                  }}
                >
                  {languageLists.map((language2, idx) => {
                    return (
                      <option key={idx} value={language2.code}>
                        {language2.name}
                      </option>
                    )
                  })}
                </select>
              </li>
            </ul>
          </div>
          <button
            onClick={() => {
              onTranslate()
              setUsedInput((currState)=>{
                return[
                  ...currState,
                  inputText
                ]
               })
            }}
          >
            Translate
          </button>
          <button
            onClick={() => {
              onDetect()
            }}
          >
            Detect Language
          </button>

          <div>
            {/* {SavedInput()}
          {usedInput} */}
          </div>
        </div>
      </div>
    )
  
}
