import React from 'react'
import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '@mui/material/Button';
import '../css/SehiriciNakliyat.css'

const Slider = SliderImport.default || SliderImport;

function SehiriciNakliyat() {
    return (
        <div>

            <div className='KombiBakimiImg'>

                <div className='KombiBakimiTexts'>

                    <h1 className='KombiBakimiH1'>
                        Şehir İçi Nakliyat
                    </h1>

                    <hr className='KombiBakimiHr' />

                    <Button
                        variant="contained"
                        onClick={() => window.location.href = "tel:905413830670"}
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


            <div className='KombiBakimiDiv'>

                <h1 className='KombiBakimiH1'>
                    Konya Profesyonel Şehir İçi Nakliyat Hizmeti
                </h1>

                <hr className='KombiBakimiHr' />

                <p style={{ marginTop: '10px', marginBottom: '15px' }}>

                    <b>Muharrem Arslan Evden Eve Taşımacılık</b> olarak Konya genelinde şehir içi
                    nakliyat hizmetleri sunuyoruz. Ev, ofis ve iş yeri taşımacılığı ihtiyaçlarınızda
                    eşyalarınızın güvenli, hızlı ve özenli bir şekilde yeni adresinize ulaştırılması
                    için profesyonel taşıma hizmeti sağlıyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Şehir içerisinde gerçekleştirilen taşınma işlemlerinde adreslerin birbirine yakın
                    olması kadar taşıma sürecinin doğru planlanması da büyük önem taşımaktadır.
                    Taşınacak eşyaların miktarı, bina özellikleri, kat durumu, merdivenlerin uygunluğu
                    ve taşıma koşulları değerlendirilerek her müşterimiz için uygun bir taşıma planı
                    oluşturuyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Gerçekleştirdiğimiz <b>şehir içi nakliyat</b> hizmetlerinde eşyalarınızın güvenliği
                    öncelikli olarak ele alınır. Mobilya, beyaz eşya, elektronik cihazlar, cam ürünler
                    ve diğer hassas eşyalarınız taşıma öncesinde uygun şekilde hazırlanır ve gerekli
                    durumlarda paketleme ve ambalajlama işlemleri gerçekleştirilir.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Taşıma sırasında eşyalarınızın yüklenmesi, araç içerisinde düzenli şekilde
                    yerleştirilmesi ve yeni adresinizde indirilmesi aşamalarında dikkatli ve kontrollü
                    bir çalışma gerçekleştiriyoruz. Amacımız şehir içerisindeki taşınma işleminizi
                    mümkün olduğunca hızlı ve sorunsuz şekilde tamamlamaktır.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>Yüksek katlı binalarda</b> ve uygun bina koşullarının bulunduğu adreslerde
                    asansörlü nakliyat hizmetinden de yararlanıyoruz. Büyük ve ağır eşyaların bina
                    içerisinde taşınmasının zor olduğu durumlarda asansörlü taşıma yöntemi, taşıma
                    sürecinin daha kolay ve güvenli şekilde gerçekleştirilmesine yardımcı olmaktadır.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Şehir içi taşımacılık hizmetimiz kapsamında yalnızca ev eşyalarını değil,
                    <b> ofis, büro, iş yeri ve parça eşyalarınızı</b> da taşıyoruz. Taşınacak eşyaların
                    özelliklerine ve miktarına göre uygun araç ve ekipman belirlenerek taşıma işlemi
                    planlı bir şekilde gerçekleştiriliyor.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Taşınma sürecinin müşterilerimiz açısından mümkün olduğunca rahat geçmesini
                    önemsiyoruz. Bu nedenle taşıma öncesinden başlayarak eşyaların yeni adresinize
                    ulaştırılmasına kadar olan tüm süreçte düzenli, dikkatli ve müşteri memnuniyeti
                    odaklı bir çalışma anlayışıyla hareket ediyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>Muharrem Arslan Evden Eve Taşımacılık</b> olarak Konya şehir içi nakliyat
                    hizmetlerinde güvenilir taşıma, özenli çalışma ve zamanında hizmet anlayışını
                    ön planda tutuyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>
                        Konya şehir içi nakliyat hizmeti hakkında detaylı bilgi almak ve taşınma
                        planınız için bizimle iletişime geçebilirsiniz.
                    </b>

                </p>

            </div>


            <div className="KombiBakimiSlider">

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

                    <div className="KombiSlide">
                        <span>01</span>
                        <h2>Ev Taşımacılığı</h2>
                        <p>
                            Ev eşyalarınızı özenle hazırlıyor, güvenli şekilde
                            yeni adresinize taşıyarak taşınma sürecinizi
                            kolaylaştırıyoruz.
                        </p>
                    </div>

                    <div className="KombiSlide">
                        <span>02</span>
                        <h2>Ofis Taşımacılığı</h2>
                        <p>
                            Ofis ve bürolarınızın taşınma işlemlerini planlı
                            şekilde gerçekleştirerek eşyalarınızın güvenli
                            şekilde taşınmasını sağlıyoruz.
                        </p>
                    </div>

                    <div className="KombiSlide">
                        <span>03</span>
                        <h2>Paketleme ve Ambalajlama</h2>
                        <p>
                            Mobilya, elektronik eşya, cam ve hassas ürünlerinizi
                            taşıma sırasında korunmaları için uygun şekilde
                            paketliyoruz.
                        </p>
                    </div>

                    <div className="KombiSlide">
                        <span>04</span>
                        <h2>Asansörlü Taşımacılık</h2>
                        <p>
                            Uygun bina koşullarında asansörlü taşıma yönteminden
                            yararlanarak yüksek katlı binalarda daha kolay ve
                            güvenli taşıma gerçekleştiriyoruz.
                        </p>
                    </div>

                    <div className="KombiSlide">
                        <span>05</span>
                        <h2>Parça Eşya Taşımacılığı</h2>
                        <p>
                            Az miktardaki veya belirli eşyalarınızın taşınması
                            için ihtiyaçlarınıza uygun parça eşya taşıma
                            hizmeti sunuyoruz.
                        </p>
                    </div>

                    <div className="KombiSlide">
                        <span>06</span>
                        <h2>Güvenli Teslimat</h2>
                        <p>
                            Eşyalarınızı taşıma sürecinin her aşamasında dikkatli
                            şekilde koruyarak yeni adresinize güvenli bir şekilde
                            ulaştırıyoruz.
                        </p>
                    </div>

                </Slider>

            </div>


            <div className="KombiBakimiInfo">

                <div className="KombiBakimiInfoBox">

                    <h2>Güvenli Taşıma</h2>

                    <p>
                        Eşyalarınızın yükleme, taşıma ve indirme aşamalarında
                        güvenliğine dikkat ederek özenli bir taşıma hizmeti
                        sunuyoruz.
                    </p>

                </div>


                <div className="KombiBakimiInfoBox">

                    <h2>Hızlı Hizmet</h2>

                    <p>
                        Şehir içindeki taşınma işlemlerinizi doğru planlama
                        sayesinde mümkün olduğunca hızlı ve düzenli şekilde
                        gerçekleştiriyoruz.
                    </p>

                </div>


                <div className="KombiBakimiInfoBox">

                    <h2>Müşteri Memnuniyeti</h2>

                    <p>
                        Taşınma sürecinin her aşamasında müşterilerimizin
                        ihtiyaçlarını dikkate alıyor ve memnuniyet odaklı
                        hizmet sunuyoruz.
                    </p>

                </div>

            </div>

        </div>
    )
}

export default SehiriciNakliyat