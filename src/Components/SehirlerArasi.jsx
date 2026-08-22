import React from 'react'
import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '@mui/material/Button';
import '../css/SehirlerArasi.css'

const Slider = SliderImport.default || SliderImport;

function SehirlerArasi() {
    return (
        <div>

            {/* HERO */}

            <div className='PetekBakimiImg'>

                <div className='PetekBakimiTexts'>

                    <h1 className='PetekBakimiH1'>
                        Şehirler Arası Nakliyat
                    </h1>

                    <hr className='PetekBakimiHr' />

                    <Button
                        onClick={() => window.location.href = "tel:905413830670"}
                        variant="contained"
                        sx={{
                            marginTop: '13px',
                            backgroundColor: "black",
                            fontFamily: 'arial',
                            color: "white",
                            "&:hover": {
                                backgroundColor: "#88b0c3"
                            }
                        }}
                    >
                        Nakliyat İçin Tıklayın
                    </Button>

                </div>

            </div>


            {/* ANA AÇIKLAMA */}

            <div className='PetekBakimiDiv'>

                <h1 className='PetekBakimiH1'>
                    Profesyonel Şehirler Arası Nakliyat Hizmeti
                </h1>

                <hr className='PetekBakimiHr' />

                <p style={{ marginTop: '10px', marginBottom: '15px' }}>

                    <b>Muharrem Arslan Evden Eve Taşımacılık</b> olarak Konya çıkışlı şehirler arası
                    nakliyat hizmetleri sunuyoruz. Farklı bir şehre taşınacak müşterilerimizin
                    eşyalarını güvenli, özenli ve planlı bir şekilde yeni adreslerine ulaştırmak
                    için profesyonel taşımacılık hizmeti sağlıyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Şehirler arası taşınma işlemleri, şehir içi taşımacılığa göre daha detaylı
                    bir planlama gerektirmektedir. Taşınacak eşyaların miktarı, mevcut adresin
                    özellikleri, gidilecek şehir, bina koşulları ve taşıma mesafesi değerlendirilerek
                    müşterilerimizin ihtiyaçlarına uygun bir taşıma planı oluşturuyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Gerçekleştirdiğimiz <b>şehirler arası evden eve nakliyat</b> hizmetlerinde
                    eşyalarınızın güvenliği öncelikli olarak ele alınır. Mobilyalar, beyaz eşyalar,
                    elektronik cihazlar, cam ürünler ve diğer hassas eşyalar taşıma öncesinde
                    uygun şekilde hazırlanarak uzun mesafeli yolculuk için güvenli hale getirilir.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Taşıma öncesinde gerekli durumlarda <b>paketleme ve ambalajlama</b> işlemleri
                    gerçekleştiriyoruz. Eşyaların türüne ve hassasiyetine göre uygun ambalajlama
                    yöntemleri kullanılarak yükleme sırasında ve yolculuk boyunca korunmalarına
                    özen gösteriyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Eşyalarınızın araca yüklenmesi sırasında araç içerisinde düzenli ve güvenli
                    şekilde yerleştirilmesine dikkat ediyoruz. Uzun mesafeli taşımacılıkta
                    eşyaların güvenli bir şekilde muhafaza edilmesi büyük önem taşıdığından,
                    yükleme ve indirme işlemlerini kontrollü şekilde gerçekleştiriyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>Konya'dan Türkiye'nin farklı şehirlerine</b> taşınma ihtiyaçlarınızda
                    şehirler arası nakliyat hizmetimizden yararlanabilirsiniz. Ev taşımacılığının
                    yanı sıra ofis, büro, iş yeri ve parça eşya taşımacılığı gibi farklı taşıma
                    ihtiyaçlarına yönelik çözümler de sunuyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Yüksek katlı binalarda ve uygun bina koşullarının bulunduğu adreslerde
                    <b> asansörlü nakliyat</b> hizmetinden de yararlanarak eşyaların daha hızlı
                    ve güvenli şekilde taşınmasına yardımcı oluyoruz. Taşıma yöntemini bina
                    koşullarını ve eşyaların özelliklerini dikkate alarak belirliyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Şehirler arası taşımacılıkta amacımız yalnızca eşyalarınızı bir şehirden
                    diğerine götürmek değil, taşınma sürecinin tamamını müşterilerimiz için
                    mümkün olduğunca kolay ve sorunsuz hale getirmektir. Bu nedenle taşıma
                    öncesinden teslimata kadar her aşamada planlı ve dikkatli çalışıyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>Muharrem Arslan Evden Eve Taşımacılık</b> olarak Konya şehirler arası
                    nakliyat hizmetlerinde güvenli taşıma, özenli paketleme, planlı çalışma
                    ve müşteri memnuniyetini ön planda tutuyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>
                        Şehirler arası nakliyat hizmeti hakkında detaylı bilgi almak ve
                        taşınma planınız için bizimle iletişime geçebilirsiniz.
                    </b>

                </p>

            </div>


            {/* BİLGİ KARTLARI */}

            <div className="PetekBakimiInfo">

                <div className="PetekBakimiInfoBox">

                    <span className="PetekInfoNumber">01</span>

                    <h2>Güvenli Taşıma</h2>

                    <p>
                        Eşyalarınızı uzun mesafeli taşıma koşullarına uygun şekilde
                        hazırlıyor ve güvenli bir şekilde yeni adresinize ulaştırıyoruz.
                    </p>

                </div>


                <div className="PetekBakimiInfoBox">

                    <span className="PetekInfoNumber">02</span>

                    <h2>Özenli Paketleme</h2>

                    <p>
                        Mobilya, beyaz eşya, elektronik ve hassas eşyalarınızı uygun
                        ambalajlama yöntemleriyle taşıma sürecine hazırlıyoruz.
                    </p>

                </div>


                <div className="PetekBakimiInfoBox">

                    <span className="PetekInfoNumber">03</span>

                    <h2>Planlı Teslimat</h2>

                    <p>
                        Taşıma sürecini önceden planlayarak eşyalarınızın güvenli ve
                        düzenli şekilde yeni adresinize ulaştırılmasına önem veriyoruz.
                    </p>

                </div>

            </div>


            {/* NEDEN ŞEHİRLER ARASI NAKLİYAT */}

            <section className="PetekNeden">

                <div className="PetekNedenText">

                    <span className="PetekSectionNumber">
                        ŞEHİRLER ARASI NAKLİYAT
                    </span>

                    <h2>
                        Neden Profesyonel Nakliyat Hizmeti?
                    </h2>

                    <hr />

                    <p>
                        Şehir değiştirmek kapsamlı bir taşınma süreci gerektirir.
                        Eşyaların doğru şekilde paketlenmesi, araca güvenli şekilde
                        yerleştirilmesi ve uzun mesafeli yolculuk boyunca korunması
                        için profesyonel taşıma planlaması büyük önem taşır.
                    </p>

                </div>


                <div className="PetekNedenCards">

                    <div className="PetekNedenCard">

                        <span className="PetekCardNumber">
                            01
                        </span>

                        <div>

                            <h3>Uzun Mesafe Taşıma</h3>

                            <p>
                                Eşyalarınızı farklı şehirler arasında güvenli şekilde
                                taşıyarak yeni adresinize ulaştırıyoruz.
                            </p>

                        </div>

                    </div>


                    <div className="PetekNedenCard">

                        <span className="PetekCardNumber">
                            02
                        </span>

                        <div>

                            <h3>Güvenli Paketleme</h3>

                            <p>
                                Uzun yolculuk sırasında eşyalarınızın korunması için
                                uygun paketleme ve ambalajlama gerçekleştiriyoruz.
                            </p>

                        </div>

                    </div>


                    <div className="PetekNedenCard">

                        <span className="PetekCardNumber">
                            03
                        </span>

                        <div>

                            <h3>Düzenli Yükleme</h3>

                            <p>
                                Eşyalarınızın araç içerisinde güvenli ve düzenli
                                şekilde yerleştirilmesine dikkat ediyoruz.
                            </p>

                        </div>

                    </div>


                    <div className="PetekNedenCard">

                        <span className="PetekCardNumber">
                            04
                        </span>

                        <div>

                            <h3>Güvenli Teslimat</h3>

                            <p>
                                Taşıma sürecinin sonunda eşyalarınızı yeni adresinize
                                güvenli ve kontrollü şekilde ulaştırıyoruz.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* SLIDER */}

            <div className="PetekBakimiSlider">

                <Slider
                    dots={true}
                    infinite={true}
                    speed={600}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={3500}
                    arrows={true}
                >

                    <div className="PetekSlide">

                        <span>01</span>

                        <h2>Taşıma Planlaması</h2>

                        <p>
                            Taşınacak eşyalar, adresler ve taşıma koşulları
                            değerlendirilerek şehirler arası nakliyat süreci
                            planlanır.
                        </p>

                    </div>


                    <div className="PetekSlide">

                        <span>02</span>

                        <h2>Paketleme ve Ambalajlama</h2>

                        <p>
                            Eşyalarınızın türüne uygun ambalajlama yapılarak
                            uzun mesafeli taşımacılık sırasında korunmaları
                            sağlanır.
                        </p>

                    </div>


                    <div className="PetekSlide">

                        <span>03</span>

                        <h2>Güvenli Yükleme</h2>

                        <p>
                            Eşyalarınız taşıma aracına dikkatli şekilde yüklenir
                            ve araç içerisinde güvenli şekilde yerleştirilir.
                        </p>

                    </div>


                    <div className="PetekSlide">

                        <span>04</span>

                        <h2>Şehirler Arası Taşıma</h2>

                        <p>
                            Eşyalarınız belirlenen güzergâh üzerinden güvenli
                            şekilde taşınarak yeni şehrinizdeki adresinize
                            ulaştırılır.
                        </p>

                    </div>


                    <div className="PetekSlide">

                        <span>05</span>

                        <h2>Asansörlü Nakliyat</h2>

                        <p>
                            Uygun bina koşullarında asansörlü taşıma yönteminden
                            yararlanarak eşyaların daha kolay ve güvenli şekilde
                            taşınmasına yardımcı oluyoruz.
                        </p>

                    </div>


                    <div className="PetekSlide">

                        <span>06</span>

                        <h2>Güvenli Teslimat</h2>

                        <p>
                            Eşyalarınızı yeni adresinizde dikkatli şekilde
                            indirerek taşınma işleminin güvenli bir şekilde
                            tamamlanmasına özen gösteriyoruz.
                        </p>

                    </div>

                </Slider>

            </div>


            {/* ALT CTA */}

            <div className="PetekCTA">

                <h2>
                    Şehir Değiştirerek mi Taşınıyorsunuz?
                </h2>

                <p>
                    Konya çıkışlı şehirler arası nakliyat hizmetimiz hakkında
                    bilgi almak ve taşınma planınız için bizimle iletişime
                    geçebilirsiniz.
                </p>

                <Button
                    variant="contained"
                    onClick={() => window.location.href = "tel:905413830670"}
                    sx={{
                        marginTop: '15px',
                        backgroundColor: "black",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "#88b0c3"
                        }
                    }}
                >
                    Teklif Al
                </Button>

            </div>

        </div>
    )
}

export default SehirlerArasi