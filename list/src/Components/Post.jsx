import './app.css'

function Post({ data }) {
    return (
        <table className="table">
            <tr className="head">
                <th className="headId">ID</th>
                <th className="headTitle">Title</th>
                <th className="headBody">Body</th>
            </tr>
            <tr className="vidus">
                <td className="id">{data.id}</td>
                <td className="title">{data.title}</td>
                <td className="body">{data.body}</td>
            </tr>
        </table>
    );
}

export default Post;