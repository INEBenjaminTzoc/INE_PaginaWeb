import type { ICardIndicador } from '@/interfaces/homePage.interface'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import CountUpText from '../ui/count-up';
import * as Icons from 'lucide-react';

export default function Indicadores({ indicators }: { indicators: ICardIndicador[] }) {
  return (
    <Carousel className='w-full' opts={{loop: true, align: 'start'}}>
      <CarouselContent>
        {
          indicators.map((item, index) => {
            const LucideIcon = Icons[item.icon] || Icons.HelpCircle;
            const length = indicators.length;

            return (
              <CarouselItem key={index} className={`${length >= 2 ? 'md:basis-1/2' : 'md:basis-1/' + length} ${length >= 4 ? 'lg:basis-1/4' : 'lg:basis-1/' + length}`}>
                <div className="w-full h-50 border-1 bg-[#FFF] border-[#CACACA] rounded-2xl px-4 py-5 shadow-sm fade-in-up">
                  <div className="h-full w-full flex flex-col justify-between">
                    <div>
                      <div className="w-full flex flex-row justify-between items-center text-[#004F9E]!">
                        <p className="font-bold">{item.title}</p>
                        <div className="bg-[#EFF6FF] p-1 rounded-lg aspect-square">
                          <LucideIcon className="w-5" />
                        </div>
                      </div>
                      <div className="w-full flex flex-col text-[#004F9E]! mt-3">
                        <CountUpText value={item.value} title={item.title} suffix={item.suffix} prefix={item.prefix} />
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                    <div className="w-full text-center text-[#004F9E]!">
                      <p className="text-muted-foreground text-sm">{item.footer}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            )
          })
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
