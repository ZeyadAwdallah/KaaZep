import { useState } from 'react'

interface category {
  category: string
  names: string[]
}

interface CustomizeScreenProps {
  initialStages: category[]
  onSaveChanges: (updatedStages: category[]) => void
  onBack: () => void
}

function CustomizeScreen({
  initialStages,
  onSaveChanges,
  onBack,
}: CustomizeScreenProps) {
  const [categories, setCategories] = useState<category[]>(initialStages)
  const [newCategoryName, setNewCategoryName] = useState('')
  const [newItemName, setNewItemName] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleAddCategory = () => {
    if (newCategoryName) {
      setCategories([...categories, { category: newCategoryName, names: [] }])
      setNewCategoryName('')
    }
  }

  const handleDeleteCategory = (categoryToDelete: string) => {
    setCategories(categories.filter((cat) => cat.category !== categoryToDelete))
    if (selectedCategory === categoryToDelete) {
      setSelectedCategory(null)
    }
  }

  const handleAddItem = () => {
    if (newItemName.trim()==""){return}
    if (selectedCategory && newItemName) {
      setCategories(
        categories.map((cat) =>
          cat.category === selectedCategory
            ? { ...cat, names: [...cat.names, newItemName] }
            : cat
        )
      )
      setNewItemName('')
    }
  }

  const handleDeleteItem = (categoryName: string, itemToDelete: string) => {
    setCategories(
      categories.map((cat) =>
        cat.category === categoryName
          ? { ...cat, names: cat.names.filter((name) => name !== itemToDelete) }
          : cat
      )
    )
  }

  const handleSave = () => {
    onSaveChanges(categories)
    onBack()
  }

  return (
    <div className="customize-screen">
      <div className='hero'>
        <h2>تعديل الحزم</h2>
        <p >هنا تقدر تضيف و تعدل او تمسح الحزم</p>
      </div>

      <div className="maininput">
        <input
          type="text"
          minLength={1}
          maxLength={15}
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
          placeholder="اسم الحزمة الجديدة"
        />
        <button onClick={handleAddCategory}>ضيف حزمة</button>
      </div>

      <div>
        {categories.map((category) => (
          <div className="category" key={category.category}>
            <div className="inthesameline">
              <h3>{category.category}</h3>
              <button onClick={() => handleDeleteCategory(category.category)}>
                امسح الحزمة{' '}
              </button>
              <button onClick={() => setSelectedCategory(category.category)}>
                عدل الحزمة
              </button>
            </div>
            {selectedCategory === category.category && (
              <div>
                <div className="inthesameline">
                  <input
                    type="text"
                    minLength={1}
                    maxLength={16}
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    placeholder="العنصر الجديد"
                  />

                  <button onClick={handleAddItem} className="addbtn">
                    ضيف عنصر
                  </button>
                </div>
                <ul className="item-list">
                  {category.names.map((name) => (
                    <li key={name}>
                      {name}
                      <button
                        onClick={() =>
                          handleDeleteItem(category.category, name)
                        }
                      >
                        امسح
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="save-buttons">
        <button onClick={handleSave}>احفظ التغيير</button>
        <button onClick={onBack}>ارجع</button>
      </div>
    </div>
  )
}

export default CustomizeScreen
