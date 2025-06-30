import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const imageList = [
  "https://universityfindo.com/uploads/news/f03f897592faef334926e9ff242179de.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfLUlSwlRJSKfukPv05vFdT8d3Syo7gdLj0w&s",
  "https://media.ahmedabadmirror.com/am/uploads/mediaGallery/image/1716202469739.jpg-org",
];

const faqs = [
  {
    question: "What programs are offered at Parul University?",
    answer: "150+ programs including Engineering, Management, Law, Pharmacy, and more.",
  },
  {
    question: "Is Parul University NAAC accredited?",
    answer: "Yes, it holds a prestigious A++ NAAC accreditation.",
  },
  {
    question: "How do I apply for admission?",
    answer: "You can apply online via the official website or visit our admission cell.",
  },
];

const testimonials = [
  {
    name: "Riya Patel",
    quote: "Best decision ever! The campus is lively and the faculty is top-notch.",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    name: "Aarav Mehta",
    quote: "The technical exposure I got here helped me land a job in my dream company.",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    name: "Sneha Joshi",
    quote: "The support I received during placements was truly unmatched.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Swati Patel",
    quote: "The support I received during placements was truly unmatched.",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    name: "Ankur Jain",
    quote: "The support I received during placements was truly unmatched.",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    name: "Raj Pratap",
    quote: "The support I received during placements was truly unmatched.",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
  },

];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setQuestion("");
  };

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="bg-[#F1F5F9] text-gray-800 font-sans mt-10">
      {/* Hero Carousel */}
      <section className="relative w-full overflow-hidden bg-white" data-aos="fade-in">
        <div className="relative w-full max-h-[550px]">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {imageList.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full shrink-0 object-contain max-h-[550px]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Address */}
      <section className="flex justify-center px-6 pt-6" data-aos="fade-up">
        <div className="bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-md max-w-[90%] w-full flex items-center gap-4">
          <img
            src="https://pbs.twimg.com/media/GcfFXk-XkAAMdwf.jpg:large"
            alt="College Logo"
            className="h-16 md:h-20 object-contain"
          />
          <p>P.O. Limda, Vadodara, Gujarat, India</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-12">By The Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { title: "Courses", value: "150+", bg: "bg-indigo-100", text: "text-indigo-800" },
            { title: "Students", value: "26,000+", bg: "bg-yellow-100", text: "text-yellow-800" },
            { title: "Passouts", value: "20,000+", bg: "bg-emerald-100", text: "text-emerald-800" },
            { title: "New Admissions", value: "1,500+", bg: "bg-pink-100", text: "text-pink-800" },
            { title: "Awards", value: "60+", bg: "bg-sky-100", text: "text-sky-800" },
          ].map((item, i) => (
            <div
              key={i}
              className={`${item.bg} ${item.text} rounded-lg shadow-md p-6 hover:scale-105 transition-transform`}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <h3 className="text-4xl font-bold">{item.value}</h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
     <section className="py-20 px-6 bg-white" data-aos="fade-up">
  <h2 className="text-3xl font-bold text-center mb-10">What Our Students Say</h2>

  <div className="flex justify-center items-center overflow-hidden max-w-6xl mx-auto">
    {[-1, 0, 1].map((offset) => {
      const index =
        (currentIndex + offset + testimonials.length) % testimonials.length;
      const positionClass =
        offset === 0
          ? "scale-100 opacity-100 z-10"
          : "scale-90 opacity-50 z-0";

      return (
        <div
          key={index}
          className={`min-w-[280px] sm:min-w-[300px] mx-4 bg-blue-100 text-blue-900 p-6 rounded-xl shadow-md transition-transform duration-700 ease-out transform ${positionClass}`}
        >
          <img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className="w-16 h-16 rounded-full mb-4 object-cover"
          />
          <p className="italic text-sm">“{testimonials[index].quote}”</p>
          <h4 className="mt-4 font-bold">{testimonials[index].name}</h4>
        </div>
      );
    })}
  </div>

  {/* Controls below carousel and centered */}
  <div className="flex justify-center gap-4 mt-10">
    <button
      onClick={() =>
        setCurrentIndex((prev) =>
          prev > 0 ? prev - 1 : testimonials.length - 1
        )
      }
      className="text-lg px-4 py-2 rounded bg-blue-400 hover:bg-blue-500 text-white transition"
    >
      ←
    </button>
    <button
      onClick={() =>
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }
      className="text-lg px-4 py-2 rounded bg-blue-400 hover:bg-blue-500 text-white transition"
    >
      →
    </button>
  </div>
</section>
      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white text-left max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex items-center justify-between w-full text-left text-lg font-semibold py-3"
              >
                {faq.question}
                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`text-sm text-gray-700 overflow-hidden transition-all duration-500 ${
                  openIndex === idx ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>


        {/* Question Submission */}
        <form onSubmit={handleSubmit} className="mt-12 space-y-4" data-aos="fade-up">
          <label className="block font-medium text-gray-700">Have your own question?</label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            placeholder="Type your question here..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[royalblue]"
          />
          <button
            type="submit"
            className="bg-[royalblue] text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-800 transition"
          >
            Submit Question
          </button>
          {submitted && (
            <p className="text-green-600 text-sm mt-2">Thanks! We'll review your question shortly.</p>
          )}
        </form>
      </section>
    </div>
  );
};

export default Home;