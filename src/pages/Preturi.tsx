import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsappButton } from "@/components/site/WhatsappButton";
import { PriceCalculator } from "@/components/site/PriceCalculator";
import { Button } from "@/components/ui/button";
import {
  Shovel,
  Hammer,
  Layers,
  Building2,
  Droplets,
  Zap,
  Paintbrush,
  SquareStack,
  Home,
  ArrowRight,
  Phone,
  Trees,
  Wrench,
  PaintBucket,
  Ruler,
  Package,
} from "lucide-react";

type PriceItem = { name: string; unit: string; price: string };
type Category = {
  icon: typeof Shovel;
  title: string;
  items: PriceItem[];
};

// Pachete complete (EUR / mp construit desfășurat)
const packages = [
  {
    title: "Casă la Roșu",
    manopera: "110 – 140 €/mpcd",
    complet: "300 – 360 €/mpcd",
    desc: "Structură completă: fundație, ziduri, planșee, acoperiș.",
  },
  {
    title: "Casă la Gri",
    manopera: "160 – 175 €/mpcd",
    complet: "370 – 455 €/mpcd",
    desc: "Roșu + tencuieli, șape, instalații îngropate, tâmplărie.",
  },
  {
    title: "Casă la Cheie",
    manopera: "180 – 210 €/mpcd",
    complet: "500 – 600 €/mpcd",
    desc: "Totul gata de mutat: finisaje, instalații, obiecte sanitare.",
  },
];

