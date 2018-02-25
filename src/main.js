// boot strap the application i.e takng virtual dom i.e App and put it into real dom i.e browser
//package.json  react-dom contains all the alog of patchin converting etc etc
import {render} from 'react-dom';
import React from 'react';
import {App} from './app/App';

//compare virtual and real dom (diff)
//on diff, patch the real dom
//merge => one direction => virtual dom to real dom
render( <App color = 'white' />, //virtual dom , <App /> create object -> call render -> creat virtual dom
		document.getElementById("root") //real dom
	)
