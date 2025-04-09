import type { IImage } from "./global.interface";

export default interface IHeader {
  id: number;
  documentId: string;
  Logotipo: ILogotipo;
  Menu: IMenu[];
}

interface IMenu {
  __component: string;
  id: number;
  title: string;
  path?: string;
  children?: IMenuItem[];
  badge?: string;
}

interface IMenuItem {
  id: number;
  title: string;
  path?: string;
  children?: IMenuItem[];
}

interface ILogotipo {
  id: number;
  nombre_institucion: string;
  url_opcional?: string;
  icono_institucion: IImage;
}