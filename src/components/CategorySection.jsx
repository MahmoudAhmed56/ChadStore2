// @ts-ignore
import Man from "../assets/images/products/apparel1.jpg";
// @ts-ignore
import Woman from "../assets/images/products/apparel3.jpg";
// @ts-ignore
import kid from "../assets/images/products/appeal7.jpg";

const CategorySection = () => {
  const categories = [
    {
      title: "Men",
      imageUrl: Man,
    },
    {
      title: "women",
      imageUrl: Woman,
    },
    {
      title: "kids",
      imageUrl: kid,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {categories.map((item, index) => {
        return (
          <div
            key={index}
            className=" cursor-pointer relative h-96 transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="rounded-lg shadow-md w-full h-full object-cover object-top"
            />
            <div className="absolute top-20 left-12">
              <p className="text-xl font-bold">{item.title}</p>
              <p className="capitalize text-gray-600">view all</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySection;
