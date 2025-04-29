import type { IImage } from "./global.interface";

export default interface IHomePage {
  id?: number;
  documentId?: string;
  Carousel: IImage[];
  CardsIndicadores: ICardIndicador[];
  TituloGraficasSection: string;
  DescripcionGraficasSection: string;
}

export interface ICardIndicador {
  id: number;
  title: string;
  prefix?: string;
  value: number;
  suffix?: string;
  description: string;
  footer?: string;
  icon: string;
}