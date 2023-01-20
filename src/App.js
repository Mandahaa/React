import React from "react"
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import "./App.css"

// import Page from './components/router-playground/page'
// import PageSharedLayout from './components/router-playground/layout'
// import Page1 from './components/router-playground/page1'
// import Page2 from './components/router-playground/page2'
// import Page3 from './components/router-playground/page3'
// import UseMemoPlayground from './components/usememo-playground'
// import UseRefPlayground from './components/useRef-playground'
// import UseRefUnmount from './components/useRef-playground/unmount-err'
// import TicTacToe from './components/tic-tac-toe-class-collaboration'
// import CarList from './components/router-playground/cars'
// import CarDetails from './components/router-playground/cars/details'
// import ApiCallPlayground from './components/api-call-playground'
// import MovieDetails from './components/movie-details'
// import UseReducerPlayground from './components/useReducer-playground'
import Counter from "./components/counter"
import Fireworks from "./components/fireworks"
import StatusPicker from "./components/status-picker"
import LanguageSelecter from "./components/language-picker"
import FetchJoke from "./components/fetch-joke"
import UseEffectPlayground from "./components/useEffect-playground"
import HTMLTablePlayground from "./components/table-playground"
import EmployeeTable from "./components/table"
import Tree from "./components/tree-component/App"
import Parent from "./components/small-theme-app/parent"
import NaviBar from "./components/naviBar"
import ShoppingList from "./components/shopping-list"
import ToDoList from "./components/to-do-list"
import TodoListWithUseReducer from "./components/useReducer"
import Kahoot from "./components/kahoot"
import Translate from "./components/translator"

// import Homework from './homework'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NaviBar />}>
            <Route path="counter" element={<Counter />} />
            <Route path="fireworks" element={<Fireworks />} />
            <Route path="status-picker" element={<StatusPicker />} />
            <Route path="language-picker" element={<LanguageSelecter />} />
            <Route path="random-joke" element={<FetchJoke />} />
            <Route
              path="useeffect-playground"
              element={<UseEffectPlayground />}
            />
            <Route path="table-playground" element={<HTMLTablePlayground />} />
            <Route path="table" element={<EmployeeTable />} />
            <Route path="tree" element={<Tree />} />
            <Route path="theme" element={<Parent />} />
            <Route path="shopping-list" element={<ShoppingList />} />
            <Route path="todolist" element={<ToDoList />} />
            <Route path="use-reducer" element={<TodoListWithUseReducer />} />
            <Route path="kahoot" element={<Kahoot />} />
            <Route path="translate" element={<Translate />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
  )
}

export default App
