import {
  FaHeadset,
  FaLock,
  FaMoneyBillWave,
  FaShippingFast,
  FaTag,
} from "react-icons/fa";

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "Free Shipping",
      discretion: "Get your order delivered with no extra coast.",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      title: "Support 24/7",
      discretion: "We are here to assist you any time.",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      title: "100% money back",
      discretion: "Full refound if you are not satisfied.",
    },
    {
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "Payment secure",
      discretion: "Your payment information is save with us.",
    },
    {
      icon: <FaTag className="text-3xl text-red-600" />,
      title: "Discount",
      discretion: "Enjoy the prices on our products.",
    },
  ];
  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        {infoItems.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              {item.icon}
              <h3 className="mt-4 text-xl font-semibold capitalize">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.discretion}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoSection;
