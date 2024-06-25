import React from 'react';
import Tabs from './tabs';

function RandomContent(){
    return <h1>Some random component</h1>
  }

export default function TabTest() {
    const tabs = [
        {
            label: "Tab 1",
            content: <div>This is Tab 1</div>
        }, {
            label: "Tab 2",
            content: <div>This is Tab 2</div>
        }, {
            label: "Tab 3",
            content: <RandomContent/>
        }
    ]

    function handleChange(currentTabIndex){
        console.log(currentTabIndex);
    }
    return (
        <Tabs tabsContent={tabs} onChange={handleChange}/>
    )
}
