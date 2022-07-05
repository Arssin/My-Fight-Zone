import { TextsBlog } from './Texts/TextsBlog'
import { HeaderBlog } from './Header/HeaderBlog'
import './Blog.scss'

export function Blog() {
    return (
        <div className="body">
            <HeaderBlog />
            <TextsBlog />
        </div>
    )
}
