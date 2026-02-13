import Navbar from '@/components/shadcn-studio/blocks/navbar-component-01/navbar-component-01'

const navigationData = [
    {
        title: 'Projects',
        href: '/projects',
    },
    {
        title: 'About Me',
        href: '/about'
    },
    {
        title: 'Contact',
        href: '/contact'
    },
    {
        title: 'Resume',
        href: '/resume'
    }
]

export default function GreysonNavbar()  {
    return (
        <div className='bg-white sticky top-0 z-50 border-gray-200 shadow-md mb-4'>
            <Navbar navigationData={navigationData} />
        </div>
    );
}

