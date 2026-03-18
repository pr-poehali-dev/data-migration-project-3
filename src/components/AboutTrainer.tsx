export function AboutTrainer() {
  return (
    <section id="about" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
            <img src="/professional-trainer-headshot-smiling.jpg" alt="Преподаватель" className="w-full h-full object-cover rounded-2xl" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wide">О нашей программе</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Экспертное повышение квалификации для педагогов
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Более 15 лет опыта в подготовке к ЕГЭ и ОГЭ. Наши программы разработаны практикующими
              педагогами и экспертами ФИПИ, которые знают требования экзаменов изнутри.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Мы специализируемся на физике, математике, информатике и других точных науках.
              Каждый курс даёт официальное удостоверение о повышении квалификации государственного образца,
              необходимое для аттестации.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Удостоверение гос. образца</p>
                  <p className="text-sm text-muted-foreground">Принимается при аттестации педагогов</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">1 200+ учителей прошли курсы</p>
                  <p className="text-sm text-muted-foreground">Из 47 регионов России</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Онлайн-формат без отрыва от работы</p>
                  <p className="text-sm text-muted-foreground">Занятия в удобное время, доступ к материалам 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
