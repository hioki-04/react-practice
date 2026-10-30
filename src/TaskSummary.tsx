type Task = {
  id: number
  title: string
  completed: boolean
}

type TaskSummaryProps = {
  tasks: Task[]
}

function TaskSummary({ tasks }: TaskSummaryProps) {
  const completedCount = tasks.filter((task) => task.completed).length
  const incompleteCount = tasks.length - completedCount

  return (
    <div className="summary">
      <p>全件：{tasks.length}</p>
      <p>完了：{completedCount}</p>
      <p>未完了：{incompleteCount}</p>
    </div>
  )
}

export default TaskSummary
