import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Подходит ли курс для учителей без опыта подготовки к ЕГЭ?",
      answer:
        "Да! Программа рассчитана на педагогов с любым опытом. Мы начинаем с разбора структуры ЕГЭ/ОГЭ и постепенно переходим к продвинутым методикам работы с учениками.",
    },
    {
      question: "Сколько длится курс и сколько нужно времени в день?",
      answer:
        "Стандартный курс — 36 академических часов (около 4 недель). Достаточно 1,5–2 часов в день в удобное для вас время. Все занятия записаны — можно смотреть когда угодно.",
    },
    {
      question: "Какой документ я получу по итогам?",
      answer:
        "Удостоверение о повышении квалификации государственного образца. Документ вносится в реестр и принимается при аттестации педагогических работников по всей России.",
    },
    {
      question: "Можно ли оплатить от школы или района?",
      answer:
        "Да, мы работаем с юридическими лицами. Выставим счёт на школу или управление образования, предоставим все необходимые документы для бухгалтерии.",
    },
    {
      question: "Есть ли курсы по другим предметам, кроме физики?",
      answer:
        "Да! Мы ведём курсы по математике, информатике, химии, биологии и русскому языку. Напишите нам, и мы подберём подходящую программу.",
    },
    {
      question: "Что если курс не подойдёт?",
      answer:
        "В течение 3 дней с момента оплаты мы возвращаем деньги без вопросов, если программа вам не подошла. Ваш результат — наша репутация.",
    },
  ]

  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Вопросы?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Частые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground font-semibold hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
