// TODO - to implements generateUserErrorInfo
export const generateUserErrorInfoSP = (user) => {
    return `Una o más propiedades fueron enviadas incompletas o no son válidas.
    Lista de propiedades requeridas:
        -> fist_name: type String, recibido: ${user.first_name}
        -> email: type String, recibido: ${user.email}
`;
}

export const generateUserErrorInfoENG = (user) => {
    return `One or more properties were sent incomplete or are not valid.
    List of required properties:
        -> first_name: type String, received: ${user.first_name}
        -> email: type String, received: ${user.email}
`;
}
