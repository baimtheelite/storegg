import type { NextPage } from 'next'
import { useEffect } from 'react'
import Navbar from '../components/organisms/Navbar';
import MainBanner from '../components/organisms/MainBanner';
import TransactionStep from '../components/organisms/TransactionStep';
import FeaturedGame from '../components/organisms/FeaturedGame';
import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/Story';
import Footer from '../components/organisms/Footer';
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
        <Head>
          <title>StoreGG - Get a New Experience in Gaming</title>
          <meta name="description" content="Get a new experience in gaming with StoreGG. We are a platform that connects gamers with the best games and services in the market." />
          <meta name="keywords" content="storegg, storegg.com, storegg.com.br, storegg.com.br/pt, storegg.com.br/en, storegg.com.br/es, storegg.com.br/de, storegg.com.br/fr, storegg.com.br/it, storegg.com.br/ja, storegg.com.br/ko, storegg.com.br/ru, storegg.com.br/zh, storegg.com.br/ar, storegg.com.br/tr, storegg.com.br/vi, storegg.com.br/id, storegg.com.br/th, storegg.com.br/ms, storegg.com.br/hi, storegg.com.br/fa, storegg.com.br/ur, storegg.com.br/el, storegg.com.br/he, storegg.com.br/pl, storegg.com.br/ro, storegg.com.br/hu, storegg.com.br/sv, storegg.com.br/cs, storegg.com.br/sk, storegg.com.br/da, storegg.com.br/bg, storegg.com.br/sl, storegg.com.br/hr, storegg.com.br/lt, storegg.com.br/et, storegg.com.br/lv, storegg.com.br/lt, storegg.com.br/fi, storegg.com.br/uk, storegg.com.br/ca, storegg.com.br/cs, storegg.com.br/sk, storegg.com.br/da, storegg.com.br/bg, storegg.com.br/sl, storegg.com.br/hr, storegg.com.br/lt, storegg.com.br/et, storegg.com.br/lv, storegg.com.br/lt, storegg.com.br/fi, storegg.com.br/uk, storegg.com.br/ca, storegg.com.br/cs, storegg.com.br" />
          <meta property="og:title" content="StoreGG - Get a New Experience in Gaming" />
          <meta property="og:image" content="https://storegg.com/static/images/logo.png" />
          <meta property="og:url" content="https://storegg.com" />
        </Head>
        <Navbar />
        <MainBanner />
        <TransactionStep />
        <FeaturedGame />
        <Reached />
        <Story />
        <Footer />
    </>
  )
}

export default Home
