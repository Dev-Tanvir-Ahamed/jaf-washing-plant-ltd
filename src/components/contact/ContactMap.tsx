const Map = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative w-full h-96 border-2 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.73475212694!2d90.25691507479326!3d23.792457987161505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755eae1f4b59065%3A0xe9708fd40c96a03d!2sAL-Madina%20Washing%20Plant%20Ltd!5e0!3m2!1sen!2sbd!4v1737653066815!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
