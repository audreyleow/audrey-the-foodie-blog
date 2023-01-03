import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

interface PostImagesProps {
  images: { url: string; alt: string }[];
}

export default function PostImages({ images, ...rest }: PostImagesProps) {
  return (
    <Swiper
      style={
        {
          "--swiper-navigation-color": "#000000",
          "--swiper-pagination-color": "#ffffff",
          height: 600,
        } as any
      }
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      {...rest}
    >
      {images.map((image, i) => (
        <SwiperSlide key={image.url}>
          <Image
            style={{
              objectFit: "contain",
            }}
            src={image.url}
            alt={image.alt}
            fill
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
