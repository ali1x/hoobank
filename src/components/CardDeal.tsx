import { motion } from "framer-motion"
import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

const CardDeal = () => (
  <section className={layout.section}>
    <motion.div
      className={layout.sectionInfo}
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </motion.div>

    <motion.div
      className={layout.sectionImg}
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </motion.div>
  </section>
)

export default CardDeal
