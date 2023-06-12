interface Props {
  list: string[]
}

function DisplayList({ list }: Props) {
  return (
    <ul>
      {list.map((elem, index) => (
        <li
          className="h-[37px] bg-white m-[18px] rounded-lg text-start"
          key={index}
        >
          <p className="p-2">{elem}</p>
        </li>
      ))}
    </ul>
  )
}

export default DisplayList
