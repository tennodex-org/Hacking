import React from 'react';
import './scss/App.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Header } from './components/header/Header';
import { SideBar } from './components/sidebar/SideBar';

import { HomePresenter } from './pages/home/HomePresenter';
import { CorpusPresenter } from './pages/corpus/CorpusPresenter';
import { GrineerPresenter } from './pages/grineer/GrineerPresenter';
import { NotFoundPresenter } from './pages/error/NotFoundPresenter';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    }
  }

  setOpen = () => {
    this.setState((prevState) => {
      return {
        open: !prevState.open
      }
    })
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <div className="page-container">
            <Switch>
              <Route exact={true} path='/' component={HomePresenter} />
              <Route path='/home' component={HomePresenter} />
              <Route path='/corpus' component={CorpusPresenter} />
              <Route path='/grineer' component={GrineerPresenter} />
              <Route component={NotFoundPresenter} />
            </Switch>
          </div>
          <SideBar
            open={this.state.open}
            onItemClick={this.setOpen}
          />
          <Header
            hamburgerOpen={this.state.open}
            hamburgerClick={this.setOpen}
          />
        </BrowserRouter>
      </>
    );
  }
}
