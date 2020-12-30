import { GetStaticProps } from 'next'
import React from 'react';
import Link from 'next/link';
import { Product } from 'shopify-buy'
import { client } from '../apis/shopifyClient';
import Layout from '../components/Layout';

type IndexProps = {
  products: Product[];
};

const IndexPage: React.FC<IndexProps> = ({ products }) => {
  console.log(products);
  return (
    <Layout title="Top">
      <h1>Hello Next.js 👋</h1>
      <ul>
        {
          products.map((product) => 
          <li key={product.id}>
            <Link href="/[id]" as={`/${product.id}`}>
              <a>
                {product.title}
                <img src={product.images[0].src} height={80}/>
              </a>
            </Link>
          </li>)
        }
      </ul>
    </Layout>
  );
}

export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
  const products: Product[] = await client.product.fetchAll();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
};
