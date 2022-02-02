import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
export default function Home() {
  return (
    <div className="scrollbar-hide h-screen overflow-y-scroll bg-gray-50 ">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Feed */}
      <Feed />
      {/* Modal */}
    </div>
  )
}