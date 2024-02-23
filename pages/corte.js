import {useState, useEffect } from 'react';
import axios from 'axios'
import AdminLayout from "@/layout/AdminLayout";
import { formatearDinero } from '@/helpers';

const Corte = () => {

    const [ventas, setVentas] = useState([])


    useEffect(() => {
        const consultarVentas = async () => {
            const url = '/api/completadas'
            try {
                const { data } = await axios(url)
                setVentas(data)
            } catch (error) {
                console.error(error);
            }
        }
        consultarVentas()
    }, [])


    const calcularVentasTotales = () => {
        const nuevoTotal = ventas.reduce((total, producto) => producto.total + total, 0)
        return nuevoTotal
    }
    
    const productoVendidos = () => {
        const array = []
        ventas.map(producto => {
            array.push(producto.pedido[0].cantidad)
        });
        const total = array.reduce((total, item) => item + total, 0)
        return total
    }
    productoVendidos()
    return (
        <AdminLayout
            pagina={'Resumen del dia'}
        >
            <h1 className="text-4xl font-black">Panel de Adminstración</h1>
            <p className="text-2xl my-10">Ventas del dia </p>

            <div>
                <p
                    className="text-3xl p-2 font-semibold"
                >Total de ordenes: <span className="font-bold text-amber-600">{ventas.length}</span> </p>
                <p
                    className="text-3xl p-2 font-semibold"
                >Productos vendidos: <span className="font-bold text-amber-600">{productoVendidos()}</span> </p>
                <p
                    className="text-3xl p-2 font-semibold"
                >Ventas totales: <span className="font-bold text-amber-600">{formatearDinero(calcularVentasTotales())}</span> </p>
            </div>
            

        </AdminLayout>
    );
};

export default Corte;
