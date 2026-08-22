import React from 'react'
import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '@mui/material/Button';
import '../css/AsansörlüTasimacilik.css'

const Slider = SliderImport.default || SliderImport;

function AsansörlüTasimacilik() {
    return (
        <div>

            {/* HERO */}

            <div className='BeyazEsyaImg'>

                <div className='BeyazEsyaTexts'>

                    <h1 className='BeyazEsyaH1'>
                        Asansörlü Taşımacılık
                    </h1>

                    <hr className='BeyazEsyaHr' />

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


            {/* ANA AÇIKLAMA */}

            <div className='BeyazEsyaDiv'>

                <h1 className='BeyazEsyaTitle'>
                    Profesyonel Asansörlü Taşımacılık Hizmeti
                </h1>

                <hr className='BeyazEsyaHr' />

                <p>

                    <b>Muharrem Arslan Evden Eve Taşımacılık</b> olarak Konya genelinde yüksek katlı
                    binalarda ve uygun taşıma koşullarının bulunduğu adreslerde asansörlü taşımacılık
                    hizmeti sunuyoruz. Eşyalarınızın daha hızlı, pratik ve güvenli şekilde taşınmasına
                    yardımcı olmak amacıyla profesyonel taşıma çözümleri sağlıyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Özellikle yüksek katlarda bulunan ev ve iş yerlerinin taşınması sırasında büyük
                    ve ağır eşyaların merdivenlerden veya bina içerisinden geçirilmesi hem zaman
                    açısından hem de taşıma güvenliği açısından çeşitli zorluklar oluşturabilir.
                    Asansörlü taşımacılık, uygun bina koşullarında bu sürecin daha kolay ve kontrollü
                    şekilde gerçekleştirilmesine yardımcı olur.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Gerçekleştirdiğimiz <b>asansörlü nakliyat</b> hizmetinde öncelikle binanın dış
                    cephesi, pencere ve balkon yapısı, kat yüksekliği ve aracın konumlandırılabileceği
                    alan değerlendirilir. Uygun koşulların bulunması halinde taşıma işlemi için
                    asansörlü sistem kullanılır.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Mobilya, beyaz eşya, koltuk, masa, yatak ve benzeri büyük eşyalarınız uygun
                    şekilde hazırlanarak taşıma platformuna yerleştirilir. Eşyaların güvenli şekilde
                    yukarı veya aşağı taşınmasına ve yeni adresinizde kontrollü şekilde indirilmesine
                    özen gösterilir.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>Ev, ofis, büro ve iş yerlerinizin taşınması</b> sırasında asansörlü taşıma
                    hizmetinden yararlanabilirsiniz. Özellikle yüksek katlı yapılarda büyük
                    eşyaların taşınmasını kolaylaştırarak hem zamandan tasarruf edilmesine hem de
                    taşıma sürecinin daha düzenli ilerlemesine yardımcı oluyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Asansörlü taşımacılığın yanı sıra ihtiyaç duyulması halinde <b>paketleme,
                        ambalajlama, evden eve nakliyat, şehir içi ve şehirler arası taşımacılık</b>
                    hizmetleri de sunuyoruz. Taşınacak eşyaların özelliklerine ve bina koşullarına
                    göre en uygun taşıma yöntemini belirliyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Taşıma sırasında eşyalarınızın güvenliği bizim için önceliklidir. Asansör
                    platformuna yerleştirilecek eşyaların uygun şekilde hazırlanmasına ve taşıma
                    sırasında güvenli şekilde muhafaza edilmesine dikkat ediyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>Muharrem Arslan Evden Eve Taşımacılık</b> olarak amacımız; yüksek katlı
                    binalarda taşınma sürecini daha kolay, hızlı ve güvenli hale getirmek ve
                    müşterilerimize ihtiyaçlarına uygun profesyonel nakliyat hizmeti sunmaktır.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>
                        Konya asansörlü nakliyat hizmeti hakkında detaylı bilgi almak ve taşınma
                        planınız için bizimle iletişime geçebilirsiniz.
                    </b>

                </p>

            </div>


            {/* BİLGİ KARTLARI */}

            <div className="BeyazEsyaInfo">

                <div className="BeyazEsyaInfoBox">

                    <span className="BeyazInfoNumber">
                        01
                    </span>

                    <h2>
                        Hızlı Taşıma
                    </h2>

                    <p>
                        Uygun bina koşullarında asansörlü sistem kullanılarak
                        eşyaların katlar arasında daha hızlı taşınmasına yardımcı
                        oluyoruz.
                    </p>

                </div>


                <div className="BeyazEsyaInfoBox">

                    <span className="BeyazInfoNumber">
                        02
                    </span>

                    <h2>
                        Güvenli Taşıma
                    </h2>

                    <p>
                        Büyük ve ağır eşyalarınızı uygun şekilde hazırlayarak
                        asansörlü sistem üzerinden kontrollü ve güvenli şekilde
                        taşıyoruz.
                    </p>

                </div>


                <div className="BeyazEsyaInfoBox">

                    <span className="BeyazInfoNumber">
                        03
                    </span>

                    <h2>
                        Profesyonel Ekipman
                    </h2>

                    <p>
                        Taşıma koşullarına uygun ekipman ve yöntemler kullanarak
                        eşyalarınızın güvenli şekilde taşınmasına özen gösteriyoruz.
                    </p>

                </div>

            </div>


            {/* NEDEN ASANSÖRLÜ TAŞIMACILIK */}

            <section className="BeyazEsyaNeden">

                <div className="BeyazEsyaNedenText">

                    <span className="BeyazSectionNumber">
                        ASANSÖRLÜ TAŞIMACILIK
                    </span>

                    <h2>
                        Asansörlü Taşımacılık Neden Tercih Edilir?
                    </h2>

                    <hr />

                    <p>
                        Yüksek katlı binalarda büyük ve ağır eşyaların taşınması
                        oldukça zahmetli olabilir. Uygun bina koşullarında kullanılan
                        asansörlü taşıma sistemi, eşyaların daha hızlı ve kontrollü
                        şekilde taşınmasına yardımcı olur.
                    </p>

                </div>


                <div className="BeyazEsyaNedenCards">

                    <div className="BeyazEsyaNedenCard">

                        <span className="BeyazCardNumber">
                            01
                        </span>

                        <div>
                            <h3>
                                Yüksek Katlı Binalar
                            </h3>

                            <p>
                                Özellikle yüksek katlı yapılarda eşyaların
                                taşınmasını kolaylaştırarak taşıma sürecinin
                                daha pratik ilerlemesine yardımcı olur.
                            </p>
                        </div>

                    </div>


                    <div className="BeyazEsyaNedenCard">

                        <span className="BeyazCardNumber">
                            02
                        </span>

                        <div>
                            <h3>
                                Büyük ve Ağır Eşyalar
                            </h3>

                            <p>
                                Koltuk, mobilya, beyaz eşya ve benzeri büyük
                                eşyaların katlar arasında taşınmasını kolaylaştırır.
                            </p>
                        </div>

                    </div>


                    <div className="BeyazEsyaNedenCard">

                        <span className="BeyazCardNumber">
                            03
                        </span>

                        <div>
                            <h3>
                                Zaman Tasarrufu
                            </h3>

                            <p>
                                Uygun koşullarda eşyaların bina içerisindeki
                                taşıma süresinin azaltılmasına yardımcı olur.
                            </p>
                        </div>

                    </div>


                    <div className="BeyazEsyaNedenCard">

                        <span className="BeyazCardNumber">
                            04
                        </span>

                        <div>
                            <h3>
                                Kontrollü Taşıma
                            </h3>

                            <p>
                                Eşyaların uygun şekilde hazırlanarak kontrollü
                                bir şekilde taşınmasına ve indirilmesine
                                yardımcı olur.
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* SLIDER */}

            <div className="BeyazEsyaSlider">

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

                    <div className="BeyazEsyaSlide">

                        <span>01</span>

                        <h2>
                            Bina Kontrolü
                        </h2>

                        <p>
                            Taşıma öncesinde binanın dış cephesi, kat yüksekliği
                            ve asansör kurulumu için uygun alanlar değerlendirilir.
                        </p>

                    </div>


                    <div className="BeyazEsyaSlide">

                        <span>02</span>

                        <h2>
                            Asansör Kurulumu
                        </h2>

                        <p>
                            Uygun koşulların bulunması halinde taşıma sisteminin
                            kurulacağı alan belirlenerek taşıma işlemi planlanır.
                        </p>

                    </div>


                    <div className="BeyazEsyaSlide">

                        <span>03</span>

                        <h2>
                            Eşyaların Hazırlanması
                        </h2>

                        <p>
                            Taşınacak büyük ve hassas eşyalar uygun şekilde
                            hazırlanarak taşıma işlemine hazır hale getirilir.
                        </p>

                    </div>


                    <div className="BeyazEsyaSlide">

                        <span>04</span>

                        <h2>
                            Güvenli Yükleme
                        </h2>

                        <p>
                            Eşyalar asansör platformuna dikkatli şekilde
                            yerleştirilerek kontrollü taşıma gerçekleştirilir.
                        </p>

                    </div>


                    <div className="BeyazEsyaSlide">

                        <span>05</span>

                        <h2>
                            Katlar Arası Taşıma
                        </h2>

                        <p>
                            Eşyalar uygun taşıma yöntemiyle bina katları arasında
                            güvenli ve kontrollü şekilde taşınır.
                        </p>

                    </div>


                    <div className="BeyazEsyaSlide">

                        <span>06</span>

                        <h2>
                            Güvenli İndirme
                        </h2>

                        <p>
                            Eşyalar yeni adresinizde dikkatli şekilde indirilerek
                            taşınma işleminin güvenli şekilde tamamlanmasına
                            özen gösterilir.
                        </p>

                    </div>

                </Slider>

            </div>


            {/* CTA */}

            <div className="BeyazEsyaCTA">

                <h2>
                    Yüksek Katlı Bir Binaya mı Taşınıyorsunuz?
                </h2>

                <p>
                    Konya asansörlü nakliyat hizmetimiz hakkında bilgi almak,
                    bina koşullarınızı değerlendirmek ve taşınma planınız için
                    bizimle iletişime geçebilirsiniz.
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

export default AsansörlüTasimacilik