
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    category: "MARKET BASICS",
    title: "Understanding the Stock Market",
    description:
      "Learn how shares, stock exchanges, buyers and sellers work together in the stock market.",
    readTime: "5 min read",
    icon: "📈",
    theme: "market"
  },
  {
    id: 2,
    category: "INVESTING",
    title: "Why Diversification Matters",
    description:
      "Discover how spreading investments across different companies can help manage risk.",
    readTime: "4 min read",
    icon: "🌱",
    theme: "investing"
  },
  {
    id: 3,
    category: "PERSONAL FINANCE",
    title: "Building a Saving Habit",
    description:
      "Explore budgeting, emergency savings and simple habits for long-term financial planning.",
    readTime: "6 min read",
    icon: "💰",
    theme: "finance"
  },
  {
    id: 4,
    category: "STOCK ANALYSIS",
    title: "Understanding Stock Prices",
    description:
      "Learn about the factors that can influence stock prices, including demand and company performance.",
    readTime: "5 min read",
    icon: "📊",
    theme: "analysis"
  },
  {
    id: 5,
    category: "INVESTING",
    title: "Long-Term vs Short-Term Investing",
    description:
      "Understand the differences between long-term investing and short-term trading strategies.",
    readTime: "7 min read",
    icon: "🎯",
    theme: "strategy"
  },
  {
    id: 6,
    category: "FINANCIAL EDUCATION",
    title: "What Is a Portfolio?",
    description:
      "Discover how a portfolio helps you track the stocks you own and understand their combined value.",
    readTime: "4 min read",
    icon: "💼",
    theme: "portfolio"
  }
];

function News() {
  return (
    <main className="news-page">
      <section className="news-hero">
        <div className="container py-5">
          <span className="news-eyebrow">
            LEARN. PLAN. GROW.
          </span>

          <h1 className="news-heading mt-3">
            Financial knowledge, <span>made simple.</span>
          </h1>

          <p className="news-intro">
            Explore investing concepts, stock market basics and
            personal finance guides to build your financial knowledge.
          </p>

          <div className="d-flex flex-wrap gap-3 mt-4">
            <Link to="/companies" className="btn btn-success btn-lg">
              Explore Stocks
            </Link>

            <Link
              to="/portfolio"
              className="btn btn-outline-success btn-lg"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-4 py-md-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-2 mb-4">
          <div>
            <span className="news-eyebrow">
              KNOWLEDGE HUB
            </span>

            <h2 className="section-title mt-2 mb-1">
              Latest Learning Guides
            </h2>

            <p className="text-secondary mb-0">
              Simple guides for your investing journey.
            </p>
          </div>

          <span className="news-count">
            {articles.length} learning guides
          </span>
        </div>

        <div className="row g-4">
          {articles.map((article) => (
            <div className="col-12 col-md-6 col-lg-4" key={article.id}>
              <article className="news-card h-100">
                <div className={`news-illustration ${article.theme}`}>
                  <span className="news-number">
                    GUIDE {String(article.id).padStart(2, "0")}
                  </span>

                  <span className="news-icon" aria-hidden="true">
                    {article.icon}
                  </span>

                  <span className="news-decoration" aria-hidden="true">
                    ✦
                  </span>
                </div>

                <div className="news-card-body">
                  <span className="news-category">
                    {article.category}
                  </span>

                  <h3 className="news-card-title">
                    {article.title}
                  </h3>

                  <p className="news-description">
                    {article.description}
                  </p>

                  <div className="news-card-footer">
                    <span className="news-read-time">
                      {article.readTime}
                    </span>

                    <Link
                      to="/companies"
                      className="news-read-link"
                      aria-label={`Explore stocks after reading ${article.title}`}
                    >
                      Explore stocks →
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="news-disclaimer mt-4">
          <strong>Learning note:</strong> These are educational guides,
          not live news articles or financial advice. All market figures
          elsewhere in this demo are illustrative sample data.
        </div>
      </section>
    </main>
  );
}

export default News;
