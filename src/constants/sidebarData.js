import RepoIMG from '@assets/Icons/home.svg?react'
import CodeIMG from '@assets/Icons/code.svg?react'
import CloudIMG from '@assets/Icons/cloud.svg?react'
import BookIMG from '@assets/Icons/book.svg?react'
import GearIMG from '@assets/Icons/gear.svg?react'
import PhoneIMG from '@assets/Icons/phone.svg?react'
import LogoutIMG from '@assets/Icons/sign-out.svg?react'

export const menuItems = [
    {
        title: 'Repositories',
        icon: RepoIMG,
        link: '/repositories'
    },
    {
        title: 'AI Code Review',
        icon: CodeIMG,
        link: '/ai-code-review'
    },
    {
        title: 'Cloud Security',
        icon: CloudIMG,
        link: '/cloud-security'
    },
    {
        title: 'How to Use',
        icon: BookIMG,
        link: '/how-to-use'
    },
    {
        title: 'Settings',
        icon: GearIMG,
        link: '/settings'
    }

]

export const bottomMenuItems = [
    {
        title: 'Support',
        icon: PhoneIMG,
        link: '/support'
    },
    {
        title: 'Logout',
        icon: LogoutIMG,
        link: '/logout'
    }
]