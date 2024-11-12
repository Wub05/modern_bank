import { logo } from "../assets";
import { footerLinks,socialMedia } from "../constants";

const Footer = () => (
    <section id="footer"
        className="flex flex-col justify-between  mt-10  ">
          <div>
            <img src={logo} alt="logo" className="object-contain
                     w-[157px] h-[100px]" />
          </div>
          <div className="flex justify-around  mt-8">
            {footerLinks.map((footer)=>(
                 <div key={footer.title}>
                   
                   <h3 className="text-white text-xl">{footer.title}</h3>
                    {footer.links.map((link)=>(
                    <p className="text-dimWhite ml-2">{link.name}</p>
                  ))}
                 </div>
                
            ))}
          </div>
         
    </section>

)

export default Footer