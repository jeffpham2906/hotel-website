import "./facilities.scss";

import Hero from "../../components/hero/Hero";
import AppLayout from "../../components/appLayout/AppLayout";
import Introduction from "../../components/introduction/Introduction";

const services = [
  {
    title: "the gym",
    imgUrl: "./src/assets/fac1.png",
  },
  {
    title: "poolside bar",
    imgUrl: "./src/assets/fac2.png",
  },
  {
    title: "the spa",
    imgUrl: "./src/assets/fac3.png",
  },
  {
    title: "swimming pool",
    imgUrl: "./src/assets/fac4.png",
  },
  {
    title: "restaurant",
    imgUrl: "./src/assets/fac5.png",
  },
  {
    title: "laundry",
    imgUrl: "./src/assets/fac6.png",
  },
];

function Facilities() {
  return (
    <>
      <Hero backGroundImage="./src/assets/facilities.png" />
      <AppLayout>
        <Introduction
          title="facilities"
          description="We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so 
                        that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
                        and our modern luxury resort facilities will help you enjoy the best of all. "
        />
        <div className="faciBody-lists">
          {services.map((item, index) => (
            <div key={index} className="faciBody-item">
              <img src={item.imgUrl} alt={item.title} />
              <p>{item.title}</p>
              <div className="overlay"></div>
            </div>
          ))}
        </div>
      </AppLayout>
    </>
  );
}

export default Facilities;
