import ListItem from './ListItem'

interface Props {
  list: string[]
}

function DisplayList({ list }: Props) {
  return (
    <ul className="p-[18px]">
      {list.map((elem, index) => (
        <ListItem element={elem} key={index} />
      ))}
    </ul>
  )
}

export default DisplayList
