import { motion } from "framer-motion"
import { features } from "../constants"
import styles, { layout } from "../style"
import Button from "./Button"

type FeatureCardProps = {
  icon: string
  title: string
  content: string
  index: number
}

const FeatureCard = ({ icon, title, content, index }: FeatureCardProps) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
)

const Business = () => (
  <section id="features" className={layout.section}>
    <motion.div
      className={layout.sectionInfo}
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll handle the
        money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>

      <Button styles={`mt-10`} />
    </motion.div>

    <motion.div
      className={`${layout.sectionImg} flex-col`}
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </motion.div>
  </section>
)

export default Business
