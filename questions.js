// ============================================================
// KVÍZ KÉRDÉSBANK – 3 SZAKASZ (34 kérdés)
// ============================================================
//   1. RÉSZ: Feleletválasztós kérdések (13 db)
//   2. RÉSZ: Képfelismerés – Zenekarok (8 db)
//   3. RÉSZ: Tippelős kérdések (13 db)
//
// FONTOS: Az 1. részben a két GM Clubos belsős kérdésnél
// ellenőrizd a "correct" számot (0 = A, 1 = B, 2 = C, 3 = D)!
// ============================================================

window.QUIZ_TITLE = "Kvízest";

window.QUIZ_QUESTIONS = [
  // ==========================================================
  // 1. RÉSZ – FELELETVÁLASZTÓS KÉRDÉSEK (13 db)
  // ==========================================================
  {
    type: "abcd",
    category: "1. rész • Bemelegítés",
    text: "Melyik bolygó rendelkezik a legtöbb ismert holddal a Naprendszerben?",
    options: ["Jupiter", "Szaturnusz", "Uránusz", "Neptunusz"],
    correct: 1,
    time: 25,
    points: 100,
    explanation: "A Szaturnusz körül több mint 140 igazolt hold kering, amivel megelőzi a Jupitert."
  },
  {
    type: "abcd",
    category: "1. rész • Földrajz",
    text: "Melyik ország zászlajában NEM szerepel a piros, a fehér vagy a kék szín egyike sem?",
    options: ["Jamaica", "Brazília", "Dél-afrikai Köztársaság", "Svédország"],
    correct: 0,
    time: 25,
    points: 100,
    explanation: "Jamaica zászlaja az egyetlen a világon, amelyben sem piros, sem fehér, sem kék nincs (csak zöld, sárga és fekete)."
  },
  {
    type: "abcd",
    category: "1. rész • Gasztronómia",
    text: "Melyik kávéital készül eszpresszóból, gőzölt tejből és vastag tejhabból nagyjából 1:1:1 arányban?",
    options: ["Flat white", "Cortado", "Cappuccino", "Latte macchiato"],
    correct: 2,
    time: 25,
    points: 100,
    explanation: "A klasszikus olasz cappuccino egyharmad eszpresszó, egyharmad gőzölt tej és egyharmad tejhab."
  },
  {
    type: "abcd",
    category: "1. rész • GM Club",
    text: "Mikor alapították a GM Clubbot?",
    options: ["2016", "2017", "2015", "2018"],
    correct: 0, // <-- ELLENŐRIZD! (0 = A: 2016, 1 = B: 2017, 2 = C: 2015, 3 = D: 2018)
    time: 25,
    points: 100
  },
  {
    type: "abcd",
    category: "1. rész • Gazdaság & Márkák",
    text: "Melyik világhírű vállalat indult eredetileg papírgyárként, majd gyártott gumicsizmát és autógumit is, mielőtt a mobiltelefonokról vált ismertté?",
    options: ["Samsung", "Nokia", "Sony", "Philips"],
    correct: 1,
    time: 25,
    points: 100,
    explanation: "A finn Nokiát 1865-ben papírmalomként alapították, és évtizedekig gumitermékeket és kábeleket is gyártott."
  },
  {
    type: "abcd",
    category: "1. rész • Gazdaságtörténet",
    text: "Melyik országban vezették be a világon elsőként a hivatalos papírpénzt?",
    options: ["Kína", "Olaszország", "Svédország", "Anglia"],
    correct: 0,
    time: 25,
    points: 100,
    explanation: "Az első hivatalos papírpénzt a 11. századi Kínában, a Szung-dinasztia idején bocsátották ki."
  },
  {
    type: "abcd",
    category: "1. rész • Tudomány",
    text: "Melyik kémiai elem vegyjele a „W” a periódusos rendszerben?",
    options: ["Vanádium", "Volfrám", "Bizmut", "Bárium"],
    correct: 1,
    time: 25,
    points: 100,
    explanation: "A W vegyjel a volfrám (németül Wolfram) nevéből származik; ez az egyik legmagasabb olvadáspontú fém."
  },
  {
    type: "abcd",
    category: "1. rész • Földrajz",
    text: "Melyik szuverén ország fővárosa fekszik a legészakabbra a világon?",
    options: ["Oslo", "Helsinki", "Reykjavík", "Stockholm"],
    correct: 2,
    time: 25,
    points: 100,
    explanation: "Izland fővárosa, Reykjavík az északi szélesség 64. foka fölött fekszik, ezzel a világ legészakibb fővárosa."
  },
  {
    type: "abcd",
    category: "1. rész • Film & Popkultúra",
    text: "Melyik volt a filmtörténet első, teljes egészében számítógéppel animált (CGI) egész estés mozifilmje?",
    options: ["Shrek", "Toy Story – Játékháború", "Egy bogár élete", "Szörny Rt."],
    correct: 1,
    time: 25,
    points: 100,
    explanation: "A Pixar által készített Toy Story 1995-ben jelent meg, és új korszakot nyitott az animációban."
  },
  {
    type: "abcd",
    category: "1. rész • GM Club",
    text: "Mi volt a legutolsó Tramparty hivatalos témája?",
    options: ["Űr", "Led", "Neon", "Vice City"],
    correct: 2, // <-- ELLENŐRIZD! (0 = A: Űr, 1 = B: Led, 2 = C: Neon, 3 = D: Vice City)
    time: 25,
    points: 100
  },
  {
    type: "abcd",
    category: "1. rész • Sport",
    text: "Melyik sportágban használják a „birdie” és az „eagle” kifejezéseket a pontozásnál?",
    options: ["Tollaslabda", "Golf", "Krikett", "Squash"],
    correct: 1,
    time: 25,
    points: 100,
    explanation: "A golfban a birdie eggyel, az eagle pedig kettővel kevesebb ütést jelent az adott szakasz alapértékénél (par)."
  },
  {
    type: "abcd",
    category: "1. rész • Gasztronómia",
    text: "Melyik a világ legdrágább fűszere súlyra mérve, amelyet egy krókuszfajta bibéiből kézzel szüretelnek?",
    options: ["Vanília", "Kardamom", "Sáfrány", "Szerecsendió"],
    correct: 2,
    time: 25,
    points: 100,
    explanation: "Egyetlen kilogramm sáfrányhoz nagyjából 150 ezer krókuszvirág bibéjét kell kézzel összegyűjteni."
  },
  {
    type: "abcd",
    category: "1. rész • Találmányok",
    text: "Melyik magyar feltaláló nevéhez fűződik a zajtalan, biztonsági gyufa feltalálása?",
    options: ["Irinyi János", "Jedlik Ányos", "Bíró László József", "Kandó Kálmán"],
    correct: 0,
    time: 25,
    points: 100,
    explanation: "Irinyi János 1836-ban találta fel a robbanásmentes, zajtalanul gyulladó gyufát."
  },

  // ==========================================================
  // 2. RÉSZ – KÉPFELISMERÉS: ZENEKAROK (8 db)
  // ==========================================================
  {
    type: "text",
    category: "2. rész • Képfelismerés (1/8)",
    text: "Melyik zenekart ábrázolja a kép?",
    image: "./Gunsnroses.png",
    correct: "Guns N' Roses",
    acceptedAnswers: [
      "Guns N' Roses",
      "Guns n roses",
      "Guns and Roses",
      "Guns & Roses",
      "Gunsnroses"
    ],
    placeholder: "Írd be a zenekar nevét...",
    time: 30,
    points: 100
  },
  {
    type: "text",
    category: "2. rész • Képfelismerés (2/8)",
    text: "Melyik zenekart ábrázolja a kép?",
    image: "./Redhotchilipeppers.png",
    correct: "Red Hot Chili Peppers",
    acceptedAnswers: [
      "Red Hot Chili Peppers",
      "Red Hot Chilli Peppers",
      "Redhotchilipeppers"
    ],
    placeholder: "Írd be a zenekar nevét...",
    time: 30,
    points: 100
  },
  {
    type: "text",
    category: "2. rész • Képfelismerés (3/8)",
    text: "Melyik zenekart ábrázolja a kép?",
    image: "./Imaginedragons.jpg",
    correct: "Imagine Dragons",
    acceptedAnswers: [
      "Imagine Dragons",
      "Imaginedragons"
    ],
    placeholder: "Írd be a zenekar nevét...",
    time: 30,
    points: 100
  },
  {
    type: "text",
    category: "2. rész • Képfelismerés (4/8)",
    text: "Melyik zenekart ábrázolja a kép?",
    image: "./Therollingstones.png",
    correct: "The Rolling Stones",
    acceptedAnswers: [
      "The Rolling Stones",
      "Rolling Stones",
      "Therollingstones"
    ],
    placeholder: "Írd be a zenekar nevét...",
    time: 30,
    points: 100
  },
  {
    type: "text",
    category: "2. rész • Képfelismerés (5/8)",
    text: "Melyik zenekart ábrázolja a kép?",
    image: "./Tankcsapda.png",
    correct: "Tankcsapda",
    acceptedAnswers: [
      "Tankcsapda",
      "Tank csapda"
    ],
    placeholder: "Írd be a zenekar nevét...",
    time: 30,
    points: 100
  },
  {
    type: "text",
    category: "2. rész • Képfelismerés (6/8)",
    text: "Melyik zenekart ábrázolja a kép?",
    image: "./Halottpenz.png",
    correct: "Halott Pénz",
    acceptedAnswers: [
      "Halott Pénz",
      "Halottpénz"
    ],
    placeholder: "Írd be a zenekar nevét...",
    time: 30,
    points: 100
  },
  {
    type: "text",
    category: "2. rész • Képfelismerés (7/8)",
    text: "Melyik zenekart ábrázolja a kép?",
    image: "./Omega.jpg",
    correct: "Omega",
    acceptedAnswers: [
      "Omega"
    ],
    placeholder: "Írd be a zenekar nevét...",
    time: 30,
    points: 100
  },
  {
    type: "text",
    category: "2. rész • Képfelismerés (8/8)",
    text: "Melyik zenekart ábrázolja a kép?",
    image: "./Honeybeast.png",
    correct: "Honeybeast",
    acceptedAnswers: [
      "Honeybeast",
      "Honey beast"
    ],
    placeholder: "Írd be a zenekar nevét...",
    time: 30,
    points: 100
  },

  // ==========================================================
  // 3. RÉSZ – TIPPELŐS KÉRDÉSEK (13 db)
  // ==========================================================
  {
    type: "number",
    category: "3. rész • Tippelős (1/13)",
    text: "Hány méter magas az Eiffel-torony (az antennával együtt)?",
    correct: 330,
    unit: "méter",
    time: 35,
    explanation: "2022-ben új rádióantennát kapott, így jelenleg pontosan 330 méter magas."
  },
  {
    type: "number",
    category: "3. rész • Tippelős (2/13)",
    text: "Melyik évben indult el a YouTube videómegosztó oldal?",
    correct: 2005,
    unit: "év",
    time: 30,
    explanation: "A YouTube-ot 2005. február 14-én alapították, az első videót pedig áprilisban töltötték fel."
  },
  {
    type: "number",
    category: "3. rész • Tippelős (3/13)",
    text: "Hány kilométer hosszú a Duna teljes hossza a forrástól a Fekete-tengerig?",
    correct: 2850,
    unit: "km",
    time: 35,
    explanation: "A Duna teljes hossza kb. 2850 km, ebből 417 km esik Magyarország területére."
  },
  {
    type: "number",
    category: "3. rész • Tippelős (4/13)",
    text: "Hány méter magas Magyarország legmagasabb pontja, a Kékes?",
    correct: 1014,
    unit: "méter",
    time: 30,
    explanation: "A Mátrában található Kékes tengerszint feletti magassága 1014 méter."
  },
  {
    type: "number",
    category: "3. rész • Tippelős (5/13)",
    text: "Melyik évben mutatta be Steve Jobs a legelső iPhone-t?",
    correct: 2007,
    unit: "év",
    time: 30,
    explanation: "Steve Jobs 2007. január 9-én mutatta be az első iPhone-t a Macworld konferencián."
  },
  {
    type: "number",
    category: "3. rész • Tippelős (6/13)",
    text: "Hány billentyű található egy szabványos hangversenyzongorán (fehér és fekete együtt)?",
    correct: 88,
    unit: "db",
    time: 30,
    explanation: "Egy modern szabványos zongorán 52 fehér és 36 fekete, összesen 88 billentyű van."
  },
  {
    type: "number",
    category: "3. rész • Tippelős (7/13)",
    text: "Melyik évben került forgalomba a készpénzes euró (bankjegyek és érmék) az eurózóna első 12 országában?",
    correct: 2002,
    unit: "év",
    time: 30,
    explanation: "Számlapénzként 1999-ben indult, de a fizikai bankjegyek és érmék 2002. január 1-jén jelentek meg."
  },
  {
    type: "number",
    category: "3. rész • Tippelős (8/13)",
    text: "Melyik évben lépett ember először a Holdra az Apollo–11 küldetés során?",
    correct: 1969,
    unit: "év",
    time: 30,
    explanation: "Neil Armstrong 1969. július 20-án lépett a Hold felszínére."
  },
  {
    type: "number",
    category: "3. rész • Tippelős (9/13)",
    text: "Hány csontból áll egy átlagos felnőtt ember csontváza?",
    correct: 206,
    unit: "db",
    time: 30,
    explanation: "Csecsemőkorban kb. 270 csontunk van, amelyek egy része a növekedés során összeforr, így felnőttkorra 206 marad."
  },
  {
    type: "number",
    category: "3. rész • Tippelős (10/13)",
    text: "Hány méter magas a világ legmagasabb épülete, a dubaji Burdzs Kalifa (a csúcsával együtt)?",
    correct: 828,
    unit: "méter",
    time: 35,
    explanation: "A 2010-ben átadott Burdzs Kalifa 828 méter magas, és 163 lakható emelettel rendelkezik."
  },
  {
    type: "number",
    category: "3. rész • Tippelős (11/13)",
    text: "Hány kis színes mező (matrica) található összesen egy klasszikus 3×3-as Rubik-kocka hat oldalán?",
    correct: 54,
    unit: "db",
    time: 25,
    explanation: "A kockának 6 oldala van, és oldalanként 9 kis négyzet található rajta (6 × 9 = 54)."
  },
  {
    type: "number",
    category: "3. rész • Tippelős (12/13)",
    text: "Hány méter a maratoni futás hivatalos távja?",
    correct: 42195,
    unit: "méter",
    time: 35,
    explanation: "A maratoni táv pontosan 42 195 méter (42,195 km), amelyet az 1908-as londoni olimpia óta használnak hivatalosan."
  },
  {
    type: "number",
    category: "3. rész • GM Club Finálé (13/13)",
    text: "Hány éve clubtag Blazó?",
    correct: 5,
    unit: "év",
    time: 30,
    explanation: "Blazó pontosan 5 éve erősíti a GM Clubot!"
  }
];
