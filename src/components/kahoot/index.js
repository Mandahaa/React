import axios from "axios"
import React, { useEffect, useState } from "react"
import { Button, Row, Col } from "antd"
import "./index.css"

const svgs = [
  {
    svg: (
      <svg width={50} viewBox="0 0 32 32">
        <path
          d="M27,24.559972 L5,24.559972 L16,7 L27,24.559972 Z"
          style={{ fill: "white" }}
        />
      </svg>
    ),
    color: "#e21b3c",
  },

  {
    svg: (
      <svg viewBox="0 0 32 32" width={50}>
        <path d="M7,7 L25,7 L25,25 L7,25 L7,7 Z" style={{ fill: "white" }} />
      </svg>
    ),
    color: "#1368ce",
  },

  {
    svg: (
      <svg width={50} viewBox="0 0 32 32">
        <path
          d="M16,27 C9.92486775,27 5,22.0751322 5,16 C5,9.92486775 9.92486775,5 16,5 C22.0751322,5 27,9.92486775 27,16 C27,22.0751322 22.0751322,27 16,27 Z"
          style={{ fill: "white" }}
        />
      </svg>
    ),
    color: "#d89e00",
  },

  {
    svg: (
      <svg viewBox="0 0 32 32" width={50}>
        <path
          d="M4,16.0038341 L16,4 L28,16.0007668 L16,28 L4,16.0038341 Z"
          style={{ fill: "white" }}
        />
      </svg>
    ),
    color: "#26890c",
  },
]

export default function Kahoot() {
  const [datas, setDatas] = useState([])
  const [index, setIndex] = useState(0)
  const [result, setResult] = useState("")
  const [time, setTime] = useState(30)

  const fetchKahootData = () => {
    axios
      .get("https://opentdb.com/api.php?amount=10&category=17&difficulty=easy")

      .then((res) =>
        setDatas(
          res.data.results.map((q) => {
            return {
              question: q.question,
              options: [
                { answer: q.correct_answer, isCorrect: true },
                ...q.incorrect_answers.map((wa) => {
                  return { answer: wa, isCorrect: false }
                }),
              ],
            }
          })
        )
      )
  }
  useEffect(() => {
    fetchKahootData()
  }, [])
  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        if (result === "") {
          setTime((seconds) => seconds - 1)
        }
      } else if (time === 0) {
        setResult("#ff3355")
      } else {
        clearInterval(interval)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [time])
  const onNext = () => {
    setIndex((currIndex) => currIndex + 1)
    setResult("")
    setTime(30)
  }
  return (
    <div>
      <div className="Container">
        <div>
          <div className="pages">
            {index + 1} of {datas.length}
          </div>
        </div>
        <div>
          <b className="QuestionContainer" style={{ backgroundColor: "white" }}>
            {datas[index]?.question}
          </b>
        </div>
        <div style={{ backgroundColor: result }} className="ResultBannar">
          <b>
            {result === "#66bf3a"
              ? "🤩 Correct! 🤩"
              : result === "#ff3355"
              ? time === 0
                ? "Time is up!!!"
                : "🤯 Wrong 🤯"
              : ""}
          </b>
        </div>
        <div className="NextButton">
          <div className="timer">{time}</div>
          <Button
            style={{ fontSize: "large" }}
            disabled={index === datas.length - 1}
            onClick={() => {
              onNext()
            }}
          >
            <b>Next 🤙🏼</b>
          </Button>
        </div>
        <div className="AnswerContainer">
          <Row gutter={[16, 16]}>
            {datas[index]?.options.map((item, index) => {
              return (
                <Col span={12}>
                  <Button
                    disabled={time === 0 || result !== ""}
                    className="Abutton"
                    style={{
                      border: svgs[index].svg,
                      fontSize: "x-large",
                      backgroundColor: result
                        ? item.isCorrect
                          ? "#66bf3a"
                          : "#ff3355"
                        : svgs[index].color,
                    }}
                    onClick={() => {
                      setResult(item.isCorrect ? "#66bf3a" : "#ff3355")
                    }}
                  >
                    {svgs[index].svg} <b>{item.answer}</b>
                  </Button>
                </Col>
              )
            })}
          </Row>
        </div>
      </div>
    </div>
  )
}
/* "PREVIOUS VERSION" <div>
  <div className="Container">
    <div className="pages">
      {index + 1} of {datas.length}
    </div>
    
    <div className="QuestionContainer">
      <h5>
        <b>{datas[index]?.question}</b>
      </h5>
    </div>
    
    <div className="AnswerContainer">
      {datas[index]?.options.map((item) => {
        return (
          <Button
            style={{
              backgroundColor: result
                ? item.isCorrect
                  ? "lightgreen"
                  : "pink"
                : "",
            }}
            onClick={() => {
              setResult(item.isCorrect ? "lightgreen" : "pink")
            }}
          >
            {item.answer}
          </Button>
        )
      })}
    </div>
    <div className="NextButton">
      <Button
        disabled={index === datas.length - 1}
        onClick={() => {
          onNext()
        }}
      >
        Next
      </Button>
      <div></div>
    </div>
  </div>
</div> */