const categories: Category[] = [
  {
    icon: Shovel,
    title: "Demolări, decopertări și desfaceri",
    items: [
      { name: "Decopertat tencuială interioară", unit: "lei / mp", price: "35" },
      { name: "Decopertat tencuială exterioară", unit: "lei / mp", price: "30" },
      { name: "Decopertat glet", unit: "lei / mp", price: "35" },
      { name: "Decopertat mozaic", unit: "lei / mp", price: "55" },
      { name: "Demontat parchet, mochetă, linoleum", unit: "lei / mp", price: "15" },
      { name: "Decopertat gresie, faianță", unit: "lei / mp", price: "35" },
      { name: "Demolat șapă armată", unit: "lei / mp", price: "120" },
      { name: "Decapat diferențe suprafețe", unit: "lei / mp", price: "50" },
      { name: "Demolat pereți zidărie", unit: "lei / mp", price: "115" },
      { name: "Demolat fundații, elemente din beton", unit: "lei / mp", price: "200" },
      { name: "Demontat sobă", unit: "lei / mc", price: "100" },
      { name: "Demontat confecții metalice", unit: "lei / kg", price: "4" },
    ],
  },
  {
    icon: Hammer,
    title: "Tencuieli, zugrăveli și vopsiri",
    items: [
      { name: "Tencuială clasică interior (pereți 2.5 mm)", unit: "lei / mp", price: "39" },
      { name: "Tencuială clasică exterior (pereți 2.5 mm)", unit: "lei / mp", price: "50" },
      { name: "Tencuială armată cu plasă sudată", unit: "lei / mp", price: "50" },
      { name: "Tencuială clasică tavan", unit: "lei / mp", price: "45" },
      { name: "Tencuială grinzi, stâlpi", unit: "lei / ml", price: "25" },
      { name: "Tencuială glafuri", unit: "lei / ml", price: "40" },
      { name: "Tencuială decorativă soclu", unit: "lei / mp", price: "40" },
      { name: "Tencuială exterioară drișcuită", unit: "lei / mp", price: "60" },
      { name: "Tencuială interioară drișcuită", unit: "lei / mp", price: "45" },
      { name: "Tencuială decorativă (pereți)", unit: "lei / mp", price: "25" },
      { name: "Reparații tencuială", unit: "lei / mp", price: "20" },
      { name: "Tinci gri interior", unit: "lei / mp", price: "18" },
      { name: "Tinci alb interior", unit: "lei / mp", price: "30" },
      { name: "Tinci gri exterior", unit: "lei / mp", price: "22" },
      { name: "Tinci alb exterior", unit: "lei / mp", price: "35" },
      { name: "Tinci decorativ", unit: "lei / mp", price: "50" },
    ],
  },
  {
    icon: PaintBucket,
    title: "Glet, finisaje și vopsitorii",
    items: [
      { name: "Glet grosier + amorsă", unit: "lei / mp / strat", price: "32" },
      { name: "Glet de finisaj (1 strat + colțare AL)", unit: "lei / mp", price: "28" },
      { name: "Glet de ipsos finisat", unit: "lei / mp", price: "25" },
      { name: "Glafuri uși, ferestre", unit: "lei / ml", price: "60" },
      { name: "Șlefuit glet", unit: "lei / mp", price: "12" },
      { name: "Chituit + bandă GK", unit: "lei / mp", price: "10" },
      { name: "Montat colțare AL", unit: "lei / ml", price: "11" },
      { name: "Amorsă (1 mână)", unit: "lei / mp", price: "12" },
      { name: "Vopsit lavabil interior alb (1 mână)", unit: "lei / mp", price: "12" },
      { name: "Vopsit lavabil interior culoare (1 mână)", unit: "lei / mp", price: "22" },
      { name: "Zugrăveală completă alb (glet+șlefuit+amorsat+lavabil)", unit: "lei / mp", price: "58" },
      { name: "Zugrăveală completă colorat", unit: "lei / mp", price: "63" },
      { name: "Vopsea lavabilă anti-mucegai", unit: "lei / mp", price: "35" },
      { name: "Structo venețian", unit: "lei / mp", price: "125" },
      { name: "Drișcuit fațadă", unit: "lei / mp", price: "13" },
      { name: "Zugrăveală exterioară (tinci+amorsat+lavabil)", unit: "lei / mp", price: "35" },
      { name: "Vopsit în ulei", unit: "lei / mp", price: "12" },
      { name: "Vopsit tâmplărie lemn", unit: "lei / mp", price: "15" },
      { name: "Vopsit confecții metalice", unit: "lei / mp", price: "25" },
      { name: "Lăcuit", unit: "lei / mp", price: "10" },
    ],
  },
  {
    icon: SquareStack,
    title: "Placări ceramice și piatră",
    items: [
      { name: "Placat gresie/faianță (30x30 / 45x45)", unit: "lei / mp", price: "75" },
      { name: "Placat gresie/faianță (60x60 / 80x80)", unit: "lei / mp", price: "120" },
      { name: "Placat gresie rectificată (fugă min. 1 mm)", unit: "lei / mp", price: "150" },
      { name: "Placat gresie antiderapantă exterior", unit: "lei / mp", price: "160" },
      { name: "Placat gresie trafic intens (comercial/industrial)", unit: "lei / mp", price: "220" },
      { name: "Placat gresie/faianță pe încălzire în pardoseală", unit: "lei / mp", price: "140" },
      { name: "Placat plăci ceramice tip parchet", unit: "lei / mp", price: "180" },
      { name: "Placare pereți cu cărămidă aparentă", unit: "lei / mp", price: "200" },
      { name: "Placat plintă gresie", unit: "lei / mp", price: "20" },
      { name: "Placat trepte gresie (treaptă + contratreaptă)", unit: "lei / ml", price: "100" },
      { name: "Placat marmură, granit", unit: "lei / mp", price: "150" },
      { name: "Placat plintă marmură, granit", unit: "lei / mp", price: "85" },
      { name: "Placat trepte marmură/granit", unit: "lei / ml", price: "185" },
      { name: "Placare soclu cu piatră naturală", unit: "lei / mp", price: "140" },
      { name: "Placat elemente liniare marmură/granit", unit: "lei / ml", price: "125" },
      { name: "Placat glafuri marmură/granit", unit: "lei / ml", price: "150" },
      { name: "Placat mozaic - marmură", unit: "lei / mp", price: "200" },
      { name: "Placat plintă mozaic - marmură", unit: "lei / mp", price: "100" },
      { name: "Reparații trepte mozaic", unit: "lei / ml", price: "100" },
    ],
  },
  {
    icon: Layers,
    title: "Șape și pardoseli",
    items: [
      { name: "Preparare șapă", unit: "lei / mc", price: "90" },
      { name: "Șapă de egalizare (nearmată)", unit: "lei / mp", price: "35" },
      { name: "Șapă egalizare (armată)", unit: "lei / mp", price: "55" },
      { name: "Consolidare șapă cu plasă STM", unit: "lei / mp", price: "20" },
      { name: "Șapă autonivelantă", unit: "lei / mp", price: "25" },
      { name: "Șapă autonivelantă cu fibre", unit: "lei / mp", price: "48" },
      { name: "Șapă mecanizată", unit: "lei / mp", price: "55" },
      { name: "Șapă flotantă", unit: "lei / mp", price: "65" },
      { name: "Șapă ușoară cu polistiren", unit: "lei / mp", price: "75" },
      { name: "Șapă cu încălzire în pardoseală", unit: "lei / mp", price: "88" },
      { name: "Pardoseală PVC", unit: "lei / mp", price: "65" },
      { name: "Dușumea lemn nefinisat", unit: "lei / mp", price: "15" },
      { name: "Strat suport OSB / PAL", unit: "lei / mp", price: "20" },
      { name: "Mochetă", unit: "lei / mp", price: "25" },
      { name: "Plintă mochetă", unit: "lei / ml", price: "15" },
      { name: "Parchet clasic masiv", unit: "lei / mp", price: "55" },
      { name: "Parchet stratificat", unit: "lei / mp", price: "33" },
      { name: "Parchet laminat 10 mm", unit: "lei / mp", price: "26" },
      { name: "Parchet laminat 8 mm", unit: "lei / mp", price: "22" },
      { name: "Parchet laminat 12-14 mm", unit: "lei / mp", price: "30" },
      { name: "Plintă MDF / PVC", unit: "lei / ml", price: "15" },
      { name: "Praguri AL / PVC", unit: "lei / ml", price: "17" },
      { name: "Rașchetat pardoseli lemn", unit: "lei / mp", price: "13" },
      { name: "Lustruit și ceruit parchet", unit: "lei / mp", price: "15" },
    ],
  },
  {
    icon: Building2,
    title: "Închideri, compartimentări și fier",
    items: [
      { name: "Hidroizolație pensulabilă (1 mână)", unit: "lei / mp", price: "30" },
      { name: "Zidărie BCA mare", unit: "lei / mc", price: "240" },
      { name: "Zidărie BCA mică", unit: "lei / mc", price: "300" },
      { name: "Zidărie cărămidă mare (30/25 cm)", unit: "lei / mc", price: "300" },
      { name: "Zidărie cărămidă mică (15 cm)", unit: "lei / mc", price: "370" },
      { name: "Zidărie cărămidă plină", unit: "lei / mc", price: "420" },
      { name: "Zidărie bolțari", unit: "lei / mc", price: "320" },
      { name: "Zidărie cărămidă NEVADA", unit: "lei / mc", price: "120" },
      { name: "Zidărie coș fum", unit: "lei / ml", price: "250" },
      { name: "Preparare mortar zidărie", unit: "lei / mc", price: "100" },
      { name: "Consolidare zidărie cu plasă STM", unit: "lei / mp", price: "25" },
      { name: "Montaj fier placă", unit: "lei / kg", price: "3" },
      { name: "Montaj armătură pentru grinzi", unit: "lei / kg", price: "6" },
      { name: "Montaj distanțieri pentru armare", unit: "lei / buc", price: "3" },
      { name: "Armare cu etrieri dubli grinzi/stâlpi", unit: "lei / kg", price: "6" },
      { name: "Montaj ancore chimice fundație", unit: "lei / buc", price: "85" },
      { name: "Cofraje pierdute polistiren planșeu", unit: "lei / mp", price: "65" },
      { name: "Executat panouri cofraj", unit: "lei / mp", price: "43" },
      { name: "Cofrat panouri lemn / doka", unit: "lei / mp", price: "65" },
      { name: "Decofrat placă", unit: "lei / mp", price: "26" },
      { name: "Decofrat grinzi", unit: "lei / mp", price: "35" },
    ],
  },
  {
    icon: Ruler,
    title: "Fundații, săpături și beton",
    items: [
      { name: "Axat fundație Topo", unit: "lei / axă", price: "180" },
      { name: "Trasat fundație", unit: "lei / mp", price: "25" },
      { name: "Balizat fundație", unit: "lei / global", price: "2200" },
      { name: "Săpătură buldoexcavator (teren moale)", unit: "lei / h", price: "350" },
      { name: "Săpătură excavator mare (teren tare)", unit: "lei / h", price: "450" },
      { name: "Săpătură manuală", unit: "lei / mc", price: "380" },
      { name: "Taluzat fundație", unit: "lei / mp", price: "20" },
      { name: "Fasonat etrieri", unit: "lei / buc", price: "4.5" },
      { name: "Umplut pământ", unit: "lei / mp", price: "30" },
      { name: "Compactat pământ", unit: "lei / mp", price: "10" },
      { name: "Umplut pietriș", unit: "lei / mp", price: "15" },
      { name: "Montat polistiren extrudat", unit: "lei / mp", price: "15" },
      { name: "Montat plase", unit: "lei / mp", price: "20" },
      { name: "Montaj/demontaj schelă", unit: "lei / mp", price: "10" },
      { name: "Montat folie", unit: "lei / mp", price: "5" },
      { name: "Turnat beton cu cifă și pompă", unit: "lei / mc", price: "130" },
      { name: "Turnat beton cu cifă fără pompă", unit: "lei / mc", price: "180" },
      { name: "Cofrat planșeu cu scândură", unit: "lei / mp", price: "85" },
      { name: "Cofrat planșeu cu doka", unit: "lei / mp", price: "65" },
      { name: "Armare planșeu cu fier", unit: "lei / kg", price: "4.5" },
      { name: "Armare planșeu cu plasă", unit: "lei / mp", price: "15" },
      { name: "Cofrat și armat scară într-o rampă", unit: "lei / treaptă", price: "120" },
      { name: "Cofrat și armat scară în 2 rampe", unit: "lei / treaptă", price: "210" },
      { name: "Perete sprijin beton armat", unit: "lei / mc", price: "600" },
      { name: "Foraj pentru piloți", unit: "lei / ml", price: "250" },
      { name: "Instalare piloți (metal/beton armat)", unit: "lei / ml", price: "350" },
      { name: "Panouri sprijin (lemn/beton)", unit: "lei / mp", price: "150" },
      { name: "Ancorare suplimentară stabilitate", unit: "lei / buc", price: "500" },
    ],
  },
  {
    icon: Package,
    title: "Construcții gips-carton",
    items: [
      { name: "Pereți compartimentare simplu placat", unit: "lei / mp", price: "100" },
      { name: "Pereți compartimentare dublu placat", unit: "lei / mp", price: "130" },
      { name: "Tavan + structură metalică fără vată", unit: "lei / mp", price: "100" },
      { name: "Tavan + structură metalică cu vată", unit: "lei / mp", price: "150" },
      { name: "Tavan fals pe structură din lemn", unit: "lei / mp", price: "120" },
      { name: "Pereți despărțitori OSB", unit: "lei / mp", price: "140" },
      { name: "Placat pereți (prin lipire)", unit: "lei / mp", price: "50" },
      { name: "Tavan casetat", unit: "lei / mp", price: "100" },
      { name: "Structură metalică (CD + UD)", unit: "lei / mp", price: "45" },
      { name: "Placat grinzi/măști pe structură metalică", unit: "lei / ml", price: "150" },
      { name: "Arcade / scafe", unit: "lei / ml", price: "200" },
      { name: "Fixare dibluri + șuruburi", unit: "lei / mp", price: "10" },
      { name: "Vată minerală", unit: "lei / mp", price: "20" },
      { name: "Bandă rosturi fibră de sticlă", unit: "lei / ml", price: "10" },
      { name: "Rostuit gips-carton", unit: "lei / mp", price: "10" },
      { name: "Zugrăvit GK complet", unit: "lei / mp", price: "30" },
    ],
  },
  {
    icon: Paintbrush,
    title: "Termosistem și fațadă",
    items: [
      { name: "Spălat fațadă", unit: "lei / mp", price: "4.5" },
      { name: "Curățare și îndepărtare mucegai fațadă", unit: "lei / mp", price: "15" },
      { name: "Hidroizolație lichidă fațadă/terase", unit: "lei / mp", price: "35" },
      { name: "Hidroizolație pereți subsol cu rășini", unit: "lei / mp", price: "50" },
      { name: "Refacere muchii și colțuri", unit: "lei / mp", price: "25" },
      { name: "Vopsire fațadă cu vopsea siliconică", unit: "lei / mp", price: "35" },
      { name: "Reparații tencuială", unit: "lei / mp", price: "19" },
      { name: "Plăci decorative exterioare (piatră, cărămidă)", unit: "lei / mp", price: "100" },
      { name: "Tencuială exterioară drișcuită", unit: "lei / mp", price: "45" },
      { name: "Tencuială exterioară nedrișcuită", unit: "lei / mp", price: "40" },
      { name: "Tencuială decorativă", unit: "lei / mp", price: "38" },
      { name: "Tencuială decorativă soclu", unit: "lei / mp", price: "25" },
      { name: "Zugrăveală exterioară la înălțime", unit: "lei / mp", price: "70" },
      { name: "Jgheaburi și burlane pe fațadă", unit: "lei / ml", price: "55" },
      { name: "Colțar cu plasă", unit: "lei / ml", price: "12" },
      { name: "Cornișe și profile decorative exterioare", unit: "lei / mp", price: "55" },
      { name: "Polistiren extrudat pe soclu", unit: "lei / mp", price: "80" },
      { name: "Amorsă anti-fisuri pereți exteriori", unit: "lei / mp", price: "15" },
      { name: "Armat plasă fibră de sticlă", unit: "lei / mp", price: "18" },
      { name: "Tinci termosistem", unit: "lei / mp", price: "17" },
      { name: "Termosistem fațadă polistiren", unit: "lei / mp", price: "85" },
      { name: "Termosistem fațadă vată minerală bazaltică", unit: "lei / mp", price: "110" },
      { name: "Termosistem polistiren la cheie (cu decorativă)", unit: "lei / mp", price: "125" },
      { name: "Termosistem vată bazaltică la cheie (cu decorativă)", unit: "lei / mp", price: "135" },
      { name: "Finisat glafuri exterior", unit: "lei / ml", price: "33" },
      { name: "Glafuri AL", unit: "lei / ml", price: "30" },
    ],
  },
  {
    icon: Home,
    title: "Învelitoare și acoperiș",
    items: [
      { name: "Șarpantă simplă lemn ecarisat", unit: "lei / mp", price: "65" },
      { name: "Astereală scânduri rășinoase", unit: "lei / mp", price: "20" },
      { name: "Ignifugare și antiseptizare șarpantă", unit: "lei / strat", price: "10" },
      { name: "Vată minerală + folie anticondens", unit: "lei / mp", price: "27" },
      { name: "Scândură + termoizolație intrados pod", unit: "lei / mp", price: "45" },
      { name: "Planșee grinzi de lemn", unit: "lei / mp", price: "100" },
      { name: "Dușumea simplă pod", unit: "lei / mp", price: "25" },
      { name: "Strat suport OSB", unit: "lei / mp", price: "19" },
      { name: "Pereți OSB", unit: "lei / mp", price: "20" },
      { name: "Izolație polistiren între căpriori", unit: "lei / mp", price: "9" },
      { name: "Lambriu intrados", unit: "lei / mp", price: "20" },
      { name: "Pazie scândură", unit: "lei / ml", price: "15" },
      { name: "Pazie PVC", unit: "lei / ml", price: "20" },
      { name: "Streașină din scândură", unit: "lei / mp", price: "25" },
      { name: "Folie anticondens", unit: "lei / mp", price: "5" },
      { name: "Fereastră VELUX", unit: "lei / buc", price: "280" },
      { name: "Placat trepte cu lemn", unit: "lei / mp", price: "60" },
    ],
  },
  {
    icon: Droplets,
    title: "Instalații sanitare, termice și canalizare",
    items: [
      { name: "Dezafectat instalație sanitară baie", unit: "lei / buc", price: "230" },
      { name: "Dezafectat instalație sanitară bucătărie", unit: "lei / buc", price: "85" },
      { name: "Montat instalație sanitară baie", unit: "lei / buc", price: "650" },
      { name: "Montat instalație sanitară bucătărie", unit: "lei / buc", price: "700" },
      { name: "Montat obiecte sanitare (WC, lavoar, bideu)", unit: "lei / buc", price: "210" },
      { name: "Demontat obiecte sanitare", unit: "lei / buc", price: "180" },
      { name: "Montat cadă (complet)", unit: "lei / buc", price: "350" },
      { name: "Demontat cadă", unit: "lei / buc", price: "180" },
      { name: "Montat cabină de duș (complet)", unit: "lei / buc", price: "700" },
      { name: "Demontat cabină de duș", unit: "lei / buc", price: "500" },
      { name: "Montat centrală termică (cu legături)", unit: "lei / buc", price: "1200" },
      { name: "Demontat centrală termică", unit: "lei / buc", price: "900" },
      { name: "Montat calorifer (cu legături)", unit: "lei / buc", price: "300" },
      { name: "Demontat calorifer", unit: "lei / buc", price: "150" },
      { name: "Montat sifon pardoseală PP", unit: "lei / buc", price: "600" },
      { name: "Montat hidrofor", unit: "lei / buc", price: "500" },
      { name: "Montat bazin apă", unit: "lei / buc", price: "350" },
      { name: "Schimbat baterie chiuvetă", unit: "lei / buc", price: "80" },
      { name: "Racordat mașină de spălat la canalizare", unit: "lei / buc", price: "100" },
      { name: "Schimbat instalație cupru", unit: "lei / buc", price: "700" },
      { name: "Schimbat instalație pexal", unit: "lei / buc", price: "500" },
    ],
  },
  {
    icon: Zap,
    title: "Instalații electrice",
    items: [
      { name: "Șliț în beton, șapă", unit: "lei / ml", price: "30" },
      { name: "Dezafectat instalație electrică", unit: "lei / cameră", price: "150" },
      { name: "Înlocuit instalație electrică (tub, conductor, doze)", unit: "lei / cameră", price: "300" },
      { name: "Montat tablou electric", unit: "lei / buc", price: "400" },
      { name: "Montat aparat electric", unit: "lei / buc", price: "30" },
      { name: "Montat doze ramificație", unit: "lei / buc", price: "40" },
      { name: "Montat doze de aparat", unit: "lei / buc", price: "35" },
      { name: "Montat prize / întrerupătoare", unit: "lei / buc", price: "20" },
      { name: "Montat corpuri de iluminat", unit: "lei / buc", price: "70" },
      { name: "Montat spoturi", unit: "lei / buc", price: "50" },
    ],
  },
  {
    icon: Trees,
    title: "Amenajări exterioare și împrejmuire",
    items: [
      { name: "Tăiat arbori (h > 5 ml)", unit: "lei / buc", price: "200" },
      { name: "Tăiat arbori (h < 5 ml)", unit: "lei / buc", price: "100" },
      { name: "Toaletat copaci", unit: "lei / buc", price: "60" },
      { name: "Montat țeavă gard", unit: "lei / buc", price: "20" },
      { name: "Turnat stâlp gard (armat, cofrat, turnat)", unit: "lei / buc", price: "95" },
      { name: "Împrejmuire gard complet (săpat→panou)", unit: "lei / ml", price: "550" },
      { name: "Montat panou gard", unit: "lei / mp", price: "25" },
      { name: "Montat scândură gard", unit: "lei / mp", price: "35" },
      { name: "Montat grilaj metalic", unit: "lei / mp", price: "150" },
      { name: "Montat porți forjate", unit: "lei / mp", price: "250" },
      { name: "Montat balustrade", unit: "lei / ml", price: "150" },
      { name: "Montat gazon", unit: "lei / mp", price: "150" },
      { name: "Trotuar dale beton", unit: "lei / mp", price: "50" },
      { name: "Pavat cu beton armat", unit: "lei / mp", price: "80" },
      { name: "Pavat trotuare, alei, parcări", unit: "lei / mp", price: "38" },
      { name: "Montat borduri", unit: "lei / ml", price: "25" },
    ],
  },
  {
    icon: Wrench,
    title: "Alte operațiuni",
    items: [
      { name: "Protejat ferestre cu folie", unit: "lei / ml", price: "12" },
      { name: "Protejat uși cu folie", unit: "lei / mp", price: "10" },
      { name: "Protejat mobilier cu folie", unit: "lei / buc", price: "10" },
      { name: "Mutat obiecte (regie om)", unit: "lei / h", price: "55" },
      { name: "Manipulat materiale (regie om)", unit: "lei / h", price: "55" },
      { name: "Montat / demontat schelă", unit: "lei / mp", price: "10" },
      { name: "Montat ușă interior", unit: "lei / buc", price: "300" },
      { name: "Montat ușă exterior", unit: "lei / buc", price: "280" },
      { name: "Montat tâmplărie", unit: "lei / buc", price: "180" },
      { name: "Montat lambriu perete", unit: "lei / mp", price: "75" },
      { name: "Montat tavan fals polistiren", unit: "lei / mp", price: "25" },
      { name: "Montat baghete decor polistiren", unit: "lei / ml", price: "12" },
      { name: "Încărcat și cărat moloz", unit: "lei / sac", price: "35" },
    ],
  },
];

