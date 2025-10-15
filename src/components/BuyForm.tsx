"use client";

import { useState } from "react";

const BuyForm = () => {
  const [formData, setFormData] = useState({
    itemDescription: "",
    itemLink: "",
    budgetRange: "",
    quantity: "",
    deliveryAddress: "",
    email: "",
    phoneNumber: "",
  });

  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedImage(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, image: uploadedImage });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Item Information Section */}
        <div>
          <div className="flex items-center mb-6">
            <img
              src="/form/item_info.png"
              alt="Item info"
              className="w-6 h-6 mr-3"
            />
            <h3 className="text-xl font-semibold text-[#234C6A]">
              Item information
            </h3>
          </div>

          <div className="space-y-6">
            {/* What are you looking for */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                What are you looking for
              </label>
              <input
                type="text"
                name="itemDescription"
                value={formData.itemDescription}
                onChange={handleInputChange}
                placeholder="e.g. Wireless headphones, Garden table, Kitchen mixer"
                className="w-full px-4 py-3 bg-gray-100 rounded-2xl border-0 focus:ring-2 focus:ring-[#234C6A] focus:outline-none"
                required
              />
            </div>

            {/* Link to item */}
            <div>
              <label className="block text-gray-700 font-medium mb-2 flex items-center">
                <img src="/form/link.png" alt="Link" className="w-4 h-4 mr-2" />
                Link to item (optional)
              </label>
              <input
                type="url"
                name="itemLink"
                value={formData.itemLink}
                onChange={handleInputChange}
                placeholder="https://somelink.com"
                className="w-full px-4 py-3 bg-gray-100 rounded-2xl border-0 focus:ring-2 focus:ring-[#234C6A] focus:outline-none"
              />
            </div>

            {/* Upload image */}
            <div>
              <label className="block text-gray-700 font-medium mb-2 flex items-center">
                <img
                  src="/form/camera.png"
                  alt="Camera"
                  className="w-4 h-4 mr-2"
                />
                Upload image (optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-[#234C6A] transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <svg
                    className="w-12 h-12 text-gray-400 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-gray-600">Click to upload an image</p>
                  {uploadedImage && (
                    <p className="text-sm text-[#234C6A] mt-2">
                      {uploadedImage.name}
                    </p>
                  )}
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Purchase Details Section */}
        <div>
          <div className="flex items-center mb-6">
            <img src="/form/euro.png" alt="Euro" className="w-6 h-6 mr-3" />
            <h3 className="text-xl font-semibold text-[#234C6A]">
              Purchase Details
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Budget Range
              </label>
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 rounded-2xl border-0 focus:ring-2 focus:ring-[#234C6A] focus:outline-none"
              >
                <option value="">Range</option>
                <option value="under-50">Under $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="100-250">$100 - $250</option>
                <option value="250-500">$250 - $500</option>
                <option value="500-1000">$500 - $1000</option>
                <option value="over-1000">Over $1000</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Quantity
              </label>
              <select
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 rounded-2xl border-0 focus:ring-2 focus:ring-[#234C6A] focus:outline-none"
              >
                <option value="">Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="more">More than 5</option>
              </select>
            </div>
          </div>
        </div>

        {/* Delivery Information Section */}
        <div>
          <div className="flex items-center mb-6">
            <img src="/form/home.png" alt="Home" className="w-6 h-6 mr-3" />
            <h3 className="text-xl font-semibold text-[#234C6A]">
              Delivery Information
            </h3>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Delivery Address
            </label>
            <textarea
              name="deliveryAddress"
              value={formData.deliveryAddress}
              onChange={handleInputChange}
              placeholder="Enter Your full delivery address including postcode"
              rows={4}
              className="w-full px-4 py-3 bg-gray-100 rounded-2xl border-0 focus:ring-2 focus:ring-[#234C6A] focus:outline-none resize-none"
              required
            />
          </div>
        </div>

        {/* Contact Information Section */}
        <div>
          <div className="flex items-center mb-6">
            <img src="/form/euro.png" alt="Euro" className="w-6 h-6 mr-3" />
            <h3 className="text-xl font-semibold text-[#234C6A]">
              Contact Information
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your.email@example.com"
                className="w-full px-4 py-3 bg-gray-100 rounded-2xl border-0 focus:ring-2 focus:ring-[#234C6A] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="0723 456 789"
                className="w-full px-4 py-3 bg-gray-100 rounded-2xl border-0 focus:ring-2 focus:ring-[#234C6A] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-6">
          <button
            type="submit"
            className="bg-[#234C6A] text-white px-12 py-4 rounded-2xl font-semibold text-lg hover:bg-[#1a3a52] transition-colors"
          >
            Submit Request
          </button>
          <p className="text-gray-600 text-sm mt-4">
            We'll contact you within 24 hours with the best details we find
          </p>
        </div>
      </form>
    </div>
  );
};

export default BuyForm;
