import React from 'react'
import { Layout } from '../components/Layout/index'
import { FavsWithQuery } from '../hoc/getFavorites'

export default () => (
  <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
    <FavsWithQuery />
  </Layout>
)
