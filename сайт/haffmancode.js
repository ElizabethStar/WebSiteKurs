class Node 
{    
    constructor(ch,  frequency,  left,   right) {
        this.ch = ch;
        this.frequency = frequency;
        this.left = left;
        this.right = right;
    }  
}
   
    
function  createCodeRec(node, map,  s)
{
    	if (node.left == null && node.right == null) {
    		map.set(node.ch, s);
            return;
        }    
    	this.createCodeRec(node.left, map, s + '0');
    	this.createCodeRec(node.right, map, s + '1' );
}


    
let inputIn = document.querySelector('.input');
let okbutton = document.querySelector('.button');

okbutton.onclick = function ()
{
    let str=inputIn.value;
    var frecmap = new Map();
    for (let i = 0; i < str.length; i++) 
    {
        let ch = str.charAt(i);
        if (!frecmap.has(ch)) 
        {
            frecmap.set(ch, 1);
        }
        else 
        {
            let val = frecmap.get(ch);
            frecmap.set(ch, ++val);
        }
    }
    var sortnodearray = [];
    for (let entry of frecmap.entries())
    {
        sortnodearray.push(new Node(entry[0], entry[1], null, null));
    }
    sortnodearray.sort((a,b) => b.frequency - a.frequency )
    while (sortnodearray.length > 1)
            { 
                let node1 = sortnodearray.pop();
                let node2 = sortnodearray.pop();
                let node = new Node('', node1.frequency + node2.frequency, node1, node2);  
                sortnodearray.push(node);
                sortnodearray.sort((a,b) => b.frequency - a.frequency )
            }
    var root =sortnodearray.shift();
    var Codemap = new Map();
    if (root.left==null && root.right==null)
    {
        Codemap.set(root.ch, "1");
    }
    else 
    {
        createCodeRec(root, Codemap, "");
    }
    inputIn.value="";

    var answerDOMtextHTML="<div class='answer example'>"+" <br/><br/><h3>Введенная строка: "+ str +"</h3><br/>";
    for (let entry of Codemap)
    {
        answerDOMtextHTML=answerDOMtextHTML+ "<h4>"+entry[0]+" - " + entry[1]+"</h4>";
    }
    answerDOMtextHTML+="</div>"
    const answerDOM=document.querySelector('.answer');
    answerDOM.outerHTML=answerDOMtextHTML;
}

        


