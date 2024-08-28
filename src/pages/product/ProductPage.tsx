import React from 'react';
import AppHeader from "../../presentation/layouts/components/AppHeader";
import AppFooter from "../../presentation/layouts/components/AppFooter";
import { Breadcrumb, Button } from 'antd';
// import { useParams } from 'react-router-dom';


const ProductPage: React.FC = () => {

    // const { productName } = useParams<{ productName: string }>();

    return (
        <div
            style={{
                backgroundColor: '#F5F5F7',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <AppHeader />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    padding: '10px 0',
                    marginLeft: '70px',
                }}
            >
                <Breadcrumb
                    separator=">"
                    items={[
                        { title: 'OmmaniLife' },
                        { title: 'Rau, Củ, Quả', href: '' },
                        { title: 'Rau xanh' },
                    ]}
                />
            </div>
            <div
                style={{
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'row',
                    maxHeight: '650px',
                    maxWidth: '1239px',
                    flexGrow: 1,
                    margin: '0 70px',
                    padding: '20px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                }}
            >
                <div style={{ flex: 1 }}>
                    <img
                        src="/assets/images/product/imageBig.png"
                        alt="Broccoli"
                        style={{ width: '450px', height: '450px', borderRadius: '8px' }}
                    />
                    <div style={{ width: '450px', height: '85px', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <img src="/assets/images/thumb1.jpg" alt="thumb" style={thumbnailStyle} />
                        <img src="/assets/images/thumb2.jpg" alt="thumb" style={thumbnailStyle} />
                        <img src="/assets/images/thumb3.jpg" alt="thumb" style={thumbnailStyle} />
                        <img src="/assets/images/thumb4.jpg" alt="thumb" style={thumbnailStyle} />
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '-20px', marginRight: '160px' }}>
                        Chia sẻ:
                        <img src="/assets/images/product/message.png" alt="Messenger" style={shareIconStyle} />
                        <img src="/assets/images/facebook.png" alt="Facebook" style={shareIconStyle} />
                        <img src="/assets/images/zalo.png" alt="Zalo" style={shareIconStyle} />
                        <img src="/assets/images/product/copy.png" alt="Copy Link" style={shareIconStyle} />
                    </div>
                </div>
                <div style={{ flex: 1, marginLeft: '20px', position: 'relative' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{
                            backgroundColor: '#29AB56',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            color: 'white',
                            fontWeight: 'bold',
                            marginRight: '10px'
                        }}>Mall</span>
                        <h2 style={{ margin: 0 }}>Bông Cải Xanh - Công Nghệ Làm Sạch Tiêu Chuẩn Đức Gói 500g Đà Lạt</h2>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '10px', alignItems: 'center' }}>
                        <span style={underlinedTextStyle}>4.8 </span>
                        <span style={{ color: '#ffeb3b', margin: '0 5px' }}>★ ★ ★ ★ ★</span>
                        <span style={underlinedTextStyle}> 513 </span> đánh giá
                        <span style={{ marginLeft: '10px' }}> <span style={underlinedTextStyle}>246K </span> Đã bán</span>
                        <img src="/assets/images/qrcode.png" alt="QR Code" style={{ marginLeft: 'auto', width: '50px', height: '50px' }} />
                    </div>
                    <div style={{ fontWeight: 'bold', color: '#ff5722', fontSize: '24px', marginBottom: '10px' }}>
                        132.000 đ
                    </div>
                    <div style={{
                        maxWidth: '702px',
                        maxHeight: '408px',
                        backgroundColor: '#FBFBFB',
                        marginTop: '20px',
                    }}>
                        {/* Phần giao hàng */}
                        <div style={deliveryContainerStyle}>
                            <img src="/assets/images/product/car.png" alt="delivery" style={deliveryIconStyle} />
                            <div>
                                <div>
                                    Giao hàng <strong>Tiêu chuẩn</strong>:
                                    <span style={{ color: '#116ABD', marginLeft: '5px' }}>Thứ 5, ngày 21/04 - Thứ 7 ngày 23/04</span>
                                </div>
                                <div>
                                    <strong style={{ fontSize: '18px' }}>21.000 đ</strong>
                                    <span style={{ color: '#888', marginLeft: '5px' }}>(Freeship 30K đơn hàng từ 150K)</span>
                                </div>
                            </div>
                        </div>
                        {/* Các phần khác */}
                        <div style={{ marginBottom: '10px' }}>
                            Số lượng lớn:
                            <table style={{ marginTop: '5px', width: '100%', borderCollapse: 'collapse' }}>
                                <tr>
                                    <td style={tableCellStyle}>1-10 Gói</td>
                                    <td style={tableCellStyle}>11-30 Gói</td>
                                    <td style={tableCellStyleblue}>Trên 30 gói</td>
                                </tr>
                                <tr>
                                    <td style={tableCellStyle}>132k/gói</td>
                                    <td style={tableCellStyle}>105k/gói</td>
                                    <td style={tableCellStyleblue}>Liên hệ</td>
                                </tr>
                            </table>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            Truy xuất nguồn gốc: <a href="#">Link</a>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            Giao hàng từ:<strong> 46 Trần Nguyên Đán, Thanh Xuân, Hà Nội</strong>
                        </div>
                        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                            Số Lượng:
                            <button style={quantityButtonStyle}>-</button>
                            <input type="number" defaultValue="1" style={quantityInputStyle} />
                            <button style={quantityButtonStyle}>+</button>
                            Có 2.400 sản phẩm có sẵn
                        </div>
                        <Button type="primary" style={addToCartButtonStyle}>Thêm Vào Giỏ Hàng</Button>
                        <Button type="default" style={buyNowButtonStyle}>Mua Ngay</Button>
                    </div>
                </div>
            </div>
            <div style={{
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'row',
                maxHeight: '131px',
                maxWidth: '1239px',
                flexGrow: 1,
                margin: '0 70px',
                padding: '20px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                marginTop: '10px',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold',
                color: '#29AB56'
            }}>
                Ommani Đảm bảo Sản phẩm đạt tiêu chuẩn.
            </div>
            <AppFooter />
        </div>
    );
};

const deliveryContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginBottom: '20px',
};

