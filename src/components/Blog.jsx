import React from "react";
import Prague from "../assets/prague.jpg";
import Lemur from "../assets/lemur.jpg";
import Colombia from "../assets/colombia.jpg";

const Blog = () => {
  return (
    <div className="w-full mx-auto md:px-[8rem] md:py-16 px-4 py-2 bg-black md:h-[330vh] h-[440vh]">
      <div>
        <p className="text-white font-dance text-center md:text-4xl text-2xl mt-4 cursor-default underline">
          Blog
        </p>
      </div>
      <p className="text-white font-dance text-center md:text-3xl text-2xl mt-8 cursor-default">
        Inside Prague : Tourist Traps to Avoid , Things to Do , Where to Eat ...
      </p>
      <div className="md:grid grid-cols-2">
        <div>
          <img className="mt-[3rem] h-[26rem] w-[24rem]" src={Prague} alt="/" />
        </div>
        <div>
          <p className="text-white font-dance text-center mt-[8rem] text-xl cursor-default">
            While we lived in Prague for over one month, we were simultaneously
            awed by its beauty and frustrated by the rapacious tourism
            development that had swamped its old town. Recently, I've heard from
            travelers disappointed by their visits to Prague because of the
            city's tourist schlock and crowds. Yes, there's a fair heap of that.
            But, there are also ways to avoid it and much more to see and
            experience in Prague without crowd. That's what this insider's guide
            is all about with tourist traps to avoid, best things to do,
            favorite beers and pubs, neighborhoods to stay in, and where to eat
            in Prague .
          </p>
          <button className="text-black bg-white px-12 py-2 rounded-md md:ml-[11rem] ml-[7rem] mt-5 font-semibold">
            Read
          </button>
        </div>
      </div>
      <p className="text-white font-dance text-center md:text-4xl text-2xl md:mt-[6rem] mt-14 cursor-default">
        How Your Travels in Madagascar Can Support <br /> Conservation and
        Communities
      </p>
      <div className="md:grid grid-cols-2">
        <div>
          <img className="mt-[3rem] h-[26rem] w-[24rem]" src={Lemur} alt="/" />
        </div>
        <div>
          <p className="text-white font-dance text-center mt-[4rem] text-lg cursor-default">
            In Madagascar we witnessed an environment under pressure from
            deforestation, expanding population and poverty. At the same time,
            we visited lemur-loaded rainforests and parks whose preservation is
            motivated in good part by the economic potential of tourism — a
            potential which enables animals and ecosystems to be worth more
            alive than dead. Considering that 80-90% of Madagascar's wildlife
            and plant species cannot be found anywhere else in the world, the
            island’s 110 species of lemur are only the beginning. In this
            mega-diverse country, there are dazzling chameleons, hissing
            cockroaches, ancient baobab tree species, glowing frogs, and
            medicinal plants that seem to cure everything. Depending upon the
            criteria one uses, Madagascar stands between the 5th and 10th
            poorest country in the world. Access to clean water and adequate
            nutrition is a challenge for much of the population. Deforestation,
            slash-and-burn agriculture and desertification remain huge problems.
          </p>
          <button className="text-black bg-white px-12 py-2 rounded-md md:ml-[11rem] ml-[7rem] mt-5 font-semibold">
            Read
          </button>
        </div>
      </div>
      <p className="text-white font-dance text-center md:text-4xl text-2xl md:mt-[6rem] mt-16 cursor-default">
        Travel to Colombia : First Impressions
      </p>
      <div className="md:grid grid-cols-2">
        <div>
          <img
            className="mt-[5rem] h-[28rem] w-[32rem]"
            src={Colombia}
            alt="/"
          />
        </div>
        <div>
          <p className="text-white font-dance text-center mt-[8rem] text-xl cursor-default">
            While I looked forward to our visit to Colombia, I harbored the
            occasional image of thuggy bush-mustached Colombian narco-gangsters
            and aggressive gold cap-toothed street thieves shaking me down in
            the back shadows of Bogota or Medellin. (Yes, I realize I’ve
            probably watched one too many bad airplane movies.) Colombia,
            thankfully, was altogether different. We spent time on our own,
            under the auspices of friends, on tours, in cities, way up in the
            hills, on the coast, and in destinations in between. No
            narco-gangsters. No untoward experiences, for us.
          </p>
          <button className="text-black bg-white px-12 py-2 rounded-md md:ml-[11rem] ml-[7rem] mt-8 font-semibold">
            Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
