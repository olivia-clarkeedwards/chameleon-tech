import { ChangeEvent, FormEvent, useState } from 'react'

interface Props {
  updateList: (item: string, shop: string) => void
  shop: string
}

function AddItem({ updateList, shop }: Props) {
  const [currentInput, setCurrentInput] = useState('')

  const handleTextInput = (evt: ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(evt.target.value)
  }

  const addItemToShoppingList = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    updateList(currentInput, shop)
    setCurrentInput('')
  }

  return (
    <>
      <form onSubmit={addItemToShoppingList}>
        <input
          title="list-item"
          type="text"
          name="item"
          value={currentInput}
          onChange={handleTextInput}
        />
        <button type="submit">GO</button>
      </form>
    </>
  )
}

export default AddItem
