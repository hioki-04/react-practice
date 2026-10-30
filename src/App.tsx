import { useState } from 'react'
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

  return (
    <div className="task-list">
      <Header />

      <TaskForm onAdd={handleAdd} />

      <TaskSummary tasks={tasks} />

      <TaskList
        tasks={tasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default App
