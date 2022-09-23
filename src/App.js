import React from 'react'
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';
import {connect} from 'react-redux';

function App({selectedToDo}) {
  return (
    <div className="container">
      <div className="content">
      <header>
        <h1>To Do List</h1>
      </header>
      <main>
        <Form
        key={selectedToDo}
        actionsForEdit={selectedToDo}/><List/>
      </main>
      </div>
    </div>
  );
}


const mapStateToProps = ({selectedToDo}) =>{
  return {
    selectedToDo}
}

export default connect(mapStateToProps) (App);
