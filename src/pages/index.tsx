import { MainDefault } from "@/components/Home/MainDefault/MainDefault";
import Layout from "@/components/UI/Layout";
import { ICourse } from "@/interface/courses.interface";
import { GetStaticProps, NextPage } from "next";

interface PropsHome {
    courses: ICourse[]
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const responseCourses: ICourse[] = await fetch(process.env.URL + `/docs/courses.json`).then((r) => r.json());
        return {
            props: {
                courses: responseCourses
            },
            revalidate: 60
        };
    } catch (error) {
        console.error("error when fetching on Home page:", error);
        return {
            notFound: true
        };
    }
}

const Home: NextPage<PropsHome> = ({ courses }) => {

    return (
        <Layout meta={{}}>
            <MainDefault data={courses} />
        </Layout>
    );
}
export default Home
