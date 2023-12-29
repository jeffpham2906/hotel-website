import "./Home.scss";
import Hero from "../../components/hero/Hero";

import AppLayout from "../../components/appLayout/AppLayout";
const Rooms = [
  {
    title: "Luxury redefined",
    description:
      "Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.",
    image: "./src/assets/homebody1.png",
  },
  {
    title: "Leave your worries in the sand",
    description:
      "We love life at the beach. Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind. It seems like time stands still watching the ocean.",
    image: "./src/assets/homebody2.png",
  },
];
function Home() {
  return (
    <>
      <Hero backGroundImage="./src/assets/home.png" />
      <AppLayout>
        <h2>All our room types are including complementary breakfast</h2>
        {Rooms.map((room, index) => (
          <div key={index} className="body-room">
            <div className="body-room-left">
              <h2>{room.title}</h2>
              <p>{room.description}</p>
              <button>Explore</button>
            </div>
            <img src={room.image} alt={room.title} />
          </div>
        ))}
      </AppLayout>
    </>
  );
}

export default Home;
