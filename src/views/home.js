import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Global Accountability Developer</title>
        <meta property="og:title" content="Global Accountability Developer" />
      </Helmet>
    </div>
  )
}

export default Home
