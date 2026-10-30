import TaskItem from './TaskItem'

type Task = {
  id: number
  title: string
  completed: boolean
}

type TaskListProps = {
  tasks: Task[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

function TaskList({
  tasks,
  onToggle,
  onDelete,
}: TaskListProps) {
  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </>
  )
}

export default TaskList
