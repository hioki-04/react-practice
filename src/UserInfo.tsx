type UserInfoProps = {
  name: string
  role: string
}

function UserInfo(props: UserInfoProps) {
  return (
    <>
      <p>名前：{props.name}</p>
      <p>役割：{props.role}</p>
    </>
  )
}

export default UserInfo
