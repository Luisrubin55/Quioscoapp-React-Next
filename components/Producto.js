import Image from 'next/image'
import { formatearDinero } from '@/helpers'
import useQuiosco from '@/hooks/useQuiosco'

const Producto = ({producto}) => {

    const { handleSetProducto, handleChangeModal,  } = useQuiosco()

    const { imagen, precio, nombre } = producto


    return (
        <div className='border p-1'>
            <Image 
                src={`/assets/img/${imagen}.jpg`}
                width={200}
                height={300}
                alt={`Imagen platillo ${nombre}`}
                
            />
            <div className='p-5'>
                <h3 className='text-xl font-bold '> {nombre} </h3>
                <p className='mt-5 font-black lg:text-4xl md:text-xl text-3xl text-amber-500 mb-0'>{formatearDinero(precio)}</p>
                <button
                    type='button'
                    className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-3 p-2 uppercase font-bold'
                    onClick={ () => {
                        handleSetProducto(producto)
                        handleChangeModal()
                    }}
                >
                    Agregar
                </button>
            </div>
        </div>
    )
}

export default Producto
