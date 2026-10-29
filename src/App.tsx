import './App.css'

type Task = {
  id: number
  title: string
  completed: boolean
}

const tasks: Task[] = [
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

function App() {
  return (
    <div className="task-list">
      <h1>Task一覧</h1>

      {tasks.map((task) => (
        <div key={task.id}>
          <span>
            {task.completed ? '☑' : '□'} {task.title}
          </span>
        </div>
      ))}
    </div>
  )
}

export default App
