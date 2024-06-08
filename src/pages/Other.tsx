
import { RenderWithRouter } from "@/components/Home/RenderWithRouter";
import Layout from "@/components/UI/Layout";
import { useFetchData } from "@/hooks/useFetchData";

const FETCH_URL = `${process.env.appUrl}/docs/courses.json`;


const Other = () => {
    const { data, isLoading } = useFetchData(FETCH_URL);

    const renderTitle = (title: string) => <h1 style={{ fontSize: '4em' }}>{title}</h1>;

    return (
        <Layout meta={{}}>
            {
                !data ? renderTitle('Ошибка загрузки') :
                    isLoading ? renderTitle('Загружаем...') :
                        <RenderWithRouter data={data} />
            }
        </Layout>
    )
}
export default Other