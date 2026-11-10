'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function EditarProductoPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [idCategoria, setIdCategoria] = useState('');

  useEffect(() => {
    if (id) {
      fetch('/api/productos')
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            const prod = data.find((p: any) => p.idProducto === parseInt(id as string));
            if (prod) {
              setNombre(prod.nombre);
              setPrecio(prod.precio.toString());
              setStock(prod.stock.toString());
              setIdCategoria(prod.idCategoria.toString());
            }
          }
        });
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`/api/productos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, precio, stock, idCategoria }),
    });
    router.push('/almacen/producto');
    router.refresh();
  };

  return (
    <div style={{ maxWidth: '600px' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        Editar Producto
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            step="0.01"
            className="form-control"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            value={idCategoria}
            onChange={(e) => setIdCategoria(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-success">
          Actualizar
        </button>
      </form>
    </div>
  );
}
