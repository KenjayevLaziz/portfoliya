import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Talaba",
    company: "TATUQF",
    date: "2021-2025 y",
    responsibilities: [
      "Boshlang'ich kursda matematikadan olimpiadada faxrli orin olganman",
      "Yakuniylardan 5 bilan otib 5 lik stipindiya olganman.",
      "O'qish davrimda TTJda buxaltir vazifasini ham bajardim.",
      "Yakuniy DAK imtihonimdan 90+ ball bilan otdim.",
    ],
  },
  {
    job: "O'rganuvchi",
    company: "OWA",
    date: "2024-2025 y",
    responsibilities: [
      "Front-end darslarini o'zlashtira boshladim.",
      "Darslarda faol qatnashdim va taqdirlandi.",
      "Oylik imtihonlardan yuqori baho olganim uchun 50% grant yutib oldim.",
      "Yakuniy imtihonlarni 90% dan yuqori natijalarda topshirib yashil sertifikat oldim.",
    ],
  }
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-around">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < experiences.length-1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
