import { useLocation } from 'react-router-dom';
import TablaArticulos from '../Components/Article/TablaArticulos';
import { Header } from '../Components/Header/Header';



const Resultados = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('term') || '';

  const columnas = [
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
    { data: 'tienda', title: 'Tienda' }
  ];

  return (
    <>
    <Header/>
    <br/>
    <div className="container mt-4">
      <h2>Resultados para: {searchTerm}</h2>
      <TablaArticulos url={`http://localhost:5001/search?term=${encodeURIComponent(searchTerm)}`} columnas={columnas} />
    </div>
    <br/>
    
    </>
  );
};

export default Resultados;