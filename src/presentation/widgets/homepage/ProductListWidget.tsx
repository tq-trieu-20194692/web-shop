import { get } from 'http';
import React from 'react';

interface Product {
    imgSrc: string;
    name: string;
    sold: string;
    price: string;
}

const products: Product[] = [
    {
        imgSrc: '/assets/images/home/product/product1.png',
        name: 'Xúc Xích Đức Việt gói 16 hồng khói...',
        sold: 'Đã bán 12',
        price: '89.000 đ'
    },
    {
        imgSrc: '/assets/images/home/product/product1.png',
        name: 'Xúc Xích Đức Việt gói 16 hồng khói...',
        sold: 'Đã bán 8',
        price: '25.000 đ'
    },
    {
        imgSrc: '/assets/images/home/product/product1.png',
        name: 'Xúc Xích Đức Việt gói 16 hồng khói...',
        sold: 'Đã bán 20',
        price: '150.000 đ'
    },
];

const ProductListWidget: React.FC = () => {
    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <img src="/assets/images/home/product/shop.png" alt="Logo" style={styles.logo}/>
                <div style={styles.storeInfo}>
                    <h1 style={styles.storeName}>Ommani Mall Thạch Bàn Long</h1>
                    <p style={styles.rating}>
                        ⭐ 4.8 (11k+){' '}
                        <span style={styles.location}>TP. Hồ Chí Minh</span>
                    </p>
                    <div style={styles.shopListRow}>
                        <img src="/assets/images/home/product/shop.png" alt="Logo" style={styles.icon}/>
                        <img src="/assets/images/home/product/shop.png" alt="Logo" style={styles.icon}/>
                        <img src="/assets/images/home/product/shop.png" alt="Logo" style={styles.icon}/>
                    </div>
                </div>
            </div>
            <div style={styles.productList}>
                {products.map((product, index) => (
                    <div key={index} style={styles.productItem}>
                        <img src={product.imgSrc} alt={product.name} style={styles.productImage}/>
                        <div style={styles.productInfo}>
                            <h4 style={styles.productName}>{product.name}</h4>
                            <p style={styles.productSold}>{product.sold}</p>
                            <p style={styles.productPrice}>{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '365px',
        margin: '0 auto',
    } as React.CSSProperties,
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    } as React.CSSProperties,
    logo: {
        width: '60px',
        height: '60px',
        marginRight: '10px',
    } as React.CSSProperties,
    icon: {
        width: '21.5px',
        height: '21.5px',
    },
    shopListRow:{
        justifyContent: 'space-between',
        marginBottom: '4px',
    },
    storeInfo: {
        display: 'flex',
        flexDirection: 'column',
    } as React.CSSProperties,
    storeName: {
        fontSize: '14px',
        fontWeight: 'bold',
        marginBottom: '-2px',
    } as React.CSSProperties,
    rating: {
        fontSize: '14px',
        color: '#555',
        marginBottom: '4px',
    } as React.CSSProperties,
    location: {
        color:'#2EAD5B',
    } as React.CSSProperties,
    productList: {
        display: 'flex',
        justifyContent: 'space-between',
    } as React.CSSProperties,
    productItem: {
        width: '30%',
        textAlign: 'center' as 'center',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '10px',
    } as React.CSSProperties,
    productImage: {
        width: '100%',
        borderRadius: '8px',
    } as React.CSSProperties,
    productInfo: {
        marginTop: '10px',
    } as React.CSSProperties,
    productName: {
        fontSize: '14px',
        marginBottom: '5px',
    } as React.CSSProperties,
    productSold: {
        fontSize: '12px',
        color: '#555',
    } as React.CSSProperties,
    productPrice: {
        fontSize: '16px',
        color: 'red',
        fontWeight: 'bold',
    } as React.CSSProperties,
};

export default ProductListWidget;