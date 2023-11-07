import { useState, useEffect } from "react";
import { Cards } from "./components/Cards"
import { CargaArchivo } from "./components/CargaArchivo"
import { currencyFormat } from "./helpers/currencyNumberFormat";
import { obtenerTotalVentas, obtenerTotalUnidadesVendidas } from "./services/ventas.service";


export const App = () => {
    const [isLoadingDataFile, setIsLoadingDataFile] = useState<boolean>(false);
    const [totalVentas, setTotalVentas] = useState<string>('');
    const [totalUnidadesVendidas, setTotalUnidadesVendidas] = useState<string>('');

    useEffect(() => {
        actualizarDatos();
    }, [])


    const actualizarDatos = () => {
        obtenerTotalVentas().then((totalVentas: number) => {
            setTotalVentas(currencyFormat(new Number(totalVentas)));
        })

        obtenerTotalUnidadesVendidas().then((totalUnidadesVendidas: number) => {
            setTotalUnidadesVendidas(totalUnidadesVendidas.toLocaleString('es-GT'));
        })
    }

    return (
        <div className="container">
            <div className="row mt-4">
                <CargaArchivo actualizarDatos={actualizarDatos} setIsLoadingDataFile={setIsLoadingDataFile} />
            </div>

            {
                !isLoadingDataFile ?
                    (<div className="row mt-4">
                        <Cards totalVentas={totalVentas} totalUnidadesVendidas={totalUnidadesVendidas} />
                    </div>)
                    : null
            }
        </div>
    )
}
