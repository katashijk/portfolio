import private1 from '../assets/katashiptrp1.png';
import private2 from '../assets/katashiprivatearf1.png';
import keeli1 from '../assets/keeli1-ss.png';
import keeli2 from '../assets/keeli_python_private_2.png';
import gc from '../assets/gc-ss.png';
import cth from '../assets/6th-ss.png';
import gth from '../assets/104th-ss.png';
import yth from '../assets/212th-ss.png';
import impCommando from '../assets/kd_imperialcommando2.png';
import n1thragr from '../assets/n1thragr2.png';
import kdtx2121 from '../assets/kd_tx212_1.png';
import kdtx2122 from '../assets/kd_tx212_6.png';
import dtdroidb from '../assets/DT-DROID-BLACK.png';
import dtdroidw from '../assets/DT-DROID-WHITE.png';

export const content = {
  pl: {
    nav: {
      about: 'O mnie',
      projects: 'Projekty',
      contact: 'Kontakt',
      logo: 'PORTFOLIO',
    },
    hero: {
      greeting: 'Cześć!',
      title_prefix: 'Jestem',
      name: 'Dawid Marchut',
      role: 'Freelance Developer / 3D Artist',
      desc_1: 'Inżynierska precyzja',
      desc_2: 'artystyczny chaos',
      btn_cv: 'Pobierz CV',
    },
    education: {
      title: 'Edukacja',
      items: [
        {
          degree: 'Technik Informatyk',
          date: 'Wrz 2020 - Kw 2025',
          school: 'Zespół Szkół nr 2 im. Jana Długosza w Wieluniu',
          badge: '5.56',
          desc: 'Tworzenie i zarządzanie sieciami i bazami danych, tworzenie stron internetowych przy użyciu: HTML, CSS, PHP, Javascript, programowanie w C++, Python, oraz obsługa pakietu Microsoft Office.',
        },
        {
          degree: 'Informatyka Techniczna (Studia Inżynierskie)',
          date: 'Paź 2025 - Trwa',
          school: 'Politechnika Wrocławska',
          badge: 'Obecnie',
          desc: 'Koncentracja na styku systemów informatycznych i warstwy sprzętowej. Rozwijanie umiejętności w zakresie programowania niskopoziomowego oraz projektowania systemów technicznych.',
        },
        {
          degree: 'CyberOps Associate',
          date: 'Gru 2025 - Gru 2025',
          school: 'Eksperckie Centrum Szkolenia Cyberbezpieczeństwa - Cisco Networking Academy',
          badge: 'Ukończone',
          desc: 'Certyfikat potwierdzający wiedzę z zakresu monitorowania bezpieczeństwa, wykrywania incydentów i analizy zagrożeń w systemach sieciowych. Przygotowanie do pracy w centrach operacji bezpieczeństwa (SOC).',
        },
        {
          degree: 'Ethical Hacker',
          date: 'Sty 2026 - Sty 2026',
          school: 'Eksperckie Centrum Szkolenia Cyberbezpieczeństwa - Cisco Networking Academy',
          badge: 'Ukończone',
          desc: 'Praktyczna wiedza z zakresu ofensywnego bezpieczeństwa: identyfikacja luk w systemach, testy penetracyjne oraz techniki zabezpieczania infrastruktury przed cyberatakami.',
        },
      ],
    },
    profile: {
      title: 'Krótki Profil',
      bio_title: 'O mnie',
      bio_desc: 'Mój świat to miks technologii i kreatywnego zacięcia. Łączę dwa bieguny: z jednej strony programowanie i techniczne wyzwania (sieci, monitoring, hardware), z drugiej – cyfrową sztukę. Uwielbiam tworzyć i malować modele 3D, bo to pozwala mi zobaczyć efekty pracy poza samym kodem. Poza tym? Kocham podróże i odkrywanie nowych miejsc.',
      tech_title: 'Tech Stack',
      tech_items: ['C++', 'Java', 'Lua', 'HTML5', 'CSS', 'JavaScript', 'PHP', 'SQL', 'Git', 'Blender', 'Substance Painter 3D'],
      location_title: 'Lokalizacja',
      location: 'Wrocław, Polska',
      hobbies_title: 'Zainteresowania',
      hobbies: ['Majsterkowanie', 'Modelowanie i Sculpting 3D', 'Game Development', 'Nowe Technologie', 'Podróże', 'Texturing & Shading', 'Automatyzacja']
    },
    projects: {
      title: 'Projekty',
      items: [
        {
          id: 'proxy-color-model',
          title: 'Proxy-Color Model',
          desc: 'Stworzenie tekstur, za których pomocą gracz w czasie rzeczywistym może zmieniać kolor malowania pancerza.',
          tech: ['Substance Painter 3D', 'Blender', 'VTF Edit'],
          images: [
            private1, 
            private2
          ],
          links: [
            { type: 'artstation', url: 'https://katashijk.artstation.com', label: 'ArtStation' },
            { type: 'steam', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2993587586', label: 'Steam' }
          ]
        },
        {
          id: 'custom-squad-models',
          title: 'Customized Squad Models',
          desc: 'Techniczna adaptacja i personalizacja modeli bazowych dla klienta. Projekt skupiał się na nadaniu unikalnego charakteru wizualnego przy ścisłym zachowaniu spójności z materiałem źródłowym.',
          tech: ['Substance Painter 3D', 'Blender', 'VTF Edit'],
          images: [
            keeli1,
            keeli2,
            gc,
            cth,
            gth,
            yth
          ],
          links: [
            { type: 'artstation', url: 'https://katashijk.artstation.com', label: 'ArtStation' },
            { type: 'steam', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2848374137', label: 'Steam' }
          ]
        },
        {
          id: 'model-commisions',
          title: 'Various Customized Models',
          desc: 'Wyselekcjonowane prace wykonane w ramach komercyjnych zleceń freelancerskich. Wszystkie stworzone z dogłębną konsultacją z klientem podczas każdego etapu pracy.',
          tech: ['Substance Painter 3D', 'Blender', 'VTF Edit'],
          images: [
            dtdroidb,
            dtdroidw,
            impCommando,
            n1thragr,
            kdtx2121,
            kdtx2122
          ],
          links: [
            { type: 'artstation', url: 'https://katashijk.artstation.com', label: 'ArtStation' }
          ]
        },
      ],
    },
    footer: {
      title: 'Kontakt',
      desc: "Masz pomysł na projekt? A może po prostu chcesz się przywitać? Moja skrzynka jest zawsze otwarta na nowe wyzwania!",
      btn_contact: 'Napisz wiadomość',
      copyright: 'Dawid Marchut © 2026',
    },
    contactPage: {
      title: 'Skontaktuj się',
      desc: 'Wypełnij formularz lub napisz bezpośrednio na maila.',
      form_name: 'Twoje Imię',
      form_email: 'Twój Email',
      form_message: 'Wiadomość',
      btn_send: 'Wyślij Wiadomość',
      btn_back: 'Powrót do strony głównej',
      success: 'Wiadomość wysłana! (Symulacja)',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      logo: 'PORTFOLIO',
    },
    hero: {
      greeting: 'Hi there!',
      title_prefix: "I'm",
      name: 'Dawid Marchut',
      role: 'Freelance Developer / 3D Artist',
      desc_1: 'Engineering precision',
      desc_2: 'artistic chaos',
      btn_cv: 'Download CV',
    },
    education: {
      title: 'Education',
      items: [
        {
          degree: 'IT Technician',
          date: 'Sep 2020 - Apr 2025',
          school: 'Jan Długosz School Complex No. 2 in Wieluń',
          badge: '5.56',
          desc: 'Creation and management of networks and databases, website development using HTML, CSS, PHP, JavaScript, programming in C++, Python, and Microsoft Office suite proficiency.',
        },
        {
          degree: 'B.Eng. in Technical Computer Science',
          date: 'Oct 2025 - Present',
          school: 'Wrocław University of Science and Technology',
          badge: 'Present',
          desc: 'Focusing on the intersection of IT systems and hardware layers. Developing skills in low-level programming and technical system design.',
        },
        {
          degree: 'CyberOps Associate',
          date: 'Dec 2025 - Dec 2025',
          school: 'Expert Centre for Cybersecurity Training - Cisco Networking Academy',
          badge: 'Completed',
          desc: 'Certificate validating knowledge in security monitoring, incident detection, and threat analysis in network systems. Preparation for work in Security Operations Centers (SOC).',
        },
        {
          degree: 'Ethical Hacker',
          date: 'Jan 2026 - Jan 2026',
          school: 'Expert Centre for Cybersecurity Training - Cisco Networking Academy',
          badge: 'Completed',
          desc: 'Practical knowledge of offensive security: system vulnerability identification, penetration testing, and infrastructure protection techniques against cyberattacks.',
        },
      ],
    },
    profile: {
      title: 'Profile Overview',
      bio_title: 'About Me',
      bio_desc: 'My world is a mix of technology and creative flair. I bridge two poles: on one hand, programming and technical challenges (networks, monitoring, hardware), and on the other – digital art. I love creating and painting 3D models, as it allows me to see the results of work beyond code itself. Apart from that? I love traveling and discovering new places.',
      tech_title: 'Tech Stack',
      tech_items: ['C++', 'Java', 'Lua', 'HTML5', 'CSS', 'JavaScript', 'PHP', 'SQL', 'Git', 'Blender', 'Substance Painter 3D'],
      location_title: 'Location',
      location: 'Wrocław, Poland',
      hobbies_title: 'Interests',
      hobbies: ['DIY & Tinkering', '3D Modeling & Sculpting', 'Game Development', 'New Tech', 'Traveling', 'Texturing & Shading', 'Automation']
    },
    projects: {
      title: 'Projects',
      items: [
        {
          id: 'proxy-color-model',
          title: 'Proxy-Color Model',
          desc: 'Creation of textures allowing the player to change armor painting color in real-time.',
          tech: ['Substance Painter 3D', 'Blender', 'VTF Edit'],
          images: [
            private1,
            private2,
          ],
          links: [
            { type: 'artstation', url: 'https://katashijk.artstation.com', label: 'ArtStation' },
            { type: 'steam', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2993587586', label: 'Steam' }
          ]
        },
        {
          id: 'custom-squad-models',
          title: 'Customized Squad Models',
          desc: 'Technical adaptation and personalization of base models for a client. The project focused on giving a unique visual character while strictly maintaining consistency with the source material.',
          tech: ['Substance Painter 3D', 'Blender', 'VTF Edit'],
          images: [
            keeli1,
            keeli2,
            gc,
            cth,
            gth,
            yth
          ],
          links: [
            { type: 'artstation', url: 'https://katashijk.artstation.com', label: 'ArtStation' },
            { type: 'steam', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2848374137', label: 'Steam' }
          ]
        },
        {
          id: 'model-commisions',
          title: 'Various Customized Models',
          desc: 'Selected works created as part of commercial freelance commissions. All created with in-depth client consultation at every stage of work.',
          tech: ['Substance Painter 3D', 'Blender', 'VTF Edit'],
          images: [
            dtdroidb,
            dtdroidw,
            impCommando,
            n1thragr,
            kdtx2121,
            kdtx2122
          ],
          links: [
            { type: 'artstation', url: 'https://katashijk.artstation.com', label: 'ArtStation' }
          ]
        },
      ],
    },
    footer: {
      title: 'Contact',
      desc: "Have a project idea? Or maybe you just want to say hi? My inbox is always open to new challenges!",
      btn_contact: 'Send a message',
      copyright: 'Dawid Marchut © 2026',
    },
    contactPage: {
      title: 'Get in Touch',
      desc: 'Fill out the form or email me directly.',
      form_name: 'Your Name',
      form_email: 'Your Email',
      form_message: 'Message',
      btn_send: 'Send Message',
      btn_back: 'Back to Home',
      success: 'Message sent! (Simulation)',
    },
  }
};