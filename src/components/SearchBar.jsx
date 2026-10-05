// import React, { useState } from 'react'
// import { useDispatch, } from "react-redux"
// import { setQuery } from '../redux/features/searchSlice'
// const SearchBar = () => {
//     const [text, setText] = useState('')
//     const dispatch = useDispatch()
//     function submitHandler(e) {
//         e.preventDefault()
//         dispatch(setQuery(text))
//         // console.log(text);
//         setText('')

//     }
//     return (
//         <div>
//             <form onSubmit={(e) => submitHandler(e)} className='flex gap-5 p-10 bg-gray-900'>
//                 <input className='border-2 px-4 py-2 text-xl rounded outline-none w-full text-white' type="text" placeholder='Search Anything you want...,' required value={text} onChange={(e) => setText(e.target.value)} />
//                 <button className='border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer active:scale-95 text-white'>Search</button>
//             </form>
//         </div>
//     )
// }

// export default SearchBar
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  function submitHandler(e) {
    e.preventDefault()
    if (!text.trim()) return
    dispatch(setQuery(text))
    setText('')
  }

  return (
    <section className="relative px-6 pt-12 pb-6">
      <div className="max-w-5xl mx-auto text-center">

        <div className="mb-8 animate-fade-up">
          <h2 className="font-display text-5xl md:text-6xl font-black text-teal-800 leading-[1.05] mb-3">
            Find your <span className="text-ember-500 italic">visual</span> story
          </h2>
          <p className="text-teal-700/70 text-lg max-w-xl mx-auto">
            Search photos, videos & GIFs — save what moves you.
          </p>
        </div>

        <form
          onSubmit={submitHandler}
          className="glass-card max-w-3xl mx-auto flex items-center gap-2 p-2 animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="pl-4 text-ember-500 text-xl">🔍</div>
          <input
            type="text"
            placeholder="Try 'mountains', 'ocean', 'city lights'..."
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 bg-transparent px-3 py-3 text-lg text-teal-800
                       placeholder:text-teal-700/40 outline-none font-medium"
          />
          <button type="submit" className="btn-ember text-sm">
            Search
          </button>
        </form>

        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {['Nature', 'Architecture', 'People', 'Abstract', 'Travel'].map(tag => (
            <button
              key={tag}
              onClick={() => dispatch(setQuery(tag))}
              className="px-4 py-1.5 text-sm rounded-full border border-teal-800/20
                         text-teal-800/80 hover:bg-ember-500 hover:text-cream-100
                         hover:border-ember-500 transition-all duration-300"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SearchBar