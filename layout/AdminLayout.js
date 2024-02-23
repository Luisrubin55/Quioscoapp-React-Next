import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({ children, pagina }) {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>{`Café - ${pagina}`}</title>
                <meta name="description" content="Quosco Cafetería" />
            </Head>

            <div className="md:flex">
                <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
                    <Image
                        width={300}
                        height={100}
                        src="/assets/img/logo.svg"
                        alt="imagen logotipo"
                    />

                    <div className="flex flex-col mt-10 ml-6">
                        <button
                            className="w-2/3 bg-orange-600 p-4 text-white font-bold hover:bg-orange-800 rounded-md"
                            onClick={() => {
                                router.push('/admin')
                            }}
                        >
                            Ordenes Pendientes
                        </button>
                        <button
                            className="w-2/3 bg-emerald-600 p-4 text-white font-bold hover:bg-emerald-800 rounded-md mt-8"
                            onClick={() => {
                                router.push('/completadas')
                            }}
                        >
                            Ordenes Completadas
                        </button>

                        <button
                            className="w-2/3 bg-sky-600 p-4 text-white font-bold hover:bg-sky-800 rounded-md mt-8"
                            onClick={() => {
                                router.push('/corte')
                            }}
                        >Resumen del dia</button>
                    </div>
                </aside>

                <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                    <div className="p-10">{children}</div>
                </main>
            </div>
            <ToastContainer />
        </>
    );
}
