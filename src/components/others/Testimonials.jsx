import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // React Icons

const Testimonials = () => {
  const clientReviews = [
    {
      name: "John Doe",
      description:
        "The service was outstanding! I couldn't be happier with the results. Highly recommend to anyone looking for quality work.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
    },
    {
      name: "Sarah Smith",
      description:
        "Great experience overall. The team was professional, and they delivered exactly what I was hoping for. Will definitely return!",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
    },
    {
      name: "Michael Johnson",
      description:
        "I had a smooth and easy experience. The process was quick, and they were very attentive to my needs. I will definitely work with them again.",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
    },
    {
      name: "Emma Brown",
      description:
        "Absolutely fantastic! They exceeded my expectations in every way. Friendly staff and impeccable service.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
    },
    {
      name: "David Williams",
      description:
        "Very pleased with the results. The team was efficient, and communication was clear. Would recommend to anyone in need of quality service.",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
    },
    {
      name: "Sophia Davis",
      description:
        "I couldn't be more satisfied. They really took the time to understand my requirements and delivered exactly what I wanted. Top-notch service!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
    },
  ];

  const reviewsPerPage = 3; // Show 3 reviews per page
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(clientReviews.length / reviewsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * reviewsPerPage;
  const currentReviews = clientReviews.slice(
    startIndex,
    startIndex + reviewsPerPage
  );

  return (
    <section className="bg-white section-wrap">
      <div className="mx-auto container px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-24">
        {/* title section */}
        <h4 className="flex items-center gap-3 mb-2">
          <span className="border-t-2 border-gray-300 w-10"></span>
          <span className="text-gray-500 uppercase tracking-wide text-sm">
           Testimonials
          </span>
        </h4>
        <h2 className="section-title text-gray-900">
        Read trusted reviews from our customers
        </h2>
      </div>

        <div className="mt-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentReviews.map((review, index) => (
              <blockquote
                key={index}
                className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <img
                    alt="Customer"
                    src={review.image}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex justify-center gap-0.5 text-yellow-500">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 17.25l5.027 3.004-1.75-5.747 4.673-3.429-5.998-.014-1.993-5.053-1.993 5.053-5.998.014 4.673 3.429-1.75 5.747L12 17.25z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      {review.name}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">{review.description}</p>
              </blockquote>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={handlePrevPage}
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNextPage}
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