const PriceCard = ({ category }: { category: Category }) => {
  const Icon = category.icon;
  return (
    <article className="bg-card rounded-2xl border border-border shadow-card hover:shadow-elegant hover:border-accent/40 transition-smooth overflow-hidden">
      <header className="flex items-center gap-4 p-6 border-b border-border bg-secondary/50">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground shrink-0">
          <Icon className="h-6 w-6" />
        </div>
        <h2 className="font-display text-xl font-bold text-foreground">{category.title}</h2>
      </header>
      <ul className="divide-y divide-border">
        {category.items.map((item) => (
          <li key={item.name} className="flex items-center justify-between gap-4 px-6 py-4 hover:bg-secondary/40 transition-smooth">
            <div className="min-w-0">
              <div className="font-medium text-foreground">{item.name}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{item.unit}</div>
            </div>
            <div className="font-display font-bold text-accent text-lg whitespace-nowrap">{item.price}</div>
          </li>
        ))}
      </ul>
    </article>
  );
};

const Preturi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Header */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-surface-darker text-on-dark overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="container relative">
            <div className="text-accent font-semibold uppercase tracking-wider text-sm mb-4 animate-fade-in">Listă de prețuri</div>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-3xl animate-fade-in">
              Prețuri orientative <span className="text-accent">manoperă</span> construcții.
            </h1>
            <p className="mt-6 text-on-dark/70 text-lg max-w-2xl animate-fade-in" style={{ animationDelay: "0.15s" }}>
              Tarife actualizate pentru toate etapele unui proiect — de la săpături și demolări până la termosistem și finisaje. Prețurile sunt orientative și pot varia în funcție de complexitate, volum și locație.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="accent" size="lg" asChild>
                <a href="/#contact">Cere ofertă personalizată <ArrowRight /></a>
              </Button>
              <Button variant="outlineLight" size="lg" asChild>
                <a href="tel:+40767929044"><Phone /> +40 767 929 044</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Pachete construcție case */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container">
            <div className="max-w-2xl mb-10">
              <div className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Pachete construcție case</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Tarife pe <span className="text-accent">mp construit desfășurat</span>
              </h2>
              <p className="mt-3 text-muted-foreground">
                Două variante: doar manoperă sau pachet complet (manoperă + materiale).
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((p) => (
                <article key={p.title} className="bg-card rounded-2xl border border-border shadow-card hover:shadow-elegant hover:border-accent/40 transition-smooth p-8">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground mb-5">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-6 space-y-4">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">Doar manoperă</div>
                      <div className="font-display font-bold text-accent text-2xl">{p.manopera}</div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">Manoperă + materiale</div>
                      <div className="font-display font-bold text-foreground text-2xl">{p.complet}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Price grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-2xl mb-10">
              <div className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Lucrări individuale</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Prețuri pe <span className="text-accent">categorii de lucrări</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {categories.map((c) => (
                <PriceCard key={c.title} category={c} />
              ))}
            </div>

            {/* Notes */}
            <div className="mt-14 max-w-3xl mx-auto bg-secondary rounded-2xl p-8 border border-border">
              <h3 className="font-display text-xl font-bold text-foreground">Important de știut</h3>
              <ul className="mt-4 space-y-2 text-muted-foreground text-sm leading-relaxed list-disc list-inside">
                <li>Prețurile sunt exprimate în <strong className="text-foreground">lei, fără TVA</strong>, și reprezintă manopera (materialul se cotează separat sau la cheie).</li>
                <li>Prețul la tencuială crește cu <strong className="text-foreground">15 lei/mp</strong> pentru fiecare 10 mm încărcați suplimentar.</li>
                <li>Prețul la termosistem crește dacă suprafața necesită încărcare/placare dublă.</li>
                <li>Pentru oferta „Casă la cheie" (manoperă + materiale) NU sunt incluse: schela pentru termosistem, șagecul, glafurile exterioare (exceptând situația în care se ofertează la plin) și glafurile interioare.</li>
                <li>În oferta „Casă la cheie" se execută doar operațiunile prevăzute în proiectul de arhitectură și structură; orice operațiune suplimentară se tarifează conform listei de mai sus.</li>
                <li>Pentru manipularea materialelor sau obiectelor se percepe taxa de regie stipulată în deviz.</li>
                <li>Prețurile se actualizează o dată la <strong className="text-foreground">30 de zile</strong> și au caracter informativ.</li>
                <li>Consultanța și deplasarea pentru evaluare sunt <strong className="text-foreground">gratuite</strong>.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <PriceCalculator categories={categories} />

        {/* CTA */}
        <section className="py-20 bg-surface-darker text-on-dark">
          <div className="container text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              Vrei un <span className="text-accent">preț exact</span> pentru proiectul tău?
            </h2>
            <p className="mt-4 text-on-dark/70 text-lg">
              Trimite-ne câteva detalii și primești o ofertă personalizată în maxim 24h.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="accent" size="xl" asChild>
                <a href="/#contact">Cere ofertă gratuită <ArrowRight /></a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Preturi;
