import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";
const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img 
          src={offer}
          alt="SHow promotion"
          width={774}
          height={688}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-orange-500">Special</span> Offer
        </h2>
        <p className="mt-4 font-montserrat text-slate-800">   Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.</p>
          <p className="mt-5 font-montserrat text-slate-800">Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptiona
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button label="Shop Now" iconURL={arrowRight} />
            <Button label="Learn More"
            backgroundColor='bg-white'
            borderColor="border-slate-500"
            textColor='text-slate-800'
            />
          </div>
      </div>
    </section>
  )
}

export default SpecialOffer