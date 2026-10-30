type Task = {
  id: number
  title: string
  completed: boolean
}

type TaskItemProps = {
  task: Task
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

function TaskItem({
  task,
  onToggle,
  onDelete,
}: TaskItemProps) {
  return (
    <div className="task">
      <label className={task.completed ? 'completed' : ''}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />

        {task.title}
      </label>

      <button onClick={() => onDelete(task.id)}>
        削除
      </button>
    </div>
  )
}

export default TaskItem
