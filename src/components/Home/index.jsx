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
                        <h4 class="text-3xl text-gray-800 font-bold mb-3">Exercise Metric</h4>
                        <p class="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch is able to capture you vitals while you exercise. You can create different category of exercises and can track your vitals on the go.</p>
                    </div>
                    <div class="w-full md:w-1/2">
                        <img src={scientist} alt="Monitoring" />
                    </div>
                </div>

                <div class="flex items-center flex-wrap mb-20">
                    <div class="w-full md:w-1/2">
                        <img src={reports} alt="Reporting" />
                    </div>
                    <div class="w-full md:w-1/2 pl-10">
                        <h4 class="text-3xl text-gray-800 font-bold mb-3">Reporting</h4>
                        <p class="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch can generate a comprehensive report on your vitals depending on your settings either daily, weekly, monthly, quarterly or yearly.</p>
                    </div>
                </div>

                <div class="flex items-center flex-wrap mb-20">
                    <div class="w-full md:w-1/2">
                        <h4 class="text-3xl text-gray-800 font-bold mb-3">Syncing</h4>
                        <p class="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch allows you to sync data across all your mobile devices whether iOS, Android or Windows OS and also to your laptop whether MacOS, GNU/Linux or Windows OS.</p>
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