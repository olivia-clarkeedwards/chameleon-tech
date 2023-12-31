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
    <div>
      <form
        onSubmit={addItemToShoppingList}
        className="absolute bottom-0 m-[18px]"
      >
        <input
          title="list-item"
          type="text"
          name="item"
          value={currentInput}
          onChange={handleTextInput}
          className="h-[37px] w-[213px] rounded-lg p-2"
        />
        <button
          type="submit"
          className="ml-[10px] bg-white h-[37px] w-[37px] rounded-lg"
        >
          GO
        </button>
      </form>
    </div>
  )
}

export default AddItem
