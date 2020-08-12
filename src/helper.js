/**
 * función que calcula diferencia de años
 * @param {number} year año del vehiculo
 * @return {number} diferencia de años
 */
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

/**
 * calcula precio según la marca
 * @param {number} marca
 * @return {number} incremento en precio
 */
export function calcularMarca(marca) {
    let incremento;
    switch (marca) {
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento;
}

/**
 *  Calcula la base para calcular precio según el plan
 * @param {number} plan tipo de plan
 * @return {number} base para calular plan
 */
export const obtenerPlan = (plan) => {
    return (plan === 'basico' ? 1.20 : 1.50)
}
/**
 *
 * @param {string} texto Texto deseado con inicial mayuscula
 */
export const inicialMayuscula = (texto) => {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}