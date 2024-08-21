import React from 'react';
import styles from '../../styles/ProductGrid.module.css';
import Image from 'next/image';
import Header from '../../components/Header';

export default function Home({ productList }) {
    return (
        <div>
            <Header />
            <div className={styles.grid}>
                {productList.map(product => (
                    <div key={product.id} className={styles.productCard}>
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={500}
                            height={200}
                            className={styles.productImage}
                        />
                        <h2 className={styles.productName}>{product.name}</h2>
                        <p className={styles.productPrice}>${product.price}</p>
                        <p>{product.description}</p>
                        <button onClick={() => alert('Added to cart!')} className={styles.buyButton}>
                            Buy
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps() {
  // Load products from the local json file
  const res = await import('../../public/products.json');
  return {
    props: {
      productList: res.default
    },
  };
}
