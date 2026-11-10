'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Producto {
  idProducto: number;
  nombre: string;
  precio: number;
  stock: number;
  idCategoria: number;
}

export default function ListaProductosPage() {
  const [productos, setProductos] = useState<Producto[]>([]);

  const cargarProductos = async () => {
    try {
      const res = await fetch('/api/productos');
      const data = await res.json();
      if (Array.isArray(data)) {
        setProductos(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const eliminarProducto = async (id: number) => {
    if (confirm('¿Desea eliminar este producto?')) {
      await fetch(`/api/productos/${id}`, { method: 'DELETE' });
      cargarProductos();
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Lista de Productos
      </h1>
      <Link href="/productos/new" className="btn-primary" style={{ color: '#2563eb', textDecoration: 'none' }}>
        + Nuevo Producto
      </Link>

      <table className="table-custom">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((prod) => (
            <tr key={prod.idProducto}>
              <td>{prod.idProducto}</td>
              <td>{prod.nombre}</td>
              <td>S/ {prod.precio.toFixed(2)}</td>
              <td>{prod.stock}</td>
              <td>{prod.idCategoria}</td>
              <td>
                <Link href={`/productos/${prod.idProducto}/edit`} className="action-edit">
                  Editar
                </Link>
                <button
                  onClick={() => eliminarProducto(prod.idProducto)}
                  className="action-delete"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
