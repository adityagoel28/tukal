export default {
	darken(color : string, percent: number) {
	  var f=color.split(","),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=parseInt(f[0].slice(4)),G=parseInt(f[1]),B=parseInt(f[2]);
	  return "rgb("+(Math.round((t-R)*p)+R)+","+(Math.round((t-G)*p)+G)+","+(Math.round((t-B)*p)+B)+")";
	},
	getColor(colorx : string, alphax = 1, defaultx = true){
	  // change color hex to RGB
	  if(/^[#]/.test(colorx)){
		let c = this.hexToRgb(colorx)
  
		if(c){
			if(alphax == 1){
				colorx = `rgb(${c.r},${c.g},${c.b})`
		
				} else {
				colorx = `rgba(${c.r},${c.g},${c.b},${alphax})`
		
				}
		}
		
	  } else if (/^rgba/.test(colorx)) {
  
		if(colorx.search(/.([0-9]\))$/)==-1 && !defaultx){
		  colorx = colorx.replace(/.?([0-9]\))$/,`${alphax})`)
		}
  
  
	  } else if (/^(rgb)/.test(colorx)) {
	  // change rgb and rgba
		if(alphax != 1){
		  colorx = colorx.replace(/^(rgb)/,`rgba`)
		  colorx = colorx.replace(/\)$/,`,${alphax})`)
		}
  
	  }
	  return colorx
	},
	
	RandomColor(){
	  function getRandomInt(min: number, max : number) {
		return Math.floor(Math.random() * (max - min)) + min;
	  }
	  return `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`
	},
	rColor(colorx : string, opacity=1){
	  if(/^[#]/.test(colorx)){
		let c = this.hexToRgb(colorx)
		colorx =  c ? `rgba(${c.r},${c.g},${c.b},${opacity})` : '';
	  } else if (/^[rgb]/.test(colorx)){
		let colorSplit = colorx.split(')')[0]
		if(!/^[rgba]/.test(colorx)){
		  colorSplit.replace('rgb','rgba')
		  colorSplit += `,${opacity})`
		} else {
		  // colorSplit.replace('rgb','rgba')
		  colorSplit += `)`
		}
		colorx = colorSplit
	  }
  
	  let vscolors = ['primary','success','danger','warning','dark']
	  if(colorx){
		if(/[#()]/.test(colorx)){
		  return colorx
		} else {
		  if(vscolors.includes(colorx)){
			return `rgba(var(--vs-${colorx}),${opacity})`
		  } else {
			return `rgba(var(--vs-primary),${opacity})`
		  }
		}
	  } else {
		return `rgba(var(--vs-primary),${opacity})`
	  }
	},
	contrastColor(elementx : string) {
	  let c = elementx
	  if(/[#]/g.test(elementx)){
		let rgbx = this.hexToRgb(elementx)
		c = rgbx ? `rgb(${rgbx.r},${rgbx.g},${rgbx.b})` : '';
	  }
	  var rgb = c.replace(/^(rgb|rgba)\(/,'').replace(/\)$/,'').replace(/\s/g,'').split(',');
	  var yiq = (( Number.parseInt(rgb[0])*299)+(Number.parseInt(rgb[1])*587)+(Number.parseInt(rgb[2])*114))/1000;
	  if(yiq >= 128){
		return true
	  } else {
		return false
	  }
	},
	setCssVariable(propertyName :string, value :any) {
	  if(typeof window !== 'undefined'){
		document.documentElement.style.setProperty(propertyName, value);
	  }
	},
	hexToRgb(hex :string) {
	  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
		return r + r + g + g + b + b;
	  });
  
	  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	  return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	  } : null;
	},
	getVariable(styles : any, propertyName :string) {
	  return String(styles.getPropertyValue(propertyName)).trim();
	},
	changeColor(colorInicial: string){
	  let colores = ['primary','success','danger','warning','dark']
	  let colorx
  
	  if(colores.includes(colorInicial)){
		let style = getComputedStyle(document.documentElement)
		colorx = this.getVariable(style,'--vs-'+colorInicial)
	  } else {
		if(/[rgb()]/g.test(colorInicial)){
		  colorx = colorInicial.replace(/[rgb()]/g,'')
		} else if(/[#]/g.test(colorInicial)){
		  let rgbx = this.hexToRgb(colorInicial)
		  colorx = rgbx ? `${rgbx.r},${rgbx.g},${rgbx.b}` : ''
		} else {
		  colorx = '--vs-'+colorInicial
		}
	  }
	  return colorx
	  // this.setCssVariable('--vs-'+clave,colorx)
	},

	isColorDark(props) {
		return props.color === 'dark' || props.dark || props.componentColor === 'dark'
	},
	
	isColor(colorx: string){
		let vscolors = ['primary','secondary','success','danger','warning','dark', 'light']
		return vscolors.includes(colorx);
	},

	isColorDefault(props) {
		return !!props.color || !!props.primary || !!props.success || !!props.warn || !!props.danger || !!props.dark
	}
}