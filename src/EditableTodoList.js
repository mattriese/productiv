import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({todos, update, remove}) {

  const eTodoList = todos.map(t => <EditableTodo key={t.id} todo={t} update={update} remove={remove}/>);
  return (
      <div>
        {eTodoList}
      </div>
  );
}

export default EditableTodoList;
