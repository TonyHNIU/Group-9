import React from 'react'
import * as AiIcons from 'react-icons/ai'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    className: 'nav-text'
  },
  {
    title: 'Goals',
    path: '/goals',
    icon: <AiIcons.AiOutlineTeam />,
    className: 'nav-text'
  },
  {
    title: 'Questionnaire',
    path: '/questionnaire',
    icon: <AiIcons.AiOutlineForm />,
    className: 'nav-text'
  }
]
