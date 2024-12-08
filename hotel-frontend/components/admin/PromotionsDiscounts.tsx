import React, { useState, useEffect } from "react";

const PromotionAndDiscount = () => {
  const [promotionDescription, setPromotionDescription] = useState("");
  const [promotionID, setPromotionID] = useState("");
  const [discountRate, setDiscountRate] = useState("");
  const [validUntil, setValidUntil] = useState("");

  interface Promotion {
    promotionDescription: string;
    promotionID: string;
    discountRate: string;
    validUntil: string;
  }

  const [promotions, setPromotions] = useState<Promotion[]>([]);

  useEffect(() => {
    // Load promotions from localStorage if they exist
    const storedPromotions = localStorage.getItem("promotions");
    if (storedPromotions) {
      setPromotions(JSON.parse(storedPromotions));
    }
  }, []);

  const handleSaveChanges = () => {
    if (!promotionDescription || !promotionID || !discountRate || !validUntil) {
      alert("Please fill in all fields");
      return;
    }

    // Add new promotion to the list
    const newPromotion = {
      promotionDescription,
      promotionID,
      discountRate: `${discountRate}%`,
      validUntil,
    };

    const updatedPromotions = [...promotions, newPromotion];
    setPromotions(updatedPromotions);

    // Save to localStorage
    localStorage.setItem("promotions", JSON.stringify(updatedPromotions));

    // Reset fields
    setPromotionDescription("");
    setPromotionID("");
    setDiscountRate("");
    setValidUntil("");
  };

  const handleEditPromotion = (index: number) => {
    const promotionToEdit = promotions[index];
    setPromotionDescription(promotionToEdit.promotionDescription);
    setPromotionID(promotionToEdit.promotionID);
    setDiscountRate(promotionToEdit.discountRate.replace("%", "")); // Remove percentage symbol for editing
    setValidUntil(promotionToEdit.validUntil);

    // Remove the promotion being edited from the list
    setPromotions(promotions.filter((_, i) => i !== index));

    // Update localStorage
    localStorage.setItem("promotions", JSON.stringify(promotions.filter((_, i) => i !== index)));
  };

  const handleRemovePromotion = (index: number) => {
    const updatedPromotions = promotions.filter((_, i) => i !== index);
    setPromotions(updatedPromotions);

    // Save updated promotions to localStorage
    localStorage.setItem("promotions", JSON.stringify(updatedPromotions));
  };

  return (
    <div className="p-6 flex flex-col gap-5 text-black">
      <h1 className="text-3xl font-extrabold text-[#5C5C5C]">Promotion & Discount</h1>
      {/* Promotions Table */}
      <div className="mt-5 overflow-x-auto text-black border-b-2pb-10">
        <table className="w-full table-auto text-left border-collapse border">
          <thead className="bg-primary border-primary border text-[#ffffff]">
            <tr className="text-white">
              <th className="px-4 py-2">Promotion ID</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Discount Rate</th>
              <th className="px-4 py-2">Valid Until</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {promotions.map((promotion, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-100">
                <td className="px-4 py-2">{promotion.promotionID}</td>
                <td className="px-4 py-2">{promotion.promotionDescription}</td>
                <td className="px-4 py-2">{promotion.discountRate}</td>
                <td className="px-4 py-2">{promotion.validUntil}</td>
                <td className="px-4 py-2">
                  <button
                    className="bg-yellow-400 text-white py-1 px-4 rounded-md mr-2"
                    onClick={() => handleEditPromotion(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-400 text-white py-1 px-4 rounded-md"
                    onClick={() => handleRemovePromotion(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Promotion Input Fields */}
      <div className="grid grid-cols-2 gap-10 py-5">
        <div className="flex flex-col">
          <label className="text-[#5C5C5C] mb-2 text-sm font-semibold" htmlFor="promotionID">
            Promotion ID
          </label>
          <input
            id="promotionID"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
            value={promotionID}
            onChange={(e) => setPromotionID(e.target.value)}
          />
          <label className="text-[#5C5C5C] mb-2 text-sm font-semibold mt-4" htmlFor="discountRate">
            Discount rate
          </label>
          <input
            id="discountRate"
            type="number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
            value={discountRate}
            onChange={(e) => setDiscountRate(e.target.value)}
            min="0"
            step="1"
          />
          <label className="text-[#5C5C5C] mb-2 text-sm font-semibold mt-4" htmlFor="validUntil">
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
        <div className="w-full flex justify-center items-start">
          <button className="bg-primary hover:bg-primaryDark text-white w-full py-3 rounded-lg mt-8 hover:scale-[0.99] transition-all" onClick={handleSaveChanges}>
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionAndDiscount;
