import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import "../css/home.css";
import "../css/HomeCards.css";

const cards = [
    {
        id: 1,
        title: 'Evden Eve Nakliyat',
        description: 'Konya genelinde güvenli, planlı ve profesyonel evden eve nakliyat hizmeti.',
        link: '/Evden-eve-nakliyat',
    },
    {
        id: 2,
        title: 'Şehir İçi Nakliyat',
        description: 'Konya içinde ev, ofis ve iş yerleriniz için hızlı ve güvenilir taşıma hizmeti.',
        link: '/Sehir-ici-nakliyat',
    },
    {
        id: 3,
        title: 'Şehirler Arası Nakliyat',
        description: 'Konya ve farklı şehirler arasında eşyalarınızın güvenli şekilde taşınmasını sağlıyoruz.',
        link: '/Sehirler-arasi-nakliyat',
    },
];


function SelectActionCard() {

    const navigate = useNavigate();

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
            }}
        >

            {cards.map((card) => (

                <Card key={card.id}>

                    <CardActionArea
                        sx={{
                            height: '100%',
                        }}
                    >

                        <CardContent
                            sx={{
                                height: '100%',
                                cursor: 'default',
                                backgroundColor: '#05b681d8',
                            }}
                        >

                            <Typography variant="h5" component="div">
                                {card.title}
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{ color: 'text.secondary' }}
                            >
                                {card.description}
                            </Typography>

                            <br />

                            <Button
                                color="primary"
                                onClick={() => navigate(card.link)}
                                variant="outlined"
                                sx={{
                                    backgroundColor: "#000",
                                    color: "#fff9f9",
                                    border: 'none',
                                    outline: 'none',
                                    borderRadius: '10px',
                                }}
                            >
                                Detay
                                <ChevronRightIcon />
                            </Button>

                        </CardContent>

                    </CardActionArea>

                </Card>

            ))}

        </Box>
    );
}

export default SelectActionCard;