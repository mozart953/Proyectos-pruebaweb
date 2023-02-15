export interface Usuario{
    ID: number,
    Nombre: string,
    Apellidos: string,
    Nick: string,
    Email: string,
    contrasena: string
    Tipo: userType
}

export enum userType{
    Administrador,
    cliente,
    tecnico
}