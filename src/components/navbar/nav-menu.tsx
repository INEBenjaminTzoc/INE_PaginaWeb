import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import ListItem from '../ui/list-item';
import type { IMenu } from '@/interfaces/header.interface';

export default function NavMenu({ menuItems }: {menuItems: IMenu[]}) {
  return (
    <NavigationMenu className='hidden lg:flex'>
      <NavigationMenuList>
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.children && (
              <>
                <NavigationMenuTrigger 
                  className='cursor-pointer text-gray-600 font-normal hover:text-[#004F9E]! bg-transparent'>
                    {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                    {item.children.map((item) => (
                      <ListItem href={item.path} title={item.title}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            )}

            {!item.children && (
              <NavigationMenuLink href={item.path} className='cursor-pointer text-gray-600 hover:text-[#004F9E]! hover:bg-white/50'>
                {item.title}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
