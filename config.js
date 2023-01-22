const config = {
    'maxPublishTime': 1*24*60, // In minutes
    'maxDescLen': 200, // Max number of characters
    'excludeTerms': ['Black Friday', 'Cyber Monday', 'NEET', 'monkeypox', 'covid', 'COVID', 'corona', 'Moosewala', 'Nupur Sharma', 'Morbi', 'Aftab', 'Shraddha', 'Moose Wala', 'iTunes', 'iPhone', 'iPad', 'smartwatch', 'iOS', 'Watch', 'macOS', 'watchOS', 'Prime Day', 'Garmin', 'Amazfit', 'Fitbit', 'Google Pixel', 'Pixel 6', 'Pixel 7', 'Sex Toy'], // Exclude any titles with these terms. Case-sensitive
    'includeTerms': [], // Include any titles with these terms. Overrides exclude terms. Case-sensitive
    'rssurl': {'Scitech': ['https://www.newscientist.com/subject/physics/feed/', 'https://www.newscientist.com/subject/technology/feed/', 'https://www.newscientist.com/subject/space/feed/'],
    'Gadgets': ['https://www.xda-developers.com/feed/::not any([x in entry["title"] for x in ["Moto ", "Honor", "Zenfone", "Zen fone", "Oppo", "Vivo", "POCO", "Poco", "OnePlus", "Nothing Phone", "Redmi", "MIUI", "Xperia"]]) and not ("Samsung" in entry["title"] and "Galaxy" in entry["title"]) and not ("Xiaomi" in entry["title"] and ("smartphone" in entry["title"] or "Smartphone" in entry["title"]))'],// 'https://www.wired.com/feed/category/gear/latest/rss', 'https://www.notebookcheck.net/RSS-Feed-Notebook-Reviews.8156.0.html::all([x not in entry["title"] for x in ["Moto ", "Honor", "iPhone", "Oppo", "Vivo", "POCO", "Poco", "OnePlus", "Nothing Phone", "Redmi", "MIUI", "Xperia", "Zenfone", "Zen fone"]]) and not ("Samsung" in entry["title"] and "Galaxy" in entry["title"]) and not (("Xiaomi" in entry["title"] or "Realme" in entry["title"] or "realme" in entry["title"]) and ("smartphone" in entry["title"] or "Smartphone" in entry["title"]))', 'https://www.notebookcheck.net/News.152.100.html::all([x not in entry["title"] for x in ["Moto ", "Honor", "iPhone", "Oppo", "Vivo", "POCO", "Poco", "OnePlus", "Nothing Phone", "Redmi", "MIUI", "Xperia", "Zenfone", "Zen fone"]]) and not ("Samsung" in entry["title"] and "Galaxy" in entry["title"]) and not (("Xiaomi" in entry["title"] or "Realme" in entry["title"] or "realme" in entry["title"]) and ("smartphone" in entry["title"] or "Smartphone" in entry["title"]))', 'http://feeds.feedburner.com/DiscoverTechnology'],    
    'Food/Health': ['https://www.newscientist.com/subject/health/feed/', 'https://phys.org/rss-feed/biology-news/agriculture/'],
    'Longform': ['https://www.newscientist.com/section/features/feed/', 'https://feeds.a.dj.com/rss/RSSWSJD.xml', 'https://api.quantamagazine.org/feed/', 'https://www.economist.com/the-economist-explains/rss.xml'],
    'Nature': ['https://usefulscience.org/rss.xml', 'https://www.newscientist.com/subject/earth/feed/', 'https://www.newscientist.com/subject/life/feed/', 'https://www.newscientist.com/subject/humans/feed/', 'https://www.economist.com/science-and-technology/rss.xml', 'http://feeds.feedburner.com/DiscoverLivingWorld', 'http://feeds.feedburner.com/DiscoverEnvironment'],
    'Business': [],//['https://www.wired.com/feed/category/business/latest/rss', 'https://www.economist.com/finance-and-economics/rss.xml', ],
    'Foss/Self-hosting': ['https://console.substack.com/feed', 'https://rss.beehiiv.com/feeds/iiTciQgHPG.xml'],//, 'noted.lol/rss'
    'History': ['https://phys.org/rss-feed/science-news/archaeology-fossils'],
    'News': ['https://indianexpress.com/print/front-page/feed/', 'https://www.mid-day.com/Resources/midday/rss/india-news.xml', 'https://feeds.a.dj.com/rss/RSSWorldNews.xml', 'swarajyamag.com::all([x not in entry["link"] for x in ["/movies/", "/newsletters/"]])']
    },
};
