import "./App.css";
import { useState } from "react";
import VideoRecorder from "../src/VideoRecorder";
import AudioRecorder from "../src/AudioRecorder";

const App = () => {
	let [recordOption, setRecordOption] = useState("video");

	const toggleRecordOption = (type) => {
		return () => {
			setRecordOption(type);
		};
	};

	return (
		<div>
      <h1> Welcome to Kelvin's Media Recorder😇</h1>
			<div className="button-flex">
				<button onClick={toggleRecordOption("video")}>Record Video 📹</button>
				<button onClick={toggleRecordOption("audio")}>Record Audio 🎙️</button>
			</div>
			<div>
				{recordOption === "video" ? <VideoRecorder /> : <AudioRecorder />}
			</div>
		</div>
	);
};

export default App;