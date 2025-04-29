import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'
import { PUBLIC_STRAPI_URL } from '@/lib/config'

export default function DynamicLogo({iconUrl, nombreInstitucion}) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="flex w-full lg:w-auto items-center justify-between">
          <div className="h-15 aspect-square">
            <picture>
              <img src={`${PUBLIC_STRAPI_URL}${iconUrl}`} alt="INE" width={100} height={100} loading='lazy' />
            </picture>
          </div>
          <h2 className="lg:max-w-72 px-3 text-[#004F9E]! font-semibold text-xl text-center lg:text-left hidden sm:block">
              {nombreInstitucion}
          </h2>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className='w-80 mt-5 z-1001'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio eaque ex ad possimus, vero ipsa quibusdam obcaecati reprehenderit, officia est voluptatum inventore, alias exercitationem nobis omnis debitis ducimus ipsum similique.
      </HoverCardContent>
    </HoverCard>
  )
}
