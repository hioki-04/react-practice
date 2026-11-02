import { useEffect, useState } from 'react'
import './App.css'

import Header from './Header'
import TaskForm from './TaskForm'
import TaskSummary from './TaskSummary'
import TaskList from './TaskList'

type Task = {
  id: number
  title: string
  completed: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks')

    if (savedTasks) {
      return JSON.parse(savedTasks)
    }

    return [
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
    ]
  })

  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleAdd = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title: title,
      completed: false,
    }

    setTasks([...tasks, newTask])
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

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') {
      return !task.completed
    }

    if (filter === 'completed') {
      return task.completed
    }

    return true
  })

  return (
    <div className="task-list">
      <Header />

      <TaskForm onAdd={handleAdd} />

      <div className="filters">
        <button onClick={() => setFilter('all')}>
          すべて
        </button>

        <button onClick={() => setFilter('active')}>
          未完了
        </button>

        <button onClick={() => setFilter('completed')}>
          完了
        </button>
      </div>

      <TaskSummary tasks={tasks} />

      <TaskList
        tasks={filteredTasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default App
