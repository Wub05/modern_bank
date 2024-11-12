import { arrowUp } from "../assets"

const GetStarted = () => (
    <div className="flex justify-center items-center h-[140px]
                   w-[140px] bg-blue-gradient rounded-full mt-10
                    p-[2px] cursor-pointer">
            <div className="flex justify-center items-center flex-col
                     w-[100%] h-[100%] rounded-full bg-primary">
                <div className="flex justify-start">
                      <p className="text-[18px] leading-[23px] 
                      font-medium font-poppins mr-2">
                         <span className="text-gradient">Get</span>
                      </p>
                      <img 
                            src={arrowUp} 
                            alt="arrowUp" 
                         />
                </div>
                <p className="text-[18px] leading-[23px] 
                      font-medium font-poppins">
                         <span className="text-gradient">Started</span>
                         
                      </p>
            </div>

    </div>
)
  

export default GetStarted