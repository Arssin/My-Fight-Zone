import { TextsBlog } from './Texts/TextsBlog'
import { HeaderBlog } from './Header/HeaderBlog'
import { DataFetching } from '../../data/ufcranking'
import './Blog.scss'

export function Blog() {
    return (
        <div className="body">
            <HeaderBlog />
            <TextsBlog />
            <DataFetching />
        </div>
    )
}
