import BuyForm from "@/components/BuyForm";

export default function BuyPage() {
  return (
    <div className="min-h-screen bg-[#F0F2F5]">
      {/* Header */}
      <div className="bg-[#234C6A] px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div
              className="bg-white px-4 py-2 rounded-xl"
              style={{ borderRadius: "12px" }}
            >
              <span className="text-[#234C6A] font-semibold">Logo</span>
            </div>
            <span className="text-white text-lg font-medium">
              Online Shopping Companion
            </span>
          </div>
          <a
            href="/"
            className="flex items-center space-x-2 text-white border border-white px-4 py-2 rounded-2xl hover:bg-white hover:text-[#234C6A] transition-colors"
            style={{ borderRadius: "16px" }}
          >
            <span>Back to home</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title and Instructions */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#234C6A] mb-4">
            Tell Us what you want to Buy
          </h2>
          <p className="text-gray-600 text-lg">
            Fill out the details below and we'll find the best deals for you
          </p>
        </div>

        {/* Progress Indicator - Fixed */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-between relative">
            {/* Connecting Line - Only Between Circles */}
            <div className="absolute left-[50%] translate-x-[-50%] top-[18px] flex items-center justify-center w-[calc(100%-115px)]">
              <div className="h-[2px] bg-gray-300 w-full"></div>
            </div>

            {/* Step 1 */}
            <div className="flex flex-col items-center relative z-10">
              <div className="w-9 h-9 rounded-full border-[3px] border-[#234C6A] text-[#234C6A] text-sm font-semibold flex items-center justify-center bg-white">
                01
              </div>
              <span className="text-[#234C6A] text-xs sm:text-sm font-medium mt-2 whitespace-nowrap">
                Tell us what you need
              </span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center relative z-10">
              <div className="w-9 h-9 rounded-full border-2 border-gray-300 text-gray-500 text-sm font-semibold flex items-center justify-center bg-white">
                02
              </div>
              <span className="text-gray-500 text-xs sm:text-sm font-medium mt-2 whitespace-nowrap">
                We find the best deals
              </span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center relative z-10">
              <div className="w-9 h-9 rounded-full border-2 border-gray-300 text-gray-500 text-sm font-semibold flex items-center justify-center bg-white">
                03
              </div>
              <span className="text-gray-500 text-xs sm:text-sm font-medium mt-2 whitespace-nowrap">
                Delivered to you
              </span>
            </div>
          </div>
        </div>

        {/* Form Component */}
        <BuyForm />
      </div>
    </div>
  );
}
