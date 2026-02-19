import { MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

type NavigationItem = {
  title: string
  href: string
}[]

const Navbar = ({ navigationData }: { navigationData: NavigationItem }) => {
  return (
    <header className='bg-whitesticky top-0 z-50'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-7 sm:px-6'>
        <div className='text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-between lg:gap-16'>
            <a href='/'>
                <h1 className="text-purple-700 text-4xl">Greyson Barsotti</h1>
            </a>
            <div className="md:flex md:gap-6">
                <a href='/#/projects' className='hover:text-primary max-md:hidden'>
                    Projects
                </a>
                <a href='/#/about' className='hover:text-primary max-md:hidden'>
                    About Me
                </a>
                <a href='/#/contact' className='hover:text-primary max-md:hidden'>
                    Contact
                </a>
                <a href='/#/resume' className='hover:text-primary max-md:hidden'>
                    Resume
                </a>
            </div>
        </div>

        <div className='flex items-center gap-6 '>
          <DropdownMenu>
            <DropdownMenuTrigger className='md:hidden' asChild>
              <Button variant='outline' size='icon'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56 bg-white' align='end'>
              <DropdownMenuGroup>
                {navigationData.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <a href={item.href}>{item.title}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Navbar
