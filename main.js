function up(elem)
{
	let dad = elem.parentNode;
	let grand = dad.parentNode;
	let sosed = grand.previousSibling;
	let daddy = grand.parentNode;
	daddy.insertBefore(grand,sosed);
}
function down(elem)
{
	let dad = elem.parentNode;
	let grand = dad.parentNode;
	let sosed = grand.nextSibling;
	let daddy = grand.parentNode;
	daddy.insertBefore(grand,sosed.nextSibling);
}
function del(elem)
{
	let dad = elem.parentNode;
	let grand = dad.parentNode;
	grand.remove();
}
function intojson()
{
	cont = document.getElementsByClassName('container');
	
}

function isEmpty(obj) 
{
	for(var prop in obj) 
	{
        if(obj.hasOwnProperty(prop))
			return true;
	}
	return false;
}
function save()
{
	if (document.getElementsByClassName('text').length == '0')
		{
		let saving = document.createElement('div');
		saving.className = 'text';
		cont = document.getElementsByClassName('container');
		var obj = new Object();
		for (const index in cont) {
			if (cont.hasOwnProperty(index))
			{
				const element = cont[index];
				if (element.childNodes[0].value !='')
				{
				var text = element.childNodes[0].value;
				var num = element.childNodes[1].value;
				obj[[text]] = num;
				}
			}	
		}
		if (isEmpty(obj))
		{
		saving.innerHTML = JSON.stringify(obj);
		document.body.appendChild(saving);
		}
	}
	else
	{
		var str = document.getElementsByClassName('text')[0];
		var obj = new Object();
		for (const index in cont) {
			if (cont.hasOwnProperty(index)) {
				const element = cont[index];
				var text = element.childNodes[0].value;
				var num = element.childNodes[1].value;
				obj[[text]] = num;
			}	
		}
		str.innerHTML = JSON.stringify(obj);
	}
}
function add()
{
	var dad = document.getElementById('otec');
	var newchild = document.createElement('div');
		newchild.className = 'container';
	var inp1 = document.createElement('input');
	var inp2 = document.createElement('input');
	var butt = document.createElement('div');
		butt.className = 'buttons';
		var but1 = document.createElement('div');
			but1.className = 'button';
			but1.innerHTML = '⬆';
			but1.setAttribute('onclick','up(this)');
		var but2 = document.createElement('div');
			but2.className = 'button';
			but2.innerHTML = '⬇';
			but2.setAttribute('onclick','down(this)');
		var but3 = document.createElement('div');
			but3.className = 'button';
			but3.setAttribute('onclick','del(this)');
			but3.innerHTML = '✘';
	dad.appendChild(newchild);
		newchild.appendChild(inp1);
		newchild.appendChild(inp2);
		newchild.appendChild(butt);
			butt.appendChild(but1);
			butt.appendChild(but2);
			butt.appendChild(but3);
}