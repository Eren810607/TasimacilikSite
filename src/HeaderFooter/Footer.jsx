import React from 'react';
import '../css/footer.css';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import logo from "../images/primelogo.png";

import { Link } from "react-router-dom";


function Footer() {

    return (
        <footer className="Footer">

            {/* SOL - LOGO VE TANITIM */}
            <div className="FooterPromotion">

                <div className="FooterBrand">

                    <img
                        className="FooterLogo"
                        src={logo}
                        alt="Muharrem Arslan Evden Eve Taşımacılık Logo"
                    />

                    <h2 className="FooterPromTitle">
                        Muharrem Arslan
                    </h2>

                </div>

                <hr className="FooterPromHr" />

                <p className="PromotionText">
                    Muharrem Arslan Evden Eve Taşımacılık olarak eşyalarınızı
                    güvenle, zamanında ve özenle yeni adresinize ulaştırıyoruz.
                    Şehir içi ve şehirler arası nakliyede profesyonel hizmet
                    sunuyoruz.
                </p>

            </div>


            {/* ORTA - HIZLI BAĞLANTILAR */}
            <div className="FooterLinksDiv">

                <h2 className="FooterPromTitle">
                    Hızlı Bağlantılar
                </h2>

                <hr className="FooterLinksHr" />

                <ul className="FooterList">

                    <li className="FooterLinks">
                        <ArrowRightIcon />
                        <Link to="/">
                            Anasayfa
                        </Link>
                    </li>

                    <li className="FooterLinks">
                        <ArrowRightIcon />
                        <Link to="/hakkimizda">
                            Hakkımızda
                        </Link>
                    </li>

                    <li className="FooterLinks">
                        <ArrowRightIcon />
                        <Link to="/Evden-eve-nakliyat">
                            Evden Eve Nakliyat
                        </Link>
                    </li>

                    <li className="FooterLinks">
                        <ArrowRightIcon />
                        <Link to="/Sehir-ici-nakliyat">
                            Şehir İçi Nakliyat
                        </Link>
                    </li>

                    <li className="FooterLinks">
                        <ArrowRightIcon />
                        <Link to="/Sehirler-arasi-nakliyat">
                            Şehirler Arası Nakliyat
                        </Link>
                    </li>

                </ul>

            </div>


            {/* SAĞ - HİZMETLER */}
            <div className="FooterContact">

                <h2 className="FooterPromTitle">
                    Hizmetlerimiz
                </h2>

                <hr className="FooterLinksHr" />

                <ul className="FooterList">

                    <li className="FooterSupportLinks">
                        <ArrowRightIcon />
                        <Link to="/Asansörlü-tasimacilik">
                            Asansörlü Taşımacılık
                        </Link>
                    </li>

                    <li className="FooterSupportLinks">
                        <ArrowRightIcon />
                        <Link to="/Paketleme-ve-ambalajlama">
                            Paketleme ve Ambalajlama
                        </Link>
                    </li>

                    <li className="FooterSupportLinks">
                        <ArrowRightIcon />
                        <Link to="/Evden-eve-nakliyat">
                            Evden Eve Taşımacılık
                        </Link>
                    </li>

                    <li className="FooterSupportLinks">
                        <ArrowRightIcon />
                        <Link to="/Sehir-ici-nakliyat">
                            Şehir İçi Taşımacılık
                        </Link>
                    </li>

                    <li className="FooterSupportLinks">
                        <ArrowRightIcon />
                        <Link to="/Sehirler-arasi-nakliyat">
                            Şehirler Arası Taşımacılık
                        </Link>
                    </li>

                </ul>

            </div>


            {/* ALT */}
            <div className="FooterEndHr">

                <hr />

                <p>
                    © 2026 Muharrem Arslan Evden Eve Taşımacılık |
                    <b> Design By Eren Kaya</b>
                </p>

            </div>

        </footer>
    );
}


export default Footer;