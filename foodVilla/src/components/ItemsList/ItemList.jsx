import React from "react";
import { CDN_URL } from "../../utils/constants"; 
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cartSlice";
import useSound from "use-sound";
import clickSound from "../../sounds/mouse-click.mp3";

const ItemList = ({ items }) => {
  const [play] = useSound(clickSound, { volume: 0.1 });
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    play();
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 m-4 border-gray-300 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300 ease-in-out"
        >
          <div className="flex justify-between items-center text-left">
            <div className="w-3/5">
              <div className="mb-2">
                <span className="text-xl font-semibold">
                  {item.card.info.name}
                </span>
                <span className="text-gray-600">
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-sm text-gray-700">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-2/5 p-4">
              <div className="flex items-center justify-end space-x-4">
                <button
                  className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 transition duration-300 text-sm font-semibold"
                  onClick={() => handleAddItem(item)}
                >
                  Add to Cart
                </button>

                <img
                  src={CDN_URL + item.card.info.imageId}
                  alt={item.card.info.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
