import {apple,bill,google} from '../assets';
const Billing = () => (
       <section id='products' 
             className="flex max-sm:flex-col-reverse gap-2 my-5 mx-5 p-3">
             <div className='max-sm:w-full'>
                 <img 
                 src={bill} 
                 alt="billing" className='object-contain h-[100%] w-[100%]
                 relative z-[5]' />
                 <div className='absolute z-[3] h-[50] w-[50] 
                    -left-1/2 top-0 rounded-full pink__gradient'> 

                 </div>
             </div>
             <div className='max-sm:mb-8  mt-[12%]'>
                <h2 className='text-white font-bold text-3xl 
                         font-monserrat' >
                  Easily control your billing
                    <br className='sm:block hidden'/>
                   & invoicing
                </h2>
                <p className='text-dimWhite sm:max-w-[80%] mt-5'>Build and Deploy a Fully Responsive Website with 
                  Modern UI/UX in React JS with Tailwind
                  Build and Deploy a Fully Responsive 
                  Website with Modern UI/UX in React JS with Tailwind
                  </p>
                  <div className='sm:mt-10 mt-6 flex gap-6'>
                    <img 
                      src={apple} 
                      alt="apple store" className='w-[128px] h-[42px] ' />

                      <img 
                      src={google} 
                      alt="google play" className='w-[128px] h-[42px] ' />
                  </div>
             </div>
       </section>
)

export default Billing