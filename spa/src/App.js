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
import LivroEdit from './components/livro/livro-edit';
import ProdutoList from './components/produto/produto-list';
import ProdutoEdit from './components/produto/produto-edit';

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
          <Route path="/cores/editar/:idParaEditar">
            <CorEdit></CorEdit>
          </Route>
          <Route path="/cores/nova">
            <CorEdit></CorEdit>
          </Route>
          <Route exact path="/livros">
            <LivroList></LivroList>
          </Route>
          <Route exact path="/livros/editar/:idParaEditar">
            <LivroEdit></LivroEdit>
          </Route>
          <Route exact path="/livros/novo">
            <LivroEdit></LivroEdit>
          </Route>
          <Route exact path="/produtos">
            <ProdutoList></ProdutoList>
          </Route>
          <Route exact path="/produtos/editar/:idParaEditar">
            <ProdutoEdit></ProdutoEdit>
          </Route>
          <Route exact path="/produtos/novo">
            <ProdutoEdit></ProdutoEdit>
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
