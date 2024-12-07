import Navbar from "@/components/navbar/navber";
import Footer from "@/components/footer/footer";
import Header from "@/components/header";

const Page: React.FC = () => {
  return (
    <main>
      <div className="fixed z-50">
        <Header />
      </div>
      <div className="flex flex-col items-center relative bg-white w-full">
        <div className="flex flex-col md:flex-row items-center justify-center pt-10 pb-0 w-full">
          <div className="inline-flex flex-col items-start">
            <h1 className="text-[#b4a258] font-bold text-[40px] ">GALLERY</h1>
          </div>
        </div>
      </div>
      <div className="md:flex px-20 md:py-10 pt-10 pb-5 bg-white">
        <div className="md:w-[800px] w-[400px] md:h-[500px] h-full md:mr-10 md:mb-0 mb-5">
          <img
            className="w-full h-full object-cover"
            src="/galleryimg/gallery_1.png"
            alt="gallery photo"
          />
        </div>
        <div className="w-[400px] md:h-[230px] h-full">
          <img
            className="w-full h-full object-cover md:mb-10 mb-5"
            src="/galleryimg/gallery_2.png"
            alt="gallery photo"
          />
          <img
            className="w-full h-full object-cover"
            src="/galleryimg/gallery_3.png"
            alt="gallery photo"
          />
        </div>
      </div>
      <div className="md:flex px-20 bg-white">
        <div className="w-[400px] md:h-[230px] h-full md:mr-10">
          <img
            className="w-full h-full object-cover md:mb-10 mb-5"
            src="/galleryimg/gallery_4.png"
            alt="gallery photo"
          />
          <img
            className="w-full h-full object-cover md:mb-0 mb-5"
            src="/galleryimg/gallery_5.png"
            alt="gallery photo"
          />
        </div>
        <div className="md:w-[800px] w-[400px] md:h-[500px] h-full md:mb-0 mb-5">
          <img
            className="w-full h-full object-cover"
            src="/galleryimg/gallery_6.png"
            alt="gallery photo"
          />
        </div>
      </div>
      <div className="md:flex px-20 md:py-10 pb-5 bg-white">
        <div className="md:w-[800px] w-[400px] md:h-[500px] h-full mr-10 md:mb-0 mb-5">
          <img
            className="w-full h-full object-cover"
            src="/galleryimg/gallery_7.png"
            alt="gallery photo"
          />
        </div>
        <div className="w-[400px] h-[230px]">
          <img
            className="w-full h-full object-cover mb-10"
            src="/galleryimg/gallery_8.png"
            alt="gallery photo"
          />
          <img
            className="w-full h-full object-cover"
            src="/galleryimg/gallery_9.png"
            alt="gallery photo"
          />
        </div>
      </div>
      <div className="md:flex px-20 bg-white">
        <div className="w-[400px] md:h-[230px] h-full mr-10">
          <img
            className="w-full h-full object-cover md:mb-10 mb-5"
            src="/galleryimg/gallery_10.png"
            alt="gallery photo"
          />
          <img
            className="w-full h-full object-cover"
            src="/galleryimg/gallery_11.png"
            alt="gallery photo"
          />
        </div>
        <div className="md:w-[800px] w-[400px] md:h-[500px] h-full md:mt-0 mt-5 mb-20">
          <img
            className="w-full h-full object-cover"
            src="/galleryimg/gallery_12.png"
            alt="gallery photo"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Page;
