import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Failed to load recipes:", err));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-700 mb-4">{recipe.description}</p>
            {recipe.image && (
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <div>
              <h3 className="font-semibold mb-1">Ingredients:</h3>
              <ul className="list-disc list-inside mb-2">
                {recipe.ingredients?.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
              <h3 className="font-semibold mb-1">Instructions:</h3>
              <p className="text-gray-600">{recipe.instructions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;