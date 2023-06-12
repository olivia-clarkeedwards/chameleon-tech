interface Props {
  list: string[]
}

function DisplayList({ list }: Props) {
  return (
    <ul>
      {list.map((elem, index) => (
        <li key={index}>{elem}</li>
      ))}
    </ul>
  )
}

export default DisplayList
