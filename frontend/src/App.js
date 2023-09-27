import React, { useState, useEffect } from 'react';

function App() {
    const [message, setMessage] = useState("");
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("/api/message")
            .then((res) => res.json())
            .then((data) => setMessage(data.message));
    }, []);
    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="App">
            <header>

                <div class="header-top">

                    <div class="container">

                        <ul class="header-social-container">

                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>

                        </ul>

                        <div class="header-alert-news">
                            <p>
                                <b>Free Shipping</b>
                                This Week Order Over - $55
                            </p>
                        </div>

                        <div class="header-top-actions">

                            <select name="currency">

                                <option value="usd">USD</option>
                                <option value="eur">EUR</option>

                            </select>

                            <select name="language">

                                <option value="en-US">English</option>
                                <option value="es-ES">Espa&ntilde;ol</option>
                                <option value="fr">Fran&ccedil;ais</option>

                            </select>

                        </div>

                    </div>

                </div>

                <div class="header-main">

                    <div class="container">

                        <a href="#" class="header-logo">
                            Ajooni
                        </a>

                        <div class="header-search-container">

                            <input type="search" name="search" class="search-field" placeholder="Enter your product name..." />

                            <button class="search-btn">
                                <ion-icon name="search-outline"></ion-icon>
                            </button>

                        </div>

                        <div class="header-user-actions">

                            <button class="action-btn">
                                <ion-icon name="person-outline"></ion-icon>
                            </button>

                            <button class="action-btn">
                                <ion-icon name="heart-outline"></ion-icon>
                                <span class="count">0</span>
                            </button>

                            <button class="action-btn">
                                <ion-icon name="bag-handle-outline"></ion-icon>
                                <span class="count">0</span>
                            </button>

                        </div>

                    </div>

                </div>

                <nav class="desktop-navigation-menu">

                    <div class="container">

                        <ul class="desktop-menu-category-list">

                            <li class="menu-category">
                                <a href="#" class="menu-title">Home</a>
                            </li>

                            <li class="menu-category">
                                <a href="#" class="menu-title">Categories</a>

                                <div class="dropdown-panel">

                                    <ul class="dropdown-panel-list">

                                        <li class="menu-title">
                                            <a href="#">Electronics</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Desktop</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Laptop</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Camera</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Tablet</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Headphone</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">
                                                <img src="assets/images/electronics-banner-1.jpg" alt="headphone collection" width="250"
                                                    height="119" />
                                            </a>
                                        </li>

                                    </ul>

                                    <ul class="dropdown-panel-list">

                                        <li class="menu-title">
                                            <a href="#">Men's</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Formal</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Casual</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Sports</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Jacket</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Sunglasses</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">
                                                <img src="assets/images/mens-banner.jpg" alt="men's fashion" width="250" height="119" />
                                            </a>
                                        </li>

                                    </ul>

                                    <ul class="dropdown-panel-list">

                                        <li class="menu-title">
                                            <a href="#">Women's</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Formal</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Casual</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Perfume</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Cosmetics</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Bags</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">
                                                <img src="assets/images/womens-banner.jpg" alt="women's fashion" width="250" height="119" />
                                            </a>
                                        </li>

                                    </ul>

                                    <ul class="dropdown-panel-list">

                                        <li class="menu-title">
                                            <a href="#">Electronics</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Smart Watch</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Smart TV</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Keyboard</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Mouse</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">Microphone</a>
                                        </li>

                                        <li class="panel-list-item">
                                            <a href="#">
                                                <img src="assets/images/electronics-banner-2.jpg" alt="mouse collection" width="250" height="119" />
                                            </a>
                                        </li>

                                    </ul>

                                </div>
                            </li>

                            <li class="menu-category">
                                <a href="#" class="menu-title">Men's</a>

                                <ul class="dropdown-list">

                                    <li class="dropdown-item">
                                        <a href="#">Shirt</a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#">Shorts & Jeans</a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#">Safety Shoes</a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#">Wallet</a>
                                    </li>

                                </ul>
                            </li>

                            <li class="menu-category">
                                <a href="#" class="menu-title">Women's</a>

                                <ul class="dropdown-list">

                                    <li class="dropdown-item">
                                        <a href="#">Dress & Frock</a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#">Earrings</a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#">Necklace</a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#">Makeup Kit</a>
                                    </li>

                                </ul>
                            </li>

                            <li class="menu-category">
                                <a href="#" class="menu-title">Jewelry</a>

                                <ul class="dropdown-list">

                                    <li class="dropdown-item">
                                        <a href="#">Earrings</a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#">Couple Rings</a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#">Necklace</a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#">Bracelets</a>
                                    </li>

                                </ul>
                            </li>

                            <li class="menu-category">
                                <a href="#" class="menu-title">Perfume</a>

                                <ul class="dropdown-list">

                                    <li class="dropdown-item">
                                        <a href="#">Clothes Perfume</a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#">Deodorant</a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#">Flower Fragrance</a>
                                    </li>

                                    <li class="dropdown-item">
                                        <a href="#">Air Freshener</a>
                                    </li>

                                </ul>
                            </li>

                            <li class="menu-category">
                                <a href="#" class="menu-title">Blog</a>
                            </li>

                            <li class="menu-category">
                                <a href="#" class="menu-title">Hot Offers</a>
                            </li>

                        </ul>

                    </div>

                </nav>

                <div class="mobile-bottom-navigation">

                    <button class="action-btn" data-mobile-menu-open-btn>
                        <ion-icon name="menu-outline"></ion-icon>
                    </button>

                    <button class="action-btn">
                        <ion-icon name="bag-handle-outline"></ion-icon>

                        <span class="count">0</span>
                    </button>

                    <button class="action-btn">
                        <ion-icon name="home-outline"></ion-icon>
                    </button>

                    <button class="action-btn">
                        <ion-icon name="heart-outline"></ion-icon>

                        <span class="count">0</span>
                    </button>

                    <button class="action-btn" data-mobile-menu-open-btn>
                        <ion-icon name="grid-outline"></ion-icon>
                    </button>

                </div>

                <nav class="mobile-navigation-menu  has-scrollbar" data-mobile-menu>

                    <div class="menu-top">
                        <h2 class="menu-title">Menu</h2>

                        <button class="menu-close-btn" data-mobile-menu-close-btn>
                            <ion-icon name="close-outline"></ion-icon>
                        </button>
                    </div>

                    <ul class="mobile-menu-category-list">

                        <li class="menu-category">
                            <a href="#" class="menu-title">Home</a>
                        </li>

                        <li class="menu-category">

                            <button class="accordion-menu" data-accordion-btn>
                                <p class="menu-title">Men's</p>

                                <div>
                                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul class="submenu-category-list" data-accordion>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Shirt</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Shorts & Jeans</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Safety Shoes</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Wallet</a>
                                </li>

                            </ul>

                        </li>

                        <li class="menu-category">

                            <button class="accordion-menu" data-accordion-btn>
                                <p class="menu-title">Women's</p>

                                <div>
                                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul class="submenu-category-list" data-accordion>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Dress & Frock</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Earrings</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Necklace</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Makeup Kit</a>
                                </li>

                            </ul>

                        </li>

                        <li class="menu-category">

                            <button class="accordion-menu" data-accordion-btn>
                                <p class="menu-title">Jewelry</p>

                                <div>
                                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul class="submenu-category-list" data-accordion>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Earrings</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Couple Rings</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Necklace</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Bracelets</a>
                                </li>

                            </ul>

                        </li>

                        <li class="menu-category">

                            <button class="accordion-menu" data-accordion-btn>
                                <p class="menu-title">Perfume</p>

                                <div>
                                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul class="submenu-category-list" data-accordion>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Clothes Perfume</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Deodorant</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Flower Fragrance</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="#" class="submenu-title">Air Freshener</a>
                                </li>

                            </ul>

                        </li>

                        <li class="menu-category">
                            <a href="#" class="menu-title">Blog</a>
                        </li>

                        <li class="menu-category">
                            <a href="#" class="menu-title">Hot Offers</a>
                        </li>

                    </ul>

                    <div class="menu-bottom">

                        <ul class="menu-category-list">

                            <li class="menu-category">

                                <button class="accordion-menu" data-accordion-btn>
                                    <p class="menu-title">Language</p>

                                    <ion-icon name="caret-back-outline" class="caret-back"></ion-icon>
                                </button>

                                <ul class="submenu-category-list" data-accordion>

                                    <li class="submenu-category">
                                        <a href="#" class="submenu-title">English</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" class="submenu-title">Espa&ntilde;ol</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" class="submenu-title">Fren&ccedil;h</a>
                                    </li>

                                </ul>

                            </li>

                            <li class="menu-category">
                                <button class="accordion-menu" data-accordion-btn>
                                    <p class="menu-title">Currency</p>
                                    <ion-icon name="caret-back-outline" class="caret-back"></ion-icon>
                                </button>

                                <ul class="submenu-category-list" data-accordion>
                                    <li class="submenu-category">
                                        <a href="#" class="submenu-title">USD &dollar;</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="#" class="submenu-title">EUR &euro;</a>
                                    </li>
                                </ul>
                            </li>

                        </ul>

                        <ul class="menu-social-container">

                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>

                        </ul>

                    </div>

                </nav>

            </header>

            <main>

                <div class="banner">

                    <div class="container">

                        <div class="slider-container has-scrollbar">

                            <div class="slider-item">

                                <img src="assets/images/banner-1.jpg" alt="women's latest fashion sale" class="banner-img" />

                                <div class="banner-content">

                                    <p class="banner-subtitle">Trending item</p>

                                    <h2 class="banner-title">Women's latest fashion sale</h2>

                                    <p class="banner-text">
                                        starting at &dollar; <b>20</b>.00
                                    </p>

                                    <a href="#" class="banner-btn">Shop now</a>

                                </div>

                            </div>

                            <div class="slider-item">

                                <img src="assets/images/banner-2.jpg" alt="modern sunglasses" class="banner-img" />

                                <div class="banner-content">

                                    <p class="banner-subtitle">Trending accessories</p>

                                    <h2 class="banner-title">Modern sunglasses</h2>

                                    <p class="banner-text">
                                        starting at &dollar; <b>15</b>.00
                                    </p>

                                    <a href="#" class="banner-btn">Shop now</a>

                                </div>

                            </div>

                            <div class="slider-item">

                                <img src="assets/images/banner-3.jpg" alt="new fashion summer sale" class="banner-img" />

                                <div class="banner-content">

                                    <p class="banner-subtitle">Sale Offer</p>

                                    <h2 class="banner-title">New fashion summer sale</h2>

                                    <p class="banner-text">
                                        starting at &dollar; <b>29</b>.99
                                    </p>

                                    <a href="#" class="banner-btn">Shop now</a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div class="product-container">

                    <div class="container">




                        <div class="sidebar  has-scrollbar" data-mobile-menu>

                            <div class="sidebar-category">

                                <div class="sidebar-top">
                                    <h2 class="sidebar-title">Category</h2>

                                    <button class="sidebar-close-btn" data-mobile-menu-close-btn>
                                        <ion-icon name="close-outline"></ion-icon>
                                    </button>
                                </div>

                                <ul class="sidebar-menu-category-list">

                                    <li class="sidebar-menu-category">

                                        <button class="sidebar-accordion-menu" data-accordion-btn>

                                            <div class="menu-title-flex">
                                                <img src="assets/images/icons/dress.svg" alt="clothes" width="20" height="20"
                                                    class="menu-title-img" />

                                                <p class="menu-title">Clothes</p>
                                            </div>

                                            <div>
                                                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                            </div>

                                        </button>

                                        <ul class="sidebar-submenu-category-list" data-accordion>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">Shirt</p>
                                                    <data value="300" class="stock" title="Available Stock">300</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">shorts & jeans</p>
                                                    <data value="60" class="stock" title="Available Stock">60</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">jacket</p>
                                                    <data value="50" class="stock" title="Available Stock">50</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">dress & frock</p>
                                                    <data value="87" class="stock" title="Available Stock">87</data>
                                                </a>
                                            </li>

                                        </ul>

                                    </li>

                                    <li class="sidebar-menu-category">

                                        <button class="sidebar-accordion-menu" data-accordion-btn>

                                            <div class="menu-title-flex">
                                                <img src="assets/images/icons/shoes.svg" alt="footwear" class="menu-title-img" width="20"
                                                    height="20" />

                                                <p class="menu-title">Footwear</p>
                                            </div>

                                            <div>
                                                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                            </div>

                                        </button>

                                        <ul class="sidebar-submenu-category-list" data-accordion>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">Sports</p>
                                                    <data value="45" class="stock" title="Available Stock">45</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">Formal</p>
                                                    <data value="75" class="stock" title="Available Stock">75</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">Casual</p>
                                                    <data value="35" class="stock" title="Available Stock">35</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">Safety Shoes</p>
                                                    <data value="26" class="stock" title="Available Stock">26</data>
                                                </a>
                                            </li>

                                        </ul>

                                    </li>

                                    <li class="sidebar-menu-category">

                                        <button class="sidebar-accordion-menu" data-accordion-btn>

                                            <div class="menu-title-flex">
                                                <img src="assets/images/icons/jewelry.svg" alt="clothes" class="menu-title-img" width="20"
                                                    height="20" />

                                                <p class="menu-title">Jewelry</p>
                                            </div>

                                            <div>
                                                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                            </div>

                                        </button>

                                        <ul class="sidebar-submenu-category-list" data-accordion>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">Earrings</p>
                                                    <data value="46" class="stock" title="Available Stock">46</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">Couple Rings</p>
                                                    <data value="73" class="stock" title="Available Stock">73</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">Necklace</p>
                                                    <data value="61" class="stock" title="Available Stock">61</data>
                                                </a>
                                            </li>

                                        </ul>

                                    </li>

                                    <li class="sidebar-menu-category">

                                        <button class="sidebar-accordion-menu" data-accordion-btn>

                                            <div class="menu-title-flex">
                                                <img src="assets/images/icons/perfume.svg" alt="perfume" class="menu-title-img" width="20"
                                                    height="20" />

                                                <p class="menu-title">Perfume</p>
                                            </div>

                                            <div>
                                                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                            </div>

                                        </button>

                                        <ul class="sidebar-submenu-category-list" data-accordion>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">Clothes Perfume</p>
                                                    <data value="12" class="stock" title="Available Stock">12 pcs</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">Deodorant</p>
                                                    <data value="60" class="stock" title="Available Stock">60 pcs</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">jacket</p>
                                                    <data value="50" class="stock" title="Available Stock">50 pcs</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">dress & frock</p>
                                                    <data value="87" class="stock" title="Available Stock">87 pcs</data>
                                                </a>
                                            </li>

                                        </ul>

                                    </li>

                                    <li class="sidebar-menu-category">

                                        <button class="sidebar-accordion-menu" data-accordion-btn>

                                            <div class="menu-title-flex">
                                                <img src="assets/images/icons/cosmetics.svg" alt="cosmetics" class="menu-title-img" width="20"
                                                    height="20" />

                                                <p class="menu-title">Cosmetics</p>
                                            </div>

                                            <div>
                                                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                            </div>

                                        </button>

                                        <ul class="sidebar-submenu-category-list" data-accordion>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">Shampoo</p>
                                                    <data value="68" class="stock" title="Available Stock">68</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">Sunscreen</p>
                                                    <data value="46" class="stock" title="Available Stock">46</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">Body Wash</p>
                                                    <data value="79" class="stock" title="Available Stock">79</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">Makeup Kit</p>
                                                    <data value="23" class="stock" title="Available Stock">23</data>
                                                </a>
                                            </li>

                                        </ul>

                                    </li>

                                    <li class="sidebar-menu-category">

                                        <button class="sidebar-accordion-menu" data-accordion-btn>

                                            <div class="menu-title-flex">
                                                <img src="assets/images/icons/glasses.svg" alt="glasses" class="menu-title-img" width="20"
                                                    height="20" />

                                                <p class="menu-title">Glasses</p>
                                            </div>

                                            <div>
                                                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                            </div>

                                        </button>

                                        <ul class="sidebar-submenu-category-list" data-accordion>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">Sunglasses</p>
                                                    <data value="50" class="stock" title="Available Stock">50</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">Lenses</p>
                                                    <data value="48" class="stock" title="Available Stock">48</data>
                                                </a>
                                            </li>

                                        </ul>

                                    </li>

                                    <li class="sidebar-menu-category">

                                        <button class="sidebar-accordion-menu" data-accordion-btn>

                                            <div class="menu-title-flex">
                                                <img src="assets/images/icons/bag.svg" alt="bags" class="menu-title-img" width="20" height="20" />

                                                <p class="menu-title">Bags</p>
                                            </div>

                                            <div>
                                                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                            </div>

                                        </button>

                                        <ul class="sidebar-submenu-category-list" data-accordion>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">Shopping Bag</p>
                                                    <data value="62" class="stock" title="Available Stock">62</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">Gym Backpack</p>
                                                    <data value="35" class="stock" title="Available Stock">35</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">Purse</p>
                                                    <data value="80" class="stock" title="Available Stock">80</data>
                                                </a>
                                            </li>

                                            <li class="sidebar-submenu-category">
                                                <a href="#" class="sidebar-submenu-title">
                                                    <p class="product-name">Wallet</p>
                                                    <data value="75" class="stock" title="Available Stock">75</data>
                                                </a>
                                            </li>

                                        </ul>

                                    </li>

                                </ul>

                            </div>

                            <div class="product-showcase">

                                <h3 class="showcase-heading">best sellers</h3>

                                <div class="showcase-wrapper">

                                    <div class="showcase-container">

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                <img src="assets/images/products/1.jpg" alt="baby fabric shoes" width="75" height="75"
                                                    class="showcase-img" />
                                            </a>

                                            <div class="showcase-content">

                                                <a href="#">
                                                    <h4 class="showcase-title">baby fabric shoes</h4>
                                                </a>

                                                <div class="showcase-rating">
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                </div>

                                                <div class="price-box">
                                                    <del>$5.00</del>
                                                    <p class="price">$4.00</p>
                                                </div>

                                            </div>

                                        </div>

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                <img src="assets/images/products/2.jpg" alt="men's hoodies t-shirt" class="showcase-img"
                                                    width="75" height="75" />
                                            </a>

                                            <div class="showcase-content">

                                                <a href="#">
                                                    <h4 class="showcase-title">men's hoodies t-shirt</h4>
                                                </a>
                                                <div class="showcase-rating">
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star-half-outline"></ion-icon>
                                                </div>

                                                <div class="price-box">
                                                    <del>$17.00</del>
                                                    <p class="price">$7.00</p>
                                                </div>

                                            </div>

                                        </div>

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                <img src="assets/images/products/3.jpg" alt="girls t-shirt" class="showcase-img" width="75"
                                                    height="75" />
                                            </a>

                                            <div class="showcase-content">

                                                <a href="#">
                                                    <h4 class="showcase-title">girls t-shirt</h4>
                                                </a>
                                                <div class="showcase-rating">
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star-half-outline"></ion-icon>
                                                </div>

                                                <div class="price-box">
                                                    <del>$5.00</del>
                                                    <p class="price">$3.00</p>
                                                </div>

                                            </div>

                                        </div>

                                        <div class="showcase">

                                            <a href="#" class="showcase-img-box">
                                                <img src="assets/images/products/4.jpg" alt="woolen hat for men" class="showcase-img" width="75"
                                                    height="75" />
                                            </a>

                                            <div class="showcase-content">

                                                <a href="#">
                                                    <h4 class="showcase-title">woolen hat for men</h4>
                                                </a>
                                                <div class="showcase-rating">
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                </div>

                                                <div class="price-box">
                                                    <del>$15.00</del>
                                                    <p class="price">$12.00</p>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>


                        <div class="product-box">


                            <div class="product-main">

                                <h2 class="title">New Products</h2>

                                <div class="product-grid">

                                    {products.map((product) => (

                                        <div class="showcase">

                                            <div class="showcase-banner">

                                                <img src="assets/images/products/shirt-1.jpg" alt="Pure Garment Dyed Cotton Shirt" class="product-img default"
                                                    width="300" />
                                                <img src="assets/images/products/shirt-2.jpg" alt="Pure Garment Dyed Cotton Shirt" class="product-img hover"
                                                    width="300" />

                                                <p class="showcase-badge">15%</p>

                                                <div class="showcase-actions">

                                                    <button class="btn-action">
                                                        <ion-icon name="heart-outline"></ion-icon>
                                                    </button>

                                                    <button class="btn-action">
                                                        <ion-icon name="eye-outline"></ion-icon>
                                                    </button>

                                                    <button class="btn-action">
                                                        <ion-icon name="repeat-outline"></ion-icon>
                                                    </button>

                                                    <button class="btn-action">
                                                        <ion-icon name="bag-add-outline"></ion-icon>
                                                    </button>

                                                </div>

                                            </div>

                                            <div class="showcase-content">

                                                <a href="#" class="showcase-category">User: {product.userId}/Product: {product.id}</a>

                                                <a href="#">
                                                    <h3 class="showcase-title">{product.score}</h3>
                                                </a>

                                                <div class="showcase-rating">
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star-outline"></ion-icon>
                                                    <ion-icon name="star-outline"></ion-icon>
                                                </div>

                                                <div class="price-box">
                                                    <p class="price">$48.00</p>
                                                    <del>$75.00</del>
                                                </div>

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div class="product-container">
                    <p>test test test test test test</p>
                    <p>{message}</p>
                    {/* <ul>
                        {products.map((product) => (
                            <li key={product.userId}>{product.title}</li>
                        ))}
                    </ul> */}
                </div>

                <div class="blog">

                    <div class="container">

                        <div class="blog-container has-scrollbar">

                            <div class="blog-card">

                                <a href="#">
                                    <img src="assets/images/blog-1.jpg" alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" class="blog-banner" />
                                </a>

                                <div class="blog-content">

                                    <a href="#" class="blog-category">Fashion</a>

                                    <a href="#">
                                        <h3 class="blog-title">Clothes Retail KPIs 2021 Guide for Clothes Executives.</h3>
                                    </a>

                                    <p class="blog-meta">
                                        By <cite>Mr Admin</cite> / <time datetime="2022-04-06">Apr 06, 2022</time>
                                    </p>

                                </div>

                            </div>

                            <div class="blog-card">

                                <a href="#">
                                    <img src="assets/images/blog-2.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
                                        class="blog-banner" width="300" />
                                </a>

                                <div class="blog-content">

                                    <a href="#" class="blog-category">Clothes</a>

                                    <h3>
                                        <a href="#" class="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
                                    </h3>

                                    <p class="blog-meta">
                                        By <cite>Mr Robin</cite> / <time datetime="2022-01-18">Jan 18, 2022</time>
                                    </p>

                                </div>

                            </div>

                            <div class="blog-card">

                                <a href="#">
                                    <img src="assets/images/blog-3.jpg" alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
                                        class="blog-banner" width="300" />
                                </a>

                                <div class="blog-content">

                                    <a href="#" class="blog-category">Shoes</a>

                                    <h3>
                                        <a href="#" class="blog-title">EBT vendors: Claim Your Share of SNAP Online Revenue.</a>
                                    </h3>

                                    <p class="blog-meta">
                                        By <cite>Mr Selsa</cite> / <time datetime="2022-02-10">Feb 10, 2022</time>
                                    </p>

                                </div>

                            </div>

                            <div class="blog-card">

                                <a href="#">
                                    <img src="assets/images/blog-4.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
                                        class="blog-banner" width="300" />
                                </a>

                                <div class="blog-content">

                                    <a href="#" class="blog-category">Electronics</a>

                                    <h3>
                                        <a href="#" class="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
                                    </h3>

                                    <p class="blog-meta">
                                        By <cite>Mr Pawar</cite> / <time datetime="2022-03-15">Mar 15, 2022</time>
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </main>

            <footer>

                <div class="footer-category">

                    <div class="container">

                        <h2 class="footer-category-title">Brand directory</h2>

                        <div class="footer-category-box">

                            <h3 class="category-box-title">Fashion :</h3>

                            <a href="#" class="footer-category-link">T-shirt</a>
                            <a href="#" class="footer-category-link">Shirts</a>
                            <a href="#" class="footer-category-link">shorts & jeans</a>
                            <a href="#" class="footer-category-link">jacket</a>
                            <a href="#" class="footer-category-link">dress & frock</a>
                            <a href="#" class="footer-category-link">innerwear</a>
                            <a href="#" class="footer-category-link">hosiery</a>

                        </div>

                        <div class="footer-category-box">
                            <h3 class="category-box-title">footwear :</h3>

                            <a href="#" class="footer-category-link">sport</a>
                            <a href="#" class="footer-category-link">formal</a>
                            <a href="#" class="footer-category-link">Boots</a>
                            <a href="#" class="footer-category-link">casual</a>
                            <a href="#" class="footer-category-link">cowboy shoes</a>
                            <a href="#" class="footer-category-link">safety shoes</a>
                            <a href="#" class="footer-category-link">Party wear shoes</a>
                            <a href="#" class="footer-category-link">Branded</a>
                            <a href="#" class="footer-category-link">Firstcopy</a>
                            <a href="#" class="footer-category-link">Long shoes</a>
                        </div>

                        <div class="footer-category-box">
                            <h3 class="category-box-title">jewellery :</h3>

                            <a href="#" class="footer-category-link">Necklace</a>
                            <a href="#" class="footer-category-link">Earrings</a>
                            <a href="#" class="footer-category-link">Couple rings</a>
                            <a href="#" class="footer-category-link">Pendants</a>
                            <a href="#" class="footer-category-link">Crystal</a>
                            <a href="#" class="footer-category-link">Bangles</a>
                            <a href="#" class="footer-category-link">bracelets</a>
                            <a href="#" class="footer-category-link">nosepin</a>
                            <a href="#" class="footer-category-link">chain</a>
                            <a href="#" class="footer-category-link">Earrings</a>
                            <a href="#" class="footer-category-link">Couple rings</a>
                        </div>

                        <div class="footer-category-box">
                            <h3 class="category-box-title">cosmetics :</h3>

                            <a href="#" class="footer-category-link">Shampoo</a>
                            <a href="#" class="footer-category-link">Bodywash</a>
                            <a href="#" class="footer-category-link">Facewash</a>
                            <a href="#" class="footer-category-link">makeup kit</a>
                            <a href="#" class="footer-category-link">liner</a>
                            <a href="#" class="footer-category-link">lipstick</a>
                            <a href="#" class="footer-category-link">prefume</a>
                            <a href="#" class="footer-category-link">Body soap</a>
                            <a href="#" class="footer-category-link">scrub</a>
                            <a href="#" class="footer-category-link">hair gel</a>
                            <a href="#" class="footer-category-link">hair colors</a>
                            <a href="#" class="footer-category-link">hair dye</a>
                            <a href="#" class="footer-category-link">sunscreen</a>
                            <a href="#" class="footer-category-link">skin loson</a>
                            <a href="#" class="footer-category-link">liner</a>
                            <a href="#" class="footer-category-link">lipstick</a>
                        </div>

                    </div>

                </div>

                <div class="footer-nav">

                    <div class="container">

                        <ul class="footer-nav-list">

                            <li class="footer-nav-item">
                                <h2 class="nav-title">Popular Categories</h2>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Fashion</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Electronic</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Cosmetic</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Health</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Watches</a>
                            </li>

                        </ul>

                        <ul class="footer-nav-list">

                            <li class="footer-nav-item">
                                <h2 class="nav-title">Products</h2>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Prices drop</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">New products</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Best sales</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Contact us</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Sitemap</a>
                            </li>

                        </ul>

                        <ul class="footer-nav-list">

                            <li class="footer-nav-item">
                                <h2 class="nav-title">Our Company</h2>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Delivery</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Legal Notice</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Terms and conditions</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">About us</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Secure payment</a>
                            </li>

                        </ul>

                        <ul class="footer-nav-list">

                            <li class="footer-nav-item">
                                <h2 class="nav-title">Services</h2>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Prices drop</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">New products</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Best sales</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Contact us</a>
                            </li>

                            <li class="footer-nav-item">
                                <a href="#" class="footer-nav-link">Sitemap</a>
                            </li>

                        </ul>

                        <ul class="footer-nav-list">

                            <li class="footer-nav-item">
                                <h2 class="nav-title">Contact</h2>
                            </li>

                            <li class="footer-nav-item flex">
                                <div class="icon-box">
                                    <ion-icon name="location-outline"></ion-icon>
                                </div>

                                <address class="content">
                                    1266 Ludhiana
                                    Punjab, India
                                </address>
                            </li>

                            <li class="footer-nav-item flex">
                                <div class="icon-box">
                                    <ion-icon name="call-outline"></ion-icon>
                                </div>

                                <a href="tel:+607936-8058" class="footer-nav-link">(000) 000-0000</a>
                            </li>

                            <li class="footer-nav-item flex">
                                <div class="icon-box">
                                    <ion-icon name="mail-outline"></ion-icon>
                                </div>

                                <a href="mailto:example@gmail.com" class="footer-nav-link">example@gmail.com</a>
                            </li>

                        </ul>

                        <ul class="footer-nav-list">

                            <li class="footer-nav-item">
                                <h2 class="nav-title">Follow Us</h2>
                            </li>

                            <li>
                                <ul class="social-link">

                                    <li class="footer-nav-item">
                                        <a href="#" class="footer-nav-link">
                                            <ion-icon name="logo-facebook"></ion-icon>
                                        </a>
                                    </li>

                                    <li class="footer-nav-item">
                                        <a href="#" class="footer-nav-link">
                                            <ion-icon name="logo-twitter"></ion-icon>
                                        </a>
                                    </li>

                                    <li class="footer-nav-item">
                                        <a href="#" class="footer-nav-link">
                                            <ion-icon name="logo-linkedin"></ion-icon>
                                        </a>
                                    </li>

                                    <li class="footer-nav-item">
                                        <a href="#" class="footer-nav-link">
                                            <ion-icon name="logo-instagram"></ion-icon>
                                        </a>
                                    </li>

                                </ul>
                            </li>

                        </ul>

                    </div>

                </div>

                <div class="footer-bottom">

                    <div class="container">

                        <img src="assets/images/payment.png" alt="payment method" class="payment-img" />

                        <p class="copyright">
                            Copyright &copy; <a href="#">Ajooni</a> all rights reserved.
                        </p>

                    </div>

                </div>

            </footer>
        </div>
    );
}

export default App;