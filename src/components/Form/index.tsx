import React from "react";
import Button from "../Button";
import "./style.scss";

class Form extends React.Component {
  render() {
    return (
      <form className="novaTarefa">
        <div className="inputContainer">
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input type="text" name="tarefa" id="tarefa" placeholder="O que você vai estudar" required />
        </div>
        <div className="inputContainer">
          <label htmlFor="tempo">Adicione um novo estudo</label>
          <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" required />
        </div>
        <Button />
      </form>
    );
  }
}

export default Form;
