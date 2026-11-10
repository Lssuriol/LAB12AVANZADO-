import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const data = await req.json();
    const producto = await prisma.producto.update({
      where: { idProducto: parseInt(params.id) },
      data: {
        nombre: data.nombre,
        precio: parseFloat(data.precio),
        stock: parseInt(data.stock),
        idCategoria: parseInt(data.idCategoria),
      },
    });
    return NextResponse.json(producto);
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar producto' }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.producto.delete({
      where: { idProducto: parseInt(params.id) },
    });
    return NextResponse.json({ message: 'Producto eliminado' });
  } catch (error) {
    return NextResponse.json({ error: 'Error al eliminar producto' }, { status: 500 });
  }
}
