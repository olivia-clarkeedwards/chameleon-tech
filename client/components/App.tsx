import './app.css'
import { useState } from 'react'
import SupermarketList from './SupermarketList'
import Supermarkets from '../models/Supermarkets'

function App() {
  const shops = ['shop1', 'shop2', 'shop3', 'shop4']

  const [supermarketLists, setSupermarketLists] = useState({
    shop1: [] as string[],
    shop2: [] as string[],
    shop3: [] as string[],
    shop4: [] as string[],
  } as Supermarkets)

  const updateShoppingList = (item: string, shop: string) => {
    const newLists = { ...supermarketLists }
    newLists[shop] = [...newLists[shop], item]
    setSupermarketLists({ ...newLists })
  }

  return (
    <>
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
    </>
  )
}

export default App
