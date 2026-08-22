import React from 'react';
import Button from '@mui/material/Button';
import '../css/Paketleme.css';

function Paketleme() {
    return (
        <div>

            {/* HERO */}

            <div className="ArizaHero">

                <div className="ArizaHeroOverlay">

                    <h1>
                        Profesyonel Eşya Paketleme Hizmeti
                    </h1>

                    <hr />

                    <p>
                        Evden eve taşımacılık öncesinde eşyalarınızın güvenli şekilde
                        hazırlanması için profesyonel paketleme ve ambalajlama hizmeti.
                    </p>

                    <Button
                        variant="contained"
                        onClick={() => window.location.href = "tel:905413830670"}
                        sx={{
                            marginTop: '18px',
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '11px 24px',
                            '&:hover': {
                                backgroundColor: '#88b0c3'
                            }
                        }}
                    >
                        Nakliyat İçin Tıklayın
                    </Button>

                </div>

            </div>


            {/* ANA AÇIKLAMA */}

            <section className="ArizaIntro">

                <div className="ArizaIntroTitle">

                    <span>PAKETLEME & AMBALAJLAMA</span>

                    <h2>
                        Eşyalarınızı Taşınmaya<br />
                        Güvenli Şekilde Hazırlıyoruz
                    </h2>

                    <hr />

                </div>

                <div className="ArizaIntroText">

                    <p>
                        <b>Muharrem Arslan Evden Eve Taşımacılık</b> olarak Konya
                        genelinde evden eve nakliyat hizmetlerimiz kapsamında
                        eşyalarınızın taşınma öncesinde güvenli şekilde hazırlanması
                        için profesyonel paketleme ve ambalajlama hizmeti sunuyoruz.
                    </p>

                    <p>
                        Taşınma sırasında mobilya, beyaz eşya, elektronik cihazlar,
                        mutfak eşyaları, cam ürünler ve kişisel eşyalar farklı
                        risklerle karşılaşabilir. Bu nedenle eşyaların özelliklerine
                        uygun şekilde paketlenmesi ve taşıma sürecine hazırlanması
                        büyük önem taşımaktadır.
                    </p>

                    <p>
                        Eşyalarınızı türüne, boyutuna ve hassasiyetine göre uygun
                        ambalaj malzemeleriyle hazırlıyor, taşıma sırasında
                        oluşabilecek çizilme, darbe ve benzeri risklere karşı
                        gerekli önlemleri almaya özen gösteriyoruz.
                    </p>

                </div>

            </section>


            {/* HİZMET KARTLARI */}

            <section className="ArizaServices">

                <div className="ArizaSectionTitle">

                    <span>PAKETLEME HİZMETLERİMİZ</span>

                    <h2>
                        Hangi Eşyaları<br />
                        Paketliyoruz?
                    </h2>

                    <hr />

                </div>


                <div className="ArizaServiceGrid">

                    <div className="ArizaServiceCard">
                        <span>01</span>

                        <h3>Mobilya Paketleme</h3>

                        <p>
                            Koltuk, masa, sandalye, yatak, dolap ve benzeri
                            mobilyalarınızı taşıma öncesinde uygun ambalaj
                            malzemeleriyle hazırlıyoruz.
                        </p>
                    </div>


                    <div className="ArizaServiceCard">
                        <span>02</span>

                        <h3>Beyaz Eşya Paketleme</h3>

                        <p>
                            Buzdolabı, çamaşır makinesi, bulaşık makinesi ve
                            diğer beyaz eşyalarınızı taşıma sürecine uygun
                            şekilde paketliyoruz.
                        </p>
                    </div>


                    <div className="ArizaServiceCard">
                        <span>03</span>

                        <h3>Hassas Eşya Paketleme</h3>

                        <p>
                            Cam, porselen, elektronik cihaz ve benzeri hassas
                            eşyalarınızı uygun ambalajlarla dikkatli şekilde
                            taşımaya hazırlıyoruz.
                        </p>
                    </div>


                    <div className="ArizaServiceCard">
                        <span>04</span>

                        <h3>Koli ve Ambalajlama</h3>

                        <p>
                            Küçük ev eşyaları, mutfak ürünleri, kitaplar ve
                            kişisel eşyalarınızı düzenli şekilde kolileyerek
                            taşımaya hazır hale getiriyoruz.
                        </p>
                    </div>

                </div>

            </section>


            {/* PAKETLEME GEREKLİLİĞİ */}

            <section className="ArizaProblems">

                <div className="ArizaProblemsImage">

                    <div>

                        <span>GÜVENLİ TAŞIMA</span>

                        <h2>
                            Eşyalarınız Neden<br />
                            Paketlenmeli?
                        </h2>

                    </div>

                </div>


                <div className="ArizaProblemsList">

                    <div>
                        <strong>01</strong>

                        <p>
                            Eşyaların çizilme ve yüzey hasarlarına karşı
                            korunmasına yardımcı olur.
                        </p>
                    </div>


                    <div>
                        <strong>02</strong>

                        <p>
                            Taşıma sırasında oluşabilecek darbelere karşı
                            ek koruma sağlar.
                        </p>
                    </div>


                    <div>
                        <strong>03</strong>

                        <p>
                            Hassas ve kırılabilir eşyaların daha kontrollü
                            taşınmasına yardımcı olur.
                        </p>
                    </div>


                    <div>
                        <strong>04</strong>

                        <p>
                            Eşyaların taşıma sırasında birbirine temas
                            etmesini ve zarar görmesini azaltır.
                        </p>
                    </div>


                    <div>
                        <strong>05</strong>

                        <p>
                            Taşınma sürecinin daha düzenli ve güvenli
                            ilerlemesine katkı sağlar.
                        </p>
                    </div>

                </div>

            </section>


            {/* PAKETLEME SÜRECİ */}

            <section className="ArizaProcess">

                <div className="ArizaSectionTitle">

                    <span>PAKETLEME SÜRECİ</span>

                    <h2>
                        Nasıl Çalışıyoruz?
                    </h2>

                    <hr />

                </div>


                <div className="ArizaProcessSteps">

                    <div className="ArizaStep">

                        <span>01</span>

                        <h3>Eşyaları İnceliyoruz</h3>

                        <p>
                            Taşınacak eşyaların türünü, boyutunu ve hassasiyetini
                            değerlendiriyoruz.
                        </p>

                    </div>


                    <div className="ArizaStep">

                        <span>02</span>

                        <h3>Uygun Malzemeyi Seçiyoruz</h3>

                        <p>
                            Eşyaların özelliklerine uygun ambalaj ve paketleme
                            malzemelerini belirliyoruz.
                        </p>

                    </div>


                    <div className="ArizaStep">

                        <span>03</span>

                        <h3>Paketleme Yapıyoruz</h3>

                        <p>
                            Eşyaları dikkatli şekilde paketleyerek taşıma
                            işlemine hazır hale getiriyoruz.
                        </p>

                    </div>


                    <div className="ArizaStep">

                        <span>04</span>

                        <h3>Taşımaya Hazırlıyoruz</h3>

                        <p>
                            Paketlenen eşyaları güvenli şekilde araca
                            yerleştirilmek üzere hazırlıyoruz.
                        </p>

                    </div>

                </div>

            </section>


            {/* CTA */}

            <section className="ArizaCTA">

                <div>

                    <span>PROFESYONEL NAKLİYAT</span>

                    <h2>
                        Eşyalarınız Güvenle Taşınsın
                    </h2>

                    <p>
                        Paketleme, ambalajlama ve evden eve nakliyat hizmetleri
                        hakkında bilgi almak için bizimle iletişime geçebilirsiniz.
                    </p>

                    <Button
                        variant="contained"
                        onClick={() => window.location.href = "tel:905413830670"}
                        sx={{
                            marginTop: '18px',
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '11px 26px',
                            '&:hover': {
                                backgroundColor: '#88b0c3'
                            }
                        }}
                    >
                        İletişime Geç
                    </Button>

                </div>

            </section>

        </div>
    );
}

export default Paketleme;