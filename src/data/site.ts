const origin = (import.meta.env.SITE ?? "https://handleri655.github.io").replace(/\/$/, "");
const base = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");

export const site = {
  name: "Konetyö M. Salonen Oy",
  shortName: "Konetyö M. Salonen",
  tagline: "Maanrakennusta, huoltoa ja avainpalvelut Pellossa",
  url: `${origin}${base}`,
  email: "matti@konetyosalonen.fi",
  phone: "044 991 6035",
  phoneHref: "tel:+358449916035",
  yTunnus: "3402447-3",
  founded: 2023,
  address: {
    street: "Juusonkankaantie 1",
    postalCode: "95700",
    city: "Pello",
    mapsQuery: "Juusonkankaantie 1, 95700 Pello",
  },
  postalAddress: {
    street: "Vaaratie 17",
    postalCode: "95700",
    city: "Pello",
  },
  hours: {
    hall: "Halli avoinna arkisin klo 8–15",
    extra: "Aukioloaikojen ulkopuolella palvellaan sovitusti",
  },
  area: "Pello, Ylitornio, Kolari ja muu Lappi",
  tradeNames: ["Kiinteistöhuolto Salonen", "Lapin kourupuhdistus"],
} as const;

export const nav = [
  { href: "/palvelut", label: "Palvelut" },
  { href: "/yhteystiedot", label: "Yhteystiedot" },
] as const;

export const services = [
  {
    slug: "kaivinkoneurakointi",
    title: "Kaivinkoneurakointi",
    kicker: "Maanrakennus",
    summary:
      "Kaivuutyöt, talojen ja teiden perustukset, kaapeliojat, salaojitukset ja pihakiveykset.",
    image: "/images/kaivinkone.jpg",
    alt: "Kubota-kaivinkone lumitöissä",
    items: [
      "Kaivuutyöt",
      "Talojen ja teiden perustukset",
      "Kaapeliojien kaivuut",
      "Salaojitukset",
      "Pihakiveykset",
      "Energiapuun korjuu giljotiinikouralla",
    ],
  },
  {
    slug: "kiinteistohuolto",
    title: "Kiinteistöhuolto",
    kicker: "Kunnossapito",
    summary:
      "Kiinteistöjen hoito, lumityöt, teiden kunnossapito, kattohuollot ja rännien puhdistus.",
    image: "/images/kiinteistohuolto.jpg",
    alt: "Rännien ja kourujen puhdistus",
    items: [
      "Kiinteistönhuolto ja kunnossapito",
      "Teiden ja katujen kunnossapito",
      "Lumityöt ja lumenpudotukset",
      "Lakaisupalvelut",
      "Pihapuiden kaadot",
      "Rännien, kattojen ja kourujen puhdistus",
      "Kattohuoltotyöt",
    ],
  },
  {
    slug: "konevuokraus",
    title: "Kone- ja laitevuokraus",
    kicker: "Vuokraus",
    summary:
      "Poravasarat, piikkauskoneet, henkilönostimet, maantiivistäjät ja muu kalusto.",
    image: "/images/vuokraus.jpg",
    alt: "Konevuokraus-kyltti Pellossa",
    items: [
      "Poravasarat",
      "Piikkauskoneet",
      "Henkilönostimet",
      "Maantiivistäjät",
      "Muu työkalusto kysyttäessä",
    ],
  },
  {
    slug: "avain-ja-lukkopalvelut",
    title: "Avain- ja lukkopalvelut",
    kicker: "Uutta 2026",
    summary:
      "Avaimet, lukot ja kellojen patterien vaihto. Halli avoinna arkisin klo 8–15.",
    image: "/images/avaimet.jpg",
    alt: "Avainten teko hallilla",
    items: [
      "Avainten teko ja kopiointi",
      "Lukkojen korjaus ja asennus",
      "Kellojen patterien vaihto",
      "Palvelu myös sopimalla hallin aukiolojen ulkopuolella",
    ],
  },
  {
    slug: "lasit-peilit-plexit",
    title: "Lasit, peilit ja plexit",
    kicker: "Mittatilaus",
    summary: "Lasit, peilit ja plexit mittatilauksena Pellon hallilta.",
    image: "/images/lasit.jpg",
    alt: "Lasilevyt hallilla",
    items: [
      "Ikkuna- ja lasilevyjen mittatilaus",
      "Peilit mittojen mukaan",
      "Plexit ja erikoislevyt",
      "Hajonneiden lasien vaihto",
    ],
  },
] as const;

export const notices = [
  {
    title: "Avain- ja lukkopalvelut",
    text: "Halli avoinna arkisin klo 8–15. Kellojen patterien vaihto samalla käynnillä. Aukiolojen ulkopuolella palvellaan sovitusti.",
    href: "/avain-ja-lukkopalvelut",
    label: "Uutta 2026",
  },
  {
    title: "Myytävänä: 5 × 8 m juhlateltta",
    text: "Vedenpitävä katto, sivukorkeus 2,0 m, harjakorkeus 2,75 m. Neljässä paketissa, helppo kuljettaa. Vain yksi kappale.",
    href: "/yhteystiedot",
    label: "Kysy saatavuus",
  },
  {
    title: "Myytävänä: Husqvarna R214 TC",
    text: "Ajettava ruohonleikkuri. Vain yksi kappale — soita ja kysy lisää.",
    href: "/yhteystiedot",
    label: "Kysy saatavuus",
  },
] as const;

export const gallery = [
  { src: "/images/kaivinkone.jpg", alt: "Kubota-kaivinkone lumitöissä", caption: "Kubota" },
  { src: "/images/hero.jpg", alt: "Pyöräkuormaaja sorakasalla", caption: "Kuormaaja" },
  { src: "/images/lappi.jpg", alt: "Halli Juusonkankaantiellä", caption: "Halli" },
  { src: "/images/avaimet.jpg", alt: "Avainten teko hallilla", caption: "Avaimet" },
  { src: "/images/lasit.jpg", alt: "Lasilevyt hallilla", caption: "Lasit" },
  { src: "/images/kiinteistohuolto.jpg", alt: "Rännien puhdistus", caption: "Kourut" },
] as const;
