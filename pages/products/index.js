import React, { useState, useEffect } from 'react';
import styles from '../../styles/ProductGrid.module.css';
import Image from 'next/image';
import Header from '../../components/Header';

export default function Home({ productList }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!productList || productList.length === 0) {
            setError(true);
        }
        setLoading(false);
    }, [productList]);

    if (loading) {
        return <div>Loading...</div>;  // Display a loading indicator
    }

    if (error) {
        return <div>Error loading products!</div>;  // Display an error message
    }

    return (
        <div>
            <Header />
            <div className={styles.grid}>
                {productList.map(product => (
                    <div key={product.id} className={styles.productCard} data-test="product-card">
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={500}
                            height={200}
                            className={styles.productImage}
                        />
                        <h2 className={styles.productName} data-test="product-name">{product.name}</h2>
                        <p className={styles.productPrice} data-test="product-price">${product.price}</p>
                        <p>{product.description}</p>
                        <button
                            onClick={() => alert('Added to cart!')}
                            className={styles.buyButton}
                            data-test="buy-button">
                            Buy
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps() {
  try {
    const res = await import('../../public/products.json');
    return {
      props: {
        productList: res.default || []
      },
    };
  } catch (error) {
    console.error('Failed to load products:', error);
    return {
      props: {
        productList: []
      },
    };
  }
}
