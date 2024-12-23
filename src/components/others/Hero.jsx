
const Hero = () => {
  return (
    <div className="section-wrap">
     <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto container px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            Find and Share Your Skills,
              <strong className="block font-extrabold text-white">
                {" "}
                Build Your Community.{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-gray-200">
            Connect with talented individuals and offer your skills, or find the perfect help for your projects. Join our growing community of skilled professionals.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-secondary px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-500 focus:outline-none focus:ring active:bg-orange-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-secondary shadow hover:text-orange-700 focus:outline-none focus:ring active:text-orange-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section> 




    </div>
  );
};

export default Hero;
