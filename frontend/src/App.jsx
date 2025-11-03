import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur animi, nam consequuntur sint deserunt dolor aut, iste libero itaque officiis numquam! Quisquam aperiam sunt fugit quibusdam libero magni maxime? Ipsa repellat aspernatur nostrum molestias magni animi veniam voluptatibus voluptatem aliquam tempora dolorum, ipsum eum impedit placeat inventore natus quos dolor explicabo est quia, reiciendis eius autem incidunt sapiente. Vel rerum eveniet adipisci natus deserunt voluptatibus quas minus tenetur? Accusantium totam enim, aliquam alias error maiores corporis earum sunt non iure animi sequi perferendis, optio laboriosam, cum hic eveniet beatae ipsum sapiente porro deleniti illum tempora cumque? Ea repellat qui cumque vero nemo fuga dicta, rerum quam corporis illo earum recusandae quibusdam saepe quod hic inventore unde eaque autem alias tempore possimus reprehenderit velit nesciunt. Minus modi harum illum laboriosam repellendus nisi, molestias, odio porro perspiciatis itaque officiis reprehenderit similique recusandae, temporibus veniam voluptates nulla. Velit dolores, molestias necessitatibus incidunt exercitationem quisquam alias, ipsam laudantium impedit magnam doloribus aspernatur eveniet, tempora perferendis natus possimus laborum quibusdam cupiditate? Delectus illum repellendus, nisi quia est similique ratione excepturi modi quod ipsa ea? Praesentium perspiciatis impedit soluta qui fugit. Tempore, aliquid ea explicabo dolores natus numquam pariatur. Eos ea impedit expedita iste, dolores fugit tempore corrupti. Veritatis quod perspiciatis impedit molestiae amet doloribus cum praesentium harum? Praesentium autem rem, alias officia ipsum maiores sunt veritatis quidem perferendis modi. Omnis, vero assumenda ut delectus iure consequuntur rerum id animi quia, autem nemo dolorum blanditiis labore exercitationem itaque, debitis tempora rem modi nisi illo sit facilis? Excepturi totam eveniet omnis error dolorem molestiae culpa in adipisci quis quas tempora deleniti deserunt, unde recusandae inventore est, rem nisi consectetur illo! Odio commodi, iusto odit nam facere quas doloribus explicabo eius, error fuga architecto vero et at obcaecati. Est ea, ratione, voluptatibus debitis quia aliquam perferendis commodi sit enim soluta accusamus recusandae deserunt fugiat pariatur doloremque sapiente numquam consequatur! Culpa, hic accusamus omnis odio atque delectus ea porro rem itaque eligendi doloremque dolorem ex quisquam laborum aperiam recusandae esse veniam. Nemo soluta fugiat magnam minima ex est! Possimus illo ducimus tempora atque quas voluptas saepe omnis a, deserunt neque totam eaque, dolores, culpa dolorum facilis nostrum? Autem cupiditate porro nihil molestiae fugiat voluptates corporis qui voluptas, enim voluptate beatae quidem nulla, inventore voluptatum illum eius consectetur, natus debitis tempora eaque? Rem quod, porro tenetur voluptate perferendis iste harum ex eligendi modi nihil illum quasi quos voluptatibus quisquam minus totam ullam sunt provident non velit inventore quae excepturi eos iusto. Ab ipsam consequuntur obcaecati fugit hic veniam, perferendis consequatur, autem laboriosam eaque velit saepe, incidunt minima eligendi unde ipsa voluptatum provident minus sunt ad laudantium reiciendis eveniet iusto non? Qui culpa debitis veritatis illo assumenda! Optio natus et sit ratione totam iste vero repellat exercitationem omnis enim, reprehenderit eaque temporibus harum magni ullam architecto laudantium velit rerum, ducimus, commodi facilis doloribus dolorum a! Dolorum in dolores, cum tempore doloremque consectetur tenetur placeat provident nam fugit vitae possimus quo, perferendis consequatur esse porro similique aspernatur suscipit iste doloribus accusamus inventore.</p>
      </div>
      
    </>
  )
}

export default App
