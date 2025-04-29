import type IHeader from "@/interfaces/header.interface";

export const defaultHeaderData: IHeader = {
  Logotipo: {
    nombre_institucion: "Instituto Nacional de Estadística de Guatemala",
    icono_institucion: {
      mime: "image/webp",
      url: "/default/INE.webp"
    }
  },
  Menu: []
}