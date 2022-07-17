import React, {useEffect, useState} from 'react';;


export default function Github(){
    
    const fontColor ={
        color:"#fff",
        marginLeft:"12px",
        backgroundColor:"#19073B",
        width:"100vw"
    }

    const style={
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    color: "rgb(255, 255, 255)",
    placeContent: "flex-start",
    alignItems: "center",
    justifyContent:"space-around"
    }

    const Gitbuttns ={
        display:"flex",
    }

    const imageWidth = {
        width: "73px",
        marginLeft: "200px"
    }

      //===== Running the fetch call only when the components mount====
    useEffect(() => {
        fetchItems();
    },[]);

    //====== setting the useState hook =====
 const [items, setItems] = useState([]);

     //=====Getting data from Api using fetch call ======  
    const fetchItems = async () => {
        const data =  await fetch(
            'https://api.github.com/search/repositories?q=created:>2021-09-13&sort=stars&order=desc'
            );

          //==== converting data to json =======
        const items = await data.json();
        setItems(items.items);
    };
    return(
        <div style={fontColor}>

           {items.map(item => ( 
               <div style={style}>
                           <div>
                                <img src={item.owner.avatar_url} style={imageWidth} alt="gitHubProfile" />
                            </div>
                            <div>
                                    <h4>Username: {item.name}</h4>
                                    <p> Repos_url: {item.owner.repos_url}</p>
                                    <p>description: {item.description}</p>
                                    <div className='ButtonDivs' style={Gitbuttns}>
                                      <div><button> stars: {item.stargazers_count}</button> </div>
                                        <div className="btn2">
                                            <button>Issues:{item.open_issues}</button>
                                        </div>
                                         <span>submitted {item.created_at} days ago by {item.name}</span>
                                    </div>

                                </div>
                   </div>
            ))}
        </div>
    ) 
}