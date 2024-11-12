import {Hero,Stat,Business,Billing,CardDeal,
  Testimonials,Clients,CTA,Footer} from './sections';
import Nav from './components/Nav';

const App = () => (
<main className='relative bg-primary padding-y ' >
          <Nav/>
        <section className='padding-x'>
          <Hero/>

        </section >
        <section className='padding-x'>
          <Stat/>
        </section>
        <section className='padding-x'>
          <Business/>
        </section>
        <section className='padding-x'>
        < Billing/> 
        </section>
        <section className='padding-x'>
          <CardDeal/>
        </section>
        <section className='padding-x'>
          <Testimonials/>
        </section>
        <section className='padding-x'>
          <Clients/>
          </section>
        <section className='padding-x'>
          <CTA/>
          </section>
        <section className='padding-x'>
          <Footer/>
        </section>
</main>
)
  


export default App