import ClientData from "@/components/clients/ClientData";

const Clients = () => {
  return (
    <>
      {" "}
      <div
        className="h-[1000px]  md:h-[500px] flex justify-center items-center flex-col mb-5 text-center px-5 md:px-0"
        style={{
          background: "linear-gradient(to right, #146d2b 0%, #009426 100%)",
        }}
      >
        <p className="font-bold text-[32px] text-white space-y-5 mb-5">
          Our Valued Clients
        </p>
        <div className="max-w-4xl text-white font-light text-[18px] space-y-3">
          <p className="mb-3">
            JAF Washing Plant Ltd., our clients are at the heart of everything
            we do. We are privileged to partner with a diverse range of esteemed
            organizations from various industries, both locally and
            internationally. It is their trust and confidence in our services
            that drive us to continuously strive for excellence.
          </p>
          <p>
            We believe in building strong and long-lasting relationships with
            our clients, based on mutual respect, open communication, and shared
            success. Each client is unique, and we tailor our approach to meet
            their specific requirements and surpass their expectations. Whether
            it&apos;s a small-scale project or a large-scale production, we are
            committed to delivering exceptional results and outstanding customer
            service.
          </p>
          <p>
            To all our valued clients, we extend our heartfelt gratitude for
            choosing Al-Madina Washing Plant Ltd. as your trusted partner. Your
            success is our success, and we remain dedicated to delivering
            excellence and driving your business forward.
          </p>
        </div>
      </div>
      <ClientData />
    </>
  );
};

export default Clients;
