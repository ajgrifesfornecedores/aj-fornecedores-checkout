const categories = [
  { icon: "M", title: "Moda masculina", text: "Peças para montar uma loja completa." },
  { icon: "F", title: "Moda feminina", text: "Tendências e variedade para revenda." },
  { icon: "T", title: "Calçados e tênis", text: "Modelos para diferentes públicos." },
  { icon: "B", title: "Bonés", text: "Opções variadas direto de fornecedores." },
  { icon: "P", title: "Perfumes e cosméticos", text: "Itens de giro para ampliar o mix." },
  { icon: "J", title: "Semijoias e acessórios", text: "Produtos para elevar o ticket médio." },
  { icon: "L", title: "Estrutura para lojas", text: "Contatos para equipar seu espaço." },
  { icon: "C", title: "Celulares e acessórios", text: "Mais categorias em um só acesso." },
  { icon: "+", title: "Tabacaria e diversos", text: "Novas oportunidades para o seu negócio." },
];

const benefits = [
  "Mais de 150 fornecedores organizados por categoria",
  "Contatos verificados e atualizados",
  "Compra direta da fonte, sem perder meses pesquisando",
  "Acesso imediato após a confirmação do pagamento",
  "Atualizações constantes da lista",
  "Suporte para ajudar você a começar",
];

const faqs = [
  {
    question: "Como vou receber a lista?",
    answer:
      "Após a confirmação do pagamento, o acesso é liberado digitalmente para o e-mail informado na compra.",
  },
  {
    question: "Os fornecedores são verificados?",
    answer:
      "A seleção foi construída a partir da experiência prática da AJ Grifes, com contatos testados e organizados para facilitar sua pesquisa.",
  },
  {
    question: "Serve para quem ainda não tem loja?",
    answer:
      "Sim. O material foi pensado tanto para quem está começando do zero quanto para quem já vende e quer ampliar o mix ou melhorar a margem.",
  },
  {
    question: "A lista recebe novos fornecedores?",
    answer:
      "Sim. A proposta inclui atualizações constantes para manter os contatos e as oportunidades sempre relevantes.",
  },
];