const deliveryIconStyle: React.CSSProperties = {
    marginRight: '10px',
    width: '32px',
    height: '32px',
};

const thumbnailStyle: React.CSSProperties = {
    width: '50px',
    height: '50px',
    marginRight: '5px',
    borderRadius: '4px',
};

const shareIconStyle: React.CSSProperties = {
    width: '20px',
    height: '20px',
    marginLeft: '10px',
};

const tableCellStyle: React.CSSProperties = {
    border: '1px solid #ddd',
    padding: '5px',
    textAlign: 'center',
};
const tableCellStyleblue: React.CSSProperties = {
    border: '1px solid #ddd',
    padding: '5px',
    textAlign: 'center',
    color: '#116ABD',
};

const underlinedTextStyle: React.CSSProperties = {
    textDecoration: 'underline',
};

const quantityButtonStyle: React.CSSProperties = {
    backgroundColor: '#f0f0f0',
    border: '1px solid #ddd',
    padding: '5px 10px',
    margin: '0 5px',
    cursor: 'pointer',
};

const quantityInputStyle: React.CSSProperties = {
    width: '50px',
    textAlign: 'center',
    marginRight: '10px',
};

const addToCartButtonStyle: React.CSSProperties = {
    backgroundColor: '#FF6600',
    color: 'white',
    fontSize: '16px',
    padding: '10px 20px',
    marginRight: '10px',
};

const buyNowButtonStyle: React.CSSProperties = {
    backgroundColor: 'white',
    color: '#FF6600',
    fontSize: '16px',
    padding: '10px 20px',
    border: '1px solid #FF6600',
};

export default ProductPage;