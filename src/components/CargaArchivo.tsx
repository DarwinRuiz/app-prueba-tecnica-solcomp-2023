import { useState } from "react";

import '../styles/carga-archivo.css'
import { cargarArchivo } from "../services/ventas.service";

interface Props {
    actualizarDatos: () => void;
    setIsLoadingDataFile: (isComplete: boolean) => void;
}

export const CargaArchivo = ({ actualizarDatos, setIsLoadingDataFile }: Props) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (e: any) => {
        const selectedFile = e.target.files[0];
        setIsLoading(true);
        setIsLoadingDataFile(true);
        cargarArchivo(selectedFile).then((respuesta: any) => {
            setIsLoading(false);
            console.log(respuesta);
            actualizarDatos();
            setIsLoadingDataFile(false);
        }).catch((err) => {
            console.error(err);
            setIsLoading(false);
            setIsLoadingDataFile(false);
        })
    };

    return (
        <>
            {isLoading ? (
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <div className="loading-text">Cargando...</div>
                </div>
            ) : <label className="upload-area">
                <div className="upload-icon">&#8679;</div>
                <div className="upload-text">Arrastra y suelta un archivo o haz clic para seleccionar uno</div>
                <input
                    type="file"
                    className="file-input"
                    accept=".xlsx"
                    onChange={handleFileChange}
                />
            </label>}
        </>
    )
}
