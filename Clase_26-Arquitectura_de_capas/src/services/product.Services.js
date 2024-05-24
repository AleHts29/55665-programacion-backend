const { recuperarDatos, guardarDato, deleById } = - require("../models/productData.js")


const obtenerDatos = async () => {
    // logica
    return await recuperarDatos();
}

const crearDato = async (dato) => {
    // logica de negocio
    // Validar si el producto ya existe

    dato.id = Math.random();
    await guardarDato(dato);
    return dato;
}

const deleteServices = async (id) => {
    // logica
    return await deleById(id);
}

module.exports = {
    obtenerDatos,
    crearDato,
    deleteServices
}