import "./room.scss";
import Hero from "../../components/hero/Hero";
import Introduction from "../../components/introduction/Introduction";
import AppLayout from "../../components/appLayout/AppLayout";

const RoomsAndRates = [
  {
    title: "single room",
    price: 147,
    image: "./src/assets/room1.png",
  },
  {
    title: "double room",
    price: 155,
    image: "./src/assets/room2.png",
  },
  {
    title: "twin room",
    price: 155,
    image: "./src/assets/room3.png",
  },
];
function Rooms() {
  return (
    <>
      <Hero backGroundImage={"./src/assets/room.png"} />
      <AppLayout>
        <Introduction
          title="rooms and rates"
          description="Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, 
                    comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented 
                    by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces. "
        />
        <div className="rooms">
          {RoomsAndRates.map((room, index) => (
            <div key={index} className="room-item">
              <div className="item-image">
                <img src={room.image} alt="room1" />
                <div className="item-title">{room.title}</div>
                <div className="overlay"></div>
              </div>
              <div className="item-action">
                <div className="action-btn">
                  <span>+</span>
                  <p>view room details </p>
                </div>
                <p className="item-price">${room.price} Avg/night</p>
              </div>
            </div>
          ))}
        </div>
      </AppLayout>
    </>
  );
}

export default Rooms;
