import React from 'react';
import ProductListWidget from "../../presentation/widgets/homepage/ProductListWidget";
// import Slider from "react-slick";
import AppHeader from "../../presentation/layouts/components/AppHeader";
import AppFooter from "../../presentation/layouts/components/AppFooter";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Homepage: React.FC = () => {

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    // };

    return (
        <div style={styles.container}>
            <AppHeader />
            <div style={styles.mainContent}>
                <div style={styles.banner}>
                    {/*<Slider {...settings}>*/}
                    {/*    <div>*/}
                    {/*        <img src="/assets/images/Banner.png" alt="banner" style={styles.bannerImage}/>*/}
                    {/*    </div>*/}
                        <div>
                            <img src="/assets/images/Banner.png" alt="banner" style={styles.bannerImage}/>
                        </div>
                    {/*    <div>*/}
                    {/*        <img src="/assets/images/Banner.png" alt="banner" style={styles.bannerImage}/>*/}
                    {/*    </div>*/}
                    {/*</Slider>*/}
                </div>
                <div style={styles.feature}>
                    {featureItems.map((item, index) => (
                        <div key={index} style={styles.featureItem}>
                            <img src={item.icon} alt={item.label} style={styles.featureIcon} />
                            <span style={styles.featureLabel}>{item.label}</span>
                        </div>
                    ))}
                </div>
                <div style={styles.advertise}>
                    {advertiseItems.map((item, index) => (
                        <div key={index} style={styles.advertiseItem}>
                            <img src={item.image} alt="Advertise" style={styles.advertiseImage} />
                            <div style={styles.advertiseOverlay}>
                                <span style={styles.advertiseText}>{item.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={styles.shop}>
                    <h3 style={styles.heading}>Top cửa hàng uy tín</h3>
                    <div style={styles.shopContainer}>
                        {shopItems.map((item, index) => (
                            <div key={index} style={styles.shopItem}>
                                <img src={item.image} alt={item.location} style={styles.shopImage}/>
                                <p style={styles.shopLocation}>{item.location}</p>
                                <p>
                                    <span style={styles.starIcon}>⭐</span>
                                    <span style={styles.shopRating}>{item.rating}</span>
                                </p>
                                <p style={styles.shopCertification}>{item.certification}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={styles.list}>
                    <h3 style={styles.heading}>Tìm theo danh mục</h3>
                    <div style={styles.categoryContainer}>
                        {categoryItems.map((item, index) => (
                            <div key={index} style={styles.categoryItem}>
                                <img src={item.image} alt={item.label} style={styles.categoryImage}/>
                                <p style={styles.categoryLabel}>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={styles.productList}>
                    <h3 style={styles.heading}>Khám phá thêm</h3>
                </div>
                <div style={styles.productListRow}>
                    <ProductListWidget/>
                    <ProductListWidget/>
                    <ProductListWidget/>
                </div>
            </div>
            <AppFooter/>
        </div>
    );
};

const featureItems = [
    {icon: '/assets/images/home/feature/ommani-mall.png', label: 'Ommani Mall'},
    {icon: '/assets/images/home/feature/go-food.png', label: 'Đi chợ'},
    {icon: '/assets/images/home/feature/ban-si.png', label: 'Bán Sỉ'},
    {icon: '/assets/images/home/feature/ban-drop.png', label: 'Bán Drop'},
    {icon: '/assets/images/home/feature/ban-quoc-te.png', label: 'Bán Quốc Tế'},
    {icon: '/assets/images/home/feature/ocop.png', label: 'OCOP'},
    {icon: '/assets/images/home/feature/chung-nhan.png', label: 'Chứng nhận'},
];

const advertiseItems = [
    {image: '/assets/images/home/advertise/store-1.png', text: 'CỬA HÀNG NÔNG SẢN'},
    {image: '/assets/images/home/advertise/store-1.png', text: 'CỬA HÀNG NÔNG SẢN'},
    {image: '/assets/images/home/advertise/store-1.png', text: 'CỬA HÀNG NÔNG SẢN'},
];

const shopItems = [
    { image: '/assets/images/home/shop/shop1.png',  location: 'Ommani Mall Nguyễn Văn Linh Long Biên', rating: '4.8 (11k+)', certification: 'Đã Chứng Nhận' },
    { image: '/assets/images/home/shop/shop2.png',  location: 'Ommani Mall Nguyễn Văn Linh Long Biên', rating: '4.8 (11k+)', certification: 'Đã Chứng Nhận' },
    { image: '/assets/images/home/shop/shop3.png',  location: 'Ommani Mall Nguyễn Văn Linh Long Biên', rating: '4.8 (11k+)', certification: 'Đã Chứng Nhận' },
    { image: '/assets/images/home/shop/shop4.png',  location: 'Ommani Mall Nguyễn Văn Linh Long Biên', rating: '4.8 (11k+)', certification: 'Đã Chứng Nhận' },
    { image: '/assets/images/home/shop/shop5.png',  location: 'Ommani Mall Nguyễn Văn Linh Long Biên', rating: '4.8 (11k+)', certification: 'Đã Chứng Nhận' },
    { image: '/assets/images/home/shop/shop6.png',  location: 'Ommani Mall Nguyễn Văn Linh Long Biên', rating: '4.8 (11k+)', certification: 'Đã Chứng Nhận' },
];

const categoryItems = [
    { image: '/assets/images/home/list/1.png', label: 'Trái cây' },
    { image: '/assets/images/home/list/2.png', label: 'Thịt, Trứng' },
    { image: '/assets/images/home/list/3.png', label: 'Cá, Thủy hải sản' },
    { image: '/assets/images/home/list/4.png', label: 'Rau, Củ' },
    { image: '/assets/images/home/list/5.png', label: 'Thực phẩm Việt' },
    { image: '/assets/images/home/list/6.png', label: 'Sữa, Bơ' },
    { image: '/assets/images/home/list/7.png', label: 'Đông lạnh' },
    { image: '/assets/images/home/list/8.png', label: 'Dầu ăn' },
    { image: '/assets/images/home/list/9.png', label: 'Gạo, Mì, Nông sản' },
    { image: '/assets/images/home/list/10.png', label: 'Đồ hộp' },
    { image: '/assets/images/home/list/11.png', label: 'Bia, Đồ uống' },
    { image: '/assets/images/home/list/12.png', label: 'Thực phẩm chay' },
    { image: '/assets/images/home/list/13.png', label: 'Dành cho trẻ em' },
    { image: '/assets/images/home/list/14.png', label: 'Bánh kẹo, giỏ quà' },
    { image: '/assets/images/home/list/15.png', label: 'Đồ ăn, Thú cưng' },
    { image: '/assets/images/home/list/16.png', label: 'Chăm sóc cá nhân' },
    { image: '/assets/images/home/list/17.png', label: 'Chăm sóc nhà cửa' },
];

const styles = {
    container: {
        backgroundColor: '#F5F5F7',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    } as React.CSSProperties,
    heading: {
        fontSize: '22px',
        fontWeight: 'bold',
        marginTop: '0px',
        marginBottom: '5px',
        fontFamily: 'Roboto, sans-serif',
        marginLeft: '10px',
    },
    mainContent: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: '40px',
    } as React.CSSProperties,
    banner: {
        textAlign: 'center' as 'center',
        marginBottom: '0px',
    } as React.CSSProperties,
    bannerImage: {
        maxWidth: '100%',
        height: 'auto',
    } as React.CSSProperties,
    feature: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        width: '80%',
        maxWidth: '976px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        marginBottom: '20px',
    } as React.CSSProperties,
    featureItem: {
        display: 'flex',
        fontFamily: 'Roboto',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10px',
    } as React.CSSProperties,
    featureIcon: {
        width: '50px',
        height: '50px',
        marginBottom: '10px',
    } as React.CSSProperties,
    featureLabel: {
        fontSize: '14px',
        color: '#333',
        textAlign: 'center' as 'center',
    } as React.CSSProperties,
    advertise: {
        display: 'flex',
        justifyContent: 'space-between', // Điều chỉnh khoảng cách giữa các phần tử
        width: '100%', // Điều chỉnh lại width để tương xứng
        maxWidth: '1250px', // Điều chỉnh lại maxWidth
        padding: '20px 0',
    } as React.CSSProperties,
    advertiseItem: {
        position: 'relative',
        width: '35%', // Điều chỉnh width để các phần tử có chiều rộng tương ứng với hình
        maxWidth: '405px',
        maxHeight:'220px',
        margin: '0 10px', // Thêm khoảng cách giữa các phần tử
    } as React.CSSProperties,
    advertiseImage: {
        width: '100%',
        height: '220px',
        borderRadius: '8px',
    } as React.CSSProperties,
    advertiseOverlay: {
        position: 'absolute',
        top: '0', // Move the overlay to the top
        left: '0',
        right: '0',
        backgroundColor: 'rgba(0, 128, 0, 0.8)', // Green background with transparency
        color: '#fff',
        padding: '10px',
        borderRadius: '8px 8px 0 0', // Rounded corners at the top
        textAlign: 'center' as 'center',
    } as React.CSSProperties,
    advertiseText: {
        fontSize: '18px', // Increase font size for better visibility
        fontWeight: 'bold', // Make the text bold
    } as React.CSSProperties,
    shop: {
        width: '100%',
        maxWidth: '1250px',
        padding: '20px 0',
        justifyContent: 'space-around', // Align items with space around them
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '40px',
    } as React.CSSProperties,
    shopContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '100%',
    } as React.CSSProperties,
    shopItem: {
        width: '165px',
        margin: '15px 10px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        textAlign: "left",
        backgroundColor: '#fff',
    } as React.CSSProperties,
    shopImage: {
        width: '100%',
        height: 'auto',
        marginBottom: '10px',
    } as React.CSSProperties,
    shopName: {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '5px',
    } as React.CSSProperties,
    shopLocation: {
        fontWeight: '#1A1A1A',
        fontSize: '14px',
        color: '#555',
        marginBottom: '5px',
    } as React.CSSProperties,
    shopRating: {
        fontSize: '14px',
        color: '#969696',
        marginBottom: '5px',
    } as React.CSSProperties,
    starIcon: {
        color: '#FEC300',
    } as React.CSSProperties,
    shopCertification: {
        fontSize: '14px',
        color: '#3498db',
        fontWeight: 'bold',
    } as React.CSSProperties,
    list: {
        width: '100%',
        maxWidth: '1250px',
        padding: '20px 0',
        justifyContent: 'space-around', // Align items with space around them
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '40px',
    } as React.CSSProperties,
    categoryContainer: {
        display: 'flex',
        gridTemplateColumns: 'repeat(9, 1fr)',
        flexWrap: 'wrap',
        width: '100%',
    } as React.CSSProperties,
    categoryItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100px',
        margin: '15px',
    } as React.CSSProperties,
    categoryImage: {
        width: '50px',
        height: '50px',
        marginBottom: '10px',
    } as React.CSSProperties,
    categoryLabel: {
        fontSize: '14px',
        color: '#333',
        textAlign: 'center' as 'center',
    } as React.CSSProperties,
    productList: {
        width: '100%',
        maxWidth: '1250px',
        padding: '20px 0',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
    } as React.CSSProperties,
    productListRow: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',

    } as React.CSSProperties,
};

export default Homepage;