export default function Post ({data,liker,deletePost}) {

    return <>
        <div className="post">
            <div>
                <h2>{data.titre}</h2>
                <p>{data.description}</p>
            </div>
            <div className="btn">
                <button className="liker" onClick={() => liker(data)} >{data.liker ? "Dejà liké" : "Liké"}</button>
                <button className="delete" onClick={() => deletePost(data.id)}>Delete</button>
            </div>
        </div>
    </>
}