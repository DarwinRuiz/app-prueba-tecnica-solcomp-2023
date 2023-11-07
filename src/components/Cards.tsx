interface Props {
    totalVentas: string;
    totalUnidadesVendidas: string;
}

export const Cards = ({ totalVentas, totalUnidadesVendidas }: Props) => {

    return (
        <div className="row gap-3">
            <div className="card text-white bg-primary mb-3 w-25">
                <div className="card-header">Total de Ventas</div>
                <div className="card-body d-flex justify-content-center">
                    <h5 className="card-title">{totalVentas}</h5>
                </div>
            </div >
            <div className="card text-black bg-warning mb-3 w-25">
                <div className="card-header">Total de Unidades Vendidas</div>
                <div className="card-body d-flex justify-content-center">
                    <h5 className="card-title">{totalUnidadesVendidas}</h5>
                </div>
            </div >

        </div>
    )
}
