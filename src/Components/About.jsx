import React from 'react'
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import Button from '@mui/material/Button';

import "../css/about.css";
import { Call } from '@mui/icons-material';


function About() {

    return (
        <div>

            <div className='AboutImg'>

                <div className='AboutImgTexts'>

                    <h1 className='AboutH1'>
                        Hakkımızda
                    </h1>

                    <hr className='AboutHr' />

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
                        İletişime Geçmek İçin Tıklayın
                    </Button>

                </div>

            </div>


            <div className='AboutDiv'>

                <h1 className='AboutH1'>
                    Muharrem Arslan Evden Eve Taşımacılık Kimdir?
                </h1>

                <hr className='AboutHr' />

                <p style={{ marginTop: '10px', marginBottom: '15px' }}>

                    <b>Muharrem Arslan Evden Eve Taşımacılık</b>, Konya ve çevresinde evden eve nakliyat alanında güvenilir, kaliteli ve profesyonel taşımacılık hizmeti sunan bir nakliyat firmasıdır. Müşterilerimizin taşınma sürecini güvenli, hızlı ve sorunsuz bir şekilde tamamlamalarını sağlamak amacıyla özenli ve planlı bir çalışma anlayışıyla hizmet veriyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Konya'nın farklı ilçe ve bölgelerinde gerçekleştirdiğimiz <b>evden eve nakliyat</b> hizmetlerinde, her müşterimizin ihtiyaçlarının farklı olduğunu biliyor ve taşıma işlemlerini taşınacak eşyaların miktarına, bina koşullarına ve adres özelliklerine göre planlıyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Eşyalarınızın güvenliği bizim için büyük önem taşımaktadır. Mobilya, beyaz eşya, elektronik cihazlar, cam ürünler ve diğer hassas eşyalarınızın taşıma sırasında zarar görmemesi için gerekli <b>paketleme ve ambalajlama</b> işlemlerini özenle gerçekleştiriyoruz. Yükleme, taşıma ve indirme aşamalarında eşyalarınızın güvenliğine dikkat ediyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <br />
                    <span className="desktopBreak2"><br /></span>

                    Yüksek katlı binalarda ve uygun taşıma koşullarının bulunduğu adreslerde <b>asansörlü nakliyat</b> hizmetinden yararlanarak eşyalarınızın daha hızlı ve güvenli şekilde taşınmasına yardımcı oluyoruz. Ayrıca <b>şehir içi, şehirler arası, ofis ve iş yeri taşımacılığı</b> gibi farklı ihtiyaçlara yönelik nakliyat çözümleri sunuyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Hizmet anlayışımızın temelinde <b>güvenilirlik, kaliteli işçilik, dikkatli taşıma ve müşteri memnuniyeti</b> bulunmaktadır. Taşınma sürecinin başlangıcından eşyalarınızın yeni adresinize ulaştırılmasına kadar her aşamada planlı ve titiz bir çalışma yürütüyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>Muharrem Arslan Evden Eve Taşımacılık</b> olarak Konya ve çevresinde evden eve nakliyat, şehirler arası taşımacılık, asansörlü nakliyat, ofis taşımacılığı, parça eşya taşıma ve paketleme hizmetlerimizle müşterilerimizin yanında olmaktan memnuniyet duyuyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>Eşyalarınızı güvenle yeni adresinize taşımak için bizimle iletişime geçebilirsiniz.</b>

                </p>

            </div>


            <div className="AboutInfo">

                <div className="AboutInfoBox">

                    <h2>Güvenilir Hizmet</h2>

                    <p>
                        Eşyalarınızı güvenle teslim alıyor, taşınma sürecinin
                        her aşamasında dikkatli ve planlı çalışarak güvenilir
                        nakliyat hizmeti sunuyoruz.
                    </p>

                </div>


                <div className="AboutInfoBox">

                    <h2>Özenli Taşımacılık</h2>

                    <p>
                        Eşyalarınızın türüne ve hassasiyetine uygun paketleme
                        ve taşıma yöntemleri kullanarak güvenli şekilde yeni
                        adresinize ulaştırıyoruz.
                    </p>

                </div>


                <div className="AboutInfoBox">

                    <h2>Müşteri Memnuniyeti</h2>

                    <p>
                        Taşınma sürecinin her aşamasında müşteri memnuniyetini
                        ön planda tutarak ihtiyaçlarınıza uygun çözümler
                        sunmaya önem veriyoruz.
                    </p>

                </div>

            </div>


            <div className="AboutServices">

                <h1 className="AboutH1">
                    Hizmet Alanlarımız
                </h1>


                <div className="AboutServicesCards">

                    <div className="AboutServiceCard">

                        <h2>Evden Eve Nakliyat</h2>

                        <p>
                            Ev eşyalarınızı özenle paketleyerek güvenli ve
                            profesyonel bir şekilde yeni adresinize taşıyoruz.
                        </p>

                    </div>


                    <div className="AboutServiceCard">

                        <h2>Şehirler Arası Nakliyat</h2>

                        <p>
                            Farklı şehirlere taşınma ihtiyaçlarınız için
                            eşyalarınızı güvenli ve planlı bir şekilde
                            yeni adresinize ulaştırıyoruz.
                        </p>

                    </div>


                    <div className="AboutServiceCard">

                        <h2>Asansörlü Nakliyat</h2>

                        <p>
                            Yüksek katlı binalarda uygun koşulların bulunması
                            halinde asansörlü taşıma hizmeti ile daha hızlı
                            ve güvenli nakliyat sağlıyoruz.
                        </p>

                    </div>


                    <div className="AboutServiceCard">

                        <h2>Ofis Taşımacılığı</h2>

                        <p>
                            Ofis ve iş yerlerinizin taşınma işlemlerini planlı,
                            dikkatli ve profesyonel bir şekilde gerçekleştiriyoruz.
                        </p>

                    </div>

                </div>

            </div>


            <div className="AboutCTA">

                <h2>
                    Taşınma Planınız mı Var?
                </h2>
                <hr className='AboutHr' />
                <br />
                <p>
                    Evden eve nakliyat, şehirler arası taşımacılık, asansörlü
                    nakliyat ve diğer hizmetlerimiz hakkında detaylı bilgi
                    almak için bizimle iletişime geçebilirsiniz.
                </p>

                <Button

                    onClick={() => window.location.href = "tel:905413830670"}
                    variant="contained"
                    sx={{
                        marginTop: '15px',
                        backgroundColor: "black",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "#88b0c3"
                        }
                    }}
                >
                    İletişime Geç
                </Button>

            </div>

        </div>
    )
}

export default About