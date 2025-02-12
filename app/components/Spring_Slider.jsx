import React, { useEffect } from "react";
import Image from "next/image"

const Spring = () => {
  useEffect(() => {
    // Add the external CSS link
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://spring-slider.uiinitiative.com/assets/index.a155cde7.css";
    document.head.appendChild(link);

    // Add the module preload link
    const preloadLink = document.createElement("link");
    preloadLink.rel = "modulepreload";
    preloadLink.href =
      "https://spring-slider.uiinitiative.com/assets/vendor.0e76e1a6.js";
    document.head.appendChild(preloadLink);

    // Add the external script
    const script = document.createElement("script");
    script.type = "module";
    script.crossOrigin = "anonymous";
    script.src =
      "https://spring-slider.uiinitiative.com/assets/index.8742a0a0.js";
    document.body.appendChild(script);

    // Cleanup script and links on unmount
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(preloadLink);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="flex justify-center pt-[350] mx-auto h-screen ">
        <div className="spring-slider cursor-grab">
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <Image
                  className="slide-image rounded-lg"
                  width={20}
                  height={20}
                  src="/images/img4.jpg"
                  alt="Slide 1"
                />
              </div>
              <div className="swiper-slide ">
                <Image
                  className="slide-image rounded-lg"
                  width={20}
                  height={20}
                  src="https://cdn.pixabay.com/photo/2024/08/14/07/05/building-8967854_1280.jpg"
                  alt="Slide 2"
                />
              </div>
              <div className="swiper-slide ">
                <Image
                  className="slide-image rounded-lg"
                  width={20}
                  height={20}
                  src="https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467_1280.jpg"
                  alt="Slide 2"
                />
              </div>
              <div className="swiper-slide ">
                <Image
                  className="slide-image rounded-lg"
                  width={20}
                  height={20}
                  src="https://cdn.pixabay.com/photo/2020/09/06/07/37/car-5548242_1280.jpg"
                  alt="Slide 2"
                />
              </div>
              <div className="swiper-slide ">
                <img
                  className="slide-image rounded-lg"
                  width={20}
                  height={20}
                  src="https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_1280.jpg"
                  alt="Slide 2"
                />
              </div>
              <div className="swiper-slide ">
                <Image
                  className="slide-image rounded-lg"
                  width={20}
                  height={20}
                  src="https://cdn.pixabay.com/photo/2024/07/20/05/24/poppy-8907588_1280.jpg"
                  alt="Slide 2"
                />
              </div>
              <div className="swiper-slide ">
                <Image
                  className="slide-image rounded-lg"
                  width={20}
                  height={20}
                  src="https://cdn.pixabay.com/photo/2020/12/01/18/06/porsche-911-gt2-5795128_1280.jpg"
                  alt="Slide 1"
                />
              </div>
              <div className="swiper-slide ">
                <Image
                  className="slide-image rounded-lg"
                  width={20}
                  height={20}
                  src="https://cdn.pixabay.com/photo/2024/08/14/07/05/building-8967854_1280.jpg"
                  alt="Slide 2"
                />
              </div>
              <div className="swiper-slide ">
                <Image
                  className="slide-image rounded-lg"
                  width={20}
                  height={20}
                  src="https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467_1280.jpg"
                  alt="Slide 2"
                />
              </div>
            </div>
            <div className="swiper-pagination">l</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spring;