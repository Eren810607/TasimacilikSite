import React from 'react'
import '../css/EvdenEveNakliyat.css'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function EvdenEveNakliyat() {
    return (
        <div>

            <div className='klimaBakimiImg'>

                <div className='KlimaBakimiTexts'>

                    <h1 className='KlimaBakimiH1'>
                        Evden Eve Nakliyat
                    </h1>

                    <hr className='KlimaBakimiHr' />

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


            <div className='KlimaBakimiDiv'>

                <h1 className='KlimaBakimiH1'>
                    Profesyonel Evden Eve Nakliyat Hizmeti
                </h1>

                <hr className='KlimaBakimiHr' />

                <p style={{ marginTop: '10px', marginBottom: '15px' }}>

                    <b>Muharrem Arslan Evden Eve Taşımacılık</b> olarak Konya genelinde evden eve nakliyat hizmetleri sunuyoruz.
                    Taşınma sürecinin müşterilerimiz için yorucu ve stresli bir süreç olabileceğinin farkında olarak,
                    eşyalarınızın güvenli ve özenli bir şekilde taşınmasını sağlamak için profesyonel bir çalışma
                    anlayışıyla hizmet veriyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Ev taşımacılığında her evin ve her eşyanın farklı ihtiyaçları bulunmaktadır. Bu nedenle taşıma
                    işlemi öncesinde taşınacak eşyaların miktarı, bina özellikleri, kat durumu ve taşıma koşulları
                    değerlendirilerek uygun bir taşıma planı oluşturuyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Gerçekleştirdiğimiz <b>evden eve nakliyat</b> hizmetlerinde eşyalarınızın güvenliği ön planda tutulur.
                    Mobilyalar, beyaz eşyalar, elektronik cihazlar, cam ürünler ve diğer hassas eşyalarınız uygun
                    şekilde paketlenerek taşıma sırasında oluşabilecek risklere karşı korunur.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Taşıma sürecinde eşyalarınızın yalnızca yüklenmesi ve taşınmasıyla kalmıyor, yükleme ve indirme
                    aşamalarında da dikkatli ve kontrollü bir çalışma gerçekleştiriyoruz. Eşyalarınız yeni adresinize
                    ulaştığında güvenli bir şekilde indirilerek taşınma işleminin düzenli şekilde tamamlanmasına
                    özen gösteriyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>Konya içi evden eve nakliyat</b> hizmetimizin yanı sıra uygun durumlarda asansörlü taşımacılık
                    hizmetinden de yararlanıyoruz. Özellikle yüksek katlı binalarda ve büyük eşyaların merdivenlerden
                    geçirilmesinin zor olduğu durumlarda asansörlü taşıma yöntemi, eşyaların daha hızlı ve güvenli
                    şekilde taşınmasına yardımcı olmaktadır.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Taşınma öncesinde ihtiyaç duyulması halinde <b>paketleme ve ambalajlama</b> hizmeti de sunuyoruz.
                    Eşyaların türüne ve hassasiyetine göre uygun ambalaj malzemeleri kullanılarak taşıma sırasında
                    korunmaları sağlanır.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    Evden eve nakliyat hizmetimizin yanında <b>şehirler arası nakliyat, ofis ve iş yeri taşımacılığı
                        ile parça eşya taşıma</b> gibi farklı taşımacılık ihtiyaçlarına yönelik çözümler de sunuyoruz.
                    Her taşıma işleminde zamanında hizmet, güvenli taşıma ve müşteri memnuniyetini ön planda tutuyoruz.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>Muharrem Arslan Evden Eve Taşımacılık</b> olarak amacımız; eşyalarınızı güvenli bir şekilde
                    yeni adresinize ulaştırmak ve taşınma sürecinizi mümkün olduğunca kolay ve sorunsuz hale getirmektir.

                    <br />
                    <span className="desktopBreak"><br /></span>

                    <b>
                        Konya evden eve nakliyat hizmeti hakkında detaylı bilgi almak ve taşınma planınız için
                        bizimle iletişime geçebilirsiniz.
                    </b>

                </p>

            </div>


            <div className="KlimaBakimiCards">

                <Card sx={{ minWidth: 250, maxWidth: 350 }}>
                    <CardContent>

                        <Typography variant="h5" component="div">
                            Profesyonel Paketleme
                        </Typography>

                        <Typography sx={{ mt: 2 }} variant="body2">
                            Eşyalarınızın taşıma sırasında korunması için mobilya,
                            beyaz eşya, cam ve hassas ürünlere uygun paketleme
                            ve ambalajlama işlemleri gerçekleştiriyoruz.
                        </Typography>

                    </CardContent>
                </Card>


                <Card sx={{ minWidth: 250, maxWidth: 350 }}>
                    <CardContent>

                        <Typography variant="h5" component="div">
                            Güvenli Taşıma
                        </Typography>

                        <Typography sx={{ mt: 2 }} variant="body2">
                            Eşyalarınızı yükleme, taşıma ve indirme aşamalarında
                            dikkatli ve kontrollü bir şekilde taşıyarak güvenli
                            şekilde yeni adresinize ulaştırıyoruz.
                        </Typography>

                    </CardContent>
                </Card>


                <Card sx={{ minWidth: 250, maxWidth: 350 }}>
                    <CardContent>

                        <Typography variant="h5" component="div">
                            Asansörlü Nakliyat
                        </Typography>

                        <Typography sx={{ mt: 2 }} variant="body2">
                            Uygun bina koşullarında asansörlü taşıma yöntemi
                            kullanarak özellikle yüksek katlı binalarda eşyaların
                            daha hızlı ve güvenli taşınmasına yardımcı oluyoruz.
                        </Typography>

                    </CardContent>
                </Card>


                <Card sx={{ minWidth: 250, maxWidth: 350 }}>
                    <CardContent>

                        <Typography variant="h5" component="div">
                            Konya İçi Nakliyat
                        </Typography>

                        <Typography sx={{ mt: 2 }} variant="body2">
                            Konya ve çevresinde evden eve taşınma ihtiyaçlarınız
                            için adres ve eşya özelliklerine uygun şekilde
                            planlı nakliyat hizmeti sunuyoruz.
                        </Typography>

                    </CardContent>
                </Card>


                <Card sx={{ minWidth: 250, maxWidth: 350 }}>
                    <CardContent>

                        <Typography variant="h5" component="div">
                            Şehirler Arası Nakliyat
                        </Typography>

                        <Typography sx={{ mt: 2 }} variant="body2">
                            Farklı bir şehre taşınmanız gerektiğinde eşyalarınızı
                            güvenli şekilde hazırlıyor, taşıyor ve yeni adresinize
                            ulaştırıyoruz.
                        </Typography>

                    </CardContent>
                </Card>


                <Card sx={{ minWidth: 250, maxWidth: 350 }}>
                    <CardContent>

                        <Typography variant="h5" component="div">
                            Eşya Yerleştirme
                        </Typography>

                        <Typography sx={{ mt: 2 }} variant="body2">
                            Taşıma işleminin ardından eşyalarınızın güvenli şekilde
                            indirilmesine ve taşınma sürecinin düzenli bir şekilde
                            tamamlanmasına özen gösteriyoruz.
                        </Typography>

                    </CardContent>
                </Card>

            </div>

        </div>
    )
}

export default EvdenEveNakliyat