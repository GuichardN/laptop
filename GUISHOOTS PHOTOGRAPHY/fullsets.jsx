import { useNavigate } from "react-router-dom";

const sets = [
  {
    title: "90D Trainstation-Chinatown",
    img: "Full Sets Images/90D Trainstation-Chinatown/main.webp",
    route: "/gallery/90d-trainstation-chinatown"
  },
  {
    title: "Charles Pitstop Boys",
    img: "Full Sets Images/Charles Pitstop Boys/main.webp",
    route: "/gallery/charles-pitstop-boys"
  },
  {
    title: "Denny's Customs June 24",
    img: "Full Sets Images/Dennys Customs June 24/main.webp",
    route: "/gallery/dennys-customs-june-24"
  },
  {
    title: "Ford Photo Contest",
    img: "Full Sets Images/Ford Photo Contest/main.webp",
    route: "/gallery/ford-photo-contest"
  },
  {
    title: "Hype R Fall 2023",
    img: "Full Sets Images/Hype R Fall 2023/main.webp",
    route: "/gallery/hype-r-fall-2023"
  },
  {
    title: "Hype R Revive 2023",
    img: "Full Sets Images/Hype R Revive 2023/main.webp",
    route: "/gallery/hype-r-revive-2023"
  },
  {
    title: "Josh Pitstop Boys",
    img: "Full Sets Images/Josh Pitstop Boys/main.webp",
    route: "/gallery/josh-pitstop-boys"
  },
  {
    title: "Pitstop Boys Alert Road",
    img: "Full Sets Images/Pitstop Boys Alert Road/main.webp",
    route: "/gallery/pitstop-boys-alert-road"
  },
  {
    title: "Reg Type R Set",
    img: "Full Sets Images/Reg Type R Set/main.webp",
    route: "/gallery/reg-type-r-set"
  },
  {
    title: "Train Station Hype R",
    img: "Full Sets Images/Train Station Hype R/main.webp",
    route: "/gallery/train-station-hype-r"
  },
  {
    title: "Type R Fasthouse Fall 24",
    img: "Full Sets Images/Type R Fasthouse Fall 24/main.webp",
    route: "/gallery/type-r-fasthouse-fall-24"
  },
  {
    title: "Xander NAC Supra Set",
    img: "Full Sets Images/Xander NAC Supra Set/main.webp",
    route: "/gallery/xander-nac-supra-set"
  }
];

export default function gallery() {
  const navigate = useNavigate();

  return (
    <section className="sets-gallery row light py-10">
      <div className="sets-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {sets.map(set => (
          <div
            key={set.title}
            className="set-thumb bg-white rounded-lg shadow-lg hover:shadow-blue-400 transition cursor-pointer flex flex-col items-center overflow-hidden"
            onClick={() => navigate(set.route)}
            tabIndex={0}
            onKeyPress={e => { if (e.key === "Enter") navigate(set.route); }}
            role="button"
            aria-label={`Open ${set.title} gallery`}
          >
            <img 
              src={set.img} 
              alt={`${set.title} thumbnail`} 
              className="object-cover w-full h-48 md:h-64"
            />
            <div className="set-title text-lg md:text-xl font-bold text-center text-gray-900 py-4 px-2">
              {set.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
