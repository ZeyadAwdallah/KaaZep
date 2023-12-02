function StagesScreen({
  onGameBack,
  handleRandomName,
}: {
  onGameBack: () => void
  handleRandomName: ( randomName: string ,name:string[]) => void
}) {
  interface Category {
    category: string
    names: string[]
  }
  const stages: Category[] = [
    {
      category: 'أنمي',
      names: [
        'ناروتو',
        'دراجون بول زد',
        'ون بيس',
        'سورد ارت اونلاين',
        'اتاك اون تايتن',
        'فول ميتال الكميست',
        'ديث نوت',
        'بوتشي دا روك',
        'اوشينيكو',
        'جوبلن سلاير',
      ],
    },
    {
      category: 'رواد التكنولوجيا',
      names: [
        'بيل جيتس',
        'ايلون ماسك',
        'مارك زكربيرج',
        'آدا لوفلايس',
        'لينوس ترورفالدس',
        'جريس هوبر',
        'ستيف جوبز',
        'تيم بيرنرز لي',
        'انجيلا يو',
        'جيف بيزوز',
      ],
    },
    {
      category: 'شخصيات العاب',
      names: [
        'ماريو',
        'لارا كرافت',
        'جوست',
        'كريتوس',
        'الوي',
        'لينك',
        'الطائر بن لا احد',
        'باسم بن اسحاق',
        'باكمان',
        'سونيك',
      ],
    },
    {
      category: 'شخصيات عامة',
      names: [
        'عمرو اديب',
        'ويجز',
        'محمد صلاح',
        'سيادةالريس',
        'فاروق الباز',
        'احمد زويل',
        'نجيب محفوظ',
        'حافظ ابراهيم',
        'احمد شوقي',
        'طارق شوقي',
      ],
    },
    {
      category: 'أكل',
      names: [
        'محشي',
        'مكرونة بشاميل',
        'ملوخية',
        'فول وفلافل',
        'حمام',
        'ام علي',
        'رز بلبن',
        'قشطوطة',
        'فاصوليا',
        'بيتزا',
        'وراك فراخ بالبصل لاحمر'
      ],
    },
    {
      category: 'بلاد',
      names: [
        'مصر',
        'قطر',
        'تركيا',
        'سوريا',
        'روسيا',
        'المانيا',
        'ماليزيا',
        'كرواتيا',
        'الصين',
        'كوريا الجنوبية',
      ],
    },
  ]
  const getRandomNameFromStage = (stage: Category): string => {
      const randomIndex = Math.floor(Math.random() * stage.names.length)
      return stage.names[randomIndex]
  }

   const handleStage = (selectedCategory: string) => {
     const selectedStage = stages.find(
       (stage) => stage.category === selectedCategory
     )
     if (selectedStage) {
       const randomName = getRandomNameFromStage(selectedStage)
       handleRandomName(randomName,selectedStage.names)
     }
   }

  return (
        <>
          <div className="stages">
            {stages.map((stage, index) => (
              <div className="stage" key={index}>
                <p onClick={() => handleStage(stage.category)}>
                  {stage.category}
                </p>
              </div>
            ))}
            <button onClick={onGameBack}>ارجع</button>
          </div>
        </>  
  )
}
export default StagesScreen
