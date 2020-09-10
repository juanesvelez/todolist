import React, {useState} from 'react';
import shortid from 'shortid'

function App() {

  const [tarea, setTarea] = useState('')
  const [tareas, setTareas] = useState([])

  const agregarTarea = (e) =>{
    e.preventDefault()
    
    if (!tarea.trim()) {
      console.log('Elemento Vacio')
      return
    }
    console.log(tarea)

    setTareas([
      ...tareas,
      {
         id: shortid.generate(), nombreTarea: tarea    
      }
  ])
    setTarea('')
  }

  const eliminarTarea = id =>{
     console.log(id)
  }

  return (
    <div className="container mt-5">
     <h1 className="text-center">TO-DO LIST</h1>
     <hr/>
  <div className="row">

    <div className="col-8">
      <h4 className="text-center">Lista de Tareas</h4>
      <ul className="list-group">
        {
              tareas.map( (item) =>
                <li className="list-group-item" key={item.id} >
                  <span className="lead">{item.nombreTarea}</span>
                  <button 
                    className="btn btn-sm btn-danger float-right mx-2"
                    onClick={()=> eliminarTarea(item.id)}>
                  Eliminar
                  </button>
                  <button
                    className="btn btn-sm btn-warning float-right"
                    >
                    Editar
                  </button>
                 </li>
        
              )
        }

      </ul>
    </div>

    <div className="col-4">
      <h4 className="text-center">
        Agregar Tarea
      </h4>
      <form onSubmit={agregarTarea}>
        <input 
          type="text" 
          className="form-control mb-2"
          placeholder="Ingrese Tarea"
          onChange={e => setTarea(e.target.value)}
          value={tarea}
        />
        <button className="btn btn-dark btn-block" type="submit">Agregar</button>
      </form>
    </div>

  </div>
    </div>
  );
}

export default App;
