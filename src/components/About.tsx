import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="aspect-square rounded-2xl overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src="/port.jpeg"
              alt="Piyush Agarwal"
              className="w-full  rounded-2xl"
            />
            
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
              I am a passionate Frontend Developer with expertise in building responsive, user-friendly web applications. I specialize in technologies like HTML, CSS, JavaScript, ReactJS, and Next.js, focusing on creating seamless user experiences.

              My skill set includes crafting modern, accessible, and interactive UIs, optimizing performance, and integrating APIs for dynamic functionality. I am experienced in state management tools such as Redux and Zustand, and I always follow best practices to deliver clean, maintainable code.

              I am enthusiastic about learning new technologies, staying updated with the latest trends, and continuously improving my skills to build scalable and efficient applications."

              You can tailor this description by adding specific achievements or projects you've worked on !
            </motion.p>

            {/* <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
              With extensive experience in modern web technologies and a strong
              foundation in both frontend and backend development, I help
              businesses build scalable solutions and mentor aspiring developers
              to achieve their goals.
            </motion.p> */}

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              variants={fadeInUp}
            >
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">2.7</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              {/* <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">125K+</h3>
                <p className="text-gray-600">YouTube Subscribers</p>
              </div> */}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
