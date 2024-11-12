import { discount } from "../assets"
import GetStarted from "../components/GetStarted"
import { robot } from "../assets"


const Hero = () => {
  return (
    <section id="Home"
    className="flex max-lg:flex-col justify-between padding-y 
                       max-container min-h-screen">
      <div className="flex justify-start flex-col
             sm:px-8 px-4 mt-11 leading-normal">
              <div className="flex bg-discount-gradient rounded-xl
                 pl-2 justify-start text-dimWhite">
                <img 
                    src={discount} 
                    alt="discount" 
                    className="object-contain  w-[32px] h-[32px]"
                />
                <p className="leading-normal whitespace-normal text-lg text-bold">
                  <span className="text-white">20% </span>
                    Discount For {" "} 
                  <span className="text-white"> 1 Month </span>
                    Account
                </p>
            </div>
            <div className="flex flex-row justify-between text-white
             text-xl font-semibold py-6 px-6  max-sm:w-full "> 
              <h1 className="font-poppins ss:text-[72px] text-[52px]
                    leading-[75px] ss:leading-[100px] font-semibold">
                The Next <br className="sm:block hidden" />
                    <span className="text-gradient ">Generations
                      </span> {" "}
            
                Payment method.
              </h1>
              <div className="ss:flex hidden md:mr-4 mr-0 font-semibold">
                  <GetStarted  />
              </div>
      </div>
         <h1 className=" px-6 font-poppins ss:text-[68px] text-[52px]
                    leading-[75px] ss:leading-[100px] font-semibold w-full">
              <p className="text-sm text-dimWhite leading-normal
                         max-w-[470px] mt-5">
                Our team of experts uses a methodology to identify a credit
                cards most likely to fit your needs. We examine annual 
                percentage rates, annual fees. 
              </p>
         </h1>
      </div>
      <div className="flex justify-center items-center 
         md:my-0 my-10 relative">
        <img 
            src={robot} 
            alt="Billing" 
            className=" h-[100%] w-[100%] relative z-[5]"
            />
            <div className="absloute z-[0] w-[40%] h-[35%] 
            pink__gradient top-0">

            </div>
            <div className="absloute z-[1] w-[80%] h-[80%] 
            white__gradient bottom-40">

            </div>
            <div className="absloute z-[0] w-[50%] h-[35%] 
            blue__gradient right-20">

            </div>
      </div>
      <div className="ss:hidden flex justify-center items-center">
        <GetStarted/>
      </div>

    </section>
  )
}

export default Hero