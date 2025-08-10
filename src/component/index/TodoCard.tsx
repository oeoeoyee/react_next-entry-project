import { useState  } from 'react';

type TodoCardProps = {
  cardDetail: {
    title: string;
    description: string;
    type: string[];
  };
  subTask: string[];
};

// 組件接收參數
export default function TodoCard({cardDetail,subTask}:TodoCardProps) {
  // let cardDetail = props.cardDetail
  // let subTask = props.subTask  
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)

  return (
    <div 
      className="cardSection"
      >
        <button onClick={increment}>Count: {count}</button>
        <div>
            <h3 className='text-[18px] font-[700]'>{cardDetail?.title ?? '標題錯誤'}</h3>
            <p className='text-[14px] text-[#1D2939] font-[600] opacity-60'>{cardDetail.description ?? ''}</p>
        </div>
        <div>
            <span className='text-[13px]'>Sub task</span>
            <ul>
              {subTask.map((taskItem, index) => (
                <li key={index}>
                  <input type="checkbox" />
                  <span>{taskItem}</span>
                </li>
              ))}
                {/* 
                這是隱式回傳，不需要有return也不用()、{}
                subTask.map(taskItem=>
                  <li>
                  <input type="checkbox" name="" id="" />
                  <span  className='text-[14px]'>{taskItem}</span>
                  </li>
                )*/}
            </ul>
        </div>
        <div>
            <span>Design</span>
            <span>Backend</span>
            <span>Frontend</span>
        </div>
    </div>
  );
}
