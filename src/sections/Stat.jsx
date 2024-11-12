import {stats} from '../constants';
const Stat = () => (
   
     <section id='stat'
             className='w-full mx-11 py-6 
               flex justify-evenly items-start flex-wrap  lg:ml-5 ml-11 px-10 max-container'>
          {stats.map((stat)=>(
            <div key={stat.id} className='text-white font-palaquin
                 flex flex-row justify-start items-center gap-3 m-3 '>

                  <h4 className='text-white xs:text-[40px] text-[30px] 
                       xs:leading-[43px] font-poppins font-semibold'>
                    {stat.value}</h4> 
                   <p className='uppercase text-gradient font-poppins
                        xs:text-[20px] text-[15px] text-wrap  '>
                    {stat.title} </p>
            </div>
          ))}
     </section>
   
)
  


export default Stat