import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import { getSession } from 'next-auth/client';
import ProductFeed from '../components/ProductFeed';

export default function Home({ products }) {
  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>Amazon 2.0</title>
      </Head>   

        {/* Header */}
        <Header />

        {/* This content section */}
        <main className="max-w-screen-2xl mx-auto">
          {/* Banner */}
          <Banner />

          {/* ProductFeed */}
          <ProductFeed products={products} />
        </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
    
    return {
      props: {
        products,
        session
      },
    };
  }
