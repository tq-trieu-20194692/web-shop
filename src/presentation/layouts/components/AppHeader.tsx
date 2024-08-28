import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {DownOutlined} from "@ant-design/icons";

const AppHeader: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    // const navigate = useNavigate();


    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    // const handleItemClick = (item: string) => {
    //     navigate(`/product/${item}`);
    // };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
        if (e.target.value) {
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.topBar}>
                <div style={styles.leftOptions}>
                    <span>Kênh người bán</span>
                    <span> | </span>
                    <span>Trở thành người bán</span>
                    <span> | </span>
                    <span>Download App</span>
                    <span> | </span>
                    <span>Kết nối</span>
                </div>
                <div style={styles.rightOptions}>
                    <span>OCCOP</span>
                    <span>  </span>
                    <span>Hỗ trợ thông tin</span>
                    <span>  </span>
                    <span>Vận chuyển</span>
                </div>
            </div>
            <div style={styles.mainHeader}>
                <div style={styles.titleContainer}>
                    <h1 style={styles.title}>Ommanilife</h1>
                    <h5 style={styles.subtitle}>NĂNG LƯỢNG CUỘC SỐNG</h5>
                </div>
                <div style={styles.location}>
                    <i className="bi bi-geo-alt"></i>
                    <span>Thanh Xuân</span>
                </div>
                <div style={styles.searchBar}>
                    <select style={styles.select}>
                        <option>Sản phẩm v
                        </option>
                    </select>
                    <span style={styles.separator}>|</span>
                    <input
                        type="text"
                        placeholder="Nhập sản phẩm cần tìm kiếm..."
                        style={styles.inputSearch}
                        onClick={toggleDropdown}
                        onChange={handleInputChange}
                        value={searchText}
                    />
                    <button style={styles.searchButton}><img src="/assets/images/li_search.png" alt="bell"/></button>
                </div>
                {showDropdown && (
                    <div style={styles.dropdown}>
                        {['Bông cải xanh', 'Bông cải xanh Đà Lạt', 'Bông Cải', 'Bông Cải sạch'].map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    ...styles.dropdownItem,
                                    ...(hoveredIndex === index ? styles.dropdownItemActive : {}),
                                }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                // onClick={() => handleItemClick(item)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                )}
                <div style={styles.icons}>
                    <img src="/assets/images/bell.png" alt="bell"/>
                    <img src="/assets/images/message.png" alt="message"/>
                    <img src="/assets/images/Cart.png" alt="cart" onClick={togglePopup}/>
                </div>
                <div style={styles.authOptions}>
                    <img src="/assets/images/carbon_user-avatar.png" alt="user-avatar"/>
                    <div style={styles.textContainer}>
                        <span>Đăng nhập</span>
                        <span>Đăng ký</span>
                    </div>
                </div>
            </div>
            <div style={styles.categories}>
                <span>Trái cây</span>
                <span>Thịt, trứng</span>
                <span>Rau, củ, quả</span>
                <span>Sữa, bơ, phô mai</span>
                <span>Hải sản</span>
                <span>Gạo, mì ăn liền</span>
                <span>Bánh, kẹo</span>
            </div>

            {showPopup && (
                <div style={styles.popup}>
                    <div style={styles.popupHeader}>Sản phẩm mới thêm</div>
                    <div style={styles.popupItems}>
                        <div style={styles.popupItem}>
                            <img src="/assets/images/home/list/1.png" alt="ghtk" style={styles.popupImage}/>
                            <div style={styles.popupText}>Bông cải xanh 100g nội địa Nhật Bản...</div>
                            <div style={styles.popupPrice}>₫ 59.000</div>
                        </div>
                        <div style={styles.popupItem}>
                            <img src="/assets/images/home/list/1.png" alt="Broccoli" style={styles.popupImage}/>
                            <div style={styles.popupText}>Bông cải xanh 100g nội địa Nhật Bản...</div>
                            <div style={styles.popupPrice}>₫ 59.000</div>
                        </div>
                        <div style={styles.popupItem}>
                            <img src="/assets/images/home/list/1.png" alt="Broccoli" style={styles.popupImage}/>
                            <div style={styles.popupText}>Bông cải xanh 100g nội địa Nhật Bản...</div>
                            <div style={styles.popupPrice}>₫ 59.000</div>
                        </div>
                        <div style={styles.popupItem}>
                            <img src="/assets/images/home/list/1.png" alt="Broccoli" style={styles.popupImage}/>
                            <div style={styles.popupText}>Bông cải xanh 100g nội địa Nhật Bản...</div>
                            <div style={styles.popupPrice}>₫ 59.000</div>
                        </div>
                    </div>
                    <div style={styles.popupFooter}>
                        <div>78 thêm hàng vào giỏ</div>
                        <button style={styles.popupButton}>Xem Giỏ Hàng</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        width: '100%',
        backgroundColor: '#2eb82e',
        paddingBottom: '10px',
    },
    topBar: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#2eb82e',
        color: '#fff',
        fontSize: '14px',
    },
    leftOptions: {
        display: 'flex',
        gap: '10px',
        marginLeft: '50px',
    },
    rightOptions: {
        display: 'flex',
        gap: '10px',
        marginRight: '20px',
    },
    mainHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        color: '#fff',
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'column' as const,
        marginLeft: '50px',
    },
    title: {
        fontSize: '24px',
        margin: 0,
    },
    subtitle: {
        fontSize: '8px',
        margin: 0,
        marginTop: '5px',
        marginLeft: '10px',
    },
    location: {
        display: 'flex',
        alignItems: 'center',
    },
    searchBar: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: '30px',
        padding: '5px',
        width: '50%',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        position: 'relative',
    },
    select: {
        fontSize: '14px',
        padding: '5px',
        marginRight: '5px',
        border: 'none',
        color: '#29AB56',
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: 'transparent',
        appearance: 'none',
    },
    separator: {
        color: '#ccc',
        margin: '0 10px',
    },
    inputSearch: {
        padding: '5px',
        width: '100%',
        border: 'none',
        color: '#888',
        fontFamily: 'Roboto, sans-serif',
        outline: 'none',
    },
    searchButton: {
        padding: '5px 10px',
        backgroundColor: '#2eb82e',
        border: 'none',
        color: '#fff',
        borderRadius: '30px',
        cursor: 'pointer',
        marginLeft: '5px',
    },
    icons: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
    },
    authOptions: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    categories: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        fontSize: '15px',
        color: '#fff',
        marginTop: '-10px',
        marginRight: '10px',
        marginBottom: '10px',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '2px',
        margin: 0,
        padding: 0,
        fontFamily: 'Roboto, sans-serif',
        marginRight: '20px',
    },
    popup: {
        position: 'absolute',
        top: '100px',
        right: '50px',
        width: '400px',
        border: '1px solid #eee',
        padding: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        marginRight: '140px',
    },
    popupHeader: {
        fontSize: '16px',
        color: '#999',
        marginBottom: '10px',
    },
    popupItems: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '10px',
    },
    popupItem: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #f0f0f0',
        padding: '5px 0',
    },
    popupImage: {
        width: '40px',
        height: '40px',
        marginRight: '10px',
    },
    popupText: {
        flexGrow: 1,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
    popupPrice: {
        color: 'green',
    },
    popupFooter: {
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    popupButton: {
        backgroundColor: 'green',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '4px',
    },
    dropdown: {
        position: 'absolute',
        top: '95px',
        left: '0',
        width: '700px',
        backgroundColor: 'white',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        borderRadius: '4px',
        zIndex: 1000,
        marginLeft: '380px'
    },
    dropdownItem: {
        padding: '10px',
        cursor: 'pointer',
        backgroundColor: 'white',
        color: 'black',
        marginLeft: '100px',
        transition: 'background-color 0.3s ease',
    },
    dropdownItemActive: {
        padding: '10px',
        borderBottom: '1px solid #ccc',
        backgroundColor: '#2eb82e',
        color: 'white',
    },
    dropdownItemHover: {
        backgroundColor: '#f0f0f0',
    },
    caretDown: {
        color: 'black',
        marginLeft: '5px',
    },

};

export default AppHeader;