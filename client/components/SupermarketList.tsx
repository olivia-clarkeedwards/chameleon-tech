import DisplayList from './DisplayList'
import AddItem from './AddItem'

interface Props {
  currentList: string[]
  updateList: (item: string, shop: string) => void
  shop: string
}

function SupermarketList({ currentList, updateList, shop }: Props) {
  return (
    <div>
      <h1>LIST {shop.substring(shop.length - 1, shop.length)}</h1>
      <div className="h-[418px] w-[300px] m-3 bg-grey rounded-lg relative">
        <DisplayList list={currentList} />
        <AddItem updateList={updateList} shop={shop} />
      </div>
    </div>
  )
}

export default SupermarketList
