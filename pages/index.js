import Layout from "../layout/Layout";
import Producto from "@/components/Producto";
import useQuiosco from "@/hooks/useQuiosco";


export default function Home() {

  const { categoriaActual } = useQuiosco()

  return (
    <Layout pagina={`Menu ${categoriaActual?.nombre}`}>
      <h1 className="text-4xl font-black ">{categoriaActual?.nombre}</h1>
      <p className="text-2xl my-5">
        Elige y personliza tu pedido a continución
      </p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
        {categoriaActual?.productos?.map(producto => (
          <Producto
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>


    </Layout>
  );
}
