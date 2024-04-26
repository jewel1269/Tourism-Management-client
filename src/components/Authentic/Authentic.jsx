

const Authentic = () => {
    return (
        <section className=" py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Why People Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg shadow-slate-400 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Professional Guides</h3>
            <p >Our experienced guides are passionate about showcasing the best of each destination, ensuring you have an enriching and memorable travel experience.</p>
          </div>
          <div className="p-6 bg-white shadow-lg shadow-slate-400 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Customized Itineraries</h3>
            <p >We tailor our itineraries to suit your preferences and interests, offering flexibility and personalized travel solutions that cater to your unique needs.</p>
          </div>
          <div className="p-6 bg-white shadow-lg shadow-slate-400 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Exceptional Service</h3>
            <p >Customer satisfaction is our top priority. From the moment you inquire about a trip to the end of your journey, our dedicated team ensures you receive unparalleled service and support.</p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Authentic;