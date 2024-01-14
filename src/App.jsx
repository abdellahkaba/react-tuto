import React, { useState } from 'react'
import Compteur from './components/forms/Compteur'
import Navbar from './components/forms/Navbar'
import Post from './components/forms/Post'


export default function App() {
    const [posts,setPosts] = useState([
      {
        id: 1,
        titre: "Titre 1",
        description: "delectus aut autem",
        liker: false
    },
    {
        id: 2,
        titre: "Titre 2 ",
        description: "quis ut nam facilis et officia qui",
        liker: false
    },
    {
        id: 3,
        titre: "Titre 3",
        description: "fugiat veniam minus",
        liker: false
    },
    {
        id: 4,
        titre: "Titre 4",
        description: "et porro tempora",
        liker: true
    },
    
    ])

  
    const liker = (data) => {
        const donnerCopier = [...posts]
        const index = posts.indexOf(data)
        donnerCopier[index] = {...posts[index],
        liker: !posts[index].liker}
        setPosts(donnerCopier)
        console.log(donnerCopier)
    }
   
    const deletePost = (id) => {
        const newData = posts.filter((p) => p.id != id)
        setPosts(newData)
    }
    const nbrLike = posts.filter((p) => p.liker)
  return <>
        <div className='App'>
          <Navbar nbrLike= {nbrLike.length} />
            {
              posts.map((p) =>(
                <Post data={p} key={p.id} liker={liker} deletePost={deletePost} />
              ))
            }
            
        </div>
  </>
}
 