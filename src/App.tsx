import { useState } from 'react'
import './App.css'

type Task = {
  id: number
  title: string
  completed: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Reactを勉強する',
      completed: false,
    },
    {
      id: 2,
      title: 'TypeScriptを勉強する',
      completed: false,
    },
    {
      id: 3,
      title: 'Gitを勉強する',
      completed: false,
    },
  ])

  const [title, setTitle] = useState('')

  const handleAdd = () => {
    if (title.trim() === '') {
      return
    }

    const newTask: Task = {
      id: Date.now(),
      title: title,
      completed: false,
    }

    setTasks([...tasks, newTask])
    setTitle('')
  }

  const handleDelete = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }

  const handleToggle = (id: number) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        }
      }

      return task
    })

    setTasks(newTasks)
  }

  const completedCount = tasks.filter((task) => task.completed).length
  const incompleteCount = tasks.length - completedCount

  return (
    <div className="task-list">
      <h1>Task Management</h1>

      <div className="task-form">
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Taskを入力"
        />

        <button onClick={handleAdd}>追加</button>
      </div>

      {tasks.map((task) => (
        <div key={task.id} className="task">
          <label className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
            />

            {task.title}
          </label>

          <button onClick={() => handleDelete(task.id)}>
            削除
          </button>
        </div>
      ))}

      <div className="summary">
        <p>全件：{tasks.length}</p>
        <p>完了：{completedCount}</p>
        <p>未完了：{incompleteCount}</p>
      </div>
    </div>
  )
}

export default App
