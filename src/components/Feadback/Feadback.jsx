import { MdReviews } from "react-icons/md";
import "./style.css"

const Feadback = () => {
  return (
    <div
      style={{ backgroundColor: "rgb(229, 234, 240)" }}
      className="shadow-lg l shadow-slate-400 p-4"
    >
      <div className="lg:ml-32">
        <div className="flex gap-2">
          <MdReviews className="h-9 w-9" />
          <h3 className="text-2xl">Testimonial</h3>
        </div>
        <h1 className="text-4xl text-black font-semibold">User Feedback</h1>
      </div>

      <div className="lg:flex ">
        <div>
          <div className=" flex justify-start  items-center lg:w-[1300px]  ">
            <div className="md:w-3/5 w-3/4 lg:ml-32  flex flex-col gap-2   ">
              <div className="flex mt-3 bg-opacity-20 border border-black rounded-md">
                <ion-icon className="py-4 p-3" name="search-outline"></ion-icon>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Search Review"
                  className="p-2 bg-transparent focus:outline-none"
                />
              </div>
              <div className="flex flex-wrap gap-2 w-full py-2">
                <span className="px-2 p-1 hover:underline  bg-opacity-50">
                  Experience
                </span>
                <span className="px-2 p-1 hover:underline  bg-opacity-50">
                  Quality
                </span>
                <span className="px-2 p-1 hover:underline  bg-opacity-50">
                  Design
                </span>
                <span className="px-2 p-1 hover:underline  bg-opacity-50">
                  Size
                </span>
                <span className="px-2 p-1 hover:underline  bg-opacity-50">
                  Features
                </span>
                <span className="px-2 p-1 hover:underline  bg-opacity-50">
                  Value
                </span>
                <span className="px-2 p-1 hover:underline  bg-opacity-50">
                  Relacement
                </span>
              </div>
              <div className="flex flex-col gap-3 mt-5">
                <div className="flex flex-col gap-4  p-1">
                  <div className="flex justify justify-between">
                    <div className="flex items-center gap-2">
                      <div className="relative flex-shrink-0">
                        <span className="absolute bottom-0 right-0 w-4 h-4 border rounded-full dark:bg-amber-700 dark:border-gray-50"></span>
                        <img
                          src="https://source.unsplash.com/50x50/?portrait?1"
                          alt=""
                          className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                        />
                      </div>
                      <span>Jess Hopkins</span>
                    </div>
                    <div className="flex p-1 gap-1 text-orange-300">
                      <ion-icon name="star">⭐</ion-icon>
                      <ion-icon name="star">⭐</ion-icon>
                      <ion-icon name="star">⭐</ion-icon>
                      <ion-icon name="star">⭐</ion-icon>
                      <ion-icon name="star-half">⭐</ion-icon>
                    </div>
                  </div>
                  <div>
                    I recently used your tourism management platform to plan a
                    trip to Sundarban. Overall, <br />
                    I found the experience quite satisfying. The platform
                    provided comprehensive information about <br />
                    various tourist spots, average costs, and travel times,
                    which helped me plan my itinerary effectively.
                  </div>
                  <div className="flex justify-between">
                    <span>january 25, 2024</span>
                    <button className="p-1 px-2hover: border border-gray-950 bg-opacity-60">
                      <ion-icon name="share-outline"></ion-icon> Share
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-4">
                  <div className="flex justify justify-between">
                    <div className="flex items-center gap-2">
                      <div className="relative flex-shrink-0">
                        <span className="absolute bottom-0 right-0 flex items-center justify-center w-4 h-4 border rounded-full dark:bg-gray-50 dark:text-gray-800 dark:border-gray-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-2 h-2 fill-current"
                          >
                            <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                          </svg>
                        </span>
                        <img
                          src="https://source.unsplash.com/50x50/?portrait?3"
                          alt=""
                          className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                        />
                      </div>
                      <span>Alice Banks</span>
                    </div>
                    <div className="flex p-1 gap-1 text-orange-300">
                      <ion-icon name="star">⭐</ion-icon>
                      <ion-icon name="star">⭐</ion-icon>
                      <ion-icon name="star">⭐</ion-icon>
                      <ion-icon name="star">⭐</ion-icon>
                      <ion-icon name="star">⭐</ion-icon>
                    </div>
                  </div>
                  <div>
                    I recently explored Cox's Bazar using your tourism
                    management platform, and I must say, it exceeded my
                    expectations. <br />
                    The platform provided an extensive list of tourist spots
                    with detailed descriptions, <br /> making it easier for me
                    to choose which places to visit
                  </div>
                  <div className="flex justify-between">
                    <span>Feb 13, 2024</span>
                    <button className="p-1 px-2 hover: border border-gray-950 bg-opacity-60">
                      <ion-icon name="share-outline"></ion-icon> Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vl"></div>
        <div>
          <section className=" dark:text-gray-900">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
              <div className="py-6 md:py-0 md:px-6">
                <h1 className="text-4xl font-bold">Write a Review</h1>
                <p className="pt-2 pb-4">
                  Fill in the form to start a conversation
                </p>
              </div>
              <form
                noValidate=""
                className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
              >
                <label className="block">
                  <span className="mb-1">Name</span>
                  <input
                    type="text"
                    placeholder="Leroy Jenkins"
                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 p-3 dark:bg-gray-100"
                  />
                </label>
                <label className="block">
                  <span className="mb-1">Email</span>
                  <input
                    type="email"
                    placeholder="leroy@jenkins.com"
                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 p-3 dark:bg-gray-100"
                  />
                </label>
                <label className="block">
                  <span className="mb-1">review</span>
                  <textarea
                    rows="3"
                    className="block  h-64 w-72 rounded-md focus:ring focus:ring-opacity-75  dark:bg-gray-100"
                  ></textarea>
                </label>
                <button
                  type="button"
                  className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 hover:ring-violet-400 hover:dark:ring-violet-600"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Feadback;
