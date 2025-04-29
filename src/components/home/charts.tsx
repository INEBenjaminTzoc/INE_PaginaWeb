"use client";

import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis } from 'recharts';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../components/ui/carousel';
import { ChartContainer, type ChartConfig } from '../../components/ui/chart';

export default function ChartsCarousel() {
  const censosEncuestas = [
    {
      id: "1",
      title: "Censo de Población 2018",
      description: "Distribución de la población por grupos de edad",
      type: "pie" as const,
      data: [
        { name: "0-14 años", value: 25.3 },
        { name: "15-29 años", value: 24.8 },
        { name: "30-44 años", value: 21.5 },
        { name: "45-59 años", value: 16.7 },
        { name: "60+ años", value: 11.7 },
      ],
    },
    {
      id: "2",
      title: "Encuesta Nacional de Empleo",
      description: "Tasa de desempleo por trimestre",
      type: "line" as const,
      data: [
        { name: "Q1", value: 5.8 },
        { name: "Q2", value: 45.5 },
        { name: "Q3", value: 5.3 },
        { name: "Q4", value: 15.1 },
        { name: "Q1", value: 13.2 },
        { name: "Q2", value: 5.0 },
        { name: "Q3", value: 34.8 },
        { name: "Q4", value: 4.7 },
      ],
    },
    {
      id: "3",
      title: "Encuesta de Ingresos y Gastos",
      description: "Distribución del gasto por categoría",
      type: "bar" as const,
      data: [
        { name: "Alimentos", value: 34.5 },
        { name: "Transporte", value: 15.3 },
        { name: "Educación", value: 8.7 },
        { name: "Salud", value: 7.2 },
        { name: "Vivienda", value: 22.8 },
      ],
    },
    {
      id: "4",
      title: "Canasta Básica",
      description: "Distribución del gasto por categoría",
      type: "pie" as const,
      data: [
        { name: "Alimentos", value: 34.5 },
        { name: "Vivienda", value: 22.8 },
        { name: "Transporte", value: 15.3 },
        { name: "Educación", value: 8.7 },
        { name: "Salud", value: 7.2 },
        { name: "Vestido", value: 5.8 },
        { name: "Otros", value: 5.7 },
      ],
    },
    {
      id: "5",
      title: "Tasa de Desempleo",
      description: "Distribución del gasto por categoría",
      type: "line" as const,
      data: [
        { name: "Alimentos", value: 34.5 },
        { name: "Vivienda", value: 22.8 },
        { name: "Transporte", value: 15.3 },
        { name: "Educación", value: 8.7 },
        { name: "Salud", value: 7.2 },
        { name: "Vestido", value: 5.8 },
        { name: "Otros", value: 5.7 },
      ],
    },
  ]

  return (
    <div className='px-12 sm:px-20 md:px-15 lg:px-10'>
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent>
          {censosEncuestas.map((chart) => (
            <CarouselItem key={chart.id} className="md:basis-1/2 lg:basis-1/3 fade-in-up">
              <div className="p-2 flex justify-center">
                <div className='w-100 aspect-square rounded-2xl border-1 bg-[#FFF] border-[#CACACA] p-6'>
                  <div className="w-full text-center">
                    <h2 className='font-semibold leading-none tracking-tight'>{chart.title}</h2>
                    <p className='text-sm text-muted-foreground'>Enero - Junio 2024</p>
                  </div>
                  <ChartCard key={chart.id} type={chart.type} data={chart.data} />
                  <div className="flex flex-col items-start gap-2 text-sm mt-6">
                    <div className="flex gap-2 font-medium leading-none">
                      Trending up by 5.2% this month 
                    </div>
                    <div className="leading-none text-muted-foreground">
                      Showing total visitors for the last 6 months
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  )
}

interface ChartComponentProps {
  type: "bar" | "line" | "pie"
  data: any[]
}

function ChartCard({ type, data }: ChartComponentProps) {
  const hasMultipleSeries = data.length > 0 && Object.keys(data[0]).some((key) => key !== "name" && key !== "value")
  const seriesKeys = hasMultipleSeries ? Object.keys(data[0]).filter((key) => key !== "name") : ["value"]
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82ca9d"]

  const generateChartConfig = (data: any[]) => {
    return data.reduce((config, item, index) => {
      const color = COLORS[index % COLORS.length];
      item.fill = color;
      config[item.name] = {
        label: item.name,
        color: color,
      };
      return config;
    }, {} as ChartConfig);
  };

  const dynamicChartConfig = generateChartConfig(data);

  switch (type) {
    case 'bar':
      return (
        <ChartContainer config={dynamicChartConfig}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" strokeWidth={3} strokeOpacity={1} />
            <XAxis dataKey="name" tickLine={false} tickFormatter={(value) => dynamicChartConfig[value as keyof typeof dynamicChartConfig]?.label } />
            <Tooltip />
            <Legend />
            {hasMultipleSeries ? (
              seriesKeys.map((key, index) => 
                <Bar key={key} dataKey={key} fill={COLORS[index % COLORS.length]} strokeWidth={2} radius={4} />
              )
            ) : (
              <Bar dataKey="value" fill="#0088FE" strokeWidth={2} radius={4} />
            )}
          </BarChart>
        </ChartContainer>
      )

    case 'line':
      return (
        <ChartContainer config={dynamicChartConfig}>
          <LineChart data={data}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" strokeWidth={3} strokeOpacity={1} />
            <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
            <Tooltip />
            <Legend />
            <Line type="natural" dataKey="value" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
          </LineChart>
        </ChartContainer>
      )

    case 'pie':
      return (
        <ChartContainer config={dynamicChartConfig}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={40}
              strokeWidth={5}>

            </Pie>
          </PieChart>
        </ChartContainer>
      )
  }
}