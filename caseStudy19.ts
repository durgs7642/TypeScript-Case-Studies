import "reflect-metadata";
import { Service, Inject, Container } from "typedi";


interface NewsSource {
    fetchArticles(): Promise<string[]>;
}


@Service()
class RSSFeedSource implements NewsSource {
    async fetchArticles(): Promise<string[]> {
        return ["RSS: Article 1", "RSS: Article 2"];
    }
}


@Service()
class APISource implements NewsSource {
    async fetchArticles(): Promise<string[]> {
        return ["API: Article A", "API: Article B"];
    }
}

@Service()
class NewsAggregator {
    constructor(
        @Inject(() => RSSFeedSource) private source: NewsSource
    ) { }

    async getLatestArticles() {
        const articles = await this.source.fetchArticles();
        articles.forEach(article => console.log(article));
    }
}

async function func(){
const aggregator1 = Container.get(NewsAggregator);
console.log("Using RSS Source:");
await aggregator1.getLatestArticles();


// 5️⃣ Swap to API Source (IMPORTANT)
Container.set(RSSFeedSource, new APISource());

const aggregator2 = Container.get(NewsAggregator);
console.log("\nUsing API Source:");
await aggregator2.getLatestArticles();


class MockSource implements NewsSource {
    async fetchArticles(): Promise<string[]> {
        return ["Mock: Test Article"];
    }
}

Container.set(RSSFeedSource, new MockSource());

const aggregator3 = Container.get(NewsAggregator);
console.log("\nUsing Mock Source:");
await aggregator3.getLatestArticles();


}

func();