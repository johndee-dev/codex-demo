import { useState } from 'react'
import './App.css'

const initialTasks = [
  { id: 1, text: 'Spin up a project with Codex', done: true },
  { id: 2, text: 'Push the code to GitHub', done: false },
  { id: 3, text: 'Deploy on Hostinger', done: false },
]

export default function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [input, setInput] = useState('')

  function addTask() {
    const text = input.trim()
    if (!text) return
    setTasks([...tasks, { id: Date.now(), text, done: false }])
    setInput('')
  }

  function toggle(id) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  function remove(id) {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  const openCount = tasks.filter((t) => !t.done).length
  const doneCount = tasks.filter((t) => t.done).length

  return (
    <main className="app">
      <header className="header">
        <p className="eyebrow">Codex demo</p>
        <h1 className="title">Things to ship today.</h1>
        <p className="subtitle">
          A small task list, built with Vite and React, deployed on Hostinger.
        </p>
      </header>

      <section className="composer">
        <input
          type="text"
          className="composer-input"
          placeholder="Add a task and press Enter"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          aria-label="New task"
        />
        <button className="composer-button" onClick={addTask}>
          Add
        </button>
      </section>

      <ul className="tasks">
        {tasks.map((task) => (
          <li key={task.id} className={`task ${task.done ? 'task-done' : ''}`}>
            <label className="task-label">
              <input
                type="checkbox"
                className="task-checkbox"
                checked={task.done}
                onChange={() => toggle(task.id)}
              />
              <span className="task-text">{task.text}</span>
            </label>
            <button
              className="task-remove"
              onClick={() => remove(task.id)}
              aria-label={`Remove task: ${task.text}`}
            >
              ×
            </button>
          </li>
        ))}
        {tasks.length === 0 && (
          <li className="empty">No tasks yet. Add one above.</li>
        )}
      </ul>

      <footer className="footer">
        <span>{openCount} open</span>
        <span className="dot">·</span>
        <span>{doneCount} done</span>
      </footer>
    </main>
  )
}
