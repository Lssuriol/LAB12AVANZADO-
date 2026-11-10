'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NuevoProductoPage() {
  const router = useRouter();
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [idCategoria, setIdCategoria] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/productos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, precio, stock, idCategoria }),
    });
    router.push('/almacen/producto');
    router.refresh();
  };

  return (
    <div style={{ maxWidth: '600px' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        Nuevo Producto
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
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
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="ID Categoría"
            value={idCategoria}
            onChange={(e) => setIdCategoria(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-success">
          Guardar
        </button>
      </form>
    </div>
  );
}
