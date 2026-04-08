import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import CtaPill from "@/components/ui/CtaPill";
import EmergencyCard from "@/components/ui/EmergencyCard";
import { matches } from "@/data/matches";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("home.title"),
    description: t("home.description"),
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main id="main-content" className="w-full">
      {/* ===== 1. HERO ===== */}
      <section className="relative w-full h-screen min-h-[700px] max-md:h-[50vh] max-md:min-h-[300px] flex items-center justify-center">
        {/* Desktop: video de fondo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/Desktop.mp4" type="video/mp4" />
        </video>
        {/* Mobile: imagen est\u00e1tica */}
        <Image
          src="/assets/hero.jpg"
          alt="Somos la sede m\u00e1s mexicana \u2014 Estadio Guadalajara"
          fill
          className="object-cover md:hidden"
          priority
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-5 pt-[60px] md:px-10 md:pt-20">
          <h1 className="font-brigends uppercase leading-[1.05] text-white text-center text-[22px] sm:text-[28px] md:text-[clamp(36px,5vw,64px)]">
            <span className="text-yellow-green">Somos</span> la sede
            <span className="block text-[32px] sm:text-[40px] md:text-[clamp(52px,7.5vw,100px)] leading-none">
              m&aacute;s mexicana
            </span>
          </h1>
        </div>
      </section>

      {/* ===== 2. ESTADIO GUADALAJARA ===== */}
      <section className="relative min-h-[600px] text-white overflow-hidden" id="estadio">
        <Image
          src="/assets/f4b9d9e54f1d14e856faf7cb68e322bbe35e3405.png"
          alt="Estadio Guadalajara"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <Image src="/assets/afa31fcd27c3830e8558ef096363cf70bc3b5be9.png" alt="" fill className="object-cover" />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 31.768%, rgba(0,0,0,0) 85.305%)" }}
        />
        <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8 px-5 py-20 pb-[60px] md:py-[120px] md:px-20 lg:px-[300px] text-center h-full">
          {/* Title block */}
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="font-brigends text-[24px] sm:text-[36px] md:text-[56px] leading-[28px] sm:leading-[40px] md:leading-[64px] uppercase tracking-[2px]">
              estadio<br />Guadalajara
            </h2>
            <p className="font-noto text-[18px] sm:text-[22px] md:text-4xl font-black uppercase">
              Calendario de partidos
            </p>
            <p className="font-noto text-[15px] md:text-lg opacity-80 leading-[1.5]">
              Con su dise&ntilde;o imponente el Estadio Guadalajara est&aacute;
              listo para brillar en la Copa Mundial de la FIFA 2026&#8482;.
              Aqu&iacute; nacen las leyendas, se encienden las pasiones y el
              futbol se vive con el coraz&oacute;n.
            </p>
          </div>

          {/* Match Cards — 4 partidos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[720px]">
            {matches.map((match, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl w-full flex flex-col items-center p-4 gap-2 ${
                  match.isHighlight
                    ? "bg-pink/90 border-2 border-pink"
                    : "bg-white/10 backdrop-blur-sm border border-white/20"
                }`}
              >
                {/* Date & Time */}
                <span className="font-bebas text-[15px] md:text-[17px] leading-tight uppercase tracking-wide">
                  {match.weekday}, {match.day} de {match.month.toLowerCase()} 2026
                </span>
                <span className="font-noto text-xs opacity-70">{match.time}</span>
                {/* Teams */}
                <div className="flex items-center gap-3 w-full justify-center mt-1">
                  <div className="flex flex-col items-center gap-1 w-[60px]">
                    <span className="text-2xl">{match.team1.flag}</span>
                    <span className="font-noto text-[11px] md:text-xs font-semibold text-center leading-tight">{match.team1.name}</span>
                  </div>
                  <span className="font-bebas text-lg opacity-60">vs</span>
                  <div className="flex flex-col items-center gap-1 w-[60px]">
                    <span className="text-2xl">{match.team2.flag}</span>
                    <span className="font-noto text-[11px] md:text-xs font-semibold text-center leading-tight">{match.team2.name}</span>
                  </div>
                </div>
                {/* Match info */}
                <span className="font-noto text-[11px] opacity-60 mt-1">
                  {match.matchNumber} &middot; {match.group}
                </span>
              </div>
            ))}
          </div>

          <CtaPill href="/calendario" variant="filled">
            Conoce m&aacute;s sobre el estadio
          </CtaPill>
        </div>
      </section>

      {/* ===== 3. TE ESPERAMOS ===== */}
      <section
        className="relative min-h-[820px] max-md:min-h-0 flex flex-col items-center justify-center text-center text-white px-5 py-[48px] sm:px-6 sm:py-[60px] md:px-8 md:py-[120px] gap-6 sm:gap-7 md:gap-6 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/assets/gdl-back.jpg')" }}
      >
        <div className="relative z-10 flex flex-col items-center gap-3 md:gap-4">
          <h2 className="font-brigends text-[16px] sm:text-[18px] md:text-[36px] uppercase tracking-[2px] md:tracking-[2px] max-md:tracking-[3px]">
            &iexcl;Te esperamos!
          </h2>
          <span className="text-gradient-guadalajara font-brigends text-[28px] sm:text-[clamp(32px,10vw,56px)] md:text-[clamp(48px,8vw,100px)] uppercase tracking-[3px] leading-none">
            Guadalajara
          </span>
          <h3 className="font-brigends text-[20px] sm:text-[24px] md:text-[56px] uppercase tracking-[3px]">
            Tambi&eacute;n juega
          </h3>
        </div>
        <p className="relative z-10 font-noto max-w-[836px] text-center md:text-lg md:leading-[1.6]">
          <span className="font-bold text-white max-md:block max-md:text-[15px] max-sm:text-[15px] md:text-lg max-md:leading-[1.5] max-md:mb-4">
            Vive la fiesta m&aacute;s grande del futbol en la sede m&aacute;s
            mexicana.
          </span>
          <br className="hidden md:inline" />
          <span className="text-[#b3b5bd] max-md:text-sm max-sm:text-[13px] max-md:leading-[1.7] max-md:opacity-75">
            Guadalajara se llena de energ&iacute;a, orgullo y alegr&iacute;a
            para recibir a millones de fan&aacute;ticos del mundo con el calor
            de su gente, su historia deportiva y su amor por el bal&oacute;n.
            Forma parte de un momento hist&oacute;rico: la Copa Mundial de la
            FIFA 2026&#8482;.
          </span>
        </p>
        <div className="relative z-10">
          <CtaPill href="/jalisco" variant="filled">
            &iexcl;Bienvenido!
          </CtaPill>
        </div>
      </section>

      {/* ===== 4. VIVE GUADALAJARA ===== */}
      <section className="relative bg-purple overflow-hidden flex items-start pt-[250px] md:pt-0 md:min-h-[920px]">
        {/* Background image - mobile: 300px band at top; desktop: from left 35% */}
        <div
          className="absolute top-0 right-0 left-0 md:left-[35%] h-[300px] md:h-auto md:bottom-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/Nuevofondo.jpg')" }}
        >
          {/* Left gradient (desktop only) */}
          <div
            className="absolute top-0 left-0 bottom-0 w-1/2 pointer-events-none hidden md:block"
            style={{ background: "linear-gradient(90deg, #7c4dff 0%, rgba(124,77,255,0.7) 50%, rgba(124,77,255,0) 100%)" }}
          />
          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-[50%] md:h-[40%] pointer-events-none bg-gradient-to-t from-purple to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 py-8 pb-[60px] md:px-20 md:py-[120px] md:pb-24 flex justify-between items-start">
          <div className="w-full md:w-[560px] md:shrink-0 text-white">
            <div className="mb-8">
              <h2 className="font-brigends text-[24px] sm:text-[36px] md:text-[42px] uppercase leading-[1.1]">
                Vive Guadalajara
              </h2>
            </div>
            <div className="font-noto text-sm md:text-base text-white leading-[1.6] mt-6 mb-8">
              <strong className="font-bold">Llegar a la ciudad es tan f&aacute;cil como vivirla. </strong>
              <span className="opacity-80">
                Contamos con excelente conectividad a&eacute;rea y terrestre, con
                rutas nacionales e internacionales. Explora el mapa para ubicar
                aeropuertos, centrales de autobuses, carreteras principales y
                c&oacute;mo moverte por la ciudad.
              </span>
            </div>
            {/* Connectivity Card */}
            <div className="bg-white/95 backdrop-blur-[7px] rounded-3xl w-full max-w-[520px] h-[360px] max-md:h-auto max-md:min-h-[280px] p-5 shadow-[0_14px_34px_rgba(0,0,9,0.3)] flex flex-col gap-2">
              <h3 className="font-oswald text-lg font-bold text-navy uppercase tracking-[0.5px] mb-2">
                Conectividad
              </h3>
              <div className="relative flex-1 rounded-2xl overflow-hidden bg-[#96E1EE] min-h-[200px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/ef1dcf5ed543d8d15b4fcfee3c93814b7cd31b4d.png"
                  alt="Mapa de conectividad"
                  className="absolute max-w-none object-cover"
                  style={{ width: "129.81%", height: "106.46%", top: "-3.23%", left: "-20.83%" }}
                />
                <Link
                  href="/conectividad"
                  className="absolute bottom-7 right-7 bg-white border border-black h-8 rounded-[10px] flex items-center justify-center px-4 gap-2.5 font-noto text-sm font-semibold text-navy uppercase no-underline hover:bg-gray-50 transition-colors"
                >
                  Ver detalle
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#03014b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6" /><path d="M10 14L21 3" /><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. ZONA METROPOLITANA ===== */}
      <section className="bg-purple px-5 pb-16 md:px-20 md:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-brigends text-[28px] md:text-4xl text-white uppercase mb-8 md:mb-12">
            Zona Metropolitana
          </h2>
          <div className="relative">
            <div className="flex gap-4 md:gap-8 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory md:snap-none [&::-webkit-scrollbar]:hidden">
              {[
                { name: "Guadalajara", img: "/assets/409f9f8aa537b0b4a3e69d3153acc24ac33dc9d6.png" },
                { name: "Zapopan", img: "/assets/ab6d8e978d115573e4850804c02da826df8ae433.png" },
                { name: "San Pedro Tlaquepaque", img: "/assets/SanPedroTlaquepaque.jpg" },
                { name: "Tlajomulco de Z\u00fa\u00f1iga", img: "/assets/TlajomulcodeZuniga.jpg" },
                { name: "Tonal\u00e1", img: "/assets/Tonala.jpg" },
              ].map((city) => (
                <div
                  key={city.name}
                  className="relative w-[200px] h-[280px] md:w-[260px] md:h-[360px] rounded-card overflow-hidden shrink-0 snap-start cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                >
                  <Image src={city.img} alt={city.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
                  <span className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 font-noto text-base md:text-xl font-semibold text-white uppercase leading-[26px] tracking-[-0.4px]">
                    {city.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Scroll hint — fade + animated arrow (mobile only) */}
            <div className="absolute right-0 top-0 bottom-4 w-16 pointer-events-none bg-gradient-to-l from-purple via-purple/60 to-transparent md:hidden flex items-center justify-end pr-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-[scrollHint_1.5s_ease-in-out_infinite]"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. MUÉVETE FÁCIL ===== */}
      <section className="bg-green-light px-5 py-[60px] md:px-10 md:py-[120px] lg:px-20">
        <div className="bg-pink rounded-3xl flex flex-col md:flex-row items-center p-6 md:p-10 gap-6 md:gap-8 overflow-hidden h-auto md:h-[460px]">
          <div className="flex-1 flex flex-col gap-6 md:gap-10 text-white">
            <div className="flex flex-col gap-2">
              <h2 className="font-brigends text-[22px] sm:text-[32px] md:text-[42px] leading-[1.1] uppercase">
                Mu&eacute;vete f&aacute;cil durante el Mundial
              </h2>
              <p className="font-noto text-[15px] md:text-lg font-semibold opacity-80 leading-[1.5]">
                Bienvenido a Guadalajara, la capital de nuestro estado y una
                ciudad tradicionalmente moderna, donde vivir&aacute;s la
                pasi&oacute;n por el futbol como en ninguna otra sede.
              </p>
            </div>
            <div className="md:w-[320px]">
              <CtaPill href="/movilidad" variant="white">
                Conoce m&aacute;s
              </CtaPill>
            </div>
          </div>
          <div className="w-full md:w-[512px] h-[220px] md:h-full shrink-0 rounded-2xl overflow-hidden relative">
            <Image
              src="/assets/ad9c356cddbc9c52e0d1b9c37da559bfa858e786.png"
              alt="Movilidad en Guadalajara"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== 7. FIFA FAN FESTIVAL ===== */}
      <section className="relative h-auto min-h-[500px] md:h-[820px] bg-black text-white overflow-hidden">
        {/* Background layers: solid black + offset image */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-black" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/3acc001950789e54ef7b837005bcce9798e30591.png"
            alt=""
            className="absolute max-w-none object-cover"
            style={{ width: "100%", height: "117.72%", top: "-8.86%", left: "15.61%" }}
          />
        </div>
        <div className="relative z-10 flex items-center h-full px-5 py-[60px] md:px-20 md:py-[120px]">
          <div className="flex flex-col gap-8 w-full md:w-[480px]">
            <div className="flex flex-col gap-6">
              <h2 className="font-brigends text-[28px] sm:text-[40px] md:text-[56px] leading-[1.1] uppercase">
                Fifa fan festival
              </h2>
              <p className="font-noto text-[15px] md:text-lg opacity-80 leading-[1.5]">
                La fiesta del futbol tambi&eacute;n se vive fuera de la cancha.
                Disfruta de los partidos, m&uacute;sica y ambiente mundialista
                en los venues oficiales.
              </p>
            </div>
            <CtaPill href="#" variant="filled">
              Conoce los lugares y horarios
            </CtaPill>
          </div>
        </div>
      </section>

      {/* ===== 8. EVENTOS INOLVIDABLES ===== */}
      <section className="relative flex flex-col md:block md:h-[680px] md:min-h-[500px] overflow-hidden">
        {/* Image — stacked on mobile, absolute on desktop */}
        <div className="relative w-full h-[65vh] min-h-[380px] md:absolute md:inset-0 md:h-full">
          <Image
            src="/assets/Eventos-dos.jpg"
            alt="Eventos Inolvidables"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(223.293deg, rgba(0,0,0,0) 57.33%, rgba(0,0,0,0.6) 83.183%)",
            }}
          />
        </div>
        {/* Card — below image on mobile, overlaid on desktop */}
        <div className="relative z-10 bg-white px-6 py-8 md:bg-transparent md:px-20 md:py-0 md:absolute md:inset-0 md:flex md:flex-col md:justify-center">
          <div className="md:backdrop-blur-[7px] md:bg-white/90 md:rounded-card-lg md:p-8 w-full max-w-[520px] flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="font-brigends text-[32px] md:text-[42px] leading-[38px] md:leading-[50px] text-navy uppercase">
                Eventos Inolvidables
              </h2>
              <p className="font-noto text-[14px] md:text-sm text-dark-sub opacity-80 leading-[1.65]">
                El Mundial se vive dentro y fuera de la cancha. Descubre los
                eventos que transformar&aacute;n la ciudad en un escenario de
                emoci&oacute;n, cultura y celebraci&oacute;n.
              </p>
            </div>
            <CtaPill href="#" variant="outline" className="max-md:w-full max-md:justify-center">
              Consulta el calendario de eventos
            </CtaPill>
          </div>
        </div>
      </section>

      {/* ===== 9. EXPLORA JALISCO ===== */}
      <section className="bg-green-light py-[60px] md:py-[120px] flex flex-col items-center gap-8 md:gap-16 overflow-hidden" id="explora">
        <div className="text-center px-5 md:px-8 flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-1 text-navy uppercase">
            <h2 className="font-brigends text-[28px] sm:text-[40px] md:text-[56px] leading-[34px] sm:leading-[48px] md:leading-[64px] tracking-[2px]">
              Explora Jalisco
            </h2>
            <p className="font-oswald text-2xl sm:text-[24px] md:text-[36px] font-bold" style={{ fontStretch: "condensed" }}>
              M&aacute;s all&aacute; del futbol
            </p>
          </div>
          <p className="font-noto text-[15px] md:text-lg text-dark-sub opacity-80 max-w-[836px]">
            Desde los pueblos m&aacute;gicos hasta las playas doradas, Jalisco
            te espera con paisajes, sabores y tradiciones que te van a enamorar.
            Advent&uacute;rate m&aacute;s all&aacute; de la ciudad y descubre
            todo lo que este estado tiene para ofrecer.
          </p>
        </div>
        <div className="flex gap-4 lg:gap-6 items-center lg:justify-center w-full overflow-x-auto lg:overflow-visible px-5 lg:px-0 [&::-webkit-scrollbar]:hidden snap-x snap-mandatory lg:snap-none">
          {[
            { label: "Experiencias y paquetes tur\u00edsticos", img: "/assets/26ac2791051ac61557c22adae89e9e2609ebf321.png", tall: true },
            { label: "Pueblos M\u00e1gicos", img: "/assets/PueblosMagicos.jpg", tall: false },
            { label: "Rutas tur\u00edsticas", img: "/assets/Rutas.jpg", tall: true },
            { label: "Playas", img: "/assets/Playas.jpg", tall: false },
          ].map((card) => (
            <div
              key={card.label}
              className={`relative rounded-card overflow-hidden shrink-0 cursor-pointer snap-start transition-transform duration-300 hover:-translate-y-1.5 ${
                card.tall
                  ? "w-[240px] h-[440px] md:w-[288px] md:h-[576px]"
                  : "w-[220px] h-[340px] md:w-[260px] md:h-[416px]"
              }`}
            >
              <Image src={card.img} alt={card.label} fill className="object-cover" />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0) 77.644%, rgba(0,0,0,0.2) 90.024%)",
                }}
              />
              <span className="absolute bottom-8 left-6 right-6 font-noto text-xl font-semibold text-white uppercase leading-[26px] tracking-[-0.4px]">
                {card.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 10-11. STICKY CARDS WRAPPER ===== */}
      <div className="relative">
        {/* Panel 1: Dónde Hospedarte (STICKY) */}
        <section className="relative w-full h-[calc(85vh+20px)] min-h-[500px] md:h-[700px] overflow-hidden sticky top-0 z-[1]">
          <Image
            src="/assets/Hoteles-2.jpg"
            alt="Dónde hospedarte"
            fill
            className="object-cover"
          />
          <div className="relative z-[2] flex flex-col justify-end md:justify-center h-full px-5 pb-8 pt-4 md:px-20 md:py-0">
            <div className="backdrop-blur-[7px] bg-white/90 rounded-card-lg max-md:rounded-card-mobile p-5 md:p-8 w-full max-w-[520px] flex flex-col gap-4 md:gap-8 items-start">
              <div className="flex flex-col gap-1 md:gap-2">
                <h2 className="font-noto text-[22px] md:text-[32px] font-black text-navy uppercase tracking-[-1.28px] leading-[1.1]">
                  D&oacute;nde hospedarte
                </h2>
                <p className="font-noto text-[12px] md:text-sm text-dark-sub opacity-80 leading-[1.5]">
                  Tu descanso, nuestra hospitalidad. Encuentra opciones de
                  alojamiento para todos los gustos y presupuestos, cerca de los
                  venues y en las zonas m&aacute;s vibrantes de la ciudad.
                </p>
              </div>
              <CtaPill href="#" variant="outline">
                Explora opciones de hospedaje
              </CtaPill>
            </div>
          </div>
        </section>

        {/* Panel 2: Sabores Tapatíos (overlaps panel 1) */}
        <section className="relative w-full h-[85vh] min-h-[480px] md:h-[680px] overflow-hidden z-[2]">
          <Image
            src="/assets/Restaurantes.jpg"
            alt="Sabores tapatíos"
            fill
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[rgba(3,1,75,0.7)] mix-blend-soft-light" />
          <div className="relative z-[2] flex flex-col justify-end md:justify-center h-full px-5 pb-8 pt-4 md:px-20 md:py-0">
            <div className="backdrop-blur-[7px] bg-white/90 rounded-card-lg max-md:rounded-card-mobile p-5 md:p-8 w-full max-w-[520px] flex flex-col gap-4 md:gap-8 items-start">
              <div className="flex flex-col gap-1 md:gap-2">
                <h2 className="font-noto text-[22px] md:text-[32px] font-black text-navy uppercase tracking-[-1.28px] leading-[1.1]">
                  Sabores tapat&iacute;os
                </h2>
                <p className="font-noto text-[12px] md:text-sm text-dark-sub opacity-80 leading-[1.5]">
                  Sabores para celebrar. Descubre la riqueza gastron&oacute;mica
                  de Jalisco desde: antojitos tradicionales hasta cocina
                  contempor&aacute;nea que cautiva todos los paladares.
                </p>
              </div>
              <CtaPill href="#" variant="outline">
                Explora restaurantes
              </CtaPill>
            </div>
          </div>
        </section>
      </div>

      {/* ===== 12. SEGURIDAD ===== */}
      <section className="bg-navy px-5 py-[60px] md:px-20 md:py-[120px]" id="seguridad">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-8 md:gap-16">
          <div className="text-center flex flex-col items-center gap-4">
            <h2 className="font-brigends text-[24px] sm:text-[36px] md:text-[56px] leading-[30px] sm:leading-[42px] md:leading-[64px] text-white uppercase tracking-[2px]">
              Tu seguridad es<br />nuestra prioridad
            </h2>
            <p className="font-noto text-[15px] md:text-lg text-[#d2d4da] opacity-80 max-w-[836px]">
              Disfruta la Copa Mundial de la FIFA 2026&#8482; con la confianza
              de que estamos listos para apoyarte, vive esta experiencia con
              tranquilidad y nuestro respaldo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-12 w-full max-w-[1280px] justify-items-center">
            {[
              {
                title: "Soporte Consular",
                desc: "Encuentra el apoyo de tu pa\u00eds durante tu estancia. Diversas representaciones consulares estar\u00e1n disponibles en Guadalajara para ayudarte.",
                cta: "Encuentra tu consulado",
                img: "/assets/14a936a56544bf3e3017f38a088bfe5d3d1b0224.png",
                href: "/soporte-consular",
              },
              {
                title: "Atenci\u00f3n M\u00e9dica",
                desc: "Contamos con hospitales y cl\u00ednicas de calidad internacional preparados para atenderte en cualquier momento.",
                cta: "Encuentra hospitales y cl\u00ednicas",
                img: "/assets/1eb0e09c6a92e348ba661126202cdbcb7e82ec43.png",
                href: "/atencion-medica",
              },
              {
                title: "Consejos de Seguridad",
                desc: "Recomendaciones b\u00e1sicas para que tu experiencia en Guadalajara sea segura, tranquila y sin contratiempos.",
                cta: "Lee las recomendaciones",
                img: "/assets/5ae9684c7ccb7478c7586bd6ae3f55bf118e114c.png",
                href: "#",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-3xl md:rounded-card-lg w-full max-w-[608px] md:h-[240px] flex flex-col md:flex-row gap-6 items-center p-5 md:p-6 md:pl-8 transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Text content first, image last (on RIGHT in desktop) */}
                <div className="flex-1 flex flex-col gap-6 justify-center h-full order-2 md:order-1">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-noto text-2xl md:text-[32px] font-black text-navy uppercase tracking-[-1.28px] leading-[1.1]">
                      {card.title}
                    </h3>
                    <p className="font-noto text-sm text-dark-sub opacity-80 leading-[1.5]">
                      {card.desc}
                    </p>
                  </div>
                  <CtaPill
                    href={card.href}
                    variant="outline"
                  >
                    {card.cta}
                  </CtaPill>
                </div>
                {/* Image on the right (desktop), on top (mobile via order-1) */}
                <div className="w-full md:w-[182px] h-[160px] md:h-full rounded-2xl md:rounded-3xl overflow-hidden relative shrink-0 order-1 md:order-2">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
            <EmergencyCard />
          </div>
        </div>
      </section>
    </main>
  );
}
