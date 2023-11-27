import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage/MainPage"
import SubscriptionPage from "./pages/SubscriptionPage/SubscriptionPage"

function App() {

  return (
    <>
    <Routes>
      <Route path="/fitnessHouse" element={<MainPage/>}/>
      <Route path="/fitnessHouse/subscription" element={<SubscriptionPage/>}/>
    </Routes>
    </>
  )
}

export default App
