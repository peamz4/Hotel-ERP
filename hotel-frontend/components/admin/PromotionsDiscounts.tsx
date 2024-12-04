import React, { useState } from "react";

const PromotionAndDiscount = () => {
  const [promotionDescription, setPromotionDescription] = useState("");
  const [promotionID, setPromotionID] = useState("");
  const [discountRate, setDiscountRate] = useState("");
  const [validUntil, setValidUntil] = useState("");
  const [promotionPoster, setPromotionPoster] = useState(null as File | null);

  const handleSaveChanges = () => {
    console.log({
      promotionDescription,
      promotionID,
      discountRate,
      validUntil,
      promotionPoster,
    });
  };

  return (
    <div className="p-6 flex flex-col gap-5">
      <h1 className="text-2xl font-extrabold text-[#5C5C5C]">
        Promotion & Discount
      </h1>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col">
          <label className="text-[#5C5C5C] mb-2 text-sm font-semibold" htmlFor="promotionDescription">
            Promotion Description
          </label>
          <textarea
            id="promotionDescription"
            className="w-full h-full px-4 py-2 border border-gray-300 rounded-md text-black"
            rows={5}
            value={promotionDescription}
            onChange={(e) => setPromotionDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[#5C5C5C] mb-2 text-sm font-semibold" htmlFor="promotionID">
            Promotion ID
          </label>
          <input
            id="promotionID"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-black "
            value={promotionID}
            onChange={(e) => setPromotionID(e.target.value)}
          />
          <label className="text-[#5C5C5C] mb-2 text-sm font-semibold mt-4 " htmlFor="discountRate">
            Discount rate
          </label>
          <input
            id="discountRate"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
            value={discountRate}
            onChange={(e) => setDiscountRate(e.target.value)}
          />
          <label className="text-[#5C5C5C] mb-2 text-sm font-semibold mt-4 " htmlFor="validUntil">
            Valid Until
          </label>
          <input
            id="validUntil"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
            value={validUntil}
            onChange={(e) => setValidUntil(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#5C5C5C] mb-2 text-sm font-semibold" htmlFor="promotionPoster">
            Promotion poster
          </label>
          {promotionPoster ? (
            <img
              src={URL.createObjectURL(promotionPoster)}
              alt="Promotion Poster"
              className="max-w-full h-auto mb-4 rounded-lg border-4 border-gray-300"
            />
          ) : (
            <div className="border-2 border-gray-300 border-dashed rounded-md p-6 h-[300px] flex justify-center items-center">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>Upload a picture</div>
              </div>
            </div>
          )}
          <input
            id="promotionPoster"
            type="file"
            className="block w-full pt-5 text-black"
            onChange={(e) => {
              if (e.target.files) {
                setPromotionPoster(e.target.files[0]);
              }
            }}
          />
        </div>
        <div className="w-full flex justify-center items-start">
          <button className="bg-[#5C5C5C] w-full py-3 rounded-lg mt-8 hover:scale-[0.99] transition-all" onClick={handleSaveChanges}>
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionAndDiscount;
