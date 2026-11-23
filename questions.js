// ============================================================
// KVÍZ KÉRDÉSBANK (csak a host.html tölti be, a játékosok nem látják!)
// ============================================================
// Két kérdéstípus támogatott:
//   1) type: "abcd"
//      - options: 4 válaszlehetőség tömbje [A, B, C, D]
//      - correct: helyes válasz indexe (0 = A, 1 = B, 2 = C, 3 = D)
//      - points: pontszám jó válaszért (alapértelmezett: 100)
//
//   2) type: "number" (számtippelős)
//      - correct: a pontos helyes szám (tizedesponttal, pl. 3.14)
//      - unit: mértékegység (pl. "év", "km", "db", "%") – opcionális
//      - Pontozás: telitalálat +150 pt, legközelebbi +100 pt, 2. legközelebbi +50 pt
//
// time: válaszadási idő másodpercben (pl. 25 vagy 35)

window.QUIZ_TITLE = "Kvízest";

window.QUIZ_QUESTIONS = [
  {
    type: "abcd",
    category: "Bemelegítés",
    text: "Melyik bolygó rendelkezik a legtöbb ismert holddal a Naprendszerben?",
    options: ["Jupiter", "Szaturnusz", "Uránusz", "Neptunusz"],
    correct: 1,
    time: 25,
    points: 100,
    explanation: "A Szaturnusz körül több mint 140 igazolt hold kering, amivel megelőzi a Jupitert."
  },
  {
    type: "number",
    category: "Tippelős kör",
    text: "Hány méter magas az Eiffel-torony (az antennával együtt)?",
    correct: 330,
    unit: "méter",
    time: 35,
    explanation: "2022-ben új rádióantennát kapott, így jelenleg pontosan 330 méter magas."
  },
  {
    type: "abcd",
    category: "Földrajz",
    text: "Melyik ország zászlajában NEM szerepel a piros, a fehér vagy a kék szín egyike sem?",
    options: ["Jamaica", "Brazília", "Dél-afrikai Köztársaság", "Svédország"],
    correct: 0,
    time: 25,
    points: 100,
    explanation: "Jamaica zászlaja az egyetlen a világon, amelyben sem piros, sem fehér, sem kék nincs (csak zöld, sárga és fekete)."
  },
  {
    type: "number",
    category: "Tippelős kör",
    text: "Melyik évben indult el a YouTube videómegosztó oldal?",
    correct: 2005,
    unit: "év",
    time: 30,
    explanation: "A YouTube-ot 2005. február 14-én alapították, az első videót pedig áprilisban töltötték fel."
  },
  {
    type: "abcd",
    category: "Kultúra & Gasztronómia",
    text: "Melyik kávéital készül eszpresszóból, gőzölt tejből és vastag tejhabból nagyjából 1:1:1 arányban?",
    options: ["Flat white", "Cortado", "Cappuccino", "Latte macchiato"],
    correct: 2,
    time: 25,
    points: 100,
    explanation: "A klasszikus olasz cappuccino egyharmad eszpresszó, egyharmad gőzölt tej és egyharmad tejhab."
  },
  {
    type: "number",
    category: "Finálé tipp",
    text: "Hány kilométer hosszú a Duna teljes hossza a forrástól a Fekete-tengerig?",
    correct: 2850,
    unit: "km",
    time: 35,
    explanation: "A Duna teljes hossza kb. 2850 km, ebből 417 km esik Magyarország területére."
  }
];
