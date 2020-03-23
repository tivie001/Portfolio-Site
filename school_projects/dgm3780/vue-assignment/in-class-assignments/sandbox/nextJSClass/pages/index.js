import Link from "next/link";
import Layout from "../comps/MyLayout";
import fetch from "isomorphic-unfetch";

const PostLink = props => {
    return (
        <li>
            <Link href={'/post/p[id]'} as={`p/${props.id}`}>
                <a>{props.name}</a>
            </Link>
        </li>
    )
};

const Index = props => {
    return (
        <Layout>
            <p>Hey, this the layout component!</p>
            <ul>
                {props.shows.map(show => (
                    <PostLink key={show.id} id={show.id} name={show.name}/>
                ))}
            </ul>
        </Layout>
    )
};

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    console.log(data);
    return { shows: data.map(el => el.show) }
};
export default Index;