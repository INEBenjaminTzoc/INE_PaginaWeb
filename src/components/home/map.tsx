"use client";

import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import geoGT from '../../lib/geoGT.json';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Search } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { useState } from 'react';

export default function Map() {
  const [departamentoSelected, setDepartamentoSelected] = useState<string>('Guatemala');
  const [selectedDeptID, setSelectedDeptID] = useState<string | null>('GT01');

  return (
    <div className="bg-[#FFF] border-1 border-gray-300 p-6 rounded-2xl shadow-lg fade-in-up">
        <h2 className="text-4xl lg:text-3xl font-bold lg:tracking-tight">
          Estadísticas Territoriales
        </h2>
        <p className="text-base mt-2 mb-4 text-slate-600">
          Selecciona un departamento
        </p>
        <div className="grid md:grid-cols-7">
          <div className="md:col-span-full lg:col-span-4 w-full h-full">
            <div className='w-full h-[500px]'>
              <MapContainer center={[15.8349, -90.0069]} zoom={7.2} scrollWheelZoom={false} style={{height: 500}}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                  geoGT.features.map((dept, index) => {
                    const coordinates = dept.geometry.coordinates[0].map((item: [number, number]) => [item[1], item[0]] as [number, number]);
                    const deptID = dept.properties.id || `Departamento ${index + 1}`;
                    const isSelected = selectedDeptID === deptID;

                    return (
                    <Polygon
                      key={index}
                      pathOptions={{
                        fillColor: '#4a84c1',
                        fillOpacity: isSelected ? 1 : 0.8,
                        weight: 1,
                        opacity: 0.8,
                        dashArray: [0],
                        color: 'white',
                      }}
                      positions={coordinates}
                      eventHandlers={{
                        mouseover: (e) => {
                          if (!isSelected) {
                            e.target.setStyle({ fillOpacity: 1 })
                          }
                        },
                        mouseout: (e) => {
                          if (!isSelected) {
                            e.target.setStyle({ fillOpacity: 0.8 })
                          }
                        },
                        click: (e) => {
                          setDepartamentoSelected(dept.properties.name);
                          setSelectedDeptID(deptID);
                          e.target.setStyle({ fillOpacity: 1 })
                        }
                      }}
                    />)
                  })
                }
              </MapContainer>
            </div>
          </div>
          <div className="col-span-full lg:col-span-3 w-full h-full md:px-8">
            <h3 className='font-semibold text-lg text-center mt-2 lg:mt-0 lg:text-start'>Consulta los indicadores de tu área geográfica</h3>
            <div className='mt-4'>
              <label htmlFor="searchDept">Búsqueda por Departamento: </label>
              <div className='flex flex-row gap-2 mt-2'>
                <Input id='searchDept' type='search' placeholder='Ej: Guatemala' />
                <Button size="icon" variant="outline">
                  <Search />
                </Button>
              </div>
            </div>
            <div className='w-full mt-4'>
              <Tabs defaultValue='poblacion' className='w-full'>
                <TabsList className='w-full inline-table sm:inline-flex'>
                  <TabsTrigger value="poblacion" className='cursor-pointer'>Población</TabsTrigger>
                  <TabsTrigger value="densidad" className='cursor-pointer'>Densidad</TabsTrigger>
                  <TabsTrigger value="crecimiento" className='cursor-pointer'>Crecimiento</TabsTrigger>
                  <TabsTrigger value="pueblos" className='cursor-pointer'>Pueblos</TabsTrigger>
                </TabsList>
                <TabsContent value="poblacion">
                  <h2 className="font-semibold text-lg text-center text-[#004F9E]!">{departamentoSelected}</h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eum officia! 
                  Eligendi quisquam, repellendus temporibus hic excepturi saepe a nesciunt similique 
                  neque iusto ullam assumenda nobis voluptatibus, beatae ea sint!
                </TabsContent>
                <TabsContent value="densidad">
                  <h2 className="font-semibold text-lg text-center text-[#004F9E]!">{departamentoSelected}</h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fuga sit magni 
                  cum deserunt. Qui asperiores sequi, consequatur, quisquam quae ex distinctio officiis 
                  facilis consequuntur est harum accusamus eveniet. Maiores.
                </TabsContent>
                <TabsContent value="crecimiento">
                  <h2 className="font-semibold text-lg text-center text-[#004F9E]!">{departamentoSelected}</h2>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, vel sequi? Quos 
                  ratione eius nobis sapiente magni nesciunt quod aliquid voluptatibus praesentium voluptates, 
                  laborum ut deserunt, est atque et temporibus.
                </TabsContent>
                <TabsContent value="pueblos">
                  <h2 className="font-semibold text-lg text-center text-[#004F9E]!">{departamentoSelected}</h2>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos iste magnam 
                  saepe, minus commodi voluptatibus eos ad vel modi error fugit ratione architecto, 
                  dicta distinctio aut officia asperiores. Blanditiis, ratione.
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
    </div>
  )
}
