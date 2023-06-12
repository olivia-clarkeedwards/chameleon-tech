interface Props {
  list: string[]
}

function DisplayList({ list }: Props) {
  return (
    <ul>
      {list.map((elem, index) => (
        <li className="list-item" key={index}>
          {elem}
        </li>
      ))}
    </ul>
  )
}

export default DisplayList
