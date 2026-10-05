// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { removeCollection, removeToast } from '../redux/features/collectionSlice'

// const CollectionCard = ({ item }) => {
//     const dispatch = useDispatch()
//     const removeToCollection = (item) => {
//         dispatch(removeCollection(item.id))
//         dispatch(removeToast())
//     }
//     return (
//         <div>
//             <div className='w-80 h-80 bg-gray-600 rounded'>
//                 <div>
//                     {item.type == 'photo' ? <img src={item.src} alt="" /> : ''}
//                     {item.type == 'video' ? <video autoPlay loop src={item.src}></video> : ''}
//                     {item.type == 'gif' ? <img src={item.thumbnail} alt="" /> : ''}
//                 </div>
//                 <div>{item.title}</div>
//                 <button
//                     onClick={() => { removeToCollection }}
//                     className='active:scale-95'>Remove</button>
//             </div>
//         </div>
//     )
// }

// export default CollectionCard
import { useDispatch } from 'react-redux'
import { removeCollection } from '../redux/features/collectionSlice'
import { toast } from 'react-toastify'

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeCollection(item.id))
    toast.info('Removed from collection', { autoClose: 1500 })
  }

  return (
    <div className="group relative rounded-2xl overflow-hidden
                    bg-teal-800 shadow-lg hover:shadow-2xl
                    transition-all duration-500 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden">
        {item.type === 'photo' && (
          <img src={item.thumbnail} alt={item.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        )}
        {item.type === 'video' && (
          <video autoPlay muted loop playsInline poster={item.thumbnail}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
            <source src={item.src} />
          </video>
        )}
        {item.type === 'gif' && (
          <img src={item.thumbnail} alt={item.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t
                        from-teal-900/90 via-transparent to-transparent" />

        <button
          onClick={handleRemove}
          aria-label="Remove"
          className="absolute top-3 right-3 w-10 h-10 rounded-full
                     bg-ember-500/90 backdrop-blur text-cream-100 text-lg
                     flex items-center justify-center
                     opacity-0 group-hover:opacity-100
                     hover:bg-ember-600 transition-all duration-300
                     active:scale-90"
        >
          ×
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-cream-100 font-medium text-sm line-clamp-2">
            {item.title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard