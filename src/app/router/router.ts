import { createBrowserRouter } from 'react-router'
import MainPage from '@/pages/main/ui'
import { MainLayout } from '../layout'
import { Component } from 'react'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: MainPage,
      },
    ],
  },
])
