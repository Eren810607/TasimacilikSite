import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './app.css'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import AddCallIcon from '@mui/icons-material/AddCall';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Header from "./HeaderFooter/Header";
import Footer from "./HeaderFooter/Footer";

import Home from "./Components/Home";
import About from "./Components/About";
import EvdenEveNakliyat from "./Components/EvdenEveNakliyat";

import BeyazEsyaTamiri from "./Components/AsansörlüTasimacilik";
import Paketleme from "./Components/Paketleme";
import SehiriciNakliyat from "./Components/SehiriciNakliyat";
import SehirlerArasi from "./Components/SehirlerArasi";


function App() {


  const actions = [
    {
      icon: <AddCallIcon />,
      name: 'Arama Yap',
      phone: '905413830670'
    },
    {
      icon: <WhatsAppIcon />,
      phone: '905413830670',
      name: 'Whatsapp Mesaj',
      message: 'Merhabalar, Size İnternet Siteniz Üzerinden Ulaşıyorum. Yardımcı Olma Şansınız Var Mı Acaba?'
    },
    {
      icon: <InstagramIcon />,
      name: 'Instagram Profiline Git',
      link: 'https://www.instagram.com/muharremarslanevdeneve42/'
    },
    {
      icon: <FacebookIcon />,
      name: 'Facebook Profiline Git',
      link: 'https://www.facebook.com/muharrem.arslan.3192'
    }
  ];


  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/Evden-eve-nakliyat" element={<EvdenEveNakliyat />} />
        <Route path="/Sehir-ici-nakliyat" element={<SehiriciNakliyat />} />
        <Route path="/Sehirler-arasi-nakliyat" element={<SehirlerArasi />} />
        <Route path="/Asansörlü-tasimacilik" element={<BeyazEsyaTamiri />} />
        <Route path="/Paketleme-ve-ambalajlama" element={<Paketleme />} />
      </Routes>


      <Box
        sx={{
          position: 'fixed',
          bottom: {
            xs: '20px',
            sm: '25px'
          },
          right: {
            xs: '15px',
            sm: '25px'
          },

        }}
      >
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 16,

            '& .MuiSpeedDial-fab': {
              backgroundColor: '#000',
              color: 'white',

              '&:hover': {
                backgroundColor: '#222',
              },
            },
          }}
          icon={<LocalPhoneIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              slotProps={{
                tooltip: {
                  title: action.name,
                },
              }}
              onClick={() => {
                if (action.phone) {
                  window.location.href = `tel:${action.phone}`;
                }

                if (action.message) {
                  window.open(
                    `https://wa.me/${action.phone}?text=${encodeURIComponent(action.message)}`,
                    '_blank'
                  );
                }

                if (action.link) {
                  window.open(action.link, '_blank');
                }
              }}
            />
          ))}
        </SpeedDial>
      </Box>


      <Footer />
    </Router >
  );
}

export default App;