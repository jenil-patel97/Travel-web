import Img3 from "../assets/Img-3.jpg";
import Img4 from "../assets/Img-4.jpg";
import Img5 from "../assets/Img-5.jpg";
import Img6 from "../assets/Img-6.jpg";
import Img7 from "../assets/Img-7.jpg";
import Img8 from "../assets/Img-8.jpg";
import Slider from "react-slick";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", marginRight:'-10px' }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", marginLeft:'-1rem' }}
      onClick={onClick}
    />
  );
}

const Gallary = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="max-w-[1240px] md:px-[8rem] md:py-16 px-4 py-2">
      <h2 className="text-center font-dance text-3xl font-bold mb-5">
        My Recent Photo Gallary
      </h2>
      <Slider {...settings}>
        <div>
          <img
            className="md:h-[16rem] md:w-[20rem] h-[6rem] w-[7rem]"
            src={Img3}
            alt="/"
          />
        </div>
        <div>
          <img
            className="md:h-[16rem] md:w-[20rem] h-[6rem] w-[7rem]"
            src={Img4}
            alt="/"
          />
        </div>
        <div>
          <img
            className="md:h-[16rem] md:w-[20rem] h-[6rem] w-[7rem]"
            src={Img5}
            alt="/"
          />
        </div>
        <div>
          <img
            className="md:h-[16rem] md:w-[20rem] h-[6rem] w-[7rem]"
            src={Img6}
            alt="/"
          />
        </div>
        <div>
          <img
            className="md:h-[16rem] md:w-[20rem] h-[6rem] w-[7rem]"
            src={Img7}
            alt="/"
          />
        </div>
        <div>
          <img
            className="md:h-[16rem] md:w-[20rem] h-[6rem] w-[7rem]"
            src={Img8}
            alt="/"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Gallary;
