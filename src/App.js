import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CounterOperation from './pages/CounterOperation'
import AddTodo from './pages/AddTodo'
import ToDoList from './pages/ToDoList'
import ProductList from './pages/ProductList'
import Favorites from './pages/Favorites'

function App() {
  return (  <>

  <div>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/counter'>Couter</Link></li>
      <li><Link to='/addtodo'>Add Todo</Link></li>
      <li><Link to='/todos'>Todos</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/favorites'>Favorites</Link></li>
    </ul>
  </div>
  <Routes>
    <Route path='/products' element={<ProductList/>}></Route>
    <Route path='/favorites' element={<Favorites/>}></Route>

     <Route path='/' element={<Home/>}></Route>
    <Route path='/counter' element={<CounterOperation/>}></Route>
    <Route path='/addtodo' element={<AddTodo/>}></Route>
    <Route path='/todos' element={<ToDoList/>}></Route> 

  </Routes>
  </>
  )
}

export default App