import { useState } from 'react'
import DisplayList from './DisplayList'
import AddItem from './AddItem'

function App() {
  const [supermarketLists, setSupermarketLists] = useState({
    shop1: [] as string[],
    shop2: [] as string[],
    shop3: [] as string[],
  })

  const updateShoppingList = (item: string, shop: string) => {
    const newLists = { ...supermarketLists }
    newLists[shop] = [...newLists[shop], item]
    setSupermarketLists({ ...newLists })
  }

  return (
    <>
      <div>
        <DisplayList list={supermarketLists.shop1} />
        <AddItem updateList={updateShoppingList} shop="shop1" />
      </div>
      <div>
        <DisplayList list={supermarketLists.shop2} />
        <AddItem updateList={updateShoppingList} shop="shop2" />
      </div>
      <div>
        <DisplayList list={supermarketLists.shop3} />
        <AddItem updateList={updateShoppingList} shop="shop3" />
      </div>
    </>
  )
}

export default App
