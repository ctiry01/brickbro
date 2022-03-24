import {SearchesBox} from "./components/molecules/SearchesBox";
import {Map} from "./components/atoms/Map";
import {Layout} from "./components/atoms/Layout";
import {useRouter} from "next/router";
import {useSearchState} from "../context/SearchContext";

export default function Home() {
    const router = useRouter();
    const SearchContextState = useSearchState();

    return (
        <Layout>
            <Map defaultValue={SearchContextState.list[SearchContextState.list.length -1]}/>
            <SearchesBox/>
        </Layout>
    )
}
