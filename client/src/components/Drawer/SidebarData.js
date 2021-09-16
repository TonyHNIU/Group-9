import React from 'react'
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
    {
        title: 'Profile',
        path: '/',
        icon: <AiIcons.AiFillProfile />,
        className: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <AiIcons.AiOutlineTeam />,
        className: 'nav-text'
    },
    {
        title: 'Company',
        path: '/company',
        icon: <AiIcons.AiFillHome/>,
        className: 'nav-text'
    },
]