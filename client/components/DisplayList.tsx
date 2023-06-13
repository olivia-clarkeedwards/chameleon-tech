interface Props {
  list: string[]
}

function DisplayList({ list }: Props) {
  return (
    <ul className="p-[18px]">
      {list.map((elem, index) => (
        <li
          className="h-[37px] bg-white mb-[20px] rounded-lg text-start"
          key={index}
        >
          <p className="p-2">{elem}</p>
        </li>
      ))}
    </ul>
  )
}

export default DisplayList
