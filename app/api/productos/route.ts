import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const producto = await prisma.producto.create({
      data: {
        nombre: data.nombre,
        precio: parseFloat(data.precio),
        stock: parseInt(data.stock),
        idCategoria: parseInt(data.idCategoria),
      },
    });
    return NextResponse.json(producto);
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear producto' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const productos = await prisma.producto.findMany();
    return NextResponse.json(productos);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener productos' }, { status: 500 });
  }
}
