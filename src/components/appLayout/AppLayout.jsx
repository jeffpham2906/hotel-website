import Testimonials from "../testimonials/Testimonials";
import Footer from "../footer/Footer";
import "./applayout.scss";
function AppLayout({ children }) {
  return (
    <>
      <section className="applayout">
        {children}
        <Testimonials />
      </section>
      <Footer />
    </>
  );
}

export default AppLayout;
