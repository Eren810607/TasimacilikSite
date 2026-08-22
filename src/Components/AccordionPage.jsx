import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function AccordionPage() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div>

            <Accordion sx={{ fontFamily: 'arial', backgroundColor: 'lightblue' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography component="span" sx={{ width: '70%', flexShrink: 0 }}>
                        Evden eve nakliyat hizmetiniz nasıl gerçekleşiyor?
                    </Typography>

                </AccordionSummary>
                <AccordionDetails sx={{ fontFamily: 'arial', fontWeight: '700', backgroundColor: '#e6dbdb' }}>
                    <Typography>
                        Taşınma süreciniz öncesinde ekibimiz tarafından gerekli planlama yapılır. Eşyalarınızın miktarı, taşınacak katlar, bina koşulları ve taşıma şekli değerlendirilerek uygun araç ve ekipman belirlenir. Taşıma günü eşyalarınız özenli bir şekilde paketlenir, mobilyalarınız ve diğer eşyalarınız güvenli şekilde araca yüklenir ve yeni adresinize taşınır. Yeni adreste eşyalarınız dikkatli bir şekilde indirilerek belirttiğiniz alanlara yerleştirilir. Amacımız, taşınma sürecinizi mümkün olduğunca hızlı, güvenli ve sorunsuz bir şekilde tamamlamaktır.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ fontFamily: 'arial', backgroundColor: 'lightblue' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography component="span" sx={{ width: '70%', flexShrink: 0 }}>
                        Eşyalarım taşınma sırasında nasıl korunuyor?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ fontFamily: 'arial', fontWeight: '700', backgroundColor: '#e6dbdb' }}>
                    <Typography>
                        Eşyalarınızın güvenliği taşıma sürecinin en önemli aşamalarından biridir. Taşıma öncesinde eşyalarınızın türüne ve hassasiyetine uygun ambalajlama yapılır. Mobilya, beyaz eşya, elektronik cihazlar, cam ve kırılabilir ürünler gibi eşyalar taşıma sırasında zarar görmemesi için uygun şekilde korunur. Profesyonel ekipman ve dikkatli taşıma yöntemleri kullanılarak eşyalarınızın hem yükleme hem de indirme sırasında güvenli bir şekilde taşınmasına özen gösterilir.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ fontFamily: 'arial', backgroundColor: 'lightblue' }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography component="span" sx={{ width: '70%', flexShrink: 0 }}>
                        Asansörlü nakliyat hizmeti hangi durumlarda kullanılır?
                    </Typography>

                </AccordionSummary>
                <AccordionDetails sx={{ fontFamily: 'arial', fontWeight: '700', backgroundColor: '#e6dbdb' }}>
                    <Typography>
                        Asansörlü taşımacılık, özellikle yüksek katlı binalarda eşyaların daha hızlı ve güvenli şekilde taşınmasını sağlar. Bina merdivenlerinin dar olması, apartman girişinin uygun olmaması veya büyük mobilyaların merdivenlerden geçirilmesinin zor olduğu durumlarda asansörlü taşıma tercih edilebilir. Uygun bina ve dış cephe koşulları değerlendirilerek taşıma işlemi planlanır. Bu yöntem sayesinde hem eşyaların taşınma süreci kolaylaşır hem de bina içerisindeki yoğun taşıma trafiği azaltılır.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ fontFamily: 'arial', backgroundColor: 'lightblue' }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography component="span" sx={{ width: '70%', flexShrink: 0 }}>
                        Şehirler arası nakliyat hizmeti veriyor musunuz?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ fontFamily: 'arial', fontWeight: '700', backgroundColor: '#e6dbdb' }}>
                    <Typography>
                        Evet, şehirler arası evden eve nakliyat hizmeti sunuyoruz. Farklı bir şehre taşınmanız gerektiğinde eşyalarınızın miktarı, mevcut adresiniz ve yeni adresiniz değerlendirilerek taşıma planlaması yapılır. Eşyalarınız taşınma öncesinde uygun şekilde paketlenir, güvenli bir şekilde araca yüklenir ve yolculuk boyunca korunarak yeni adresinize ulaştırılır. Şehirler arası taşımacılıkta zamanında teslimat ve eşyaların güvenliği öncelikli olarak ele alınır. Muharrem Arslan Evden Eve Taşımacılık olarak taşınma sürecinizin başından sonuna kadar profesyonel destek sağlıyoruz.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    )
}

export default AccordionPage