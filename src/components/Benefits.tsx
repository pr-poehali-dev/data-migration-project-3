export function Benefits() {
  const benefits = [
    {
      icon: "📋",
      title: "Актуальные методики ЕГЭ/ОГЭ",
      description: "Программы обновляются ежегодно в соответствии с изменениями ФИПИ и КИМов",
    },
    {
      icon: "💻",
      title: "Онлайн без отрыва от работы",
      description: "Обучайтесь в любое время — вечером или в выходные, не беря отпуск",
    },
    {
      icon: "📜",
      title: "Официальное удостоверение",
      description: "Документ государственного образца, необходимый для аттестации педагога",
    },
    {
      icon: "🎯",
      title: "Практические разборы заданий",
      description: "Живые разборы типовых ошибок учеников и стратегии их исправления",
    },
    {
      icon: "👥",
      title: "Сообщество педагогов",
      description: "Обменивайтесь опытом с коллегами из разных регионов России",
    },
    {
      icon: "📚",
      title: "Материалы остаются навсегда",
      description: "Доступ к записям лекций и методичкам после завершения курса",
    },
  ]

  return (
    <section id="benefits" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Почему выбирают нас</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Всё для роста педагога
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Комплексные программы, которые реально помогают учителям готовить детей к экзаменам эффективнее
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
