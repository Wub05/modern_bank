import {features} from '../constants';
import Button from '../components/Button';

const FeatureCard =({icon,title, content,index})=>(
           <div className={`my-5 flex gap-5 
                feature-card rounded-xl`}>
              
               <img 
                  src={icon} 
                  alt="icon" className='object-contain
                      h-[30px] w-[30px] my-2 ml-2 mt-8'/>
               <div>
                  <h4 className='font-poppins text-[20px]  font-bold'>
                    {title}
                    </h4>
                  <p className='text-dimWhite my-2 '>{content}</p>
                </div>
           </div>
);

const Business = () => (
  <section id='features'
     className="flex max-sm:flex-col gap-4 text-white  w-full 
               max-container padding-y ">
     <div className='px-5 sm:max-w-[50%] my-2 sm:mt-10 leading-7'>
        <h2 className='text-[30px]  font-bold font-palaquin
            leading-normal'>
           You do the business, 
           <br className='sm:block hidden'/> we'll
            handle the money.
        </h2>
        <p className=' text-dimWhite 
         mt-5'>With right credit card, you can improve your financial life
          by credit, earning rewards and saving money. But thousands 
          of hundreds cards on the market.
        </p>
        <Button />
     </div>
      <div className=' p-3 px-5' >
      {features.map((feature,index)=>(
        <FeatureCard key={index} {...feature}/>
      ))}
     </div> 
  </section>
)

export default Business;