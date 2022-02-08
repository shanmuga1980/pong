class create {
				static backdrop () {
					const backdrop = document.createElement("div");
					backdrop.id("backdrop");
					backdrop.style = `
					position: absolute;
					z-index: -1;
					height: 100vh;
					width: 100vw;
					background-color: #000000;
					`;
				}
				
				static homePanel () {
					const homescreenPanel = document.createElement("div");
					homescreenPanel.id("homescreen_panel");
					homescreenPanel.style = `
					z-index: 8;
					position: absolute;
					margin-left: 25vw;
					margin-right: 25vw;
					margin-top: 25vh;
					margin-bottom: 25vh;
					width: 50vw;
					height: 50vh;
					border: 10px solid #ffffff;
					background-color: #000000;
					border-radius: 10px;
					`;
				}
				
				static homePanelBtn (id, txt) {
					const button = document.createElement("button");
					button.id(id);
					button.style = `
					position: absolute;
					height: 14.5vh;
					z-index: 9;
					border: none;
					background-color: #ffffff;
					color: #000000;
					border-radius: 6px;
					font-family: monospace;
					font-size: 10vh;
					transition: 0.3s;
					`;
					const txt = document.createTextNode(txt);
					button.appendChild(txt);
					document.getElementById("homescreen_panel").appendChild(button);
					// margin-bottom: 1.625vh; for lower row
					// margin-bottom: 15.75 vh for middle row
					// margin-top: 1.625vh for top row
				}
				
				static playfields () {
					const playfieldLeft = document.creatElement("div");
					playfieldLeft.id("playfield_left");
					const playfieldRight = document.createElement("div");
					playfieldRight.id("playfield_right");
					playfieldLeft.style = `
					position: absolute;
					background-color: #000000;
					margin-right: 50%;
					width: 50%;
					border-style: none dashed none none;
					border-color: #ffffff;
					`;
					playfieldRight.style = `
					position: absolute;
					background-color: #000000;
					margin-left: 50%;
					width: 50%;
					border-style: none none none dashed;
					border-color: #ffffff;
					`;
				}
				
				static ingamenav () {
				}
				
				static ball () {
					const ballMovement = document.createElement("div");
					ballMovement.id("ball_movement");
					const ballContainer = document.createElement("div");
					ballContainer.id("ball");
					var svgns = "http://www.w3.org/2000/svg";
					var svgDocument = evt.target.ownerDocument;
					var shape = svgDocument.createElementNS(svgns, "circle");
					// <circle cx="50" cy="50" r="40" stroke="#000000" stroke-width="4" fill="#00ff00" />
					shape.setAttributeNS(null, "cx", 50);
					shape.setAttributeNS(null, "cy", 50);
					shape.setAttributeNS(null, "r",  40);
					shape.setAttributeNS(null, "stroke", "#000000");
					shape.setAttributeNS(null, "stroke-width", 4); 
					shape.setAttributesNS(null, "fill", "#ffffff");
					ballContainer.appendChild(shape);
					ballMovement.appendChild(ballContainer);
				}
				
				static paddle (loc) {
					const paddleMovement = document.createElement("div");
					paddleMovement.id("paddle_movement_" + loc);
					const paddleContainer = document.createElement("div");
					paddleContainer.id("paddle_" + loc);
					var svgns = "http://www.w3.org/2000/svg";
					var svgDocument = evt.target.ownerDocument;
					var shape = svgDocument.createElementNS(svgns, "rect");
					// <rect width="50" height="225" style="fill:#ff0000;stroke-width:5;stroke:#000000"/>
					shape.setAttributeNS(null, "width", 50);
					shape.setAttributeNS(null, "height", 225);
					shape.setAttributeNS(null, "stroke",  "#000000");
					shape.setAttributeNS(null, "stroke-width", 4); 
					shape.setAttributesNS(null, "fill", "#ffffff");
					paddleContainer.appendChild(shape);
					paddleMovement.appendChild(paddleContainer);
				}
			}
			
			class append {
				static child(obj, prt) {
					prt.appendChild(obj);
				}
			}
			
			function startup() {
				alert("window onload eventlistener has fired!");
				const backdrop = create.backdrop();
				const homePanel = create.homePanel();
				const playBtn = create.homePanelBtn(play, "Play");
				const homeBtn = create.homePanelBtn(home, "/f015");
				append.child(homePanel, backdrop);
				append.child(playBtn, homePanel);
				append.child(homeBtn, homePanel);
			}
			
			if (typeof(Worker) !== "undefined") {
				const webWorkerSupp = "yes"
			} else {
				const webWorkerSupp = "no";
			}
			const screenwidth = window.screen.availWidth;
			const screenheigt = window.screen.availHeight;
			const colordepth = window.screen.colorDepth;
			const protocol = window.location.protocol;
			const lang = navigator.language;
			const online = navigator.onLine;
			localStorage.setItem("lang", lang);
			localStorage.setItem("online", online);
			localStorage.setItem("width", screenwidth);
			localStorage.setItem("height", screenheight);
			localStorage.setItem("colorDepth", colordepth);
			sessionStorage.setItem("protocol", protocol);
			localStorage.setItem("web_worker_support", webWorkerSupp);
