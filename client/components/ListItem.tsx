interface Props {
  element: string
}

function ListItem({ element }: Props) {
  return (
    <li className="h-[37px] bg-white mb-[20px] rounded-lg text-start">
      <p className="p-2">{element}</p>
    </li>
  )
}

export default ListItem
