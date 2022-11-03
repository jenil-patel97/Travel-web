import Lion from "../assets/Lion.jpg";
import Elle from "../assets/elle.jpg";
import Hippo from "../assets/hippo.jpg";
import Cheetah from "../assets/cheetah.jpg";
import Whale from "../assets/whale.jpg";
import Giraffe from "../assets/giraffe.jpg";
import Birds from "../assets/birds.jpg";
import Shark from "../assets/shark.jpg";
import Zebra from "../assets/zebra.jpg";
import Slider from "react-slick";
import Flag from '../assets/africa.png'

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        marginRight: "-10px",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        marginLeft: "-1rem",
      }}
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
    <div className="max-w-[1240px] mx-auto md:px-[8rem] md:py-16 px-12 py-2 mb-8">
      <h2 className="text-center font-dance md:text-3xl text-2xl cursor-default font-bold mb-5 md:ml-[15rem] ml-3 flex">
        My Recent Photo Gallary From Africa 
        <img src={Flag} alt="africa" className="w-13 h-12 ml-[1rem] mb-2 -mt-1" />
      </h2>
      <Slider {...settings}>
        <div>
          <img
            className="md:h-[16rem] md:w-[20rem] h-[6rem] w-[7rem]"
            src={Lion}
            alt="/"
          />
        </div>
        <div>
          <img
            className="md:h-[16rem] md:w-[20rem] h-[6rem] w-[7rem]"
            src={Elle}
            alt="/"
          />
        </div>
        <div>
          <img
            className="md:h-[16rem] md:w-[20rem] h-[6rem] w-[7rem]"
            src={Zebra}
            alt="/"
          />
        </div>
        <div>
          <img
            className="md:h-[16rem] md:w-[20rem] h-[6rem] w-[7rem]"
            src={Cheetah}
            alt="/"
          />
        </div>
        <div>
          <img
            className="md:h-[16rem] md:w-[20rem] h-[6rem] w-[7rem]"
            src={Giraffe}
            alt="/"
          />
        </div>
        <div>
          <img
            className="md:h-[16rem] md:w-[20rem] h-[6rem] w-[7rem]"
            src={Hippo}
            alt="/"
          />
        </div>
        <div>
          <img
            className="md:h-[16rem] md:w-[20rem] h-[6rem] w-[7rem]"
            src={Birds}
            alt="/"
          />
        </div>
        <div>
          <img
            className="md:h-[16rem] md:w-[20rem] h-[6rem] w-[7rem]"
            src={Whale}
            alt="/"
          />
        </div>
        <div>
          <img
            className="md:h-[16rem] md:w-[20rem] h-[6rem] w-[7rem]"
            src={Shark}
            alt="/"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Gallary;
