import { ChangeEvent, FormEvent, useState } from 'react'

interface Props {
  updateList: (item: string) => void
}

function AddItem({ updateList }: Props) {
  const [currentInput, setCurrentInput] = useState('')

  const handleTextInput = (evt: ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(evt.target.value)
  }

  const addItemToShoppingList = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    updateList(currentInput)
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
