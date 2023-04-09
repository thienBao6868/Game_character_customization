import { useState, useEffect } from 'react';
import './App.css';
import Avatar from './components/Avatar';
import PartList  from './components/PartList/PartList';
const total = {
	body: 17,
	eyes: 17,
	hair: 73,
	mouth: 24,
	eyebrows: 15,
	glasses: 17,
	clothing1: 5,
	clothing2: 5,
	clothing3: 9,
};

function App() {
	const [body, setBody] = useState(1)
	const [hair, setHair] = useState(1)
	const [eyes, setEyes] = useState(1)
	const [mouths, setMouths] = useState(1)
	const [eyebrows, setEyebrows] = useState(1)
	const [glasses, setGlasses] = useState(1)
	const [clothing1, setClothing1] = useState(1)
	const [clothing2, setClothing2] = useState(1)
	const [clothing3, setClothing3] = useState(1)

	const randomize = () => {
		setBody(Math.floor(Math.random() * (total.body)+1));
		setEyes(Math.floor(Math.random() * (total.eyes)+1));
		setEyebrows(Math.floor(Math.random() * (total.eyebrows)+1));
		setHair(Math.floor(Math.random() * (total.hair)+1));
		setMouths(Math.floor(Math.random() * (total.mouth)+1));
		setMouths(Math.floor(Math.random() * (total.mouth)+1));
		setGlasses(Math.floor(Math.random() * (total.glasses)+1));
		setClothing1(Math.floor(Math.random() * (total.clothing1)+1));
		setClothing2(Math.floor(Math.random() * (total.clothing2) +1));
		setClothing3(Math.floor(Math.random() * (total.clothing3)+1));
	};
	useEffect(() => {
		randomize();
	}, []);

	
	return (
		<div className="App">
			<div className="wapper_title">
            <div className="title">character</div>
            <div className="subTitle"> 👨‍🔬customization👩‍⚕️</div>
            <div className="divider"></div>
        </div>    
			<div id="container">
				<div>
					<div id="wapperAvatar">
						<Avatar body={body} pathBody={"body"} 
						hair={hair} pathHair={"hair"} 
						eyes={eyes} pathEyes={"eyes"} 
						mouths={mouths} pathMouths={"mouths"}
						eyebrows={eyebrows} pathEyebrows={"eyebrows"}
						glasses={glasses} pathGlasses={"accessories/glasses"}
						clothing1={clothing1} pathClothing1={"clothes/layer_1"}
						clothing2={clothing2} pathClothing2={"clothes/layer_2"}
						clothing3={clothing3} pathClothing3={"clothes/layer_3"}
						zindex1={"zindex_1"}
						zindex2={"zindex_2"}
						zindex3={"zindex_3"}
						zindex4={"zindex_4"}
						/>
						<div className="text_center">
							<button className="button_random_avatar" onClick={()=>randomize()}>
								Randomize!
							</button>
						</div>
					</div>
				</div>
				<div id="section">
					<div className="list_section">
						<h2>Body</h2>
						<PartList path="body" total ={total.body} set={setBody} selected={body}/>
					</div>
					<div className="list_section">
						<h2>Eyes</h2>
						<PartList path="eyes" total={total.eyes} set={setEyes} selected={eyes}/>
					</div>
					<div className="list_section">
						<h2>Hair</h2>
						<PartList path="hair" total ={total.hair} set={setHair} selected={hair}/>
					</div>
					<div className="list_section">
						<h2>mouths</h2>
						<PartList path="mouths" total ={total.mouth} set={setMouths} selected={mouths}/>
					</div>
					<div className="list_section">
						<h2>Eyebrows</h2>
						<PartList path="Eyebrows" total ={total.eyebrows} set={setEyebrows} selected={eyebrows}/>
					</div>
					<div className="list_section">
						<h2>Glasses</h2>
						<PartList path="accessories/glasses" total ={total.glasses} set={setGlasses} selected={glasses}/>
					</div>
					<div className="list_section">
						<h2>Clothing (L1)</h2>
						<PartList  path="clothes/layer_1" total ={total.clothing1} set={setClothing1} selected={clothing1}/>
					</div>
					<div className="list_section">
						<h2>Clothing (L2)</h2>
						<PartList  path="clothes/layer_2" total ={total.clothing2} set={setClothing2} selected={clothing2}/>
					</div>
					<div className="list_section">
						<h2>Clothing (L3)</h2>
						<PartList path="clothes/layer_3" total ={total.clothing3} set={setClothing3} selected={clothing3}/>
					</div>
					
				</div>
			</div>
		</div>
	)
}

export default App;