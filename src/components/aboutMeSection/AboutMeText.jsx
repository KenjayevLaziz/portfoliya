import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">Men haqimda</h2>
      <p className="text-lg w-full max-w-[900px] text-justify">
        <strong className="block mb-[10px]">&nbsp;&nbsp;&nbsp;&nbsp;Men Kenjayev Lazizman. Web-dasturlashga bo‘lgan qiziqishim 2021-yilda TATU Qarshi filialiga o‘qishga kerganimdan so‘ng paydo bo‘ldi.</strong>

        1-kursligimda Python dasturlash tilini Mohirdev platformasidagi "Sariqdev" nomi bilan mashhur video qo‘llanmalar orqali mustaqil o‘rgandim. Web-dasturlash bo‘yicha ilk tajribalarimni Qarshi shahridagi Yoshlar markazida, ya’ni Open Web Academyda Ali Odiljonovning saboqlari orqali boshladim.

        Kursda o‘qish davomida e’tiborimni zamonaviy web texnologiyalarini chuqur o‘rganish va real amaliy loyihalar orqali tajriba orttirishga qaratdim. O‘z bilimlarimni faqat darslar bilangina chegaralab qo‘ymay, Codewars platformasida ham JavaScript bo‘yicha masalalar yechish orqali mantiqiy fikrlash ko‘nikmalarimni rivojlantirdim.

        Shuningdek, YouTube’dagi AkhrorWeb kanalining video darsliklarini tomosha qilib, u yerdagi amaliy topshiriqlarni bajarish orqali ham o‘z tajribamni oshirib bordim.

        Maqsadim — kelajakda Front-End dasturchisi sifatida xalqaro kompaniyalarda ishlash. Shu yo‘nalishda doimiy o‘rganish va rivojlanish ustida ishlayapman.

        Kod yozishdan tashqari, men hayot davomida o‘rganish va boshqalarga o‘rgatishni qadrlayman. Bilim almashish orqali atrofimdagilarga ilhom bag‘ishlash — bu men uchun eng katta yutuqlardan biridir.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          Mening loyihlarim
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
