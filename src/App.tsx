import { useState, type ChangeEvent } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <div className="form">
      <label htmlFor="name">名前</label>

      <input
        id="name"
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="名前を入力"
      />

      {name.trim() === '' ? (
        <p>名前を入力してください</p>
      ) : (
        <p>こんにちは、{name}さん</p>
      )}
    </div>
  )
}

export default App
