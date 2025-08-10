import { useState  } from 'react';

import TodoCard from "@/component/index/TodoCard";

// let cardDetail = props.cardDetail
// let subTask = props.subTask  
// const [count, setCount] = useState(0)
// const increment = () => setCount(count + 1)

  
// 組件接收參數
export default function TodoApp() {
    
  const [todos, setTodos] = useState([
    {
        id: 0,
        title:'今日任務', 
        description:'今天沒事但還是想做點什麼，例如走走走走走，我們小手拉大手', 
        type:['程式','日常','運動'],
        subTask:['好初看漫畫','順便去板新站URLiving','圖書館做瑣事']
    }]);
    const createTodos = () => {
        const newTodo = {
        id: todos.length, // Date.now(), // 也可以用這簡單唯一 ID
        title:'預設title', 
        description:'預設description', 
        type:['預設卡片分類'],
        subTask:['預設subTask']
        };
        setTodos([ newTodo, ...todos ])
    }
    
  return( 
        <div className='flex flex-col gap-6'>
            <button 
                onClick={createTodos}
                className="w-[112px] py-3 px-4 text-[14px] text-white bg-[#4186F4] rounded-md cursor-pointer hover:bg-[#1d70f3] duration-300 ease-in-out"
            >add a task</button>
            {
                todos.map((cardDetail,index) => 
                <TodoCard
                key = {index}
                cardDetail = {cardDetail}
                />)
            }
        </div>
    );
}
