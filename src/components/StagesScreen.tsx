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
      category: 'Anime',
      names: [
        'Naruto Uzumaki',
        'Goku',
        'Sailor Moon',
        'Luffy',
        'Vegeta',
        'Edward Elric',
        'Light Yagami',
        'Eren Yeager',
        'Sasuke Uchiha',
        'Mikasa Ackerman',
      ],
    },
    {
      category: 'Technology',
      names: [
        'Bill Gates',
        'Elon Musk',
        'Mark Zuckerberg',
        'Ada Lovelace',
        'Linus Torvalds',
        'Grace Hopper',
        'Steve Jobs',
        'Tim Berners-Lee',
        'Satya Nadella',
        'Jeff Bezos',
      ],
    },
    {
      category: 'Games',
      names: [
        'Mario',
        'Lara Croft',
        'Master Chief',
        'Kratos',
        'Aloy',
        'Link',
        'Geralt of Rivia',
        'Ezio Auditore',
        'Solid Snake',
        'Joel and Ellie',
      ],
    },
    {
      category: 'Public Figures',
      names: [
        'Albert Einstein',
        'Martin Luther King Jr.',
        'Queen Elizabeth II',
        'Malala Yousafzai',
        'Nelson Mandela',
        'Oprah Winfrey',
        'Mahatma Gandhi',
        'Marie Curie',
        'Winston Churchill',
        'Amelia Earhart',
      ],
    },
    {
      category: 'Memes',
      names: [
        'Pepe the Frog',
        'Distracted Boyfriend',
        'Mocking SpongeBob',
        'Woman Yelling at a Cat',
        'Doge',
        'Hide the Pain Harold',
        'Arthur Fist',
        'This is Fine Dog',
        'Harambe',
        'Bad Luck Brian',
      ],
    },
    {
      category: 'Food',
      names: [
        'Gordon Ramsay',
        'Julia Child',
        'Jamie Oliver',
        'Anthony Bourdain',
        'Nigella Lawson',
        'Alton Brown',
        'Emeril Lagasse',
        'Ina Garten',
        'Guy Fieri',
        'Bobby Flay',
      ],
    },
    {
      category: 'Countries',
      names: [
        'USA',
        'China',
        'India',
        'Brazil',
        'Russia',
        'Germany',
        'France',
        'United Kingdom',
        'Japan',
        'Australia',
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
            <button onClick={onGameBack}>Back</button>
          </div>
        </>  
  )
}
export default StagesScreen
