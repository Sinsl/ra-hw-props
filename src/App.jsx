import './App.css'
import Task from './tasks/Task'
import { Stars } from './stars/Stars'
import { Listing } from './Listing/Listing'
import etsy from './Listing/etsy.json'
import { Chat } from './Chat/Chat'



function App() {
  return (
    <div className='main'>
      <header className='title'>
        <h1>Домашнее задание к теме &quot;Props&quot;</h1>
      </header>
      <Task title={"Задача 1"} component={<Stars count={4} />}/>
      <Task title={"Задача 2"} component={<Listing  items={etsy}/>}/>
      <Task title={"Задача 3"} component={<Chat />}/>
    </div>
  )
}

export default App
