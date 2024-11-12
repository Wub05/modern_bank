import FeedbackCard from "../components/FeedbackCard";
import { feedback } from "../constants";

const Testimonials = () => (
  <section id="feedback"
  className="w-full max-container py-5 my-10">

  <div className="flex w-full sm:flex-row flex-col gap-5 sm:mt-12 mt-6 ">
    <h2 className="text-white text-3xl font-poppins sm:min-w-[50%]">
       What people are
         <br className="sm:block hidden"/> saying about us
    </h2>
    <div className="max-sm:w-full sm:mb-12 mb-6">
      <p className="text-dimWhite">Build and Deploy a Fully Responsive Website
         with Modern UI/UX in React JS with
         Tailwind Build and Deploy a Fully Responsive Website
      </p>
    </div>
  </div>
  <div className="flex max-sm:flex-col max-sm:mx-5 justify-center gap-8 flex-wrap">
      {feedback.map((card)=>(
         <FeedbackCard key={card.id} {...card} />
      ))}
  </div>
  </section>
)

export default Testimonials