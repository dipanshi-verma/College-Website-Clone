import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div className="bg-[#F1F5F9] text-gray-800 font-sans">

            
            <section className="text-center py-16 px-6" data-aos="fade-up">
                <h1 className="text-4xl font-bold mb-4">About Parul University</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    A Vibrant University Experience
                </p>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 items-start" data-aos="fade-up">
                <div className="w-full md:w-1/3">
                    <img
                        src="https://pbs.twimg.com/media/GcfFXk-XkAAMdwf.jpg:large"
                        alt="Campus"
                        className="rounded-lg object-cover w-full aspect-square shadow"
                    />
                </div>

                <div className="w-full md:w-2/3 space-y-5 text-justify text-[15px] text-gray-700">
                    <p>
                        A multidisciplinary destination of learning and innovation, Parul University is India’s youngest private university
                        to receive NAAC A++ accreditation in the first cycle. Located in Vadodara, Gujarat, it merges rich cultural heritage with
                        modern academic excellence to nurture national and global talent.
                    </p>
                    <p>
                        Offering a dynamic array of diploma to doctoral programs across diverse faculties, the university stands out for its
                        field-aligned curriculum, startup ecosystem, and high placement track record. With a 150+ acre campus housing 50,000+
                        students and 3,500 international students from 75+ countries, it is truly global.
                    </p>
                    <p>
                        Accolades include DSIR recognition, NABL/NABH accreditations, ARIIA Top 50 ranking, and honors such as Best University
                        in Placements (ASSOCHAM), and Best Private University in Western India (Praxis Media).
                    </p>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-16" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-center mb-12">Leadership</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6 items-start" data-aos="fade-up">
                        <img
                            src="https://paruluniversity.ac.in/app/202002/images/post/section_container/image/549153Dr%20Devanshu.jpg"
                            alt="Dr. Devanshu Patel"
                            className="h-40 w-40 object-cover rounded-md shadow"
                        />
                        <div>
                            <h3 className="text-xl font-semibold">Dr. Devanshu Patel</h3>
                            <p className="text-sm text-gray-600 mb-2">President, Parul University</p>
                            <p className="text-[15px] text-gray-700 text-justify">
                                A visionary educationist committed to elevating India’s youth, Dr. Patel is a dynamic leader known for launching innovative,
                                skill-driven institutions. With an M.D. in Pharmacology from MSU Baroda, his passion has transformed Parul University into a hub
                                for emerging thinkers and changemakers.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6 items-start" data-aos="fade-up" data-aos-delay="100">
                        <img
                            src="https://paruluniversity.ac.in/app/202004/images/post/section_container/image/768240parul%20patel.jpg"
                            alt="Dr. Parul Patel"
                            className="h-40 w-40 object-cover rounded-md shadow"
                        />
                        <div>
                            <h3 className="text-xl font-semibold">Dr. Parul Patel</h3>
                            <p className="text-sm text-gray-600 mb-2">
                                Vice President (Student Affairs & General Administration)
                            </p>
                            <p className="text-[15px] text-gray-700 text-justify">
                                A dedicated administrator and the guiding force behind student affairs at Parul University. Dr. Patel brings empathy and
                                excellence to her leadership, shaping student journeys with care and passion. She holds an M.D. in Organon from HNGU.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-6xl mx-auto px-6 py-16" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-center mb-12">Facilities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300" data-aos="zoom-in">
                        <img
                            src="https://paruluniversity.ac.in/app/202002209351/images/innfrastacue.jpg"
                            alt="Welcome to Parul"
                            className="w-full h-56 object-cover rounded-t-lg"
                        />
                        <p className="p-4 text-center font-medium text-gray-700">Welcome To Parul University</p>
                    </div>

                    <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300" data-aos="zoom-in" data-aos-delay="100">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq91RNgeCcQ8ECvWY2jhQGvIQrEybMV1TFXA&s"
                            alt="Apple Ecosystem"
                            className="w-full h-56 object-cover rounded-t-lg"
                        />
                        <p className="p-4 text-center font-medium text-gray-700">Apple Eco System</p>
                    </div>

                    <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300" data-aos="zoom-in" data-aos-delay="200">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSniVUyD-3GjY8_CS7aGam6kknWpBX6nemszA&s"
                            alt="Law"
                            className="w-full h-56 object-cover rounded-t-lg"
                        />
                        <p className="p-4 text-center font-medium text-gray-700">Law is very clear for everyone</p>
                    </div>
                    <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300" data-aos="zoom-in" data-aos-delay="200">
                        <img
                            src="https://static.toiimg.com/thumb/msid-99757098,width-400,resizemode-4/99757098.jpg"
                            alt="Engeineering & Tech."
                            className="w-full h-56 object-cover rounded-t-lg"
                        />
                        <p className="p-4 text-center font-medium text-gray-700">Advanced M.Tech programmes</p>
                    </div>
                    <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300" data-aos="zoom-in" data-aos-delay="200">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtZeQ_nQv3AItHzW9bsBLKgO7MxDgvyO94nAVW3mA5Wx0nSUpIfFsY9oChMQLSUeKy0OA&usqp=CAU"
                            alt="Law"
                            className="w-full h-56 object-cover rounded-t-lg"
                        />
                        <p className="p-4 text-center font-medium text-gray-700">Take everystep with technology</p>
                    </div>
                    <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300" data-aos="zoom-in" data-aos-delay="200">
                        <img
                            src="https://paruluniversity.ac.in/bsc_2025/images/bannermbsc.webp"
                            alt="Law"
                            className="w-full h-56 object-cover rounded-t-lg"
                        />
                        <p className="p-4 text-center font-medium text-gray-700">Science the best friend of growing country & youth</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default About;