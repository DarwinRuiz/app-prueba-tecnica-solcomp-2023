// eslint-disable-next-line @typescript-eslint/ban-types
export const currencyFormat = (num: Number): string => {

    return num.toLocaleString('es-GT', {
        style: 'currency',
        currency: 'GTQ',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}