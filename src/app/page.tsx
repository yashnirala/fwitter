
import React from 'react'
import LeftSidebar from './components/LeftSidebar'

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">

        <LeftSidebar />
        
        <main className='fixed ml-[280px] w-[600px] h-full flex-col border-l border-r border-gray-700 pl-1.5'>
          <h1 className='text-3xl font-bold'>Home</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum hic consequatur dignissimos doloribus eligendi cupiditate itaque minima expedita, unde nostrum ratione sapiente corporis tempore nisi distinctio sit. Iusto dolor, soluta odio labore nihil assumenda eius repellendus perspiciatis, ducimus eveniet est accusamus quisquam optio cupiditate, nostrum dolores deserunt culpa aspernatur magnam.</p>
        </main>
        
        <section className="fixed ml-[890px] w-[350px]">
          <div className='mb-5'></div>
          <h1>Trending Section</h1>
          <div className='text-[10px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quibusdam harum magnam! Eos iste nulla minus voluptatum, a quis consequuntur earum ipsam nihil, maxime ad sapiente laboriosam rerum vel dolorem magni veniam odio labore architecto eligendi animi non et. At quam dolores dignissimos sint ducimus sunt id. Assumenda enim qui esse iste, animi quo recusandae totam deserunt quae adipisci fugiat perspiciatis laboriosam sed necessitatibus, iure eligendi atque eos voluptatum, consequatur amet ratione aliquam placeat! Assumenda pariatur error reiciendis ut sapiente, velit maxime et delectus eos ipsam, mollitia soluta cum temporibus laudantium est aliquam quod quas eius suscipit hic odio debitis?</div>
        </section>

      </div>
    </div>
  )
}

export default Home