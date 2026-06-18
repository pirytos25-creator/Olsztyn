export const MAP_CONFIG = {
  image: 'assets/images/olsztyn_map_dark_fantasy.png',
  width: 1024,
  height: 1024,
  title: 'Mapa gminy Purda i okolic Olsztyna',
  route: [
    'klebark_wielki',
    'klewki',
    'patrycki_mlyn',
    'smutna_gora',
    'purda',
    'gilawy',
    'nowa_wies',
    'butryny',
    'baldy',
    'zgnilocha'
  ]
};
export const HISTORICAL_NODES = [
  { id: 'klewki', x: 33, y: 17, type: 'Miejscowość', name: "Klewki",
    desc: "Klewki są starsze od Olsztyna — przywilej lokacyjny wystawiono 13 kwietnia 1352 roku, rok przed założeniem stolicy regionu. Latem 2009 na „Malinowym Wzgórzu” Juliusz Machulski kręcił sceny do filmu „Kołysanka”.",
    pytanie: "W jakiej miejscowości odbywały się mistrzostwa Polski w brydżu sportowym, warcabach i wędkarstwie podlodowym?",
    odp: ["Klebark Wielki","Klewki","Butryny"], dobra: 1,
    wyj: "To Klewki — wieś z bogatą historią i legendą „O złotym koniu” spisaną przez Marię Zientarę-Malewską.",
    zobacz: "Neorenesansowy pałac Lousów otoczony parkiem z 200-letnimi drzewami oraz kościół z barokowym ołtarzem. Latem — kąpiel w jeziorze Linowskim.",
    image: "assets/images/20260616_115115.jpg",
    podpis: "Pałac w Klewkach",
    autor: "Fot. W. Katarzyński" },

  { id: 'klebark_wielki', x: 26, y: 15, type: 'Miejscowość', name: "Klebark Wielki",
    desc: "To w zapisach lokacyjnych Mikołaja Kopernika z 1517 roku po raz pierwszy rozdzielono Klebark na Wielki i Mały. Kopernik, jako administrator dóbr kapituły, bywał tu trzykrotnie. We wsi urodził się też Jan Liszewski, założyciel „Gazety Olsztyńskiej”.",
    pytanie: "Który z wielkich Polaków przebywał w Klebarku Wielkim?",
    odp: ["Mikołaj Kopernik","Jan Matejko","Adam Mickiewicz"], dobra: 0,
    wyj: "Mikołaj Kopernik — prowadził tu rekolonizację po wojnie polsko-krzyżackiej.",
    zobacz: "Neogotyckie Sanktuarium Krzyża Świętego z relikwiami podarowanymi przez Jana Pawła II (2002) i granitową chrzcielnicą z XIV wieku. Przy świątyni pomnik papieża.",
    image: "assets/images/20260616_115156.jpg",
    podpis: "Kościół w Klewkach",
    autor: "Fot. J. Laskowski" },

  { id: 'patrycki_mlyn', x: 41, y: 25, type: 'Miejscowość', name: "Patrycki Młyn",
    desc: "Najmłodszy młyn w gminie, a zarazem jedyny zabytkowy młyn z kołem podsiębiernym na Warmii i Mazurach. Żeliwne koło o średnicy 5 m i szerokości 2,2 m odlano w 1880 roku — tak duże, by zrekompensować mniejszą wydajność tej konstrukcji.",
    pytanie: "Z czego słynie Patrycki Młyn?",
    odp: ["Największe jezioro w gminie","Jedyne koło podsiębierne na Warmii i Mazurach","Najstarszy kościół"], dobra: 1,
    wyj: "W kole podsiębiernym woda uderza w łopatki od dołu — stąd nie trzeba spiętrzać rzeki.",
    zobacz: "Drewniany budynek młyna na podpiwniczeniu z głazów polnych, malowniczo położony nad wodą. Dojście od strony Patryk.",
    image: "assets/images/20260616_115223a.jpg",
    podpis: "Patrycki Młyn przed modernizacją",
    autor: "Fot. J. Laskowski" },

  { id: 'purda', x: 55, y: 32, type: 'Miejscowość', name: "Purda",
    desc: "Purda została założona przez kapitułę warmińską w 1384 roku, a jej przywilej lokacyjny obejmował aż 70 łanów — więcej niż jakakolwiek wieś w okolicy. To najstarsza wieś w sąsiedztwie.",
    pytanie: "Gdzie mieści się siedziba Urzędu Gminy?",
    odp: ["Klewki","Purda","Butryny"], dobra: 1,
    wyj: "W Purdzie — siedzibie władz gminy od jej powstania w 1973 roku.",
    zobacz: "Gotycki kościół św. Michała Archanioła z 1503 roku z barokowym wnętrzem i unikalnym ołtarzem myśliwskim z trofeów. W centrum także drewniana wieżyczka zabytkowej remizy.",
    image: "assets/images/20260616_115244.jpg",
    podpis: "Kościół w Purdzie",
    autor: "Fot. J. Laskowski" },

  { id: 'gilawy', x: 69, y: 28, type: 'Miejscowość', name: "Giławy",
    desc: "Mieszkańcy długo marzyli o własnej świątyni — w 1895 roku wieś liczyła aż 471 osób. Parafię w Giławach utworzono dopiero w 1921 roku, a pierwszym proboszczem został ks. Andrzej Barczewski.",
    pytanie: "Gdzie znajduje się kościół pw. św. Jana Chrzciciela?",
    odp: ["Purda","Giławy","Butryny"], dobra: 1,
    wyj: "W Giławach — neogotycki kościół konsekrowano w 1903 roku.",
    zobacz: "Strzelisty neogotycki kościół malowniczo wtopiony w skraj lasu. We wsi stała też tablica upamiętniająca dawną polską szkołę z lat 30. XX wieku.",
    image: "assets/images/20260616_115246.jpg",
    podpis: "Kościół w Giławach",
    autor: "Fot. J. Laskowski" },

  { id: 'smutna_gora', x: 47, y: 26, type: 'Miejscowość', name: "Smutna Góra",
    desc: "Tuż obok, w Pajtuńskim Młynie, stoi figura z piaskowca przedstawiająca Chrystusa Sędziego — najstarszy tego typu zabytek na Warmii, ustawiony na jeszcze starszym postumencie.",
    pytanie: "Gdzie znajduje się wzgórze zwane Smutną Górą albo Górą Żal?",
    odp: ["między Klebarkiem Wlk. a Mł.","między Purdą a Pajtuńskim Młynem","między Nową Wsią a Butrynami"], dobra: 1,
    wyj: "Leży między Purdą a Pajtuńskim Młynem — dawniej miejscem przepraw i postojów.",
    zobacz: "Spacer na wzniesienie najlepiej połączyć z wizytą w Pajtuńskim Młynie nad rzeką Kośną — dziś to gospodarstwo agroturystyczne ze stadniną koni.",
    image: "assets/images/20260616_115310.jpg",
    podpis: "Warmińska kapliczka przydrożna",
    autor: "Fot. J. Laskowski" },

  { id: 'nowa_wies', x: 35, y: 48, type: 'Miejscowość', name: "Nowa Wieś / jeziora",
    desc: "Na dawnym rozlewisku młyńskim powstał użytek ekologiczny Dzika Korsakówka — wspaniałe miejsce lęgowe ptaków wodnych. Najstarsze ślady ludzi sięgają tu aż VII tysiąclecia p.n.e.",
    pytanie: "Na terenie gminy Purda znajdują się jeziora:",
    odp: ["Kośno, Mamry, Serwent","Gim, Kośno, Serwent","Serwent, Skanda, Gim"], dobra: 1,
    wyj: "Gim, Kośno i Serwent. Mamry leżą na Mazurach, a Skanda w Olsztynie.",
    zobacz: "Dzika Korsakówka — cicha ostoja ptactwa wodno-błotnego, rzadko odwiedzana przez ludzi ze względu na odległość od dróg. Najlepiej z lornetką.",
    image: "assets/images/20260616_115354.jpg",
    podpis: "Krzyżówki na rozlewisku Dzika Korsakówka",
    autor: "Fot. P. Czułowski" },

  { id: 'butryny', x: 30, y: 61, type: 'Miejscowość', name: "Butryny",
    desc: "Ks. Barczewski określił parafię butryńską jako najrozleglejszą na całej Warmii. Najstarszy dokument poświadczający kościół pochodzi z 1516 roku, a po pożarze w 1886 roku świątynię odbudowano w zaledwie kilka miesięcy.",
    pytanie: "Gdzie znajduje się największy w gminie park rozrywki?",
    odp: ["Butryny","Klewki","Prejłowo"], dobra: 0,
    wyj: "W Butrynach — wsi z jedną z najstarszych parafii w regionie.",
    zobacz: "Neogotycki kościół św. Jakuba Apostoła z wieżą ukończoną w 1934 roku oraz dwie zabytkowe kapliczki przydrożne.",
    image: "assets/images/20260616_115408.jpg",
    podpis: "Dawny budynek GRN w Butrynach",
    autor: "Fot. J. Laskowski" },

  { id: 'baldy', x: 31, y: 64, type: 'Miejscowość', name: "Bałdy",
    desc: "Bałdy lokowano w 1418 roku — to zamknęło 70-letni okres zakładania wsi w okolicy. Tędy biegł stary Trakt Biskupi, którym podróżował m.in. biskup Jan Stefan Wydżga w drodze z Lidzbarka do Warszawy.",
    pytanie: "Gdzie znajduje się Trakt Biskupi?",
    odp: ["Nowa Kaletka","Bałdy","Trękusek"], dobra: 1,
    wyj: "Przez Bałdy — jednym z trzech traktów warszawskich przecinających Warmię.",
    zobacz: "Zachowany fragment dawnego traktu — dziś niepozorna, leśna droga gruntowa, którą wieki temu przemierzali biskupi i kupcy.",
    image: "assets/images/20260616_115417.jpg",
    podpis: "Leśna droga w okolicy",
    autor: "Fot. J. Laskowski" },

  { id: 'zgnilocha', x: 17, y: 77, type: 'Miejscowość', name: "Zgniłocha",
    desc: "Zgniłocha to najdalej na południe wysunięty kraniec gminy, leżący na historycznej granicy Warmii i Mazur — dwóch krain o odmiennej tradycji i wyznaniu.",
    pytanie: "Która miejscowość jest najbardziej wysunięta na południe?",
    odp: ["Marcinkowo","Zgniłocha","Giławy"], dobra: 1,
    wyj: "Zgniłocha — gdzie kończy się gmina i zaczynają Mazury.",
    zobacz: "Cicha wieś na pograniczu kulturowym. Stąd blisko do rezerwatów i lasów Nadleśnictwa Nowe Ramuki.",
    image: "assets/images/20260616_115517.jpg",
    podpis: "Mapa Hennenberga (XVII w.)",
    autor: "domena publiczna" }
];

