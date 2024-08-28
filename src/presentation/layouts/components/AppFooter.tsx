import React from 'react';

const AppFooter: React.FC = () => {
    return (
        <div style={styles.container}>
            <div style={styles.headingsContainer}>
                <div style={styles.headingWrapper}>
                    <h3 style={styles.heading}>Hỗ Trợ khách hàng</h3>
                    <div style={styles.list}>
                        <div>
                            Hotline: <strong>1900-6789</strong>
                            <div>
                                (1.000 đ/phút, 8-21h kể cả T7, CN)
                            </div>
                        </div>
                        <div>Các câu hỏi thường gặp</div>
                        <div>Gửi yêu cầu hỗ trợ</div>
                        <div>Hướng dẫn đặt hàng</div>
                        <div>Phương thức vận chuyển</div>
                        <div>Chính sách đổi trả</div>
                        <div>Chính sách hàng nhập khẩu</div>
                        <div>Hỗ trợ khách hàng: hotro@ommani.vn</div>
                        <div>Báo lỗi bảo mật: security@ommani.vn</div>
                    </div>
                </div>
                <div style={styles.headingWrapper}>
                    <h3 style={styles.heading}>Về Ommani Life</h3>
                    <div style={styles.list}>
                        <div>Giới thiệu về Ommani</div>
                        <div>Tuyển dụng</div>
                        <div>Chính sách bảo mật, thanh toán</div>
                        <div>Bảo mật thông tin cá nhân</div>
                        <div>Chính sách giải quyết khiếu nại</div>
                        <div>Điều khoản sử dụng</div>
                        <div>Tiếp thị liên kết cùng Ommani</div>
                        <div>Bán hàng cho doanh nghiệp</div>
                        <div>Điều kiện vận chuyển</div>
                    </div>
                </div>
                <div style={styles.headingWrapper}>
                    <h3 style={styles.heading}>Hợp tác và liên kết</h3>
                    <div style={styles.list}>
                        <div>Quy chế hoạt động</div>
                        <div>Bán hàng cùng Ommani</div>
                        {/* Add more list items as needed */}
                    </div>
                    <h3 style={styles.heading}>Chứng nhận bởi</h3>
                    <div style={styles.list}>
                        <div>
                            <img src="/assets/images/gcn1.png" alt="gcn1"/>
                            <img src="/assets/images/gcn2.png" alt="gcn2"/>
                        </div>
                        <div>
                            <img src="/assets/images/gcn3.png" alt="gcn3"/>
                        </div>
                    </div>
                </div>
                <div style={styles.headingWrapper}>
                    <h3 style={styles.heading}>Phương thức thanh toán</h3>
                    <div style={styles.icons}>
                        <div style={styles.list}>
                            <div>
                                <img src="/assets/images/bxl_visa.png" alt="Visa"/>
                                <img src="/assets/images/uim_master-card.png" alt="master-card"/>
                                <img src="/assets/images/logos_jcb.png" alt="jcb"/>
                                <img src="/assets/images/noto_atm-sign.png" alt="atm"/>
                            </div>
                            <div>
                                <img src="/assets/images/zalo.png" alt="zalo"/>
                                <img src="/assets/images/momo.png" alt="momo"/>
                                <img src="/assets/images/viettelpay.png" alt="vittelpay"/>
                                <img src="/assets/images/vnpay-seeklogo.com%201.png" alt="vnpay"/>
                            </div>
                        </div>
                    </div>
                    <h3 style={styles.heading}>Dịch vụ giao hàng</h3>
                    <div>
                        <img src="/assets/images/ghtk.png" alt="ghtk"/>
                    </div>
                </div>
                <div style={styles.headingWrapper}>
                    <h3 style={styles.heading}>Kết nối với chúng tôi</h3>
                    <div style={styles.icons}>
                        <img src="/assets/images/facebook.png" alt="facebook" style={styles.icon}/>
                        <img src="/assets/images/youtube.png" alt="youtube" style={styles.icon}/>
                        <img src="/assets/images/zalo.png" alt="zalo" style={styles.icon}/>
                    </div>
                    <h3 style={styles.heading}>Tải ứng dụng trên điện thoại</h3>
                    <div style={styles.downloads}>
                        <img src="/assets/images/QRCode.png" alt="QR"/>
                        <div style={styles.downloadsapp}>
                            <img src="/assets/images/dowloadAndroid.png" alt="DowloadAndroid"/>
                            <img src="/assets/images/dowloadaIOS.png" alt="DowloadIOS"/>
                        </div>
                    </div>
                </div>
            </div>
            <div style={styles.dividerContainer}>
                <span style={styles.dividerText}>Make with love!</span>
                <hr style={styles.divider}/>
            </div>
            <div style={styles.footerText}>
                <div style={styles.list}>
                    <div>Trụ sở chính: 43 Trần Nguyên Đán, Định Công, Q. Hoàng Mai, TP. Hà Nội </div>
                <div>Giấy chứng nhận Đăng kí kinh doanh số: 0998999999 do sở kế hoạch và Đầu tư Thành Phố Hà Nội cấp lần đầu
                    ngày 09/09/2022</div>
                <div>©2022 - Bản quyền của Công ty TNHH Ommani</div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '20px',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #ccc',
        minHeight: '400px', // Đảm bảo rằng footer có đủ chiều cao để chứa nội dung
    } as React.CSSProperties,
    headingsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '20px',
        marginBottom: '20px',
        flexWrap: 'wrap',
    } as React.CSSProperties,
    headingWrapper: {
        flex: '1 1 200px',
        padding: '10px',
    } as React.CSSProperties,
    heading: {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '10px',
        fontFamily: 'Roboto, sans-serif',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '20px',
    } as React.CSSProperties,
    list: {
        fontSize: '14px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        margin: 0,
        padding: 0,
        fontFamily: 'Roboto, sans-serif',
    } as React.CSSProperties,
    icons: {
        display: 'flex',
        gap: '10px',
    } as React.CSSProperties,
    icon: {
        width: '30px',
        height: '30px',
    } as React.CSSProperties,
    downloads: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
    } as React.CSSProperties,
    downloadsapp: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    } as React.CSSProperties,
    dividerContainer: {
        textAlign: 'center',
        marginTop: '-50px',
        marginBottom: '10px',
    } as React.CSSProperties,
    dividerText: {
        fontFamily: 'Great Vibes, cursive',
        fontSize: '20px',
        color: '#F17185',
        marginBottom: '5px',
        marginLeft: '1275px'
    } as React.CSSProperties,
    divider: {
        border: 'none',
        borderTop: '1px solid #ccc',
    } as React.CSSProperties,
    footerText: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '14px',
        textAlign: 'left',
        marginTop: '10px',
    } as React.CSSProperties,
};

export default AppFooter;
