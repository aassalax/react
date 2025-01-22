import {useState} from "react";

const tabsData = [
    {txt:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, adipisci dolorum explicabo id nulla numquam optio placeat velit vero! Aliquid, consequatur eius enim eum laborum officia quam repellendus ut? Cum dolorum odit quibusdam sed sunt? Ab animi eos, est fugiat incidunt labore mollitia officia porro possimus sequi temporibus vero, voluptatem."},
    {txt:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque facilis illo maxime nesciunt quas sapiente soluta ut voluptatibus! Inventore, totam!"},
    {txt:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque facilis illoLorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque facilis illoLorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque facilis illoLorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque facilis illoLorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque facilis illoLorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque facilis illo!"},
]

export default function Tabs(){

    const [selectedTab, setSelectedTab] = useState(0)



    return(
        <div className="max-w-xl min-h-[250px] mx-auto rounded border border-slate-400">
            <div className="flex divide-x divide-slate-700">
                {tabsData.map((obj,index) => (
                    <button
                        key={index}
                        className="w-full p-4 bg-slate-200 hover:bg-slate-300"
                        onClick={()=> setSelectedTab(index)}
                    >
                        TAB {index+1}
                    </button>
                ))}
            </div>
            <div className="text-slate-100 p-4">
                <p>{tabsData[selectedTab].txt}</p>
            </div>
        </div>
    )
}