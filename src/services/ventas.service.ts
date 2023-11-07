export const cargarArchivo = async (archivo: File) => {
    const formdata = new FormData();
    formdata.append("file", archivo);


    const respuesta = await fetch("http://localhost:3000/api/ventas/carga-archivo", {
        body: formdata,
        method: 'POST',
    })
    return await respuesta.json();
}


export const obtenerTotalVentas = async (): Promise<number> => {
    const respuesta = await fetch("http://localhost:3000/api/ventas/obtenerTotalVentas")
    const objetoRespuesta = await respuesta.json();
    return objetoRespuesta.data[0].total_ventas || 0
}

export const obtenerTotalUnidadesVendidas = async (): Promise<number> => {
    const respuesta = await fetch("http://localhost:3000/api/ventas/obtenerTotalUnidadesVendidas")
    const objetoRespuesta = await respuesta.json();
    return objetoRespuesta.data[0].total_unidades || 0
}