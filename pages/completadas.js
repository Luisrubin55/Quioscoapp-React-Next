import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from "@/layout/AdminLayout"
import OrdenCompletada from "@/components/OrdenCompletada"

const pendientes = () => {

    const fetcher = () => axios('/api/completadas').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/completadas', fetcher)

    return (
        <AdminLayout
            pagina={'Ordenes Completadas'}
        >
            <h1 className="text-4xl font-black">Panel de Adminstración</h1>
            <p className="text-2xl my-10">Consulta las ordenes completadas</p>

            {data && data.length ? data.map( completa => (
                <OrdenCompletada 
                    key={completa.id}
                    completa={completa}
                />
            )):(
                <p>No hay ordenes completadas</p>
            )}

        </AdminLayout>
    )
}

export default pendientes
