import { quotes } from "../assets"


const FeedbackCard = ({content,name,title,img}) => (
           
        <div className="flex justify-between gap-5 mt-6 max-w-[370px]
                     flex-col feedback-card py-5
                        rounded-xl items-center p-6 
             ">
            <img
                src={quotes} 
                alt="double_quote" className="h-[42px] w-[72]
                    object-contain"/>
            <p className=" text-dimWhite font-semibold text-xl font-poppins ">
               
                {content}
                
            </p>
            <div className="flex gap-3">

               <img src={img} alt="profileimage" 
                  className="h-[100%] w-[100%] object-contain"/>
                <div className="w-full px-6 mt-5">
                    <h2 className="text-gradient text-bold text-nowrap text-2xl 
                         underline">{name}</h2>
                    <p className="text-dimWhite text-nowrap">{title}</p>
                </div>
            </div>
            

        </div>
            
)
export default FeedbackCard