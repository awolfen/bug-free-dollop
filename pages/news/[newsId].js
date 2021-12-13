import { useRouter } from "next/router";

//here the routing is set to domain.com/news/[dynamic value]

const DetailsPage = () => {
    const router = useRouter();

    const newsId = router.query.newsId;

    //could fetch news item with newsId from backend, for example

    return <h1>{newsId}</h1>
};

export default DetailsPage;