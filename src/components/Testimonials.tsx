export function Testimonials() {
  const testimonials = [
    {
      name: "Марина Соколова",
      role: "Учитель физики, гимназия №14, Екатеринбург",
      image: "/professional-woman-headshot.png",
      quote:
        "После курса перестроила подготовку к ЕГЭ полностью. Средний балл моих учеников вырос с 58 до 74 за один год. Методики реально работают!",
    },
    {
      name: "Андрей Петров",
      role: "Учитель математики, школа №102, Казань",
      image: "/professional-man-headshot.png",
      quote:
        "Наконец понял, как разбирать задания второй части с учениками. Курс дал конкретные алгоритмы, а не общие слова. Очень практично.",
    },
    {
      name: "Ольга Никитина",
      role: "Учитель информатики, лицей №7, Новосибирск",
      image: "/professional-woman-smiling.png",
      quote:
        "Прошла курс онлайн без отрыва от работы. Удостоверение пришло быстро, всё официально. Буду рекомендовать коллегам.",
    },
  ]

  return (
    <section id="testimonials" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Истории успеха</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Отзывы педагогов</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
