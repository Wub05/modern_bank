import { clients } from "../constants";

const Clients = () => (
  <section className="flex flex-wrap mt-[100px] gap-8 justify-center items-center">
         {clients.map((client)=>(
             <div key={client.id}  className="mt-[10px]">
                  <img 
                     src={client.logo} 
                     alt="client" className="object-contain sm:mt-6 mt-1 sm:p-8 p-5
                         sm:w-[292px] w-[190px]"/>
             </div>
         ))}
  </section>
)

export default Clients