export default function Home() {
  const price = process.env.NEXT_PUBLIC_OFFER_PRICE ?? "R$ 47,00";
  const installment = process.env.NEXT_PUBLIC_OFFER_INSTALLMENT ?? "ou 5x de R$ 10,55";
  const checkoutUrl = "https://pay.cakto.com.br/tufn679_988665";

  return (
    <main id="topo">
      <div className="trust-bar">
        <div className="container trust-bar__content">
          <span><b>✓</b> Compra segura</span>
          <span><b>⚡</b> Acesso imediato</span>
          <span className="trust-bar__optional"><b>↻</b> Lista atualizada</span>
        </div>
      </div>

      <section className="hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__glow hero__glow--one" aria-hidden="true" />
        <div className="hero__glow hero__glow--two" aria-hidden="true" />

        <div className="container hero__layout">
          <div className="hero__content">
            <a className="brand" href="#topo" aria-label="AJ Fornecedores — início">
              <span className="brand__mark">AJ</span>
              <span className="brand__copy">
                <strong>FORNECEDORES</strong>
                <small>CONTATOS DE CONFIANÇA</small>
              </span>
            </a>

            <div className="eyebrow"><span /> O atalho para montar sua loja</div>
            <h1>
              Pare de comprar caro e acesse os <em>fornecedores certos.</em>
            </h1>
            <p className="hero__lead">
              Tenha em mãos a lista que ajudou a construir <strong>3 lojas</strong> — com contatos para moda masculina, feminina, calçados, bonés, perfumes, tabacaria e muito mais.
            </p>

            <ul className="hero__checks" aria-label="Principais benefícios">
              <li><span>✓</span> +150 fornecedores verificados</li>
              <li><span>✓</span> Contatos atualizados e organizados</li>
              <li><span>✓</span> Acesso digital imediato</li>
            </ul>

            <a className="button button--primary button--hero" href={checkoutUrl}>
              <span>QUERO ACESSAR A LISTA</span>
              <small>Receba tudo após a confirmação</small>
            </a>
            <p className="microcopy">🔒 Ambiente protegido • Pagamento processado com segurança</p>
          </div>

          <div className="hero__visual">
            <div className="hero__image-shell">
              <img
                src="/aj-hero.png"
                alt="Apresentação da AJ Grifes e da lista de fornecedores"
              />
              <div className="hero__image-fade" aria-hidden="true" />
            </div>
            <div className="product-card">
              <span className="product-card__label">ACESSO DIGITAL</span>
              <strong>LISTA DE<br /><b>FORNECEDORES</b></strong>
              <small>CONTATOS PARA COMPRAR MELHOR</small>
              <div className="product-card__seal">+150<br /><span>CONTATOS</span></div>
            </div>
            <div className="floating-proof floating-proof--top">
              <b>3</b>
              <span>lojas construídas</span>
            </div>
            <div className="floating-proof floating-proof--bottom">
              <b>BRÁS</b>
              <span>pesquisa presencial</span>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-proof" aria-label="Resumo da oferta">
        <div className="container quick-proof__grid">
          <div><b>+150</b><span>contatos organizados</span></div>
          <div><b>9+</b><span>categorias de produtos</span></div>
          <div><b>3</b><span>lojas construídas</span></div>
          <div><b>BRÁS</b><span>experiência em campo</span></div>
        </div>
      </section>

      <section className="section pain-section">
        <div className="container">
          <div className="section-heading section-heading--center">
            <span className="section-tag">SE VOCÊ ESTÁ COMEÇANDO</span>
            <h2>Você não precisa perder dinheiro até encontrar <em>o caminho certo.</em></h2>
            <p>Evite os erros que consomem o caixa e atrasam o crescimento de uma loja.</p>
          </div>

          <div className="pain-grid">
            <article><span>×</span><div><h3>Compra caro</h3><p>Sem os contatos certos, você paga mais e reduz sua margem.</p></div></article>
            <article><span>×</span><div><h3>Perde tempo</h3><p>Passa semanas procurando e continua sem saber em quem confiar.</p></div></article>
            <article><span>×</span><div><h3>Tem medo de golpes</h3><p>Fica inseguro para negociar, testar e fazer o primeiro pedido.</p></div></article>
            <article><span>×</span><div><h3>Lucra pouco</h3><p>O dinheiro gira devagar e o resultado nunca aparece no caixa.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section categories-section">
        <div className="container categories-layout">
          <div className="categories-copy">
            <span className="section-tag">TUDO EM UM SÓ LUGAR</span>
            <h2>Fornecedores para montar uma loja <em>completa.</em></h2>
            <p>Uma seleção organizada para você comparar opções, negociar melhor e ampliar seu mix com segurança.</p>
            <div className="category-count"><b>9+</b><span>categorias<br />incluídas</span></div>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <article className="category-card" key={category.title}>
                <span className="category-card__icon">{category.icon}</span>
                <div><h3>{category.title}</h3><p>{category.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section story-section">
        <div className="container story-layout">
          <div className="story-copy">
            <span className="section-tag">PROVA DE UMA OPERAÇÃO REAL</span>
            <h2>Não é uma lista montada só com <em>pesquisa na internet.</em></h2>
            <p>A <strong>AJ Fornecedores</strong> nasceu da experiência prática da AJ Grifes: abrindo lojas, negociando, errando, visitando o Brás e descobrindo quais contatos realmente valiam a pena.</p>
            <p>Esse aprendizado foi reunido em um material mais direto para quem quer começar sem repetir o mesmo caminho de tentativa e erro.</p>
            <ul className="story-facts">
              <li><span>✓</span> Operação física construída na prática</li>
              <li><span>✓</span> Pesquisa presencial com fornecedores</li>
              <li><span>✓</span> Experiência aplicada em três lojas</li>
            </ul>
            <div className="story-signature"><span>AJ</span><div><b>AJ Grifes</b><small>A operação por trás do projeto</small></div></div>
          </div>

          <div className="proof-gallery" aria-label="Fotos reais da operação AJ Grifes e da pesquisa no Brás">
            <figure className="proof-card proof-card--tall">
              <img src="/prova-loja-noite.jpeg" alt="Fachada iluminada da loja AJ Grife durante a noite" />
              <figcaption><b>LOJA EM OPERAÇÃO</b><span>Fachada AJ Grife</span></figcaption>
            </figure>
            <figure className="proof-card proof-card--wide">
              <img src="/prova-loja-construcao.jpeg" alt="Fachada da AJ Grife durante a fase de montagem da loja" />
              <figcaption><b>CONSTRUÇÃO REAL</b><span>Mais uma etapa da expansão</span></figcaption>
            </figure>
            <figure className="proof-card">
              <img src="/prova-loja-fachada.jpeg" alt="Letreiro e entrada de uma unidade AJ Grife" />
              <figcaption><b>MARCA PRÓPRIA</b><span>Unidade AJ Grife</span></figcaption>
            </figure>
            <figure className="proof-card proof-card--bras">
              <img src="/prova-bras.jpeg" alt="Visita presencial à região de compras e fornecedores do Brás" />
              <figcaption><b>PESQUISA NO BRÁS</b><span>Busca presencial por fornecedores</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section offer-section" id="pagamento">
        <div className="container offer-layout">
          <div className="offer-copy">
            <span className="section-tag">O QUE VOCÊ RECEBE</span>
            <h2>Um projeto completo para comprar melhor e <em>vender com mais lucro.</em></h2>
            <p>Sem viagens desnecessárias, contatos espalhados ou meses testando fornecedores por conta própria.</p>
            <ul className="benefit-list">
              {benefits.map((benefit) => <li key={benefit}><span>✓</span>{benefit}</li>)}
            </ul>
            <div className="delivery-flow" aria-label="Como funciona a entrega">
              <div><b>1</b><span><strong>Você compra</strong><small>Pagamento protegido</small></span></div>
              <i>→</i>
              <div><b>2</b><span><strong>Recebe o acesso</strong><small>Liberação digital</small></span></div>
              <i>→</i>
              <div><b>3</b><span><strong>Começa a pesquisar</strong><small>Contatos organizados</small></span></div>
            </div>
            <div className="offer-preview">
              <img src="/aj-conteudo.png" alt="Visão geral das categorias e benefícios incluídos na lista de fornecedores" />
              <span>VISÃO GERAL DO MATERIAL</span>
            </div>
          </div>

          <aside className="checkout-card" aria-label="Resumo do pedido">
            <div className="checkout-card__top">
              <span className="live-dot" /> OFERTA DISPONÍVEL AGORA
            </div>
            <div className="checkout-card__body">
              <div className="checkout-product">
                <div className="checkout-product__cover">AJ<span>LISTA DE<br /><b>FORNECEDORES</b></span></div>
                <div><span>ACESSO COMPLETO</span><h3>Lista AJ Fornecedores</h3><small>Produto 100% digital</small></div>
              </div>

              <div className="order-lines">
                <div><span>Lista com +150 fornecedores</span><b>INCLUSO</b></div>
                <div><span>Atualizações constantes</span><b>INCLUSO</b></div>
                <div><span>Suporte especializado</span><b>INCLUSO</b></div>
              </div>

              <div className="price-block">
                <span>Investimento único</span>
                <strong>{price}</strong>
                <small>{installment}</small>
              </div>

              <a className="button button--primary button--checkout" href={checkoutUrl}>
                <span>GARANTIR MEU ACESSO</span>
                <small>Liberação imediata</small>
              </a>

              <div className="payment-trust">
                <span>PIX</span><span>VISA</span><span>MASTER</span><span>🔒</span>
              </div>

              <p className="checkout-card__microcopy">Seus dados são protegidos e o pagamento é processado em ambiente seguro.</p>
            </div>
            <div className="checkout-card__footer"><span>✓</span><div><b>ACESSO IMEDIATO</b><small>Receba automaticamente após a confirmação</small></div></div>
          </aside>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-layout">
          <div className="faq-heading">
            <span className="section-tag">DÚVIDAS FREQUENTES</span>
            <h2>Ainda ficou com alguma <em>dúvida?</em></h2>
            <p>Veja as respostas antes de garantir o seu acesso.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<span>+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta__glow" aria-hidden="true" />
        <div className="container final-cta__content">
          <span className="section-tag">COMECE DO JEITO CERTO</span>
          <h2>Os contatos certos podem economizar meses de tentativa e erro.</h2>
          <p>Tenha agora uma base confiável para comprar melhor, proteger sua margem e crescer.</p>
          <a className="button button--primary" href={checkoutUrl}>
            <span>QUERO RECEBER A LISTA</span>
            <small>Acesso digital imediato</small>
          </a>
        </div>
      </section>

      <footer>
        <div className="container footer-content">
          <div className="brand brand--small"><span className="brand__mark">AJ</span><span className="brand__copy"><strong>FORNECEDORES</strong><small>CONTATOS DE CONFIANÇA</small></span></div>
          <p>© 2026 AJ Fornecedores. Todos os direitos reservados.</p>
          <div><span>Produto digital</span><span>Acesso após a confirmação</span></div>
        </div>
      </footer>

      <div className="mobile-buybar">
        <div><span>ACESSO COMPLETO</span><b>{price}</b></div>
        <a href={checkoutUrl}>QUERO AGORA</a>
      </div>
    </main>
  );
}
