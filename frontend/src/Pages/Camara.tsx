import React from 'react'
import { Header } from '../Components/Header/Header'
import TablaArticulos from '../Components/Article/TablaArticulos'


export const Camara = () => {
  return (
    <>
    <Header/>
    <br/>
    <center>
      <strong>
      <h2>Camaras</h2>
      </strong>
      <br/>
    </center>
    <div className="container">
    <TablaArticulos
          url="http://localhost:5001/cam"
          columnas={[
            { 
            data: 'id', 
            title: 'ID',
            render: (data, type, row, meta) => {
              return meta.row + 1;
            }
          },
            { 
            data: 'nombre', 
            title: 'Nombre',
            render: (data, type, row) => {
              if (type === 'display' && row.url_producto) {
                return '<a href="' + row.url_producto + '" target="_blank" rel="noopener noreferrer" style="color: #0d6efd; text-decoration: none; font-weight: 500;">' + data + '</a>';
              }
              return data;
            }
          },
            { data: 'precio', title: 'Precio' },
            { data: 'tienda', title: 'Tienda' },
          ]}
        />
    </div>
    <br/>
    </>
  )
}
