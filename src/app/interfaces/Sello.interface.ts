//Interface que utilizamos para consumir la data del servidor y compatibilizarla con el modelo.
//(Apoya a los servicios de integracion)

export interface Sello {

    color_sello: string
    color_code: string
    patente: string
    estado: string
    fecha_expiracion: Date
    gerencia: string
    empresa: string
    fecha_lectura: Date
    data: string
    tag: string
    contractowner: string

}
