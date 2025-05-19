import { getRecipesById } from '@/library/api-call';
import { FaClock, FaFire, FaUserFriends, FaUtensils, FaStar } from 'react-icons/fa';

export default  async function RecipeDetailPage({ params }) {
    const recipe = await getRecipesById(params.recipe_id)

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            <h1 className="text-4xl font-bold text-center">{recipe.name}</h1>

            <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
            />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                    <FaClock className="text-blue-500" /> Prep: {recipe.prepTimeMinutes} min
                </div>
                <div className="flex items-center gap-2">
                    <FaFire className="text-red-500" /> Cook: {recipe.cookTimeMinutes} min
                </div>
                <div className="flex items-center gap-2">
                    <FaUtensils className="text-green-500" /> Difficulty: {recipe.difficulty}
                </div>
                <div className="flex items-center gap-2">
                    <FaUserFriends className="text-purple-500" /> Servings: {recipe.servings}
                </div>
                <div className="flex items-center gap-2">
                    <FaFire className="text-orange-500" /> Calories: {recipe.caloriesPerServing}
                </div>
                <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" /> Rating: {recipe.rating} ({recipe.reviewCount})
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
                <ul className="list-disc list-inside space-y-1">
                    {recipe.ingredients.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
                <ol className="list-decimal list-inside space-y-2">
                    {recipe.instructions.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
                {recipe.tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full"
                    >
                        #{tag}
                    </span>
                ))}
                {recipe.mealType.map((type, idx) => (
                    <span
                        key={idx}
                        className="bg-blue-200 text-blue-800 text-xs px-3 py-1 rounded-full"
                    >
                        {type}
                    </span>
                ))}
                <span className="bg-rose-200 text-rose-800 text-xs px-3 py-1 rounded-full">
                    {recipe.cuisine}
                </span>
            </div>
        </div>
    );
}
