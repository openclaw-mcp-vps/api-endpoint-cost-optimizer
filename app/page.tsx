export default function Home() {
  const faqs = [
    {
      q: 'How do I get my API logs into the tool?',
      a: 'Send logs via our webhook endpoint or upload a CSV/JSON file directly from your dashboard. We support common formats from AWS, GCP, and custom APIs.'
    },
    {
      q: 'Which APIs and providers are supported?',
      a: 'Any HTTP API — REST or GraphQL. Works with OpenAI, Stripe, Twilio, your own microservices, or any third-party provider that generates request logs.'
    },
    {
      q: 'Can I cancel my subscription anytime?',
      a: 'Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Cost Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find your most expensive<br />
          <span className="text-[#58a6ff]">API calls</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Ingest your API logs, instantly see which endpoints are draining your budget, and get actionable caching strategies to cut costs — without changing your code.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Optimizing — $19/mo
        </a>
        <p className="text-xs text-[#484f58] mt-3">No credit card required for 7-day trial. Cancel anytime.</p>
      </section>

      {/* Feature highlights */}
      <section className="grid sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '📊', title: 'Cost Per Endpoint', desc: 'See exactly which routes cost the most across all your API providers.' },
          { icon: '⚡', title: 'Cache Suggestions', desc: 'Automated recommendations for TTL, CDN, and in-memory caching layers.' },
          { icon: '🔔', title: 'Spend Alerts', desc: 'Get notified before a runaway endpoint blows your monthly budget.' }
        ].map(f => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, flat pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · billed monthly</p>
          <ul className="text-left space-y-2 mb-8">
            {[
              'Unlimited API log ingestion',
              'Cost breakdown per endpoint',
              'Automated cache recommendations',
              'Webhook + CSV/JSON upload',
              'Spend alerts & anomaly detection',
              'Email support'
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(faq => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] mt-20">
        © {new Date().getFullYear()} API Endpoint Cost Optimizer. All rights reserved.
      </footer>
    </main>
  )
}
