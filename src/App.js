import "./App.css";
import Items from "./pages/Items";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Item from "./pages/Item";
import Header from "./components/Header";
import ManageItems from "./pages/admin/ManageItems";
import CreateItem from "./pages/admin/CreateItem";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Items} />

          <Route path="/post/:id" component={Item} />

          <Route path="/admin" component={ManageItems} />
          <Route path="/create" component={CreateItem} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
