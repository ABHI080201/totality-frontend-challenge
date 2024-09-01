import React, { useState } from "react";

const Payment: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="text-xl font-bold mb-4">Cards, UPI & More</h2>

            <div className="space-y-4">
              <div className="flex items-center border p-2 rounded-lg relative">
                <img
                  src="https://i.pinimg.com/originals/38/2f/0a/382f0a8cbcec2f9d791702ef4b151443.png"
                  alt="Card"
                  className="w-10 h-10 mr-4"
                />
                <div>
                  <p className="font-semibold">Card</p>
                  <p className="text-gray-500 text-sm">
                    Visa, MasterCard, RuPay & More
                  </p>
                </div>
                <input type="checkbox" className="absolute right-4" />
              </div>

              <div className="flex items-center border p-2 rounded-lg relative">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/06/16/18/18/1000_F_616181843_l404nbV07vMiXDZ1IhWiqZRDpetpuigu.jpg"
                  alt="UPI"
                  className="w-20 h-10 mr-4"
                />
                <div>
                  <p className="font-semibold">UPI</p>
                  <p className="text-gray-500 text-sm">
                    Pay with installed app, or use others
                  </p>
                </div>
                <input type="checkbox" className="absolute right-4" />
              </div>

              <div className="flex items-center border p-2 rounded-lg relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfOoIN6wwYmTOr3EDXfVWHtAYuq--6lAUXxjIOYEQd50zxeSciUTyilUDWvSzWOU1hXzg&usqp=CAU"
                  alt="Netbanking"
                  className="w-10 h-10 mr-4"
                />
                <div>
                  <p className="font-semibold">Netbanking</p>
                  <p className="text-gray-500 text-sm">All Indian banks</p>
                </div>
                <input type="checkbox" className="absolute right-4" />
              </div>

              <div className="flex items-center border p-2 rounded-lg relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5npKkTK1LnrdqfvqbC2IkFQkwJT9FNuxQgiBx9mW7UccI-w9YNDYB_BtbrqSnzXiLK2s&usqp=CAU"
                  alt="Wallet"
                  className="w-10 h-10 mr-4"
                />
                <div>
                  <p className="font-semibold">Wallet</p>
                  <p className="text-gray-500 text-sm">PhonePe & More</p>
                </div>
                <input type="checkbox" className="absolute right-4" />
              </div>

              <div className="flex items-center border p-2 rounded-lg relative">
                <img
                  src="https://w7.pngwing.com/pngs/893/849/png-transparent-emi-hd-logo-thumbnail.png"
                  alt="EMI"
                  className="w-6 h-6 mr-4"
                />
                <div>
                  <p className="font-semibold">EMI</p>
                  <p className="text-gray-500 text-sm">
                    EMI via Cards, OneCard & More
                  </p>
                </div>
                <input type="checkbox" className="absolute right-4" />
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div>
                <p className="text-xl font-bold">$250,000</p>
                <p className="text-sm text-blue-600">View Details</p>
              </div>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
                Proceed Now
              </button>
            </div>

            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
              <p>Account</p>
              <p>
                Secured by <span className="font-semibold">panPay</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Payment;
