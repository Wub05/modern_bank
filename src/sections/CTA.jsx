import Button from "../components/Button"


const CTA = () => (
    <section className="flex max-sm:flex-row gap-3 max-container 
                w-full mt-10 bg-black-gradient-2 rounded-xl boxShadow sm:p-3
                md:gap-11">
             <div className=" max-sm:pl-5">
                 <h1 className="text-white sm:text-[50px] 
                 text-[30px]">Lets try our service now!</h1>
                 <p className="text-dimWhite mt-5 sm:mt-8 max-sm:px-5 
                 sm:max-w-[80%]">
                  Fully Responsive Website with Modern UI/UX in 
                     React JS with Tailwind Build and Deploy
                  </p>
             </div>
             <div className="mt-3 ml-10  mr-3 justify-center">
                <Button />
             </div>
             
    </section>
)

export default CTA