import './app.css'
import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import SupermarketList from './SupermarketList'

function App() {
  const shops = ['shop1', 'shop2', 'shop3']

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
    <DndProvider backend={HTML5Backend}>
      <div className="h-[80px] p-[18px] p-5 w-full bg-grey absolute"></div>
      <div className="pt-40 flex flex-row flex-wrap justify-center w-full content-start">
        {shops.map((elem, index) => (
          <SupermarketList
            currentList={supermarketLists[elem]}
            updateList={updateShoppingList}
            shop={elem}
            key={index}
          />
        ))}
      </div>
    </DndProvider>
  )
}

export default App
