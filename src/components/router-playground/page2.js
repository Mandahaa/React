import { useNavigate } from 'react-router-dom'

export default function Page2() {
  const navigate = useNavigate()
  return (
    <>
      <button
        onClick={() => {
          navigate('/page1')
        }}
      >
        to page 1
      </button>
      <button
        onClick={() => {
          navigate('/page3')
        }}
      >
        to page 3
      </button>
      <div style={{ backgroundColor: 'blue', padding: 10 }}>Page 2</div>
    </>
  )
}