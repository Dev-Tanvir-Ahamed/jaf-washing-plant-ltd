const Map = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative w-full h-96 border-2 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.0226003885!2d90.44214589468943!3d23.67514975632323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b90042ede30b%3A0x90a6699d4df4fc80!2sJAF%20WASHING!5e0!3m2!1sen!2sbd!4v1737722702694!5m2!1sen!2sbd"
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
