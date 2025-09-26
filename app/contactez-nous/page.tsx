"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
//import { Mail, MapPin, Phone } from "lucide-react";

const Apropos = () => {
  return (
    <>
      <Header type="alimentaire" className="bg-[#2e2e72]" isPage />
      <section className="w-full h-[500px] bg-[url('/assets/contact.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="max-w-screen-xl m-auto px-5 h-full">
          <div className="w-full flex flex-col gap-y-2 justify-center h-full">
            <h1 className=" text-[#2e2e72] text-6xl leading-none font-bold">
              Contactez-nous!
            </h1>
            {/* <span className="text-[#2e2e72] text-xl uppercase">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </span> */}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#2e2e72] min-h-[500px]">
        <div className="max-w-screen-xl m-auto px-5 relative">
          <div className="w-[75%] bg-white shadow-2xl rounded-3xl py-10 px-16 relative mx-auto -top-36 min-h-[300px]">
            <form action="#">
              <div className="w-full grid grid-cols-2 gap-5 mb-5">
                <div className="flex flex-col">
                  <Label className="text-md font-semibold pb-2 text-[#2e2e72]">
                    Nom
                  </Label>
                  <Input className="border-[3px] border-[#2e2e72] rounded-xl h-16" />
                </div>
                <div className="flex flex-col">
                  <Label className="text-md font-semibold pb-2 text-[#2e2e72]">
                    Téléphone
                  </Label>
                  <Input className="border-[3px] border-[#2e2e72] rounded-xl h-16" />
                </div>
              </div>
              <div className="w-full  mb-5">
                <div className="flex flex-col">
                  <Label className="text-md font-semibold pb-2 text-[#2e2e72]">
                    Email
                  </Label>
                  <Input type="email" className="border-[3px] border-[#2e2e72] rounded-xl h-16" />
                </div>
              </div>
              <div className="w-full mb-5">
                <div className="flex flex-col">
                  <Label className="text-md font-semibold pb-2 text-[#2e2e72]">
                    Service concerné
                  </Label>
                  <select 
                    name="service" 
                    id="service" 
                    className="border-[3px] border-[#2e2e72] rounded-xl h-16 px-3 outline-none bg-white text-[#2e2e72]"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="alimentaire">Alimentaire</option>
                    <option value="detergent">Détergent</option>
                    <option value="commercial">Commercial</option>
                    <option value="administration">Administration</option>
                    <option value="production">Production</option>
                    <option value="qualite">Qualité</option>
                  </select>
                </div>
              </div>
              <div className="w-full grid grid-cols-1 gap-5 mb-5">
                <div className="flex flex-col">
                  <Label className="text-md font-semibold pb-2 text-[#2e2e72]">
                    Raison de la visite
                  </Label>
                  <Input className="border-[3px] border-[#2e2e72] rounded-xl h-16" />
                </div>
              </div>
              <div className="w-full grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <Label className="text-md font-semibold pb-2 text-[#2e2e72]">
                    Date
                  </Label>
                  <Input 
                    type="date" 
                    className="border-[3px] border-[#2e2e72] rounded-xl h-16 px-3 text-[#2e2e72]" 
                  />
                </div>
                <div className="flex flex-col">
                  <Label className="text-md font-semibold pb-2 text-[#2e2e72]">
                    Heure
                  </Label>
                  <Input 
                    type="time" 
                    className="border-[3px] border-[#2e2e72] rounded-xl h-16 px-3 text-[#2e2e72]" 
                  />
                </div>
              </div>
              <Button className="bg-[#2e2e72] rounded-full w-[200px] h-12 mt-10">
                Envoyer
              </Button>
            </form>
          </div>
        </div>
        <div className="max-w-screen-xl m-auto relative -mt-20 pb-20">
          <div className="w-full mb-10">
            <h2 className="text-white text-6xl font-semibold">Nous sommes ici!</h2>
          </div>
          {/* <div className="w-full grid grid-cols-3 gap-10">
            <div className="flex bg-white rounded-3xl justify-between items-center px-10 py-6">
              <Phone className="text-[#2e2e72] w-14 h-14" />
              <div className="flex flex-col">
                <h4 className="text-3xl font-semibold text-[#2e2e72]">
                  Lorem Ipsum
                </h4>
                <span className="text-lg text-[#2e2e72]">Lorem Ipsum</span>
              </div>
            </div>
            <div className="flex bg-white rounded-3xl justify-between items-center px-10 py-6">
              <Mail className="text-[#2e2e72] w-14 h-14" />
              <div className="flex flex-col">
                <h4 className="text-3xl font-semibold text-[#2e2e72]">
                  Lorem Ipsum
                </h4>
                <span className="text-lg text-[#2e2e72]">Lorem Ipsum</span>
              </div>
            </div>
            <div className="flex bg-white rounded-3xl justify-between items-center px-10 py-6">
              <MapPin className="text-[#2e2e72] w-14 h-14" />
              <div className="flex flex-col">
                <h4 className="text-3xl font-semibold text-[#2e2e72]">
                  Lorem Ipsum
                </h4>
                <span className="text-lg text-[#2e2e72]">Lorem Ipsum</span>
              </div>
            </div>
          </div> */}
          <div className="w-full h-[500px] mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.2794082654696!2d-4.0915493255247775!3d5.374296435451166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1c1005d8f3fef%3A0x2daeadc4ae36b30e!2sSIPRO-CHIM-ALIMENTAIRE!5e0!3m2!1sfr!2sci!4v1749334300622!5m2!1sfr!2sci"
              width="100%"
              height="100%"
              loading="lazy"
              className="rounded-3xl"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Apropos;
