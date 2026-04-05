import { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net-bs5';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

interface TableProps {
  url: string;
  columnas: { data: string; title: string; render?: any }[];
}

const TablaArticulos: React.FC<TableProps> = ({ url, columnas }) => {
  useEffect(() => {
    const table = $('#tablaArticulos').DataTable({
      ajax: {
        url: url,
        dataSrc: 'data',
      },
      columns: columnas,
      destroy: true, // Para evitar errores al recargar
    });

    return () => {
      table.destroy(); // Limpieza
    };
  }, [url, columnas]);

  return (
    <>
    <br/>
    <div className="container mt-4">
      <table id="tablaArticulos" className="table table-striped table-bordered"  style={{ width: '100%' }}>
        <thead>
          <tr>
            {columnas.map((col, index) => (
              <th key={index}>{col.title}</th>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
    <br/>
    </>
    
  );
};

export default TablaArticulos;