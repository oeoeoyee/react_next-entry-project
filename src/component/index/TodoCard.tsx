'use client'
import { useState  } from 'react';

export default function todoCard() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)

  return (
    <div>
        <button onClick={increment}>Count: {count}</button>
        <div>
            <h3>卡片標題</h3>
            <p>任務說明</p>
        </div>
        <div>
            <span>Sub task</span>
            <ul>
                <li>
                {/* checkbox組件 */}
                <input type="checkbox" name="" id="" />
                <span>事項1</span>
                </li>
                <li>
                <input type="checkbox" name="" id="" />
                <span>事項2</span>
              </li>
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
