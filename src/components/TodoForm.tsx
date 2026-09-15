import { useState, type FormEvent } from 'react'

interface TodoFormProps {
  onAdd: (text: string) => void
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  const trimmed = text.trim()
  if (!trimmed) return
  onAdd(trimmed)
  setText('')
}

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Ny uppgift</label>
      <input
        id="new-todo"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Vad behöver göras?"
      />
      <button type="submit">Lägg till</button>
    </form>
  )
}
