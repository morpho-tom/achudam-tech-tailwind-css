import React from "react";
import scientist from "../../assets/scientist.svg"
import sync from "../../assets/sync.svg"
import reports from "../../assets/reports.svg"

const Home = () => {
    return (
        <>

            <div class="py-20  rounded-lg bg-gradient-to-r from-sky-500 to-green-500" >
                <div class=" container text-center  mx-auto px-6">
                    <h2 class="text-4xl  font-bold  mb-2 text-white">
                        Welcome to the world of scientific innovation!
                    </h2>
                    <h3 class="text-1xl mb-8 text-white">
                        We're thrilled to have you visit <span>AchudamTech</span>, your one-stop shop for cutting-edge scientific equipment, supplies, and solutions. Whether you're a seasoned researcher, a budding scientist, or simply a curious mind seeking to explore the wonders of science, we have something for everyone.
                    </h3>
                </div>
            </div>

            <section class="container mx-auto px-6 p-10">
                <h2 class="text-4xl font-bold text-center text-blue-400 mb-8">
                    Features
                </h2>
                <div class="flex items-center flex-wrap mb-20">
                    <div class="w-full md:w-1/2">
                        <h4 class="text-3xl text-gray-800 font-bold mb-3">About</h4>
                        <p class="text-gray-600 mb-8">
                            Product overview: Provide a comprehensive overview of your product, including its features, benefits, and specifications.

                            Product applications: Showcase how your product can be used in a variety of scientific applications.
                            Case studies: Highlight successful case studies of how your product has been used to achieve scientific breakthroughs.
                            White papers: Publish in-depth white papers that explore the science behind your product and its potential impact on the scientific community.
                            Resources: Provide a comprehensive resource center for scientists, including links to relevant articles, databases, and software tools.
                            Contact information: Make it easy for scientists to contact you by providing clear and up-to-date contact information.   </p> </div>
                    <div class="w-full md:w-1/2">
                        <img src={scientist} alt="Monitoring" />
                    </div>
                </div>

                <div class="flex items-center flex-wrap mb-20">
                    <div class="w-full md:w-1/2">
                        <img src={reports} alt="Reporting" />
                    </div>
                    <div class="w-full md:w-1/2 pl-10">
                        <h4 class="text-3xl text-gray-800 font-bold mb-3">Product</h4>
                        <p class="text-gray-600 mb-8">Our scientific products are designed to help scientists of all levels achieve their research goals. We offer a wide range of products, from basic laboratory equipment to cutting-edge research tools. Our products are used by scientists in a variety of fields, including biology, chemistry, physics, and engineering.</p>
                        <li>Benefits of Our Products</li>
                        <li>Improved accuracy and reliability</li>
                        <li>Increased efficiency and productivity</li>
                        <li>Enhanced safety and security</li>
                        <li>Reduced costs and downtime</li>
                    </div>
                </div>

                <div class="flex items-center flex-wrap mb-20">
                    <div class="w-full md:w-1/2">
                        <h4 class="text-3xl text-gray-800 font-bold mb-3">Call to Action</h4>
                        <p class="text-gray-600 mb-8">Contact us today to learn more about our products and how they can help you achieve your scientific goals.</p>
                        <p className="text-2xl bold">Additional Content</p>
                        <ol>
                            <li>Customer testimonials </li>
                            <li>Product demos</li>
                            <li>Case studies</li>
                            <li>White papers</li>
                            <li>Blog posts</li>

                        </ol>

                    </div>
                    <div class="w-full md:w-1/2">
                        <img src={sync} alt="Syncing" />
                    </div>
                </div>
            </section>
        </>
    );

}

export default Home;