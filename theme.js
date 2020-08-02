console.log("Let's start");

const theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}
else {
	setTheme(theme)
}

const themedots = document.getElementsByClassName('theme-dot')

for (var i=0; themedots.length > i; i++){
	themedots[i].addEventListener('click', function(){
		var mode = this.dataset.mode
		console.log('Option clicked', mode)
		setTheme(mode)
	})

}

function setTheme(mode){

	if(mode == 'light'){
		document.getElementById('setmytheme').href = 'default.css'
	}

	if (mode == 'blue') {
		document.getElementById('setmytheme').href = 'blue.css'
	}

	if (mode == 'green') {
		document.getElementById('setmytheme').href = 'green.css'
	}

	if (mode == 'purple') {
		document.getElementById('setmytheme').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}