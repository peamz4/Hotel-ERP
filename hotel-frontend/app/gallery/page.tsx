import Navbar from "@/components/navbar/navber";
import Footer from "@/components/footer/footer";
import Header from "@/components/header";

const Page: React.FC = () => {
  return (
    <main className="bg-white">
      <div className="fixed z-50">
        <Header />
      </div>
      <div className="flex flex-col items-center relative bg-white w-full">
        <div className="flex flex-col md:flex-row items-center justify-center pt-32 md:pt-40  pb-0 w-full">
          <div className="inline-flex flex-col items-start">
            <h1 className="text-[#b4a258] font-bold text-[40px] ">GALLERY</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-20 justify-between items-center bg-white">
            <img
              className="w-full h-full object-cover flex-1"
              src="/galleryimg/gallery_1.png"
              alt="gallery photo"
            />
            <div className="flex flex-col gap-5">
              <img
                className="w-full h-full object-cover flex-1"
                src="/galleryimg/gallery_2.png"
                alt="gallery photo"
              />
              <img
                className="w-full h-full object-cover flex-1"
                src="/galleryimg/gallery_3.png"
                alt="gallery photo"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-20 justify-between items-center bg-white">
            <div className="flex flex-col gap-5">
              <img
                className="w-full h-full object-cover flex-1"
                src="/galleryimg/gallery_5.png"
                alt="gallery photo"
              />
              <img
                className="w-full h-full object-cover flex-1"
                src="/galleryimg/gallery_6.png"
                alt="gallery photo"
              />
            </div>
            <img
              className="w-full h-full object-cover flex-1"
              src="/galleryimg/gallery_4.png"
              alt="gallery photo"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-20 justify-between items-center bg-white">
            <div className="flex flex-col gap-5">
              <img
                className="w-full h-full object-cover flex-1"
                src="/galleryimg/gallery_7.png"
                alt="gallery photo"
              />
              <img
                className="w-full h-full object-cover flex-1"
                src="/galleryimg/gallery_8.png"
                alt="gallery photo"
              />
            </div>
            <img
              className="w-full h-full object-cover flex-1"
              src="/galleryimg/gallery_9.png"
              alt="gallery photo"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-20 justify-between items-center bg-white">
            <div className="flex flex-col gap-5">
              <img
                className="w-full h-full object-cover flex-1"
                src="/galleryimg/gallery_10.png"
                alt="gallery photo"
              />
              <img
                className="w-full h-full object-cover flex-1"
                src="/galleryimg/gallery_11.png"
                alt="gallery photo"
              />
            </div>
            <img
              className="w-full h-full object-cover flex-1"
              src="/galleryimg/gallery_12.png"
              alt="gallery photo"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Page;
