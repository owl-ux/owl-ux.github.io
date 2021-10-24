function blocage(){
    if((event.keyCode < 47 || event.keyCode > 58 )
        && (event.keycode!=8)){
                event.returnValue = false;
            }
}

function maj(type){
	if (type == nom){
		document.getElementById("nom").value = document.getElementById("nom").value.toUpperCase();
	}
	if (type == prenom){
		document.getElementById("prenom").value = document.getElementById("prenom").value.charAt(0).toUpperCase() + document.getElementById("prenom").value.slice(1);
	}
}

function raz_champ(){
    // raz_champ (boucle)
    for (let i = 1; i <= 14; i++) {
        document.getElementById('note'+i).value="";
      }

    document.getElementById('nom').value="";
    document.getElementById('prenom').value="";
    document.getElementById('total').value="";
    document.getElementById('moyenne').value="";
    document.getElementById('mention').innerHTML="";
    
    
    // raz total,raz moyenne, raz mention
    /*   if ('note'+i) {
           'note'+i < 10
           document.getElementById('mention').innerHTML="Pas la moyenne"
       }
       if ('note'+i) {
        'note'+i == 10
        document.getElementById('mention').innerHTML="Moyenne"
       }
       if ('note'+i) {
        'note'+i > 12
        document.getElementById('mention').innerHTML="Bien"
       }
       if ('note'+i) {
        'note'+i > 16
        document.getElementById('mention').innerHTML="Très Bien"
       }
    */
    }
    

    function verif(){
      let erreur=false;
      for (let i=1; i<=14; i++){
        if (document.getElementById('note'+i).value>20){
          document.getElementById('note'+i).value="";
          document.getElementById('note'+i).focus();
          erreur=true;
        }
        else if (document.getElementById('note'+i).value==""){
          document.getElementById('note'+i).focus();
          erreur=true;
        }
      }
    if (erreur==false){
      calcul();
    }
  }

  function calcul(){
    let total=0;
    let coeff=["",5,5,5,5,5,5,5,5,5,5,8,10,16,16]
    for (let i=1; i<=14; i++){
      total+=document.getElementById('note'+i).value*coeff[i];
    }
    document.getElementById('total').value=total;
    let moyenne=total/100;
    document.getElementById('moyenne').value=moyenne;
    if (moyenne<8){
      document.getElementById('mention').innerHTML="Refusé";
    }
    else if (moyenne<10){
      document.getElementById('mention').innerHTML="2nd groupe";
    }
    else if (moyenne<12){
      document.getElementById('mention').innerHTML="Admis";
    }
    else if (moyenne<14){
      document.getElementById('mention').innerHTML="Assez bien";
    }
    else if (moyenne<16){
      document.getElementById('mention').innerHTML="Bien";
    }
    else{
      document.getElementById('mention').innerHTML="Très bien";
    }
    document.getElementById('res').style.visibility='visible';
    document.getElementById('imp').style.visibility='visible';
  }


function gestion_radio(spe_value,x,y) {
    var bouton_radio = document.getElementsByName(spe_value);
    for(let i = 0; i < bouton_radio.length; i++) {
        if(bouton_radio[i].checked) {
            
            let a = bouton_radio[i].value;
            console.log(a);
            //disabled les autres colonnes à compléter...
            document.getElementById(a+x).disabled=true;
            document.getElementById(a+y).disabled=true;
            
            if (x == 2 && y == 3) {
                document.getElementById("spe_première").innerHTML = document.getElementById(a+x).value;
            } else if (x == 1 && y == 3) {
                document.getElementById("specialite_terminale1").innerHTML = document.getElementById(a+x).value;
            } else if (x == 1 && y == 2) {
                document.getElementById("specialite_terminale2").innerHTML = document.getElementById(a+x).value;
            }
        }
    }
}


function raz_radio() {
    let_radios_première = document.getElementsByName('spe_première');
    let_radios_spe1 = document.getElementsByName('spe1_terminale');
    let_radios_spe2 = document.getElementsByName('spe2_terminale');
}
// RAZ boutons_radio

function compt_clic() { 
    compteur_clic++;
    if (compteur_clic == 1) {
        alert("La note doit être entière et sur 2 chiffres\nCommencer par un 0 pour les notes <10");
    }
}
var compteur_clic = 0;


/*function print() {
    
    var doc = new jsPDF();
    
    doc.save('Test.pdf');
*/

function print(){
var i = 0;
i++;
var doc = new jsPDF();

doc.line(10, 10, 200, 10);
doc.text(82,22,"RELEVÉ DE NOTES");
doc.line(10, 30, 200, 30);

doc.text(20,43,"Bulletin de Première : "+ document.getElementById('note1').value);
doc.text(20,53,"Bulletin de Terminale : "+ document.getElementById('note2').value);

doc.text(20,65,"Histoire - Géographie : "+ document.getElementById('note3').value);
doc.text(20,75,"EPS : "+ document.getElementById('note4').value);
doc.text(20,85,"Langue Vivante A : "+ document.getElementById('note5').value);
doc.text(20,95,"Langue Vivante B : "+ document.getElementById('note6').value);

doc.text(20,107,document.getElementById("spe_première").innerHTML + " : "+ document.getElementById('note7').value);
doc.text(20,117,"Enseignement scientifique : "+ document.getElementById('note8').value);

doc.line(10, 126, 200, 126);
doc.text(74,139,"ÉPREUVES TERMINALES");
doc.line(10, 148, 200, 148);

doc.text(20,161,"Epreuve anticipée de Français [ÉCRIT] : "+ document.getElementById('note9').value);
doc.text(20,171,"Epreuve anticipée de Français [ORAL] : "+ document.getElementById('note10').value);

doc.text(20,183,"Philosophie : "+ document.getElementById('note11').value);
doc.text(20,193,"Grand Oral : "+ document.getElementById('note12').value);

doc.text(20,205,document.getElementById("specialite_terminale1").innerHTML + " : " + document.getElementById('note13').value);
doc.text(20,215,document.getElementById("specialite_terminale2").innerHTML + " : " + document.getElementById('note14').value);

doc.line(10, 224, 200, 224);
doc.text(90,237,"RÉSULTATS");
doc.line(10, 246, 200, 246);

doc.text(20,259,"Nombres de points : " + document.getElementById('total').value);
doc.text(20,269,"Moyenne : " + document.getElementById('moyenne').value);
doc.text(20,279,"Mention : " + document.getElementById('mention').innerHTML);





doc.save(document.getElementById('nom').value + '_' + document.getElementById('prenom').value + '.pdf');
}











