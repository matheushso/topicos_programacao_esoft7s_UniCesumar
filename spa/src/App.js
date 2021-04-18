import logo from './logo.svg';
import './App.css';
// import SomarComponent from './components/somar-component';
// import HelloComponent from './components/hello-component';
// import ContadorBásico from './components/contador-básico';
// import ArCondicionado from './components/ar-condicionado';
import CorEdit from './components/cor/cor-edit';
import CorList from './components/cor/cor-list';
import LandingPage from './components/landing/landing-page';
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LivroList from './components/livro/livro-list';

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>
          <Route exact path="/cores">
            <CorList></CorList>
          </Route>
          <Route exact path="/livros">
            <LivroList></LivroList>
          </Route>
          <Route path="/cores/editar/:idParaEditar">
            <CorEdit></CorEdit>
          </Route>
          <Route path="/cores/nova">
            <CorEdit></CorEdit>
          </Route>
        </Switch>
      </Router>

        {/* <CorList></CorList>

        <CorEdit></CorEdit> */}


        {/* <ArCondicionado></ArCondicionado> */}
        {/* <ContadorBásico></ContadorBásico> */}
        {/* <SomarComponent v1={1000} v2={200}></SomarComponent>
        <HelloComponent></HelloComponent> */}
    </div>
  );
}

export default App;
