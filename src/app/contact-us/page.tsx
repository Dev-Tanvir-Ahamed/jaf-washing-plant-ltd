import ContactForm from "@/components/contact/ContactForm";
import Map from "@/components/contact/ContactMap";

const ContactUs = () => {
  return (
    <div>
      <div className="h-[200px]  flex justify-center items-center flex-col mb-5 text-center gradient-violet">
        <p className="font-bold text-5xl text-white space-y-5 mb-5">
          Contact Us
        </p>
      </div>
      <ContactForm />
      <Map />
    </div>
  );
};

export default ContactUs;