export const MONSTERS = [
  {
    id: 'leszy',
    name: 'Leszy (Borowy)',
    type: 'Duch Lasu',
    desc: 'Według słowiańskiej demonologii Leszy był niekwestionowanym panem lasu i władcą zwierząt. Objawiał się pod postacią niedźwiedzia, wilka lub starca z twarzą porośniętą mchem. Mógł zmieniać swój wzrost w zależności od wysokości drzew. Wobec dobrych ludzi bywał przyjazny, lecz niszczycieli lasu wodził na manowce lub rzucał na pożarcie drapieżnikom.',
    image: 'assets/images/leszy.webp',
    video: 'assets/videos/leszy.mp4',
    x: 75, y: 35
  },
  {
    id: 'poludnica',
    name: 'Południca',
    type: 'Demon Polny',
    desc: 'Demon z wierzeń słowiańskich, personifikujący zjawisko udaru słonecznego. Południce rodziły się z dusz kobiet zmarłych w okolicach ślubu. Ukazywały się w samo południe jako blade kobiety w białych szatach. Atakowały chłopów pracujących w polu, zsyłając omdlenia i bóle. Zabezpieczało przed nimi odpoczywanie w cieniu podczas największego skwaru.',
    image: 'assets/images/poludnica.webp',
    video: 'assets/videos/poludnica.mp4',
    x: 42, y: 55
  },
  {
    id: 'strzyga',
    name: 'Strzyga',
    type: 'Upiór',
    desc: 'Wierzenia Słowian opisują Strzygę jako demona o rodowodzie wampirycznym. Uważano, że rodzi się z dwiema duszami, dwoma sercami i podwójnym rzędem zębów. Po śmierci jedna z dusz zostawała w ożywionym trupie, by nocami polować na ludzką krew. Broniono się przed nią dekapitując ciało lub sypiąc mak w trumnie.',
    image: 'assets/images/strzyga.webp',
    video: 'assets/videos/strzyga.mp4',
    x: 22, y: 25
  },
  {
    id: 'topielica',
    name: 'Topielica',
    type: 'Demon Wodny',
    desc: 'Topielice, zwane także wodnicami, to złowrogie demony zamieszkujące jeziora i rzeki. Stawały się nimi młode kobiety, które utonęły. Ukazywały się jako blade dziewczęta z długimi, mokrymi włosami. Śpiewem i urodą wabiły nieostrożnych wędrowców, po czym wciągały ich w mroczne głębiny na pewną śmierć.',
    image: 'assets/images/topielica.png',
    video: 'assets/videos/topielica.mp4',
    x: 38, y: 51
  },
  {
    id: 'wilkolak',
    name: 'Wilkołak',
    type: 'Zmiennokształtny',
    desc: 'W tradycji słowiańskiej (tzw. wilkołactwo) to człowiek potrafiący – na skutek rzuconej klątwy lub z wyboru – przybierać postać wilka. Podczas pełni księżyca tracił ludzkie zmysły, poddając się instynktowi łowcy. Od zwykłego wilka odróżniały go jednak ludzkie, smutne oczy i brak ogona.',
    image: 'assets/images/wilkoak.webp',
    video: 'assets/videos/wilkolak.mp4',
    x: 25, y: 70
  }
];

export const INTRO_VIDEOS = [
  'assets/videos/intro.mp4'
];
