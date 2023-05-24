import React, { useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CounterOperation from './pages/CounterOperation'
import AddTodo from './pages/AddTodo'
import ToDoList from './pages/ToDoList'
import ProductList from './pages/ProductList'
import Favorites from './pages/Favorites'
import { useDispatch } from 'react-redux'
import { supplierActions } from './store/actions/supplierAction'
import Suppliers from './pages/Suppliers'
import CounterReduxToolKit from './pages/CounterReduxToolKit'
import TodoListToolKit from './pages/TodoListToolKit'
import AddTodoToolkit from './pages/AddTodoToolkit'

function App() {

  let dispatch = useDispatch()

  useEffect(() => {
    
      dispatch(supplierActions.load())
  
  }, [])
  



  return (  <>

  <div>
    <ul style={{display:'flex', justifyContent:'space-between'}}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/counter'>Couter</Link></li>
      <li><Link to='/addtodo'>Add Todo</Link></li>
      <li><Link to='/todos'>Todos</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/favorites'>Favorites</Link></li>
      <li><Link to='/suppliers'>Suppliers</Link></li>
      <li><Link to='/counterreduxtoolkit'>Redux ToolKit</Link></li>
      <li><Link to='/todolistoolkit'>todolisttoolkit</Link></li>
      <li><Link to='/addtodotoolkit'>addtodo toolkit</Link></li>

    </ul>
  </div>
  <Routes>
    <Route path='/products' element={<ProductList/>}></Route>
    <Route path='/favorites' element={<Favorites/>}></Route>

     <Route path='/' element={<Home/>}></Route>
    <Route path='/counter' element={<CounterOperation/>}></Route>
    <Route path='/addtodo' element={<AddTodo/>}></Route>
    <Route path='/todos' element={<ToDoList/>}></Route>
    <Route path='/suppliers' element={<Suppliers/>}></Route> 
    <Route path='/counterreduxtoolkit' element={<CounterReduxToolKit/>}></Route> 
    <Route path='/todolistoolkit' element={<TodoListToolKit/>}></Route> 
    <Route path='/addtodotoolkit' element={<AddTodoToolkit/>}></Route> 


  </Routes>
  </>
  )
}

export default App