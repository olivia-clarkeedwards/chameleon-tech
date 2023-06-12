import { useState } from 'react'
import DisplayList from './DisplayList'
import AddItem from './AddItem'

function App() {
  const [shoppingList, setShoppingList] = useState([] as string[])

  const updateShoppingList = (item: string) => {
    setShoppingList([...shoppingList, item])
  }

  return (
    <div>
      <DisplayList list={shoppingList} />
      <AddItem updateList={updateShoppingList} />
    </div>
  )
}

export default App
