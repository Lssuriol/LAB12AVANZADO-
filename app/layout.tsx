'use client';

import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="es">
      <body>
        <nav className="navbar">
          <Link 
            href="/" 
            className={pathname === '/' ? 'active-link' : ''}
          >
            Inicio
          </Link>
          <Link 
            href="/ventas/venta" 
            className={pathname.startsWith('/ventas') ? 'active-link' : ''}
          >
            Ventas
          </Link>
          <Link 
            href="/almacen/producto" 
            className={pathname.startsWith('/almacen') || pathname.startsWith('/productos') ? 'active-link' : ''}
          >
            Almacén
          </Link>
        </nav>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}