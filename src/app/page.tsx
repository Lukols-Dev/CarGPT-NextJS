import { CommentCard } from "@/components/comment-card.component";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center text-center  mt-24 px-8">
      <h1 className="mx-auto max-w-4xl gap-1 font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
        Pimp your car with the
        <span className="whitespace-nowrap text-indigo-600 mx-3">
          help of AI
        </span>
      </h1>
      <h2 className="mx-auto mt-12 max-w-xl text-lg text-gray-500 leading-7">
        Take a picture of your car and discover how you can pimp it up. Add
        elements, change colors, and so much more to unleash its true potential
      </h2>
      <Link
        className="bg-indigo-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-indygo-500 transition"
        href="/generator"
      >
        Generate your dream car
      </Link>
      <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
        <div className="flex flex-col space-y-10 mt-4 mb-16">
          <div className="flex sm:space-x-8 sm:flex-row flex-col">
            <div className="flex flex-col gap-4">
              <h3 className="mb-1 font-medium text-white text-lg">
                Original Car
              </h3>
              <div className="w-[500px] h-96 rounded-2xl">
                <Image
                  alt="Original photo of a room"
                  src="/assets/car.png"
                  className="w-full object-cover h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="mb-1 font-medium  text-white text-lg">
                Pimped Car
              </h3>
              <div className="w-[500px] h-96 rounded-2xl">
                <Image
                  alt="Original photo of a room"
                  src="/assets/car.png"
                  className="w-full object-cover h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="mx-auto max-w-3xl mt-9 font-display text-4xl font-bold tracking-normal text-gray-300 sm:text-6xl">
        People who have{" "}
        <span className="whitespace-nowrap text-indigo-600">pimped</span> their
        cars
      </h2>
      <div className="w-full h-[400px] items-center flex overflow-x-auto no-scrollbar snap-x space-x-6">
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </div>
  );
}
