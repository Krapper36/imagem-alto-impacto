import { useState, useEffect } from "react";
import { Check, Calendar, Clock, AlertTriangle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import andreaMain from "@/assets/andrea-20.jpg";
import andreaSecondary from "@/assets/andrea-5.jpg";

const WorkshopLanding = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("2025-11-10T20:00:00");
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToCTA = () => {
    const ctaElement = document.getElementById("cta-section");
    ctaElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-['Montserrat',sans-serif] text-foreground">
      {/* Fixed Attention Bar */}
      <div className="fixed top-0 left-0 right-0 bg-cta z-50 py-3 px-4">
        <p className="text-center text-cta-foreground font-bold text-sm md:text-base">
          Atenção: Exclusivo para empresárias que já têm agenda cheia, mas querem cobrar mais caro pelos seus serviços
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 pb-12 px-4 md:px-8 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0"></div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Workshop Tag */}
          <div className="inline-block mb-8 animate-pulse">
            <div className="bg-accent px-6 py-3 rounded-lg">
              <p className="text-accent-foreground font-bold text-sm">WORKSHOP</p>
              <p className="text-accent-foreground font-bold text-2xl md:text-3xl">IMAGEM DE ALTO PADRÃO</p>
            </div>
          </div>

          {/* Event Details */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-warning rounded-full animate-pulse"></span>
              <span>Ao vivo - com opção da gravação na íntegra</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />
              <span>10 de Novembro</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              <span>20h (horário de Brasília)</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Em apenas 1 dia, você vai descobrir como:
          </h1>

          {/* Benefits List */}
          <div className="space-y-4 mb-10">
            {[
              "Atrair clientes de alto padrão",
              "Aumentar o valor percebido do seu trabalho",
              "Cobrar 5x mais caro sem medo de perder clientes",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <p className="text-lg md:text-xl">{benefit}</p>
              </div>
            ))}
          </div>

          {/* Price Highlight */}
          <div className="bg-card border-2 border-cta rounded-lg p-6 mb-8 inline-block">
            <p className="text-sm mb-2">🎟 Garanta agora o seu ingresso por apenas</p>
            <p className="text-4xl md:text-5xl font-bold text-cta">R$ 47,00</p>
            <p className="text-sm text-muted-foreground mt-2">(lote promocional)</p>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToCTA}
            className="w-full md:w-auto bg-cta hover:bg-cta/90 text-cta-foreground font-bold text-lg px-12 py-6 rounded-lg shadow-lg shadow-cta/50 transition-all hover:scale-105"
          >
            GARANTIR MEU INGRESSO
          </Button>

          <p className="mt-6 text-sm text-muted-foreground">
            🖥️ Aula Online e Ao Vivo | 📅 10 de Novembro | ⏰ Vagas limitadas
          </p>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 px-4 md:px-8 bg-card">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            OS INGRESSOS ESGOTAM EM:
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { value: timeLeft.days, label: "Dias" },
              { value: timeLeft.hours, label: "Horas" },
              { value: timeLeft.minutes, label: "Minutos" },
              { value: timeLeft.seconds, label: "Segundos" },
            ].map((item, index) => (
              <div key={index} className="bg-accent rounded-lg p-6 min-w-[100px]">
                <p className="text-4xl md:text-5xl font-bold text-accent-foreground">
                  {String(item.value).padStart(2, "0")}
                </p>
                <p className="text-sm text-accent-foreground mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Content Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            💎 <span className="text-cta">Por que essa aula é essencial</span> para o seu crescimento?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              {[
                "Você vai aprender o método que transformou mulheres comuns em empresárias de alto padrão — reconhecidas, seguras e desejadas.",
                "Vai descobrir como se vestir com propósito, usando o que você já tem, sem precisar gastar fortunas em novas roupas.",
                "Vai entender como alinhar sua imagem com quem você é hoje — transmitindo confiança, coerência e elegância.",
                "Vai aprender a elevar o valor percebido do seu trabalho e se posicionar como referência na sua área.",
                "E o melhor: vai sair da aula com um plano prático para aplicar tudo no seu dia a dia e começar a cobrar o que realmente vale.",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                  <p className="text-base">{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <img 
                src={andreaSecondary} 
                alt="Andrea Gomes" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <Button 
            onClick={scrollToCTA}
            className="w-full md:w-auto bg-cta hover:bg-cta/90 text-cta-foreground font-bold text-lg px-12 py-6 rounded-lg shadow-lg shadow-cta/50 transition-all hover:scale-105"
          >
            EU QUERO ATRAIR CLIENTES ALTO PADRÃO
          </Button>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 px-4 md:px-8 bg-card">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            🎯 Para quem é essa aula?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Mulheres que já têm carreira ou negócio estabelecido",
              "Profissionais que estão cansadas de se vestir sempre do mesmo jeito",
              "Quem quer ser vista como referência no seu mercado",
              "Quem sente que a imagem não reflete mais a mulher que se tornou",
              "Empresárias que querem cobrar mais caro e atrair clientes certos",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-background p-4 rounded-lg">
                <Check className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Transformation */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="border-4 border-warning rounded-lg p-8 bg-card">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-warning text-2xl">✗</span>
                <h3 className="text-2xl font-bold text-warning">ANTES DO WORKSHOP</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Você não conhece esse novo campo de atuação profissional",
                  "Sente insegurança ao se vestir para eventos importantes",
                  "Não sabe como transmitir autoridade através da sua imagem",
                  "Cobra valores abaixo do seu potencial por medo de perder clientes",
                  "Sente que sua imagem não reflete a profissional que você se tornou",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-warning flex-shrink-0 mt-1">✗</span>
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="border-4 border-success rounded-lg p-8 bg-card">
              <div className="flex items-center gap-2 mb-6">
                <Check className="w-6 h-6 text-success" />
                <h3 className="text-2xl font-bold text-success">DEPOIS DO WORKSHOP</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Você estará convicta de que pode atrair clientes de alto padrão",
                  "Terá um plano prático para usar sua imagem como ferramenta de autoridade",
                  "Saberá exatamente como se vestir para cada ocasião profissional",
                  "Terá confiança para cobrar 5x mais pelos seus serviços",
                  "Sua imagem estará alinhada com a empresária de sucesso que você é",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4 md:px-8 bg-card">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            💡 Como funciona a aula
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "📌", title: "Ao Vivo", desc: "Participe em tempo real e tire suas dúvidas com Andrea Gomes" },
              { icon: "📌", title: "Replay Garantido", desc: "Assista quando quiser, no seu ritmo" },
              { icon: "📌", title: "Material Exclusivo", desc: "Aplique imediatamente o método no seu guarda-roupa e na sua imagem" },
              { icon: "📌", title: "Bônus Especial", desc: "Estudo de caso real de uma cliente que lotou a agenda e multiplicou seus ganhos" },
              { icon: "📌", title: "Suporte Direto", desc: "Orientação prática para não travar na hora de aplicar o conteúdo" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-background p-6 rounded-lg">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="py-16 px-4 md:px-8 bg-accent">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent-foreground">
                👩‍🏫 Conheça sua mentora
              </h2>
              <h3 className="text-4xl font-bold mb-4 text-accent-foreground">Andrea Gomes</h3>
              <div className="space-y-4 text-accent-foreground">
                <p className="font-semibold">
                  Mentora de imagem e estilo, criadora do Método Prisma — um processo que transforma mulheres em versões autênticas, elegantes e de alto padrão, sem moldes prontos e sem perder a essência.
                </p>
                <p>
                  Antes de se tornar referência em imagem, Andrea era advogada. Um feedback negativo sobre sua aparência a fez buscar uma consultoria de imagem. Naquele momento, ela percebeu que não estava feliz com a advocacia — e se encontrou em um novo propósito: ajudar mulheres a se redescobrirem por meio da sua imagem.
                </p>
                <p>
                  Desde 2021, Andrea já atendeu dezenas de mulheres, ministrou palestras para advogadas, empresárias e órgãos públicos, e treinou equipes de lojas e salões de beleza.
                </p>
                <p className="font-semibold">Formações:</p>
                <ul className="space-y-2 text-sm">
                  <li>🎓 Studio Immagine (Coloração Pessoal)</li>
                  <li>🎓 Pós-graduação em Consultoria de Imagem e Visagismo – Unyleya</li>
                  <li>🎓 Escola de Moda Cacavalcante</li>
                  <li>🎓 Formação Internacional em Paris com Lidiane Paulino</li>
                  <li>🎓 Consultoria com Brunela Sgaria</li>
                  <li>🎓 Etiqueta e Comportamento Corporativo com Raquel Jordan</li>
                </ul>
              </div>
              <Button 
                onClick={scrollToCTA}
                className="mt-8 bg-cta hover:bg-cta/90 text-cta-foreground font-bold text-lg px-12 py-6 rounded-lg shadow-lg shadow-cta/50 transition-all hover:scale-105"
              >
                GARANTIR MEU INGRESSO
              </Button>
            </div>
            <div>
              <img 
                src={andreaMain} 
                alt="Andrea Gomes - Mentora de Imagem" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final Offer Section */}
      <section id="cta-section" className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <AlertTriangle className="w-16 h-16 text-warning mx-auto mb-4 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-bold">
              ATENÇÃO! ÚLTIMAS VAGAS
            </h2>
          </div>

          <div className="bg-foreground text-background rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <div className="bg-card text-foreground rounded-lg p-6 mb-8">
                  <h3 className="text-2xl font-bold mb-4">Workshop ao vivo inclui:</h3>
                  <div className="space-y-3">
                    {[
                      "Presença ao vivo no dia 10/11",
                      "Acesso à gravação completa",
                      "Material didático em PDF",
                      "Bônus: Estudo de caso exclusivo",
                      "Certificado de participação",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-success flex-shrink-0" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mini Countdown */}
                <div className="bg-card text-foreground rounded-lg p-4">
                  <p className="text-center font-bold mb-2">Promoção termina em:</p>
                  <div className="flex justify-center gap-2">
                    {[
                      { value: timeLeft.hours, label: "H" },
                      { value: timeLeft.minutes, label: "M" },
                      { value: timeLeft.seconds, label: "S" },
                    ].map((item, index) => (
                      <div key={index} className="bg-accent text-accent-foreground rounded px-3 py-2">
                        <p className="text-xl font-bold">{String(item.value).padStart(2, "0")}</p>
                        <p className="text-xs">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Pricing */}
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Garanta seu ingresso agora e descubra como atrair clientes de alto padrão!
                </h3>

                {/* Basic Ticket */}
                <div className="bg-card text-foreground rounded-lg p-6 mb-4">
                  <h4 className="text-xl font-bold mb-2">🎟 Ingresso Básico</h4>
                  <p className="text-sm text-muted-foreground mb-4">Lote Promocional</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm line-through text-muted-foreground">De R$ 197,00</span>
                  </div>
                  <p className="text-5xl font-bold text-cta mb-2">R$ 47,00</p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>✔ Aula Ao Vivo</li>
                    <li>✔ Replay por 7 dias</li>
                  </ul>
                  <Button 
                    className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-bold text-lg py-6 rounded-lg shadow-lg transition-all hover:scale-105"
                  >
                    GARANTIR INGRESSO BÁSICO
                  </Button>
                </div>

                {/* Standard Ticket */}
                <div className="bg-accent text-accent-foreground rounded-lg p-6 border-4 border-cta relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cta text-cta-foreground px-4 py-1 rounded-full text-sm font-bold">
                    RECOMENDADO
                  </div>
                  <h4 className="text-xl font-bold mb-2">⭐ Ingresso Padrão</h4>
                  <p className="text-sm mb-4">Acesso Completo</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm line-through">De R$ 297,00</span>
                  </div>
                  <p className="text-5xl font-bold mb-2">R$ 97,00</p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>✔ Aula Ao Vivo</li>
                    <li>✔ Replay por 30 dias</li>
                    <li>✔ Material prático de aplicação</li>
                    <li>✔ Bônus: Estudo de Caso completo</li>
                  </ul>
                  <Button 
                    className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-bold text-lg py-6 rounded-lg shadow-lg transition-all hover:scale-105"
                  >
                    GARANTIR INGRESSO PADRÃO
                  </Button>
                </div>

                <p className="text-center mt-4 text-sm">
                  ⚠️ <span className="font-bold">VAGAS LIMITADAS</span> - Lote promocional encerra em breve!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Results */}
      <section className="py-16 px-4 md:px-8 bg-card">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            💬 Resultados Reais
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Clientes que antes se sentiam simples demais, hoje são reconhecidas pela elegância.",
              "Donas de salão de beleza e terapeutas que lotaram a agenda e aumentaram seus preços.",
              "Mulheres que se redescobriram e voltaram a ter prazer em se vestir todos os dias.",
            ].map((item, index) => (
              <div key={index} className="bg-background p-6 rounded-lg">
                <p className="text-4xl mb-4">✨</p>
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 md:px-8 bg-accent">
        <div className="container mx-auto max-w-4xl text-center">
          <Shield className="w-20 h-20 text-accent-foreground mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent-foreground">
            🔁 GARANTIA INCONDICIONAL
          </h2>
          <p className="text-lg md:text-xl text-accent-foreground mb-4">
            Participe da aula, aplique o conteúdo, e se ao final você sentir que não valeu a pena,{" "}
            <span className="font-bold">devolvemos 100% do seu investimento.</span>
          </p>
          <p className="text-accent-foreground font-bold text-xl">
            Sem perguntas, sem burocracia.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 text-sm">
            <p className="font-semibold">Este site NÃO é do Facebook.</p>
            <p>
              Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial independente da FACEBOOK, Inc.
            </p>
            <p>
              Nós NÃO compartilharemos seu endereço de e-mail com ninguém. Você pode cancelar sua inscrição a qualquer momento. Ao se cadastrar, você está aceitando receber comunicações informativas e promocionais.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
              <span>|</span>
              <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
            </div>
            <p className="pt-4">© 2025 Andrea Gomes – Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WorkshopLanding;
