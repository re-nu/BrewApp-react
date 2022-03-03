import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { SpaceCard } from "./SpaceCard";

function App() {
  const dataArray = [
    {
      title: "public space",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFsJwOEnnNkqoLdjON7JG9pXxtIMXG3cM6DA&usqp=CAU",
      type: "most popular",
    },
    {
      title: "working space in bali",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfdHImPTKFDCRindIRRqqMG9CqMEJbzK91g&usqp=CAU",
      type: "most popular",
    },
    {
      title: "office interiors",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-SGSlmtDNkiiL6PxRJIVIXl5ixXDCKPRHYQ&usqp=CAU",
      type: "most popular",
    },
    {
      title: "coworking ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-wt6fedEjldIslrZk7cbYbsemmrUnwEI8jg&usqp=CAU",
      type: "most popular",
    },
    {
      title: "Abstract space",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFa37zREjSilkNS6zzXhAw9lDllEXV1WCVPg&usqp=CAU",
      type: "most popular",
    },
    {
      title: "disney world",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDsxZ-1rV7DMwCLGrEtvsTdj4niORBm_crbQ&usqp=CAU",
      type: "most popular",
    },
    {
      title: "birla temple",
      img: "https://rgyan.com/public/uploads/2018-07/birla.jpg",
      type: "temple",
    },
    {
      title: "kedarnath temple",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUosbosvPIxMVvi61DRqUOW-LOeVabzGQcw&usqp=CAU",
      type: "temple",
    },
    {
      title: "lotus temple",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLsz3EO6InShQy3GIhB3mMttROYcu4PuuCzg&usqp=CAU",
      type: "temple",
    },
    {
      title: "krishna temple",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4mEDKwV7WKeP6kO7w9tLWc5HH5u-R1Jw9A&usqp=CAU",
      type: "temple",
    },
    {
      title: "ayodha",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8tec5gmbjxvzouJkyZlEDlKXA6J1-N_5HVw&usqp=CAU",
      type: "temple",
    },
    {
      title: "golden temple",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgcD7fgqpuY475Oo1CXmNEoYrvtIjamjyaQ&usqp=CAU",
      type: "temple",
    },
    {
      title: "RRR",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQ24RNWAELzaJrhHvtDz2KlTAudZ01bQbKA&usqp=CAU",
      type: "24h trend",
    },
    {
      title: "baby whale",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpgzFWpapwCsc-PHZOXJnsSGiTsobbEUATBg&usqp=CAU",
      type: "24h trend",
    },
    {
      title: "earth's rotation",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQpKdkkGiy65xp-cmXuS9oX-uikhFqRIrGcQ&usqp=CAU",
      type: "24h trend",
    },
    {
      title: "NCT u's ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWL1sK5ercVK_RiK3PDkUFFanF5sfRHiqIxQ&usqp=CAU",
      type: "24h trend",
    },
    {
      title: "Allu arjun",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQya4ev5hWSGna8a1IbET8GRFL5PKLKjgDOYA&usqp=CAU",
      type: "24h trend",
    },
    {
      title: "wellness",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsZ5NQbYAkyPBqSsVkSjeFzrNCZ3GRGgQOHw&usqp=CAU",
      type: "24h trend",
    },
  ];
  const [data, setdata] = useState([...dataArray]);
  console.log(data);
  
  // async function getData(){
  //   const space=await fetch("https://task-c.herokuapp.com/liveSpaces")
  //   const spc=await space.json()
  //    setdata(spc)
  //    console.log(spc)
  // }

  // useEffect(getData,[])

  return (
    <div className="home">
      <div className="heading">Live Spaces</div>
      <div className="check-sen">
        <input type="checkbox" checked />
        <p>
          All NFTs on cyber either belong to or were minted by their space
          creater
        </p>
      </div>
      <div className="filter-buttons">
      <Button sx={{margin:'20px'}}
          variant="outlined"
          onClick={() => {
            setdata([...dataArray]);
          }}
        >
          All
        </Button>
        <Button sx={{margin:'20px'}}
          variant="outlined"
          onClick={() => {
            const type = "24h trend";
            const filterArray = dataArray.filter((i) => i.type === type);
            console.log(filterArray);
            setdata([...filterArray]);
          }}
        >
          24h trend
        </Button>
        <Button variant="outlined" sx={{margin:'20px'}}
         onClick={() => {
          const type = "most popular";
          const filterArray = dataArray.filter((i) => i.type === type);
          console.log(filterArray);
          setdata([...filterArray]);
        }}
        >most popular
        </Button>
        <Button variant="outlined" sx={{margin:'20px'}}
         onClick={() => {
          const type = "temple";
          const filterArray = dataArray.filter((i) => i.type === type);
          console.log(filterArray);
          setdata([...filterArray]);
        }}
        >
          temple
          </Button>
      </div>
      <div className="spaces">
        {data.map(({ title, img }, index) => (
          <SpaceCard title={title} img={img} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
