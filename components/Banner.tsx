import Image from "next/image";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/movie";
import { Movie } from "../typings";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);

  useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals?.length)]);
  }, [netflixOriginals]);

  return (
    <section className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="banner">
        <div className="absolute -z-10 top-0 left-0 h-[95vh] w-screen">
          <Image objectFit="cover" layout="fill" src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} />
        </div>
        <div>
          <h1 className="text-2xl mb-4 lg:text-6xl md:text-4xl font-bold">{movie?.title || movie?.name || movie?.original_name}</h1>
          <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-shadow-md mb-4">{movie?.overview}</p>
        </div>
        <div className="flex space-x-3">
          <button className="bannerButton bg-white text-black">
            {" "}
            <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
          </button>
          <button
            onClick={() => {
              setCurrentMovie(movie);
              setShowModal(true);
            }}
            className="bannerButton bg-[gray]/70"
          >
            More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
