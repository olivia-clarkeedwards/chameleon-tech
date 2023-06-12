import { useState } from 'react'
import DisplayList from './DisplayList'
import AddItem from './AddItem'

function App() {
  const [shoppingList, setShoppingList] = useState([] as string[])

  const updateShoppingList = (item) => {
    setShoppingList([...shoppingList, item])
  }

  return (
    <div>
      <DisplayList />
      <AddItem />
    </div>
  )
}

export default App
