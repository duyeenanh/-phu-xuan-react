interface CategoryTabsProps<Category extends string> {
  categories: readonly Category[];
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

export default function CategoryTabs<Category extends string>({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryTabsProps<Category>) {
  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? 'is-active' : ''}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
