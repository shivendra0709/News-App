// Mock data for testing and fallback when API is unavailable
export const mockArticles = {
  general: [
    {
      source: { id: 'bbc-news', name: 'BBC News' },
      author: 'John Doe',
      title: 'Breaking News: Technology Advances Transform Daily Life',
      description: 'Latest developments in artificial intelligence and machine learning are reshaping industries worldwide and changing how we work.',
      url: 'https://www.bbc.com/news/technology',
      urlToImage: 'https://images.unsplash.com/photo-1677442d019e157f97b5f71bb85f8dda48a5e3519',
      publishedAt: new Date().toISOString(),
      content: 'Artificial intelligence continues to advance at a rapid pace. New breakthroughs in machine learning are enabling computers to understand and process information more efficiently than ever before. This technology is being applied across various industries including healthcare, finance, and entertainment. Experts predict that AI will continue to revolutionize how we work and live in the coming years.'
    },
    {
      source: { id: 'cnn', name: 'CNN' },
      author: 'Jane Smith',
      title: 'Global Climate Summit Reaches Historic Agreement',
      description: 'World leaders announce unprecedented commitments to combat climate change and reduce carbon emissions.',
      url: 'https://www.cnn.com/world/climate',
      urlToImage: 'https://images.unsplash.com/photo-1559027615-cd2628902d4a',
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
      content: 'In a landmark decision, world leaders have agreed on sweeping climate action measures. The accord represents the most significant commitment to environmental protection in recent history. Countries have pledged to reduce their carbon footprint and transition to renewable energy sources. This historic agreement comes as global temperatures continue to rise and extreme weather events become more frequent.'
    },
    {
      source: { id: 'bbc', name: 'BBC' },
      author: 'Michael Brown',
      title: 'New Vaccine Shows Promise in Medical Trials',
      description: 'Researchers announce successful early-stage trials of a new vaccine candidate.',
      url: 'https://www.bbc.com/news/health',
      urlToImage: 'https://images.unsplash.com/photo-1576091160550-112173f7f869',
      publishedAt: new Date(Date.now() - 172800000).toISOString(),
      content: 'A major pharmaceutical company announced encouraging results from Phase II trials of their new vaccine. The trials showed high efficacy and minimal side effects in thousands of participants. This breakthrough could accelerate vaccine distribution timelines and help combat the ongoing health crisis. The company plans to move forward with Phase III trials next quarter.'
    },
    {
      source: { id: 'nyt', name: 'NY Times' },
      author: 'Emily Johnson',
      title: 'Economic Growth Accelerates Globally',
      description: 'Economists report stronger than expected economic growth in major world markets.',
      url: 'https://www.nytimes.com/business',
      urlToImage: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf35f',
      publishedAt: new Date(Date.now() - 259200000).toISOString(),
      content: 'Global economic indicators are showing signs of strong recovery. GDP growth has exceeded projections in multiple regions, driven by increased consumer spending and business investment. Central banks are monitoring inflation concerns while maintaining accommodative monetary policies. Analysts predict continued growth momentum through the end of the year.'
    },
    {
      source: { id: 'guardian', name: 'The Guardian' },
      author: 'David Wilson',
      title: 'Space Agency Announces New Mars Mission',
      description: 'Historic mission aims to establish first human settlement on the red planet.',
      url: 'https://www.theguardian.com/science/space',
      urlToImage: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2',
      publishedAt: new Date(Date.now() - 345600000).toISOString(),
      content: 'In a bold announcement, space agencies have unveiled plans for humanity\'s first permanent settlement on Mars. The mission will involve multiple launches and construction phases over the next decade. Scientists and engineers from around the world will collaborate on this unprecedented endeavor.'
    }
  ],
  technology: [
    {
      source: { id: 'techcrunch', name: 'TechCrunch' },
      author: 'Mike Tech',
      title: 'New AI Model Achieves Breakthrough in Natural Language Understanding',
      description: 'Researchers announce a revolutionary AI model that demonstrates human-level performance in language tasks.',
      url: 'https://techcrunch.com/category/artificial-intelligence/',
      urlToImage: 'https://images.unsplash.com/photo-1677442d019e157f97b5f71bb85f8dda48a5e3519',
      publishedAt: new Date(Date.now() - 172800000).toISOString(),
      content: 'A team of AI researchers has unveiled a groundbreaking language model that demonstrates unprecedented capabilities in understanding and generating human language. The model outperforms previous systems on numerous benchmarks and shows remarkable ability in complex reasoning tasks. This breakthrough opens new possibilities for AI applications across multiple domains.'
    },
    {
      source: { id: 'theverge', name: 'The Verge' },
      author: 'Sarah Tech',
      title: 'New Startup Raises $100 Million in Funding Round',
      description: 'An emerging tech startup has secured significant funding to expand its innovative platform globally.',
      url: 'https://www.theverge.com/startups',
      urlToImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      publishedAt: new Date(Date.now() - 259200000).toISOString(),
      content: 'A promising technology startup has announced a major funding round, raising $100 million from leading venture capital firms. The company plans to use this capital to expand its operations globally and accelerate product development. This investment reflects the growing confidence in the startup ecosystem and the potential of innovative solutions.'
    },
    {
      source: { id: 'wired', name: 'Wired' },
      author: 'Tom Cyber',
      title: 'Quantum Computing Reaches Major Milestone',
      description: 'Scientists demonstrate practical applications of quantum computing in solving real-world problems.',
      url: 'https://www.wired.com/category/science/',
      urlToImage: 'https://images.unsplash.com/photo-1620712014215-c8ee92cf4547',
      publishedAt: new Date(Date.now() - 345600000).toISOString(),
      content: 'Quantum computing researchers have achieved a significant milestone by demonstrating practical applications in drug discovery and materials science. The quantum processors solved complex problems that would take conventional computers thousands of years to complete. Major tech companies are investing heavily in this emerging technology.'
    },
    {
      source: { id: 'forbes-tech', name: 'Forbes Tech' },
      author: 'Lisa Innovation',
      title: '5G Networks Enable New Wave of IoT Devices',
      description: 'Ultra-fast mobile networks pave the way for billions of connected devices.',
      url: 'https://www.forbes.com/technology/',
      urlToImage: 'https://images.unsplash.com/photo-1606832159372-2defb7a1d7f5',
      publishedAt: new Date(Date.now() - 432000000).toISOString(),
      content: 'The rollout of 5G networks is accelerating the adoption of Internet of Things technologies. Connected devices are becoming increasingly sophisticated and prevalent across smart homes, cities, and industries. The potential market value is estimated to exceed trillions of dollars over the next decade.'
    },
    {
      source: { id: 'techradar', name: 'TechRadar' },
      author: 'Chris Digital',
      title: 'Cybersecurity Threats Growing Exponentially',
      description: 'Experts warn of increasing sophistication in cyber attacks targeting businesses.',
      url: 'https://www.techradar.com/computing/cybersecurity',
      urlToImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      publishedAt: new Date(Date.now() - 518400000).toISOString(),
      content: 'Cybersecurity experts report a surge in sophisticated cyber attacks targeting critical infrastructure and businesses. New malware variants and attack techniques are emerging at an alarming rate. Organizations are urged to strengthen their security postures and implement comprehensive defense strategies.'
    },
    {
      source: { id: 'engadget', name: 'Engadget' },
      author: 'Alex Gadgets',
      title: 'Next Generation Chips Push Computing Boundaries',
      description: 'New semiconductor technology promises faster speeds and better efficiency.',
      url: 'https://www.engadget.com/computing/',
      urlToImage: 'https://images.unsplash.com/photo-1624025720245-e93c50e41b90',
      publishedAt: new Date(Date.now() - 604800000).toISOString(),
      content: 'Chip manufacturers have announced breakthrough advances in semiconductor design and manufacturing. The new generation of processors will offer significant improvements in speed, power efficiency, and AI capabilities. These advancements will power the next wave of consumer electronics and data center equipment.'
    }
  ],
  business: [
    {
      source: { id: 'business-daily', name: 'Business Daily' },
      author: 'Robert Finance',
      title: 'Stock Markets Hit Record Highs',
      description: 'Global equity markets reach unprecedented levels amid economic optimism.',
      url: 'https://www.bloomberg.com/markets',
      urlToImage: 'https://images.unsplash.com/photo-1611080626919-bc8985bc9334',
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
      content: 'Global stock markets continue their upward trajectory with major indices hitting all-time highs. Investors are optimistic about economic growth prospects and corporate earnings. Central banks are maintaining accommodative policies supporting the market rally. Analysts expect volatility to remain contained in the near term.'
    },
    {
      source: { id: 'forbes', name: 'Forbes' },
      author: 'Victoria Business',
      title: 'Tech Giants Report Record Profits',
      description: 'Major technology companies exceed analyst expectations in latest earnings.',
      url: 'https://www.forbes.com/business/',
      urlToImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
      publishedAt: new Date(Date.now() - 172800000).toISOString(),
      content: 'Leading technology companies announced record quarterly profits, driven by strong demand for their products and services. Cloud computing, advertising, and e-commerce businesses showed particularly strong growth. The companies are investing heavily in research and development for future innovations.'
    },
    {
      source: { id: 'bloomberg', name: 'Bloomberg' },
      author: 'William Market',
      title: 'M&A Activity Reaches All-Time High',
      description: 'Corporate mergers and acquisitions surge to unprecedented levels.',
      url: 'https://www.bloomberg.com/news/articles/',
      urlToImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      publishedAt: new Date(Date.now() - 259200000).toISOString(),
      content: 'Merger and acquisition activity has reached record levels as companies pursue growth through consolidation. Strategic acquisitions in technology and healthcare sectors are driving the surge. Financial advisors predict this trend will continue through the year given favorable financing conditions.'
    },
    {
      source: { id: 'reuters', name: 'Reuters' },
      author: 'Patricia Trade',
      title: 'Global Trade Agreements Boost Commerce',
      description: 'New trade deals open markets and reduce tariffs between nations.',
      url: 'https://www.reuters.com/business/',
      urlToImage: 'https://images.unsplash.com/photo-1559027615-cd2628902d4a',
      publishedAt: new Date(Date.now() - 345600000).toISOString(),
      content: 'Governments have negotiated comprehensive trade agreements that reduce tariffs and facilitate cross-border commerce. These deals are expected to boost economic growth and employment in participating nations. Business leaders welcome the improved trade environment and increased market access.'
    },
    {
      source: { id: 'wall-street-journal', name: 'WSJ' },
      author: 'Kenneth Banking',
      title: 'Central Banks Hold Interest Rates Steady',
      description: 'Monetary policy remains supportive of economic growth.',
      url: 'https://www.wsj.com/finance/',
      urlToImage: 'https://images.unsplash.com/photo-1518611505868-48510604a239',
      publishedAt: new Date(Date.now() - 432000000).toISOString(),
      content: 'Central banks across the globe held their benchmark interest rates unchanged, maintaining accommodative monetary policy. Officials signaled continued support for economic recovery while monitoring inflation trends. Markets responded positively to the policy guidance.'
    },
    {
      source: { id: 'financial-times', name: 'Financial Times' },
      author: 'Margaret Economy',
      title: 'Inflation Moderates as Supply Chains Normalize',
      description: 'Consumer price pressures ease amid improved supply conditions.',
      url: 'https://www.ft.com/markets',
      urlToImage: 'https://images.unsplash.com/photo-1559508615-cd4628902d4a',
      publishedAt: new Date(Date.now() - 518400000).toISOString(),
      content: 'Inflation readings have moderated significantly as global supply chains normalize and energy prices stabilize. Central banks are reassessing their policy trajectories in light of the improved inflation outlook. Economists now expect more measured policy adjustments going forward.'
    }
  ],
  entertainment: [
    {
      source: { id: 'variety', name: 'Variety' },
      author: 'Amanda Movie',
      title: 'Blockbuster Film Breaks Box Office Records',
      description: 'Latest superhero epic shatters opening weekend records worldwide.',
      url: 'https://variety.com/movie/',
      urlToImage: 'https://images.unsplash.com/photo-1533090481720-856c6ebace4d',
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
      content: 'A major studio blockbuster has shattered box office records, earning over $100 million in its opening weekend globally. The film has captured audiences with its spectacular action sequences and compelling storytelling. Industry analysts predict it will become one of the highest-grossing films of all time.'
    },
    {
      source: { id: 'hollywoodreporter', name: 'Hollywood Reporter' },
      author: 'Brian Celebrity',
      title: 'Award Season Kicks Off with Major Announcements',
      description: 'Film and television industry prepare for prestigious awards ceremonies.',
      url: 'https://www.hollywoodreporter.com/news/',
      urlToImage: 'https://images.unsplash.com/photo-1485095329183-d0ddc3affcee',
      publishedAt: new Date(Date.now() - 172800000).toISOString(),
      content: 'The entertainment industry is preparing for award season with major films and shows making their cases for recognition. Actors, directors, and producers are launching campaigns ahead of key voting periods. Industry insiders predict a competitive season with several dark horse contenders.'
    },
    {
      source: { id: 'deadline', name: 'Deadline' },
      author: 'Diana Star',
      title: 'Streaming Platform Dominates Content Production',
      description: 'Major streaming service announces slate of new original series.',
      url: 'https://deadline.com/tv/',
      urlToImage: 'https://images.unsplash.com/photo-1495515821142-a91b90db8d69',
      publishedAt: new Date(Date.now() - 259200000).toISOString(),
      content: 'A leading streaming platform has announced an ambitious slate of original content spanning multiple genres and formats. The company is investing billions in content production to compete with traditional studios. Industry observers note the shift in media consumption patterns favoring streaming services.'
    },
    {
      source: { id: 'billboard', name: 'Billboard' },
      author: 'Marcus Music',
      title: 'Music Festival Draws Record Attendance',
      description: 'Major festival showcases top artists to enthusiastic crowds.',
      url: 'https://www.billboard.com/music/',
      urlToImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819',
      publishedAt: new Date(Date.now() - 345600000).toISOString(),
      content: 'A premier music festival has broken attendance records with performances from top artists worldwide. The event showcased diverse musical genres and emerging talent alongside established stars. Festival organizers plan to expand the event next year based on its success.'
    },
    {
      source: { id: 'variety-tv', name: 'Variety TV' },
      author: 'Sophie Drama',
      title: 'Television Series Achieves Critical Acclaim',
      description: 'Highly anticipated drama series receives universal praise from critics.',
      url: 'https://variety.com/tv/',
      urlToImage: 'https://images.unsplash.com/photo-1489599849228-ed5169598e4e',
      publishedAt: new Date(Date.now() - 432000000).toISOString(),
      content: 'A highly anticipated television drama has debuted to critical acclaim, with reviewers praising its writing, performances, and production value. The series has generated significant cultural conversation and social media engagement. Networks are already planning additional seasons based on viewer response.'
    },
    {
      source: { id: 'entertainment-weekly', name: 'Entertainment Weekly' },
      author: 'Jessica Entertainment',
      title: 'Celebrity Collaboration Produces Hit Album',
      description: 'Famous artists team up for surprise musical project.',
      url: 'https://ew.com/music/',
      urlToImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
      publishedAt: new Date(Date.now() - 518400000).toISOString(),
      content: 'Two of the music industry\'s biggest stars have joined forces for a surprise collaboration that has immediately topped music charts. The album showcases both artists\' unique talents while creating something fresh and innovative. Fans have responded enthusiastically to the unexpected project.'
    }
  ]
};

// Flatten array for backward compatibility
export const mockArticlesArray = [
  ...mockArticles.general,
  ...mockArticles.technology,
  ...mockArticles.business,
  ...mockArticles.entertainment
];
