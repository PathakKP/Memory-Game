import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';

function App() {
 const [current_score,setCurrentScore]=new useState(0);
 const [high_score,setHighScore] =new useState(0);
 const [list,setList]=new useState([{id:0,
                                     img:'./monkey-gffe554ec5_1280.png',
                                    doubleClick:false},
                                    {id:1,
                                     img:'./monkey-g1b833296e_1280.jpg',
                                     doubleClick:false},
                                    {id:2,
                                      img: './monkey-gc737fc89e_1280.png',
                                      doubleClick:false},
                                    {id:3,
                                      img:'./bored-ape-yacht-club-ge0fc8c6a0_1280.png',
                                      doubleClick:false},
                                    {id:4,
                                      img: './monkey-g570e8fec6_1280.jpg',
                                      doubleClick:false},
                                    {id:5,
                                      img: './russian-military-cap-gcb9717a9b_1280.jpg',
                                      doubleClick:false},
                                    {id:6,
                                      img:'./monkey-gbbec39442_1280.png',
                                      doubleClick:false}])


  function shuffleList(array)
  {
    let i=array.length-1;

    for(;i>0;i--)
    {
      const j= Math.floor(Math.random()*(i+1));
      const temp=array[i];
      array[i]=array[j];
      array[j]=temp;
    }
    return array;
  }                                    

 useEffect(()=>{
  if(current_score===0)
  {
    setList(list.map((list_item)=>list_item={...list_item,doubleClick:false}))
  }
 },[current_score]);                                     

 const increaseCurrent=(id)=>
 {
  list.map((list_item)=>
  list_item.
  id===id?(list_item.doubleClick?setCurrentScore(0):setCurrentScore(current_score+1)):console.log(':>')
  )

  setList(shuffleList(list))
 
    setList(list.map((list_item)=>
      list_item.id===id?{...list_item,doubleClick:true}:list_item
    )
    )
   }

  return (
    <div className="App">
      <Header currentScore={current_score}  highScore={high_score} />
      <Home card_list={list} increaseCount={increaseCurrent} />
    </div>
  );
}

export default App;
