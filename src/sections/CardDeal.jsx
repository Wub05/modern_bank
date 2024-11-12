import {card} from '../assets';
import Button from '../components/Button';

const CardDeal = () => {
  return (
    <section className='flex mx-5  max-sm:flex-col gap-5'>
         <div className='w-full mt-10  p-3'>
           <h2 className='text-white font-bold text-3xl text-nowrap '>
              Find a better card deal 
                <br className='sm:block hidden' /> in few steps.
           </h2>
           <p className='text-dimWhite mt-5 sm:max-w-[60%] max-sm:mt-5'
             >Build and Deploy a Fully Responsive Website with
             Modern UI/UX in React JS with Tailwind 
             Build and Deploy a Fully Responsive Website 
            
            </p>
            <Button />
         </div>
         <div>
            <img 
              src={card} 
              alt="card image" className='h-[100%] w-[100%] object-contain 
                         max-sm:mt-5'/>
         </div>
    </section>
  )
}

export default CardDeal