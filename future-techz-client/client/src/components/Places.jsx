import React, { useState } from "react";
import categoryData from "./data.json";
import { IoSearchCircle } from "react-icons/io5";

const Places = () => {
    const categories = categoryData.categories;

    const [activeCategory, setActiveCategory] = useState(categories[0].id);
  
    // Find the active category's content
    const renderContent = () => {
      const selectedCategory = categories.find(category => category.id === activeCategory);
      if (!selectedCategory) return <div>No content available</div>;
  
      return (
        <div className="grid grid-cols-2 grid-rows-5 gap-6 mb-6">
          {selectedCategory.images.map((image, index) => (
            <div key={index} className="relative group">
              {/* Image */}
              <div>
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="w-full bg-yellow-400 p-3 text-center absolute bottom-0 left-0">
                  <p className="text-lg font-bold">{selectedCategory.descriptions[index]}</p>
                </div>
              </div>
  
              {/* Popup Div */}
              <div className="hover:cursor-pointer absolute inset-0 flex items-center justify-center bg-yellow-400 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="text-6xl text-center items-center">
                    <IoSearchCircle />
                  </div>
                  <div>
                    <p className="text-lg">{selectedCategory.locate[index]}</p>
                    <p className="text-sm">{selectedCategory.locate2[index]}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    };
  
    return (
      <div className="p-6">
        {/* Row 1: Category Buttons */}
        <div className="flex space-x-4 mb-6 border-t-[1px] border-b-[1px] border-gray-300">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-2 py-2   ${activeCategory === category.id ? 'border-t-2 border-yellow-400 text-yellow-400' : ' text-black'}`}
            >
              {category.name}
            </button>
          ))}
        </div>
  
        {/* Row 2: Dynamic Content (Grid of 5 Rows and 2 Columns with Images and Popups) */}
        <div className="border p-6 rounded-lg">
          {renderContent()}
        </div>
      </div>
  );
};

export default Places;
