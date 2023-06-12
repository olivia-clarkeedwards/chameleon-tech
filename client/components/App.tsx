import './app.css'
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
      <div className="h-[80px] p-[18px] p-5 w-full bg-grey absolute"></div>
      <div className="flex justify-items-center">
        <div className="h-[418px] w-[300px] left-[286px] top-[151px] absolute bg-grey rounded-lg">
          <DisplayList list={supermarketLists.shop1} />
          <AddItem updateList={updateShoppingList} shop="shop1" />
        </div>
        <div className="h-[418px] w-[300px] left-[606px] top-[151px] absolute bg-grey rounded-lg">
          <DisplayList list={supermarketLists.shop2} />
          <AddItem updateList={updateShoppingList} shop="shop2" />
        </div>
        <div className="h-[418px] w-[300px] left-[926px] top-[151px] absolute bg-grey rounded-lg">
          <DisplayList list={supermarketLists.shop3} />
          <AddItem updateList={updateShoppingList} shop="shop3" />
        </div>
      </div>
    </>
  )
}

export default App
