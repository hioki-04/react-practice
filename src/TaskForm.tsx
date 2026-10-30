import { useState } from 'react'

type TaskFormProps = {
  onAdd: (title: string) => void
}

function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState('')

  const handleAdd = () => {
    if (title.trim() === '') {
      return
    }

    onAdd(title)
    setTitle('')
  }

  return (
    <div className="task-form">
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Taskを入力"
      />

      <button onClick={handleAdd}>追加</button>
    </div>
  )
}

export default TaskForm
