// import React from 'react'
// import SearchBar from '../components/SearchBar'
// import Tabs from '../components/Tabs'
// import ResultGrid from '../components/ResultGrid'
// import { useSelector } from 'react-redux'
// import Navbar from '../components/Navbar'
// const Home = () => {
//     const { query } = useSelector((store) => store.search)
//     return (
//         <div>
//            <Navbar/>
//             <SearchBar />
//             {query != '' ? <div>
//                 <Tabs />
//                 <ResultGrid />
//             </div> : ''}
//         </div>
//     )
// }

// export default Home
import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'

const Home = () => {
  const { query } = useSelector((store) => store.search)

  return (
    <div className="min-h-screen">
      <Navbar />
      <SearchBar />
      {query !== '' && (
        <>
          <Tabs />
          <ResultGrid />
        </>
      )}
    </div>
  )
}

export default Home