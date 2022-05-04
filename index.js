var readlineSync=require('readline-sync');
const linkedList=()=>{
   
   let root=null;
   let tail=null;
   let sup;
   


   function Node(value)
   {
    return{ value,next:null};
   }

   function getElementByValue(value)
   {
    if (lenght==0){
      return null;
    }
    
    let node=root;
    if(node.value===value){
      return node;
    }
    while(node.next){
      node=node.next;
      if (node.value==value){
        return node;
      }  
    }
    return null;
   }
   
   function addToStart()
   {
     
     let value = readlineSync.question("qual valor voce quer inserir no inicio da lista?:");
      let node=Node(value);
      if (root==null)
      {
        root=node;
        tail=node;
        node.next=null;
      }else{
         node.next=root;
         root=node
      }

      
   }

   function addToEnd()
   {
     let value = readlineSync.question("qual valor você quer inserir no final da lista?:");
    let node=Node(value);
    if(root==null)
    {
      root=node;
      tail=node;
      node.next=null;
    }else{
      tail.next=node;
      tail=node;
      tail.next=null;
    }
   }

   function Remove()
   {
      let value = readlineSync.question("qual valor voce quer remover da lista?:")
      if(root==null){
        console.log("a lista está vazia");
        console.log(value);

      }else{
        
        sup=root;
        let anterior=Node(null);
        let achou=0;
        while(sup!=null){
          if (sup.value==value){
            achou++;
            
           if (sup==root){
            root=sup.next;
            sup=root;
          }else if(sup==tail){

            anterior.next=null;
            tail=anterior;
            sup=null;
          }else{
            anterior.next=sup.next;
            sup=sup.next
          }
        }else{
          anterior=sup;
          sup=sup.next
        }
      }
    }
 }

 function Print(){

  if (root==null){
    console.log("a lista não possui valores");
  }else{
    sup=root
    while(sup!=null){
      console.log(sup.value+"")
      sup=sup.next;
    }
  }
 }

function emptyList(){
  
  if (root==null){
    console.log("A lista já está vazia!!!");
  }else{

    root=null;
    console.log("a lista foi esvaziada!");
  }

}

   return{
    addToStart:()=>addToStart(),
    addToEnd:()=>addToEnd(),
    lenght:()=>lenght,
    Print:()=>Print(),
    Remove:()=>Remove(),
    emptyList:()=>emptyList(),
    };
}

var list=linkedList();

do{
  
  
  console.log("escolha uma opção");
  console.log("1-adicionar ao inicio da lista ");
  console.log("2-adicionar ao final da lista");
  console.log("3-excluir um elemento da lista");
  console.log("4-esvaziar a lista ");
  console.log("5-exibir a lista");
  console.log("6-sair");
  var option=readlineSync.question("R:");


   switch(option){
  case '1':
     list.addToStart();
     console.log(option);
     break;
  case '2':
     list.addToEnd();
     break;
  case '3':
     list.Remove();
    break;
  case '4':
     list.emptyList();
     break;
  case '5':
     list.Print();
  }
  

}while(option<=6);


